package com.example.blbackend.controller;

import com.example.blbackend.entity.NewService;
import com.example.blbackend.entity.Service;
import com.example.blbackend.service.ServicesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class ServiceRestController {
    private final ServicesService servicesService;

    public ServiceRestController(ServicesService servicesService) {
        this.servicesService = servicesService;
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<Service>> getAllServices() {
        return new ResponseEntity<>(servicesService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<Service> addServices(@RequestBody NewService service) {
        return new ResponseEntity<>(servicesService.save(service), HttpStatus.CREATED);
    }
}
