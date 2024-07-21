package com.antonybresolin.backend.repository;

import com.antonybresolin.backend.entities.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    List<Vote> findAllByScheduleScheduleId(Long scheduleId);
}
