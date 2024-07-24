package com.antonybresolin.backend.repository;

import com.antonybresolin.backend.entities.Schedule;
import com.antonybresolin.backend.entities.User;
import com.antonybresolin.backend.entities.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    List<Vote> findAllByScheduleScheduleId(Long scheduleId);
    boolean existsByUserAndSchedule(User user, Schedule schedule);
}
