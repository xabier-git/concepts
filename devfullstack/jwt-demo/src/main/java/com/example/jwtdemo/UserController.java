package com.example.jwtdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        if (username.equals("admin") && password.equals("1234")) {
            System.out.println("Token generado: " + jwtUtil.generateToken(username));
            return jwtUtil.generateToken(username);      
        } else {
            throw new RuntimeException("Credenciales inválidas");
        }
    }

    @GetMapping("/hello")
    public String hello() {
        System.err.println("Acceso a /hello");
        return "¡Hola, estás autenticado!";
    }
}