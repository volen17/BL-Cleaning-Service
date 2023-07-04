package com.example.blbackend;

import com.example.blbackend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("com.*")
//@ComponentScan(basePackages = { "com.example.blbackend.entity" })
@SpringBootApplication
@EntityScan("com.example.blbackend.entity")
public class BlBackendApplication {

//    @Autowired
//    private EquipmentService equipmentService;
//
//    @Autowired
//    private FeedbackService feedbackService;
//
//    @Autowired
//    private OrderService orderService;
//
//    @Autowired
//    private ServicesService servicesService;
//
//    @Autowired
//    private TeamService teamService;
//
//    @Autowired
//    private UserService userService;

    public static void main(String[] args) {
        SpringApplication.run(BlBackendApplication.class, args);
    }

}
