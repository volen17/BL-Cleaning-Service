package com.example.blbackend.repository;

import com.example.blbackend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findAll();

    Order findById(int id);

    Order save(Order order);

    void deleteById(int id);
}
