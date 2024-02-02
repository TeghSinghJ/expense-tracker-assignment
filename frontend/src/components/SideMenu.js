import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="bg-light border-end" style={{ height: "100%" }}>
      <div className="d-flex flex-column align-items-start p-3">
        <Link to="/" className="mb-3 text-decoration-none text-dark">
          <i className="bi bi-house-door me-2"></i>Dashboard
        </Link>
        <Link to="/group" className="mb-3 text-decoration-none text-dark">
          <i className="bi bi-cash me-2"></i>Expenses
        </Link>
        <a href="#" className="mb-3 text-decoration-none text-dark">
          <i className="bi bi-chat-dots me-2"></i>Messages
        </a>
        <a href="#" className="text-decoration-none text-dark">
          <i className="bi bi-gear me-2"></i>Settings
        </a>
      </div>
    </div>
  );
};

export default SideMenu;
