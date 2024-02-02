import React, { useEffect, useState } from 'react'
import Card from './Card'
import ExpenseList from './ExpenseList'
import Chart from 'chart.js/auto';
import ChartComponent from './ChartComponent';

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalBudget, setTotalBudget] = useState(0);
    const [pieChartData, setPieChartData] = useState([]);
    const [selectedUserType, setSelectedUserType] = useState('Individual'); // Initialize with the default value
    const [groups, setGroups] = useState([]);

    // Sample URL, replace it with the actual URL of your Spring Boot backend
    const apiUrl = 'http://localhost:8080/api/expense/';
    const groupsUrl = 'http://localhost:8080/api/groups/';

    useEffect(() => {
        // Fetch expenses from the backend when the component mounts
        fetchExpenses();
        fetchGroups();

    }, []);
    const fetchGroups = async () => {
        try {
            const response = await fetch(groupsUrl);
            const data = await response.json();
            setGroups(data);
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };
    const fetchExpenses = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setExpenses(data);
            const expenseSum = data.reduce((sum, expense) => {
                return expense.transactionType === 'Expense' ? sum + expense.amount : sum;
            }, 0);

            const budgetSum = data.reduce((sum, expense) => {
                return expense.transactionType === 'Budget' ? sum + expense.amount : sum;
            }, 0);

            setTotalExpense(expenseSum);
            setTotalBudget(budgetSum);
            const categoryAmounts = {};
            data.forEach((expense) => {
                const category = expense.category;
                const amount = expense.amount;

                if (categoryAmounts[category]) {
                    categoryAmounts[category] += amount;
                } else {
                    categoryAmounts[category] = amount;
                }
            });

            const pieChartData = {
                labels: Object.keys(categoryAmounts),
                datasets: [
                    {
                        data: Object.values(categoryAmounts),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)',
                            // Add more colors if needed
                        ],
                    },
                ],
            };

            setPieChartData(pieChartData);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    const handleAddExpense = async () => {
        try {
            const category = document.getElementById('expense-category').value;
            const amount = parseFloat(document.getElementById('expense-amount').value);
            const transactionType = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
            const description = document.getElementById('expense-description').value;

            const expenseData = {
                category,
                amount,
                transactionType,
                description,
                date: "2022-02-25",
                userId: 245678,
                userType: "Group"
            };

            // Sample URL for creating an expense, replace it with the actual URL
            const createUrl = 'http://localhost:8080/api/expense/create/';
            const response = await fetch(createUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(expenseData),
            });
            console.log(expenseData);
            if (response.ok) {
                // If the expense is added successfully, fetch updated expenses
                fetchExpenses();
                // Close the modal or perform any other action
                // (replace the following line with the action you want)
                document.getElementById('addExpenseForm').classList.remove('show');
            } else {
                console.error('Error adding expense:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };


    const handleRemoveExpense = async (expenseId) => {
        try {
            // Sample URL for removing an expense, replace it with the actual URL
            const removeUrl = `http://localhost:8080/api/expense/delete/${expenseId}`;
            const response = await fetch(removeUrl, {
                method: 'DELETE',
            });

            if (response.ok) {
                // If the expense is removed successfully, fetch updated expenses
                fetchExpenses();
            } else {
                console.error('Error removing expense:', response.statusText);
            }
        } catch (error) {
            console.error('Error removing expense:', error);
        }
    };

    return (
        <>
            <div className='container text-center my-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <h2 className='text-start my-3 mx-1'>Dashboard</h2>
                        </div>
                        <div className="col-3">
                            <div className="btn-group">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                    Individual
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Individual</a></li>
                                    <li><a className="dropdown-item" href="#">Group</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row align-items-center">
                    <div className="col-6">
                        <Card expensetype="Expenses" icon="bi-cash-coin" prefix="&#8377;" amount={totalExpense} />
                        <Card expensetype="Budget" icon="bi-wallet2" prefix="&#8377;" amount={totalBudget} />
                    </div>
                    <div className="col-6">
                        <div className='container border my-3 '>
                            <ChartComponent data={pieChartData} />
                        </div>
                    </div>
                </div>

            </div>
            <div className='container my-3'>

                <div className="row">
                    <div className="col-9">
                        <h2 className='text-start my-3 mx-1'>Transactions</h2>
                    </div>
                    <div className="col-3 text-end">
                        <button type="button" className="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#addExpenseForm"><i className="bi bi-plus-square mx-2"></i>Add Transaction</button>

                    </div>
                </div>
            </div>


            <ExpenseList expenses={expenses} onRemoveExpense={handleRemoveExpense} />

            <div className="modal fade" id="addExpenseForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Expense</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="expense-category" className="col-form-label">Expense Type:</label><br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Expense" />
                                        <label className="form-check-label" for="inlineRadio1">Expense</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Budget" />
                                        <label className="form-check-label" for="inlineRadio2">Budget</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="group-dropdown" className="col-form-label">Associated With:</label>
                                    {/* <select id="group-dropdown" className="form-select">
                                        <option value="" disabled>Select a group</option>
                                        {groups && groups.map(group => (
                                            <option key={group.id} value={group.id}>{group.name}</option>
                                        ))}
                                    </select> */}
                                </div>
                                <div className="mb-3">
                                    <label for="expense-category" className="col-form-label">Category:</label>
                                    <input type="text" className="form-control" id="expense-category" />
                                </div>
                                <div className="mb-3">
                                    <label for="expense-amount" className="col-form-label">Amount:</label>
                                    <input type="number" className="form-control" id="expense-amount" />
                                </div>
                                <div className="mb-3">
                                    <label for="expense-description" className="col-form-label">Description:</label>
                                    <textarea className="form-control" id="expense-description"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleAddExpense()} data-bs-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;