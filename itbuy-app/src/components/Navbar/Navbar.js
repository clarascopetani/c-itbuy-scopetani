import React from "react";
import logo from '../../assets/logo.png';
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#home">
          <img src={logo} class="d-inline-block align-center" width="122" alt="ITBuy Logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#racks">Racks</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#estabilizadores">Estabilizadores</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#ups">UPS</a>
            </li>
        </ul>
        </div>
        <CartWidget />
    </nav>
    );
};