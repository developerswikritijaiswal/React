import React from 'react'
import logo from "../image/logo.png";
import PropTypes from "prop-types";
import {Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="logoDiv">
          <img src={logo} className="img-fluid" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">
              <Link className="nav-link"  to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.title}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CustomTable">
                CustomTable
              </Link>
            </li>
          </ul>
          {props.searchbar ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>: ""}
        </div>
      </div>
    </nav>
  )
}
Header.defaultProps={
   searchbar : true,
}
Header.propTypes ={
  title: PropTypes.string,
  searchbar : PropTypes.bool.isRequired,
}



