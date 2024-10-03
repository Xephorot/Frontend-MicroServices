import React from "react";
import { Link } from "react-router-dom";

function Navbar({ searchTerm, handleSearchChange }) {
  return (
    <nav
      className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"
      style={{ height: "80px" }}
    >
      <a className="navbar-brand col-sm-3 col-md-2 mr-0 px-3" href="/">
        Company name
      </a>
      <input
        className="form-control form-control-dark w-50"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="navbar-nav d-flex flex-row align-items-center px-3">
        <li className="nav-item">
          <Link
            to="/admin/new"
            className="btn btn-outline-dark"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              marginRight: "10px",
            }}
          >
            New Product
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" style={{ color: "#FFFFFF" }}>
            Sign Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
