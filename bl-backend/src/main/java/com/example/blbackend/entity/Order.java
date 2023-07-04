package com.example.blbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private int id;

    @Column(name = "order_made", nullable = false)
    private Date orderMade;

    @Column(name = "order_date", nullable = false)
    private Date orderDate;

    @Column(name = "order_price", nullable = false)
    private double price;

    @Column(name = "payment_method")
    private String method;

    @Column(name = "order_address")
    private String orderAddress;

    @Column(name = "phone_number")
    private String phoneNumber;

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getOrderAddress() {
        return orderAddress;
    }

    public void setOrderAddress(String orderAddress) {
        this.orderAddress = orderAddress;
    }

    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", referencedColumnName = "team_id")
    @JsonIgnore
    private Team team;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.MERGE
            })
    @JoinTable(
            name = "order_equipment",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "equipment_id"))
    private List<Equipment> equipmentList = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.MERGE
            })
    @JoinTable(
            name = "order_service",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "service_id"))
    private List<Service> serviceList = new ArrayList<>();

    public List<Service> getServiceList() {
        return serviceList;
    }

    public void setServiceList(List<Service> serviceList) {
        this.serviceList = serviceList;
    }

    public List<Equipment> getEquipmentList() {
        return equipmentList;
    }

    public void setEquipmentList(List<Equipment> equipmentList) {
        this.equipmentList = equipmentList;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getOrderMade() {
        return orderMade;
    }

    public void setOrderMade(Date orderMade) {
        this.orderMade = orderMade;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }
}
