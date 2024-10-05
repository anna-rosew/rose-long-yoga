import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: black;
  }

  @media (max-width: 1152px) {
    flex-flow: column nowrap;
    color: white;
    background-color: #356d65;
    position: fixed;
    z-index: 1000;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding-top: 5rem;
    transition: transform 0.9s ease-in-out;

    li {
      color: white;
    }
  }
`;

const BookNowButton = styled.a`
  padding: 20px 35px;
  display: block;
  margin: 20px auto;
  border-radius: 17px;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-size: 20px;
  color: white;
  background-color: #862b0d;
  border: 2px solid #862b0d;
  transition: color 0.5s, background-color 0.3s, border 0.3s;
  text-align: center;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ccbb99;
    background-color: black;
    border: 2px solid black;
  }
`;

const RightNav = ({ open, closeMenu }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/" className="menu-link home-link" onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/work" className="menu-link work-link" onClick={closeMenu}>
          Work With Rose
        </Link>
      </li>
      <li>
        <Link to="/about" className="menu-link about-link" onClick={closeMenu}>
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="menu-link contact-link"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/membership"
          className="menu-link membership-link"
          onClick={closeMenu}
        >
          Membership
        </Link>
      </li>
      <li>
        <Link to="/blog" className="menu-link blog-link" onClick={closeMenu}>
          Blog
        </Link>
      </li>

      {open && (
        <li>
          <BookNowButton href="/contact" onClick={closeMenu}>
            Book Now
          </BookNowButton>
        </li>
      )}
    </Ul>
  );
};

export default RightNav;
