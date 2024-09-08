import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const styledBtn = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 2rem;
`;

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">MixMatcher</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
