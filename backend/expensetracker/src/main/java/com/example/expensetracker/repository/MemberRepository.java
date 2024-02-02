package com.example.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.expensetracker.model.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
    // Additional methods if needed
}
