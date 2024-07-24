package com.antonybresolin.backend.controller;

import com.antonybresolin.backend.controller.dto.ScheduleDto;
import com.antonybresolin.backend.entities.Schedule;
import com.antonybresolin.backend.entities.Vote;
import com.antonybresolin.backend.entities.VotingResult;
import com.antonybresolin.backend.repository.ScheduleRepository;
import com.antonybresolin.backend.repository.VoteRepository;
import com.antonybresolin.backend.repository.VotingResultRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;


import java.util.List;

@RestController
@RequestMapping("api/v1/schedule")
public class ScheduleController {
    private final ScheduleRepository scheduleRepository;
    private final VotingResultRepository votingResultRepository;
    private final VoteRepository voteRepository;

    public ScheduleController(ScheduleRepository scheduleRepository, VotingResultRepository votingResultRepository, VoteRepository votesRepository) {
        this.scheduleRepository = scheduleRepository;
        this.votingResultRepository = votingResultRepository;
        this.voteRepository = votesRepository;
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
            generateVotingResult(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }

    @GetMapping("/list")
    public ResponseEntity<Page<Schedule>> listSchedules(@RequestParam int page, @RequestParam int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(scheduleRepository.findAllByActiveTrueOrderByCreatedAt(pageable));
    }

    @GetMapping("/listCompleted")
    public ResponseEntity<Page<VotingResult>> listCompletedSchedules(@RequestParam int page, @RequestParam int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(votingResultRepository.findAllByOrderByFinalResultTimeAsc(pageable));
    }

    public void generateVotingResult(Long scheduleId) {
        Schedule schedule = scheduleRepository.findById(scheduleId).orElseThrow();
        List<Vote> votes = voteRepository.findAllByScheduleScheduleId(scheduleId);

        Long totalVotes = (long) votes.size();
        Long totalVotesYes = votes.stream().filter(vote -> vote.getValue() == Vote.VoteValue.YES).count();
        Long totalVotesNo = votes.stream().filter(vote -> vote.getValue() == Vote.VoteValue.NO).count();
        Long totalInvalidVotes = votes.stream().filter(vote -> vote.getValue() == Vote.VoteValue.INVALID).count();

        VotingResult votingResult = new VotingResult(totalVotes, totalInvalidVotes, totalVotesNo, totalVotesYes, schedule);
        votingResultRepository.save(votingResult);
    }


}
