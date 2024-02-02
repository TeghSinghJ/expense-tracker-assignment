// ExpenseList.jsx
import React from 'react';

const ExpenseList = ({ expenses, onRemoveExpense }) => {
  return (
    <div className='container my-3 border'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">TRANSACTION CATEGORY</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">DATE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <th scope="row">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </th>
              <td>{expense.category}</td>
              <td className={expense.transactionType === 'Budget' ? 'text-success' : 'text-danger'}>
                {expense.transactionType === 'Budget' ? '+' : '-'} &#8377;{expense.amount}
              </td>
              <td>{new Date(expense.date).toLocaleDateString('en-GB')}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onRemoveExpense(expense.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
