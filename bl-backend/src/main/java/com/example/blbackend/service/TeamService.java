package com.example.blbackend.service;

import com.example.blbackend.entity.Team;
import com.example.blbackend.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TeamService {
    private final TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> findAll() {
        return teamRepository.findAll();
    }

    public Team findById(int id) {
        return teamRepository.findById(id);
    }

    public Team findByName(String name) {
        return teamRepository.findByName(name);
    }

    public Team save(Team team) {
        return teamRepository.save(team);
    }

    public void deleteById(int id) {
        teamRepository.deleteById(id);
    }

    public Team findAvailableTeam(Date date) {
        List<Team> busyTeams = teamRepository.findAll().stream().filter(
                team -> team.getOrdersList().stream().filter(
                        order -> order.getOrderDate().getTime() == date.getTime()
                ).count() != 0
        ).collect(Collectors.toList());
        List<Team> freeTeam = teamRepository.findAll().stream().filter(
                team -> busyTeams.stream().filter(busyTeam -> busyTeam.getId() == team.getId()).count() == 0
        ).collect(Collectors.toList());
        if (freeTeam.size() == 0) {
            throw new RuntimeException("No team available for this time");
        } else {
            return freeTeam.get(0);
        }
    }
}
