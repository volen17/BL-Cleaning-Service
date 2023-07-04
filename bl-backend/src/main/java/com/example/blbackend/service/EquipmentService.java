package com.example.blbackend.service;

import com.example.blbackend.entity.Equipment;
import com.example.blbackend.entity.NewEquipment;
import com.example.blbackend.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentService {
    private EquipmentRepository equipmentRepository;

    @Autowired
    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    public List<Equipment> findAll() {
        return equipmentRepository.findAll();
    }

    public Equipment findById(int id) {
        return equipmentRepository.findById(id);
    }

    public Equipment save(NewEquipment newEquipment) {
        Equipment equipment = new Equipment();
        equipment.setName(newEquipment.getEquipmentName());
        equipment.setPrice(newEquipment.getEquipmentPrice());
        equipment.setDescription(newEquipment.getEquipmentDescription());
        equipment.setImageUrl(newEquipment.getImageUrl());
        return equipmentRepository.save(equipment);
    }

    public void deleteById(int id) {
        equipmentRepository.deleteById(id);
    }
}
