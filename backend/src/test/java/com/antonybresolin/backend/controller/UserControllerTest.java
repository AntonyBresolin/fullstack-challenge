package com.antonybresolin.backend.controller;

import com.antonybresolin.backend.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Test
    @WithMockUser(authorities = "SCOPE_ADMIN")
    public void testCreateUser() throws Exception {
        String newUser = "{\"cpf\": \"54701042064\", \"password\": \"password123\"}";

        mockMvc.perform(post("/api/v1/user/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(newUser))
                .andDo(print())
                .andExpect(anyOf(status().isOk(), status().isNotFound(), status().isUnprocessableEntity()));
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
