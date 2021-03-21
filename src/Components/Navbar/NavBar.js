import React from 'react';
import { Navbar, Nav  } from 'react-bootstrap';
import './Navbar.css'
import  { useEffect, useState } from 'react';
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";
import fakeData from '../fakeData/FakeData';
const NavBar = () => {
    
    return (
        <div>
            <div className="container">
    <Navbar  expand="lg">
        <Navbar.Brand href="#home">Ninja Uber</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a className="nav-link"  href="/home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link"  href= {`/transport/:userId`} >Destination</a>
                </li>
                <li className="nav-item">
                <a className="nav-link"  href="/blog">Blog</a>
                </li>
                <li className="nav-item">
                <a className="nav-link"  href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                <a className="btn"  href="/signin">Sign in</a>
                </li>
                </ul>
        </Navbar.Collapse>
    </Navbar>
        </div>
        
        </div>
    );
};

export default NavBar;