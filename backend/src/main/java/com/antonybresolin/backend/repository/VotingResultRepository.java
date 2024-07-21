package com.antonybresolin.backend.repository;

import com.antonybresolin.backend.entities.VotingResult;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VotingResultRepository extends JpaRepository<VotingResult, Long>{}
