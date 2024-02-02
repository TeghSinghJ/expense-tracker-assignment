package com.example.expensetracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.example.expensetracker.model.Member;
import com.example.expensetracker.repository.MemberRepository;

@RestController
@RequestMapping("/api/members")
public class MemberController {
    @Autowired
    private MemberRepository memberRepository;

    @GetMapping("/")
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Member> addMember(@RequestBody Member member) {
        Member newMember = memberRepository.save(member);
        return new ResponseEntity<>(newMember, HttpStatus.CREATED);
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<Void> removeMember(@PathVariable Long id) {
        memberRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
