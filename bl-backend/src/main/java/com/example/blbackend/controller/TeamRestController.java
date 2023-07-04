package com.example.blbackend.controller;

import com.example.blbackend.entity.Team;
import com.example.blbackend.service.TeamService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teams")
public class TeamRestController {
    private final TeamService teamService;

    public TeamRestController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<Team>> getAllTeams() {
        return new ResponseEntity<>(teamService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<Team> getTeamById(@PathVariable Integer id) {
        return new ResponseEntity<>(teamService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<Team> addTeam(@RequestBody Team team) {
        return new ResponseEntity<>(teamService.save(team), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<?> deleteTeamById(@PathVariable Integer id) {
        teamService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
