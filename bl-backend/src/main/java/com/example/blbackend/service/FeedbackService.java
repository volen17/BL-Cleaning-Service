package com.example.blbackend.service;

import com.example.blbackend.entity.Feedback;
import com.example.blbackend.entity.NewFeedback;
import com.example.blbackend.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserService userService;

    @Autowired
    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    public List<Feedback> findAll() {
        return feedbackRepository.findAll();
    }

    public Feedback save(NewFeedback newFeedback) {
        Feedback feedback = new Feedback();
        feedback.setDescription(newFeedback.getDescription());
        feedback.setUser(userService.findByEmail(newFeedback.getEmail()));
        return feedbackRepository.save(feedback);
    }
}
