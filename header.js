import React from 'react';

const Header = () => {
  return (
    <section className="header-sec">
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
        <div className="container-fluid nav-bar-nav">
          <a className="navbar-brand logo" href="#">
            TRAVEL
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav ">
            <ul className="navbar-nav nav-bar">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resort
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Resotta by Ferns</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="btn">
              <button type="button" className="btn btn-outline-info">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Header;
