package com.example.blbackend.repository;

import com.example.blbackend.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Integer> {
    List<Team> findAll();

    Team findById(int id);

    Team findByName(String name);

    Team save(Team team);

    void deleteById(int id);
}
