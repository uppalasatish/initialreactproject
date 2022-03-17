import React from "react";
import './Nav.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Tabs, Tab, Row, Col, Container } from "react-bootstrap";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Incipient Info</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
       </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/form">User Form</Link>
            </li>
            <li className="nav-item">
              <Link to="/">User Data</Link>
             </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Nav;

