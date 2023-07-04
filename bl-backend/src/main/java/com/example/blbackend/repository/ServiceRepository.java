package com.example.blbackend.repository;

import com.example.blbackend.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceRepository extends JpaRepository<Service, Integer> {
    List<Service> findAll();

    Service findById(int id);

    Service save(Service service);

    void deleteById(int id);
}
