package com.fratzkian.user.repository;

import com.fratzkian.user.model.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByEmail(@NotBlank(message = "Email required") @Email(message = "Invalid email format") String email);
}
