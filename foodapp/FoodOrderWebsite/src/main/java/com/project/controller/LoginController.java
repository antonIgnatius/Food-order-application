package com.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {

    @PostMapping("/login")
    @ResponseBody
    public String login(@RequestParam String username, @RequestParam String password) {
        // Simple validation (you can enhance this with real user authentication)
        if ("admin".equals(username) && "password".equals(password)) {
            return "Login successful!";
        } else {
            return "Invalid credentials!";
        }
    }
}

