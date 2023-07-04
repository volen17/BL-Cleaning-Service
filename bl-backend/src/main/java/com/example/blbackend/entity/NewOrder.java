package com.example.blbackend.entity;

import java.util.Date;
import java.util.List;

public record NewOrder(Date orderDate, List<Service> services, List<Equipment> equipments, String email,
                       String paymentMethod, String orderAddress, String phoneNumber) {
}
