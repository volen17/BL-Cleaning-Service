package com.example.blbackend.service;

import com.example.blbackend.entity.LoginUserInfo;
import com.example.blbackend.entity.NewUserInfo;
import com.example.blbackend.entity.User;
import com.example.blbackend.exception.PasswordsNotMatchingException;
import com.example.blbackend.exception.UserNotFoundException;
import com.example.blbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    private TeamService teamService;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(int id) {
        return userRepository.findById(id);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void deleteById(int id) {
        userRepository.deleteById(id);
    }

    public boolean checkUserExists(String email) {
        try {
            return userRepository.findByEmail(email).getEmail().equals(email) && !userRepository.findByEmail(email).getPassword().equals("");
        } catch (NullPointerException nullPointerException) {
            throw new UserNotFoundException();
        }
    }

    public User login(LoginUserInfo loginUserInfo) {
        String encodedPassword = userRepository.findByEmail(loginUserInfo.getEmail()).getPassword();

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        if(!encoder.matches(loginUserInfo.getPassword(), encodedPassword)) {
            throw new PasswordsNotMatchingException();
        }

        return userRepository.findByEmail(loginUserInfo.getEmail());
    }

    public User save(NewUserInfo newUserInfo) throws ExecutionException, InterruptedException {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(newUserInfo.getPassword());


        if(!encoder.matches(newUserInfo.getConfirmedPassword(), encodedPassword)) {
            throw new PasswordsNotMatchingException();
        }

        User user = new User();
        user.setPassword(encodedPassword);
        user.setFirstName(newUserInfo.getFirstName());
        user.setLastName(newUserInfo.getLastName());
        user.setEmail(newUserInfo.getEmail());
        user.setRole(newUserInfo.getRole());
        user.setTeam(teamService.findByName(newUserInfo.getTeam()));

        userRepository.save(user);
        return user;
    }
}
