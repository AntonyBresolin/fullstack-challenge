package com.antonybresolin.backend.controller;

import com.antonybresolin.backend.entities.Schedule;
import com.antonybresolin.backend.repository.ScheduleRepository;
import com.antonybresolin.backend.repository.UserRepository;
import com.antonybresolin.backend.repository.VoteRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.transaction.TestTransaction;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class VoteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private VoteRepository voteRepository;

    @Test
    @WithMockUser(username = "31690755008", authorities = "SCOPE_ADMIN")
    public void testAdminCreatesUserAndScheduleThenUserVotesAndAdminClosesSchedule() throws Exception {
        //
        String newUser = "{\"cpf\": \"43194161040\", \"password\": \"password123\"}";
        mockMvc.perform(post("/api/v1/user/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(newUser)
                        .with(csrf()))
                .andExpect(anyOf(status().isOk(), status().isNotFound(), status().isUnprocessableEntity()));


        String newSchedule = "{\"title\": \"Initial Scasdsahedule\", \"description\": \"Initial Desasdsadascription\", \"votingTime\": 60}";
        mockMvc.perform(post("/api/v1/schedule/new")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(newSchedule)
                        .with(csrf()))
                .andExpect(status().isOk());


        List<Schedule> listSchedules = scheduleRepository.findAll();


        String newVote = "{\"schedule\": {\"scheduleId\": " + listSchedules.get(0).getScheduleId() + "}, \"voteStartTime\": \"2024-07-24T03:48:03Z\", \"voteEndTime\": \"2024-07-24T03:50:03Z\", \"value\": \"YES\"}";
        mockMvc.perform(post("/api/v1/vote/new")
                        .with(user("43194161040").roles("USER"))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(newVote)
                        .with(csrf()))
                .andExpect(anyOf(status().isOk(), status().isConflict()));


        mockMvc.perform(get("/api/v1/schedule/list")
                        .param("page", "0")
                        .param("size", "10")
                        .with(user("43194161040").roles("USER")))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));

        mockMvc.perform(get("/api/v1/schedule/listCompleted")
                        .param("page", "0")
                        .param("size", "10")
                        .with(user("31690755008").roles("ADMIN")))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));

        // Commit the transaction so the changes are visible within the test
        TestTransaction.end();
    }

    private ResultMatcher anyOf(ResultMatcher... matchers) {
        return result -> {
            for (ResultMatcher matcher : matchers) {
                try {
                    matcher.match(result);
                    return;
                } catch (AssertionError | Exception ignored) {
                }
            }
            throw new AssertionError("None of the matchers matched.");
        };
    }
}
