package com.antonybresolin.backend.controller.dto;

import com.antonybresolin.backend.entities.Schedule;

import java.sql.Timestamp;

public record VoteDto(Schedule schedule, Timestamp voteStartTime, Timestamp voteEndTime, String value) {
}
