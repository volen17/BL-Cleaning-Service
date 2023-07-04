package com.example.blbackend.controller;

import com.example.blbackend.entity.Feedback;
import com.example.blbackend.entity.NewFeedback;
import com.example.blbackend.service.FeedbackService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedbacks")
public class FeedbackRestController {
    private final FeedbackService feedbackService;

    public FeedbackRestController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        return new ResponseEntity<>(feedbackService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<Feedback> addFeedback(@RequestBody NewFeedback feedback) {
        return new ResponseEntity<>(feedbackService.save(feedback), HttpStatus.CREATED);
    }
}
