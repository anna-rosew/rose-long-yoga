import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../../styles/NavBar.css";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  z-index: 1001;
  top: 15px;
  right: 20px;
  display: none;

  @media (max-width: 1152px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.9s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ menuOpen, toggleMenu, closeMenu }) => {
  const [open, setOpen] = useState(menuOpen);

  useEffect(() => {
    setOpen(menuOpen);
  }, [menuOpen]);

  const handleClick = () => {
    setOpen(!open);
    toggleMenu();
  };

  return (
    <>
      <StyledBurger open={open} onClick={handleClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} closeMenu={closeMenu} />
    </>
  );
};

export default Burger;
