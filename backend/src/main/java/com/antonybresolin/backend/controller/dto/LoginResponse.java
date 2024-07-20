package com.antonybresolin.backend.controller.dto;

@SuppressWarnings("unused")
public record LoginResponse(String accessToken, Long expiresIn) {
}
