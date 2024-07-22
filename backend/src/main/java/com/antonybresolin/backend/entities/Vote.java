package com.antonybresolin.backend.entities;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "tb_votes", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"user_id", "schedule_id"})
})
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vote_id")
    private Long voteId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "schedule_id", nullable = false)
    private Schedule schedule;

    @Column(name = "vote_start_time", nullable = false)
    private Timestamp voteStartTime;

    @Column(name = "vote_end_time", nullable = false)
    private Timestamp voteEndTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "value", nullable = false)
    private VoteValue value;

    public Vote() {
    }

    public Long getVoteId() {
        return voteId;
    }

    public void setVoteId(Long voteId) {
        this.voteId = voteId;
    }

    public Timestamp getVoteStartTime() {
        return voteStartTime;
    }

    public void setVoteStartTime(Timestamp voteStartTime) {
        this.voteStartTime = voteStartTime;
    }

    public Timestamp getVoteEndTime() {
        return voteEndTime;
    }

    public void setVoteEndTime(Timestamp voteEndTime) {
        this.voteEndTime = voteEndTime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }

    public VoteValue getValue() {
        return value;
    }

    public void setValue(VoteValue value) {
        this.value = value;
    }

    public enum VoteValue {
        YES,
        NO,
        INVALID
    }

    public Vote(Schedule schedule, Timestamp voteStartTime, Timestamp voteEndTime, VoteValue value, User user) {
        this.schedule = schedule;
        this.voteStartTime = voteStartTime;
        this.voteEndTime = voteEndTime;
        this.value = value;
        this.user = user;
    }
}
