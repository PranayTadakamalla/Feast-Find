import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Feast Find</Link> {/* Use Link instead of anchor */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link> {/* Use Link instead of anchor */}
            <Link className="nav-link" to="/reviews">Reviews</Link> {/* Use Link instead of anchor */}
            <Link className="nav-link" to="/map">Map</Link> {/* Use Link instead of anchor */}
            <Link className="nav-link" to="/contact">Contact</Link> 
          </div>
          <div className="navbar-nav ms-auto"> {/* Add ms-auto class here */}
            <Link className="nav-link" to="/login">Login</Link> {/* Use Link instead of anchor */}
            <Link className="nav-link" to="/signup">Sign Up</Link> {/* Use Link instead of anchor */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
