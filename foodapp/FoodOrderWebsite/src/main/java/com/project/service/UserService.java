package com.project.service;

import java.util.List;

import com.project.model.User;

public interface UserService {
	
    User saveUser(User user);
    User getUserById(Long id);
    List<User> getAllUsers();
    
}
