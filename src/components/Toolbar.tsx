"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

// === Theme ===
const theme = {
  colors: {
    background: "#fdf6e3",
    primary: "#2A2A2A",
  },
};

// === Styled Components ===
const ToolbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  min-height: 60px;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 700;
  color: ${theme.colors.background};
  transition: color 0.3s ease;
  flex-shrink: 0;
  z-index: 1001;

  &:hover {
    color: #e0d8c3;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  font-weight: 500;
  color: ${theme.colors.background};
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #e0d8c3;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: ${theme.colors.background};
    transition: width 0.4s ease, left 0.4s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const BurgerIcon = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${theme.colors.background};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  ${({ $isOpen }) => $isOpen && `
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${theme.colors.primary};
  z-index: 1000;
  padding: 5rem 0 2rem;
  box-sizing: border-box;
  overflow-y: auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 600;
  color: ${theme.colors.background};
  text-decoration: none;
  padding: 1rem;
  transition: color 0.3s ease;
  text-align: center;

  &:hover {
    color: #e0d8c3;
  }
`;



const Toolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ToolbarContainer>
        <Logo href="/">...</Logo>
        <NavLinks>
          <NavLink href="/basics">Basics</NavLink>
          <NavLink href="/patterns">Patterns</NavLink>
          <NavLink href="/advanced">Advanced</NavLink>
          <NavLink href="/examples">Examples</NavLink>
          <NavLink href="/playground">Playground</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/index-page">Index</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
        </NavLinks>
        <BurgerIcon $isOpen={isOpen} onClick={toggleMenu}>...</BurgerIcon>
      </ToolbarContainer>
      <MobileMenu $isOpen={isOpen}>
        <MobileNavLink href="/basics" onClick={toggleMenu}>Basics</MobileNavLink>
        <MobileNavLink href="/patterns" onClick={toggleMenu}>Patterns</MobileNavLink>
        <MobileNavLink href="/advanced" onClick={toggleMenu}>Advanced</MobileNavLink>
        <MobileNavLink href="/examples" onClick={toggleMenu}>Examples</MobileNavLink>
        <MobileNavLink href="/playground" onClick={toggleMenu}>Playground</MobileNavLink>
        <MobileNavLink href="/resources" onClick={toggleMenu}>Resources</MobileNavLink>
        <MobileNavLink href="/index-page" onClick={toggleMenu}>Index</MobileNavLink>
        <MobileNavLink href="/faq" onClick={toggleMenu}>FAQ</MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Toolbar;