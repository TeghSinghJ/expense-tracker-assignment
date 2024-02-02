# Expense Tracker App

## Overview

The Expense Tracker App is a web-based application that helps users manage and track their expenses. It provides a user-friendly interface to input, categorize, and visualize expenses, helping users gain insights into their spending habits.

## Features

- **Expense Management**: Add, edit, and delete expenses with details such as category, amount, and description.
- **Budget Tracking**: Monitor your budget and expenses to stay within financial goals.
- **Category-wise Analysis**: View expenses categorized by types such as groceries, utilities, entertainment, etc.
- **User Authentication**: Secure user accounts with login/logout functionality.
- **Group Expenses**: Collaborate on expenses by creating groups and sharing expenses within them.

## Technologies Used

- **Frontend**: React.js, Bootstrap
- **Backend**: Spring Boot, Java
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Charts**: Chart.js

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd expense-tracker
   ```

3. Install dependencies:

   ```bash
   # For frontend
   cd frontend
   npm install

   # For backend
   cd ../backend
   mvn clean install
   ```

4. Configure the database:
   - Create a MySQL database and update the database configuration in `backend/src/main/resources/application.properties`.

5. Run the application:

   ```bash
   # Start the backend server
   cd backend
   mvn spring-boot:run

   # Start the frontend server
   cd ../frontend
   npm start
   ```

6. Access the application at `http://localhost:3000` in your web browser.
