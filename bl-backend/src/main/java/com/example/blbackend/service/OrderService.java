package com.example.blbackend.service;

import com.example.blbackend.entity.NewOrder;
import com.example.blbackend.entity.Order;
import com.example.blbackend.entity.Team;
import com.example.blbackend.entity.User;
import com.example.blbackend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private OrderRepository orderRepository;
    private UserService userService;
    private TeamService teamService;

    @Autowired
    public OrderService(OrderRepository orderRepository, UserService userService, TeamService teamService) {
        this.orderRepository = orderRepository;
        this.userService = userService;
        this.teamService = teamService;
    }

    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    public Order findById(int id) {
        return orderRepository.findById(id);
    }

    public Order save(NewOrder newOrder) {
        Order order = new Order();
        order.setOrderMade(new Date());
        order.setOrderDate(newOrder.orderDate());
        order.setPrice(newOrder.equipments().stream().mapToDouble(equipment -> equipment.getPrice()).sum()
        + newOrder.services().stream().mapToDouble(service -> service.getPrice()).sum());
        order.setUser(userService.findByEmail(newOrder.email()));
        order.setMethod(newOrder.paymentMethod());
        order.setOrderAddress(newOrder.orderAddress());
        order.setPhoneNumber(newOrder.phoneNumber());
        order.setServiceList(newOrder.services());
        order.setEquipmentList(newOrder.equipments());
        order.setTeam(teamService.findAvailableTeam(newOrder.orderDate()));
        return orderRepository.save(order);
    }

    public void deleteById(int id) {
        orderRepository.deleteById(id);
    }

    public List<Order> getAllOrdersToday() {
        return orderRepository.findAll().stream().filter(order -> {
            Calendar cal1 = Calendar.getInstance();
            cal1.setTime(new Date());
            Calendar cal2 = Calendar.getInstance();
            cal2.setTime(order.getOrderDate());
            return cal1.get(Calendar.DAY_OF_YEAR) == cal2.get(Calendar.DAY_OF_YEAR) &&
                    cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR);
        }).collect(Collectors.toList());
    }

    public List<Order> getAllOrdersTodayByUserEmail(String userEmail) {
        User user = userService.findByEmail(userEmail);
        Team team = user.getTeam();
        List<Order> ordersToday = getAllOrdersToday();
        return ordersToday.stream().filter(order -> order.getTeam().getId() == team.getId()).collect(Collectors.toList());
    }
}
