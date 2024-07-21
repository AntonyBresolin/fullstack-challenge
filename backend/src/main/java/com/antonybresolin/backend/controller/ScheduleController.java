package com.antonybresolin.backend.controller;

import com.antonybresolin.backend.controller.dto.ScheduleDto;
import com.antonybresolin.backend.entities.Schedule;
import com.antonybresolin.backend.repository.ScheduleRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/schedule")
public class ScheduleController {
    private final ScheduleRepository scheduleRepository;

    public ScheduleController(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }


    @PostMapping("/new")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<Void> newSchedule(@RequestBody ScheduleDto dto) {
        if (dto.title() == null || dto.description() == null || dto.votingTime() == null) {
            return ResponseEntity.badRequest().build();
        }
        try{
            Schedule schedule = new Schedule(dto.title(), dto.description(), dto.votingTime());
            scheduleRepository.save(schedule);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }

    @PutMapping("/close")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<Void> closeSchedule(@RequestParam Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().build();
        }
        try{
            Schedule schedule = scheduleRepository.findById(id).orElseThrow();
            schedule.close();
            scheduleRepository.save(schedule);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }

}
