package com.example.blbackend.controller;

import com.example.blbackend.entity.Equipment;
import com.example.blbackend.entity.NewEquipment;
import com.example.blbackend.service.EquipmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipment")
public class EquipmentRestController {
    private final EquipmentService equipmentService;

    public EquipmentRestController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<Equipment>> getAllEquipments() {
        return new ResponseEntity<>(equipmentService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<Equipment> getEquipmentById(@PathVariable Integer id) {
        return new ResponseEntity<>(equipmentService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<Equipment> addEquipment(@RequestBody NewEquipment equipment) {
        return new ResponseEntity<>(equipmentService.save(equipment), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<?> deleteEquipmentById(@PathVariable Integer id) {
        equipmentService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
