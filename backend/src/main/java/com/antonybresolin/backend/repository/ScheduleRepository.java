package com.antonybresolin.backend.repository;

import com.antonybresolin.backend.entities.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule, Long>{}
