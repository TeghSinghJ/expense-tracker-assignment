package com.example.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.expensetracker.model.Group;

public interface GroupRepository extends JpaRepository<Group, Long> {
}