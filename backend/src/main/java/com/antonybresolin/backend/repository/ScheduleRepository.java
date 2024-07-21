package com.antonybresolin.backend.repository;

import com.antonybresolin.backend.entities.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Long>{
    List<Schedule> findAllByActiveTrueOrderByCreatedAt();
}
