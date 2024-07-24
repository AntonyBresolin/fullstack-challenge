package com.antonybresolin.backend.repository;

import com.antonybresolin.backend.entities.Schedule;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Long>{
    Page<Schedule> findAllByActiveTrueOrderByCreatedAt(Pageable pageable);
}
