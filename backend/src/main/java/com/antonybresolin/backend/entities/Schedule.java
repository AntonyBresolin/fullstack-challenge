package com.antonybresolin.backend.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity
@Table(name = "tb_schedule")
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scheduleId;

    @Column(nullable = false)
    private String title;

    @Column(length = 500)
    private String description;

    @CreationTimestamp
    private Timestamp createdAt;

    @Column()
    private Timestamp dateEnd;

    @Column(nullable = false)
    private int votingTime = 60;

    @Column(nullable = false)
    private Boolean active;


    public Schedule() {
    }

    public Schedule(String title, String description, int votingTime) {
        this.title = title;
        this.description = description;
        this.votingTime = votingTime;
        this.createdAt = new Timestamp(System.currentTimeMillis());
        this.active = true;
    }

    public Long getScheduleId() {
        return scheduleId;
    }

    public int getVotingTime() {
        return votingTime;
    }

    public void setVotingTime(int votingTime) {
        this.votingTime = votingTime;
    }

    public void setScheduleId(Long scheduleId) {
        this.scheduleId = scheduleId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Timestamp getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(Timestamp dateEnd) {
        this.dateEnd = dateEnd;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public void close() {
        this.active = false;
        this.dateEnd = new Timestamp(System.currentTimeMillis());
    }
}
