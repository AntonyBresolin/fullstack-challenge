package com.antonybresolin.backend.controller;

import com.antonybresolin.backend.controller.dto.VoteDto;
import com.antonybresolin.backend.entities.User;
import com.antonybresolin.backend.entities.Vote;
import com.antonybresolin.backend.repository.UserRepository;
import com.antonybresolin.backend.repository.VoteRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RequestMapping("api/v1/vote")
@RestController
public class VoteController {
    private final VoteRepository voteRepository;
    private final UserRepository userRepository;

    public VoteController(VoteRepository voteRepository, UserRepository userRepository) {
        this.voteRepository = voteRepository;
        this.userRepository = userRepository;
    }

    @PostMapping("/new")
    public ResponseEntity<Void> newVote(@RequestBody VoteDto dto, Authentication authentication) {
        if (dto.schedule() == null || dto.voteStartTime() == null || dto.voteEndTime() == null || dto.value() == null) {
            return ResponseEntity.badRequest().build();
        }
        try {
            Optional<User> user = userRepository.findByCpf((authentication.getName()));
            if (user.isEmpty()) {
                return ResponseEntity.status(401).build();
            }

            boolean hasVoted = voteRepository.existsByUserAndSchedule(user.get(), dto.schedule());
            if (hasVoted) {
                return ResponseEntity.status(409).build();
            }
            Vote vote = new Vote(dto.schedule(), dto.voteStartTime(), dto.voteEndTime(), Vote.VoteValue.valueOf(dto.value().toUpperCase()), user.get());
            voteRepository.save(vote);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
        return ResponseEntity.ok().build();
    }
}
