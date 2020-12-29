import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <Link to="/"><img className="navbar-brand ml-lg-5 ml-sm-2" src="/images/logo.png" alt="logo" width="42px" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mr-5 mt-lg-0 text-center">
              <li className="nav-item">
                <NavLink exact to="/" activeClassName="selected" className="nav-link text-white">Home</NavLink>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default Header;
