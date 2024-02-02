package com.example.expensetracker.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private double amount;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private String description;

    // New fields
    @Column(nullable = true)
    private String transactionType;

    @Column(nullable = true)
    private Long userId;

    @Column(nullable = true)
    private Long groupId;

    @Column(nullable = false)
    private String userType;

    // Default constructor
    public Expense() {
    }

    // Parameterized constructor
    public Expense(double amount, String category, Date date, String description, String transactionType, Long userId,
            Long groupId, String userType) {
        this.amount = amount;
        this.category = category;
        this.date = date;
        this.description = description;
        this.transactionType = transactionType;
        this.userId = userId;
        this.groupId = groupId;
        this.userType = userType;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}
