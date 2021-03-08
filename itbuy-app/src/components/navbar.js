import React from "react";
import logo from '../assets/logo.png';

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
          <img src={logo} className="d-inline-block align-center" width="122" alt="ITBuy Logo" />  Store</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#racks">Racks</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#estabilizadores">Estabilizadores</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#ups">UPS</a>
            </li>
        </ul>
        </div>
    </nav>
    );
};