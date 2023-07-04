package com.example.blbackend.repository;

import com.example.blbackend.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
    List<Feedback> findAll();

    Feedback save(Feedback feedback);
}
