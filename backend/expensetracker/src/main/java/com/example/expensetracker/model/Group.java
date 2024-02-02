package com.example.expensetracker.model;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String groupName;

    private String memberNames;

    // Constructors

    public Group() {
    }

    public Group(String groupName, String memberNames) {
        this.groupName = groupName;
        this.memberNames = memberNames;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getMemberNames() {
        return memberNames;
    }

    public void setMemberNames(String memberNames) {
        this.memberNames = memberNames;
    }
}
