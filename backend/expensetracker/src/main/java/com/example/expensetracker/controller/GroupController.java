package com.example.expensetracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.expensetracker.model.Group;
import com.example.expensetracker.repository.GroupRepository;

@RestController
@RequestMapping("/api/groups")
public class GroupController {

    @Autowired
    private GroupRepository groupRepository;

    @GetMapping("/")
    public List<Group> getAllGroups() {
        return groupRepository.findAll();
    }

    @PostMapping("/add")
    public @NonNull Group addGroup(@RequestBody @NonNull Group group) {
        return groupRepository.save(group);
    }

    // Add other CRUD operations as needed
}
