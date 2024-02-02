package com.example.expensetracker.service;

import com.example.expensetracker.model.Expense;

import java.util.List;

public interface ExpenseService {
    List<Expense> getAllExpenses();

    Expense getExpenseById(Long id);

    Expense createExpense(Expense expense);

    Expense updateExpense(Long id, Expense expense);

    void deleteExpense(Long id);
}
