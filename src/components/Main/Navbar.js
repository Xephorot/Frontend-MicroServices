import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"
      style={{ height: "80px" }}
    >
      <a className="navbar-brand col-sm-3 col-md-2 mr-0 px-3" href="/">
        Company name
      </a>
      <ul className="navbar-nav px-3 d-flex align-items-center">
        <li className="nav-item">
          <Link to="/admin" className="btn btn-outline-light">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
