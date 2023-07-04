package com.example.blbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_id")
    private int id;

    @Column(name = "team_name", nullable = false)
    private String name;

    @OneToMany(mappedBy="team")
    @JsonIgnore
    private List<User> workersList;

    @OneToMany(mappedBy="team")
    @JsonIgnore
    private List<Order> ordersList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<User> getWorkersList() {
        return workersList;
    }

    public void setWorkersList(List<User> workersList) {
        this.workersList = workersList;
    }

    public List<Order> getOrdersList() {
        return ordersList;
    }

    public void setOrdersList(List<Order> ordersList) {
        this.ordersList = ordersList;
    }
}
