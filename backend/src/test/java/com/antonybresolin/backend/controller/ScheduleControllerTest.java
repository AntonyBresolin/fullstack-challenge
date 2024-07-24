package com.antonybresolin.backend.controller;

import com.antonybresolin.backend.entities.Schedule;
import com.antonybresolin.backend.repository.ScheduleRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class ScheduleControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Test
    @WithMockUser(authorities = "SCOPE_USER")
    public void testGetSchedules() throws Exception {
        mockMvc.perform(get("/api/v1/schedule/list")
                        .param("page", "0")
                        .param("size", "10"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    @WithMockUser(authorities = "SCOPE_ADMIN")
    public void testCreateSchedule() throws Exception {
        String newSchedule = "{\"title\": \"Initial Schedule\", \"description\": \"Initial Description\", \"votingTime\": 60}";

        mockMvc.perform(post("/api/v1/schedule/new")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(newSchedule))
                .andExpect(status().isOk());
    }

}
