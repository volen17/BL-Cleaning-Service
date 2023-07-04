package com.example.blbackend.repository;

import com.example.blbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    List<User> findAll();

    User findById(int id);

    User findByEmail(String email);

    User save(User user);

    void deleteById(int id);
}
