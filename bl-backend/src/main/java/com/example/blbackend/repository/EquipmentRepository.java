package com.example.blbackend.repository;

import com.example.blbackend.entity.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EquipmentRepository extends JpaRepository<Equipment, Integer> {
    List<Equipment> findAll();

    Equipment findById(int id);

    Equipment save(Equipment equipment);

    void deleteById(int id);
}
