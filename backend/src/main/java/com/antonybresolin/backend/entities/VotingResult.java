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
    @Column(name = "total_invalid_votes", nullable = false)
    private Long totalInvalidVotes;

    @Column(name = "votes_against", nullable = false)
    private Long totalVotesAgainst;

    @Column(name = "votes_in_favor", nullable = false)
    private Long totalVotesInFavor;

    @Column(name = "final_result", nullable = false)
    private Boolean isApproved;

    @CreationTimestamp
    private Instant finalResultTime;

    @OneToOne
    @JoinColumn(name = "schedule_id")
    private Schedule schedule;

    public VotingResult() {
    }

public VotingResult(Long totalVotes, Long totalInvalidVotes, Long totalVotesAgainst, Long totalVotesInFavor, Schedule schedule) {
        this.totalVotes = totalVotes;
        this.totalInvalidVotes = totalInvalidVotes;
        this.totalVotesAgainst = totalVotesAgainst;
        this.totalVotesInFavor = totalVotesInFavor;
        this.schedule = schedule;
        this.isApproved = totalVotesInFavor > totalVotesAgainst;
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

    public Long getTotalInvalidVotes() {
        return totalInvalidVotes;
    }

    public void setTotalInvalidVotes(Long totalInvalidVotes) {
        this.totalInvalidVotes = totalInvalidVotes;
    }

    public Long getTotalVotesAgainst() {
        return totalVotesAgainst;
    }

    public void setTotalVotesAgainst(Long totalVotesAgainst) {
        this.totalVotesAgainst = totalVotesAgainst;
    }

    public Long getTotalVotesInFavor() {
        return totalVotesInFavor;
    }

    public void setTotalVotesInFavor(Long totalVotesInFavor) {
        this.totalVotesInFavor = totalVotesInFavor;
    }

    public Instant getFinalResultTime() {
        return finalResultTime;
    }

    public void setFinalResultTime(Instant finalResultTime) {
        this.finalResultTime = finalResultTime;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }
}
