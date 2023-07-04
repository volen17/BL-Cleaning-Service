package com.example.blbackend.controller;

import com.example.blbackend.entity.NewOrder;
import com.example.blbackend.entity.Order;
import com.example.blbackend.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderRestController {
    private final OrderService orderService;

    public OrderRestController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<Order> addOrder(@RequestBody NewOrder order) {
        return new ResponseEntity<>(orderService.save(order), HttpStatus.CREATED);
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<Order>> getAllOrdersToday() {
        return new ResponseEntity<>(orderService.getAllOrdersToday(), HttpStatus.OK);
    }

    @GetMapping("/{email}")
    @CrossOrigin
    public ResponseEntity<List<Order>> getAllOrdersTodayByUserEmail(@PathVariable String email) {
        return new ResponseEntity<>(orderService.getAllOrdersTodayByUserEmail(email), HttpStatus.OK);
    }
}
