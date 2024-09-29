import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 150px;
  padding: 0 20px;
  display: flex;
  justify-content: center; /* Centers the entire content */
  align-items: center;
  position: relative;

  .logo {
    position: absolute;
    top: 0;
    left: 20px; /* Keeps the logo on the left on desktop */
  }

  .site-logo {
    height: 150px;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    height: 100px;
    justify-content: center; /* Centers everything on mobile */

    .logo {
      position: relative;
      margin: 0 auto; /* Centers the logo */
      left: 0; /* Resets the left position */
    }

    .site-logo {
      height: 60px;
      margin-top: 0;
    }
  }
`;

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="NavBar">
      <Nav>
        <div className="logo">
          <a href="/" className="site-logo">
            <img src="" alt="Rose Long Logo" className="site-logo" />
          </a>
        </div>
        <Burger
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      </Nav>
    </div>
  );
}
