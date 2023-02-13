import React from "react";
import { RiReactjsFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-3" href="#">
          <RiReactjsFill size={30} className=" ms-2" /> Day 2 Project
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
