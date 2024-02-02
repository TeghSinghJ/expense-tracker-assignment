import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Expense Tracker</a>
          <div className="d-flex align-items-center">
            <a href="#" className="nav-link notifications mx-2">
              <i className="bi bi-bell"></i>
              <span className="badge">1</span>
            </a>
            <div className="nav-item dropdown mx-2">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
                  className="bg-info rounded-circle"
                  alt="Avatar"
                />
                <span className="ms-2">John Doe</span>
                <i className="fa fa-caret-down ms-2"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
