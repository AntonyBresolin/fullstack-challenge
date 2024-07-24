package com.antonybresolin.backend.controller;

import com.antonybresolin.backend.controller.dto.CreateUserDto;
import com.antonybresolin.backend.entities.Role;
import com.antonybresolin.backend.entities.User;
import com.antonybresolin.backend.repository.RoleRepository;
import com.antonybresolin.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Random;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository, RoleRepository roleRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    @PostMapping("/create")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<Void> newUser(@RequestBody CreateUserDto dto) {
        if (!isValidCPF(dto.cpf())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF inválido");
        }

        if (randomizeVote()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Não pode votar");
        }

        var basicRole = roleRepository.findByName(Role.Values.BASIC.name());
        var userFromDB = userRepository.findByCpf(dto.cpf());

        userFromDB.ifPresentOrElse(
                user -> {
                    throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY);
                },
                () -> {
                    var user = new User();
                    user.setCpf(dto.cpf());
                    user.setPassword(passwordEncoder.encode(dto.password()));
                    user.setRoles(Set.of(basicRole));
                    userRepository.save(user);
                }
        );

        return ResponseEntity.ok().build();
    }

    private boolean isValidCPF(String cpf) {
        if (cpf == null || cpf.length() != 11 || cpf.matches("^(.)\\1*$")) return false;
        int[] cpfArray = cpf.chars().map(Character::getNumericValue).toArray();

        int sum = 0, weight = 10;
        for (int i = 0; i < 9; i++) sum += cpfArray[i] * weight--;
        int firstDigit = (sum * 10 % 11) % 10;
        if (firstDigit != cpfArray[9]) return false;

        sum = 0; weight = 11;
        for (int i = 0; i < 10; i++) sum += cpfArray[i] * weight--;
        int secondDigit = (sum * 10 % 11) % 10;
        return secondDigit == cpfArray[10];
    }

    private boolean randomizeVote() {
        Random random = new Random();
        return random.nextBoolean();
    }

}