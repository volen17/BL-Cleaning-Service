package com.example.blbackend.service;

import com.example.blbackend.entity.NewService;
import com.example.blbackend.entity.Service;
import com.example.blbackend.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class ServicesService {
    private ServiceRepository serviceRepository;

    @Autowired
    public ServicesService(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public List<Service> findAll() {
        return serviceRepository.findAll();
    }

    public Service findById(int id) {
        return serviceRepository.findById(id);
    }

    public Service save(NewService newService) {
        Service service = new Service();
        service.setName(newService.getServiceName());
        service.setPrice(newService.getServicePrice());
        service.setDescription(newService.getServiceDescription());
        service.setImageUrl(newService.getImageUrl());
        return serviceRepository.save(service);
    }

    public void deleteById(int id) {
        serviceRepository.deleteById(id);
    }
}
