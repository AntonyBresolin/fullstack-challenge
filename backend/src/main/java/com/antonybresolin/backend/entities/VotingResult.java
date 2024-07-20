package com.antonybresolin.backend.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Entity
@Table(name = "tb_voting_results")
public class VotingResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "voting_result_id")
    private Long votingResultId;
    @Column(name = "total_votes", nullable = false)
    private Long totalVotes;
    @Column(name = "total_valid_votes", nullable = false)
    private Long totalValidVotes;
    @Column(name = "total_invalid_votes", nullable = false)
    private Long totalInvalidVotes;

    @CreationTimestamp
    private Instant finalResultTime;

    @OneToOne
    @JoinColumn(name = "schedule_id")
    private Schedule schedule;

    public VotingResult() {
    }

    public Long getVotingResultId() {
        return votingResultId;
    }

    public void setVotingResultId(Long votingResultId) {
        this.votingResultId = votingResultId;
    }

    public Long getTotalVotes() {
        return totalVotes;
    }

    public void setTotalVotes(Long totalVotes) {
        this.totalVotes = totalVotes;
    }

    public Long getTotalValidVotes() {
        return totalValidVotes;
    }

    public void setTotalValidVotes(Long totalValidVotes) {
        this.totalValidVotes = totalValidVotes;
    }

    public Long getTotalInvalidVotes() {
        return totalInvalidVotes;
    }

    public void setTotalInvalidVotes(Long totalInvalidVotes) {
        this.totalInvalidVotes = totalInvalidVotes;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }

    public Instant getFinalResultTime() {
        return finalResultTime;
    }

    public void setFinalResultTime(Instant finalResultTime) {
        this.finalResultTime = finalResultTime;
    }
}
