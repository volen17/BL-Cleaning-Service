package com.example.blbackend.controller;

import com.example.blbackend.entity.LoginUserInfo;
import com.example.blbackend.entity.NewUserInfo;
import com.example.blbackend.entity.User;
import com.example.blbackend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/users")
public class UserRestController {
    private final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping()
    @CrossOrigin
    public ResponseEntity<User> saveUser(@RequestBody NewUserInfo newUserInfo) throws ExecutionException, InterruptedException {
        return new ResponseEntity<>(userService.save(newUserInfo), HttpStatus.OK);
    }

    @PostMapping("/login")
    @CrossOrigin
    public ResponseEntity<User> login(@RequestBody LoginUserInfo loginUserInfo) throws ExecutionException, InterruptedException {
        if(!userService.checkUserExists(loginUserInfo.getEmail())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userService.login(loginUserInfo), HttpStatus.OK);
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        return new ResponseEntity<>(userService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<?> deleteUserById(@PathVariable Integer id) {
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
