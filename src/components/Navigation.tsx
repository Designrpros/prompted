"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled, { keyframes } from "styled-components";

// === CYBER-SWISS THEME ===
const theme = {
  colors: {
    bgDark: "#0D0D0D",
    bgCard: "#141414",
    bgElevated: "#1F1F1F",
    cyan: "#00F0FF",
    cyanDim: "#00A3AA",
    magenta: "#FF00FF",
    magentaDim: "#AA00AA",
    textPrimary: "#FFFFFF",
    textSecondary: "#B0B0B0",
    textMuted: "#606060",
    border: "#2A2A2A",
  },
};

// === ANIMATIONS ===
const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

// === CATEGORIES DATA ===
const categories = [
  { href: "/basics", label: "01_BASICS", description: "Foundation" },
  { href: "/patterns", label: "02_PATTERNS", description: "Templates" },
  { href: "/advanced", label: "03_ADVANCED", description: "Expert" },
  { href: "/examples", label: "04_EXAMPLES", description: "Showcase" },
  { href: "/playground", label: "05_PLAYGROUND", description: "Practice" },
  { href: "/resources", label: "06_RESOURCES", description: "Tools" },
];

const metaLinks = [
  { href: "/index-page", label: "INDEX" },
  { href: "/faq", label: "FAQ" },
];

// === STYLED COMPONENTS ===
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${theme.colors.bgDark};
  border-bottom: 1px solid ${theme.colors.border};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      ${theme.colors.cyan}, 
      ${theme.colors.magenta}, 
      transparent
    );
  }
`;

const NavInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 56px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.textPrimary};
  letter-spacing: -0.02em;
  
  &:hover .logo-text {
    text-shadow: 0 0 10px ${theme.colors.cyan};
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  
  &::before {
    content: 'P';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${theme.colors.bgDark};
    background: linear-gradient(135deg, ${theme.colors.cyan}, ${theme.colors.magenta});
    border: 1px solid ${theme.colors.cyan};
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 1px solid ${theme.colors.cyan}44;
    opacity: 0;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const LogoText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const LogoSubtext = styled.span`
  font-size: 0.625rem;
  font-weight: 400;
  color: ${theme.colors.textMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  position: relative;
  padding: 0.5rem 0.75rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.$isActive ? theme.colors.cyan : theme.colors.textSecondary};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 150ms ease;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0.75rem;
    right: 0.75rem;
    height: 1px;
    background: ${theme.colors.cyan};
    transform: scaleX(${props => props.$isActive ? 1 : 0});
    transition: transform 250ms ease;
  }
  
  &:hover {
    color: ${theme.colors.textPrimary};
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const MetaLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-left: 1rem;
  border-left: 1px solid ${theme.colors.border};
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MetaLink = styled(Link)`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.625rem;
  font-weight: 500;
  color: ${theme.colors.textMuted};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 150ms ease;
  
  &:hover {
    color: ${theme.colors.cyan};
  }
`;

// === MOBILE MENU ===
const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid ${theme.colors.border};
  cursor: pointer;
  transition: all 150ms ease;
  
  @media (max-width: 1024px) {
    display: flex;
  }
  
  &:hover {
    border-color: ${theme.colors.cyan};
  }
  
  span {
    width: 18px;
    height: 1px;
    background: ${theme.colors.textPrimary};
    transition: all 250ms ease;
  }
  
  &[data-open="true"] {
    span:nth-child(1) {
      transform: rotate(45deg) translate(4px, 4px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -4px);
    }
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.bgDark};
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});
  transition: transform 300ms ease;
  
  @media (min-width: 1025px) {
    display: none;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, ${theme.colors.cyan}08, transparent);
    pointer-events: none;
  }
`;

const MobileCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const MobileCategoryLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.25rem;
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.border};
  text-decoration: none;
  transition: all 200ms ease;
  
  &:hover {
    border-color: ${theme.colors.cyan};
    box-shadow: 0 0 20px ${theme.colors.cyan}33;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const MobileCategoryLabel = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${theme.colors.cyan};
  letter-spacing: 0.05em;
`;

const MobileCategoryDesc = styled.span`
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.875rem;
  color: ${theme.colors.textSecondary};
`;

const MobileMetaLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid ${theme.colors.border};
`;

const MobileMetaLink = styled(Link)`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${theme.colors.textMuted};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &:hover {
    color: ${theme.colors.cyan};
  }
`;

const Scanline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    ${theme.colors.cyan}80, 
    ${theme.colors.magenta}80, 
    transparent
  );
  animation: ${scanline} 8s linear infinite;
  pointer-events: none;
  opacity: 0.5;
`;

// === COMPONENT ===
const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <NavContainer>
        <Scanline />
        <NavInner>
          <Logo href="/">
            <LogoIcon />
            <LogoText>
              <span className="logo-text">PROMPTED</span>
              <LogoSubtext>v2.0 // Cyber-Swiss</LogoSubtext>
            </LogoText>
          </Logo>
          
          <NavLinks>
            {categories.map((cat) => (
              <NavLink 
                key={cat.href} 
                href={cat.href}
                $isActive={pathname === cat.href}
              >
                {cat.label}
              </NavLink>
            ))}
          </NavLinks>
          
          <MetaLinks>
            {metaLinks.map((link) => (
              <MetaLink key={link.href} href={link.href}>
                {link.label}
              </MetaLink>
            ))}
          </MetaLinks>
          
          <MobileMenuButton 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-open={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </MobileMenuButton>
        </NavInner>
      </NavContainer>
      
      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileCategoryGrid>
          {categories.map((cat) => (
            <MobileCategoryLink key={cat.href} href={cat.href}>
              <MobileCategoryLabel>{cat.label}</MobileCategoryLabel>
              <MobileCategoryDesc>{cat.description}</MobileCategoryDesc>
            </MobileCategoryLink>
          ))}
        </MobileCategoryGrid>
        
        <MobileMetaLinks>
          {metaLinks.map((link) => (
            <MobileMetaLink key={link.href} href={link.href}>
              {link.label}
            </MobileMetaLink>
          ))}
        </MobileMetaLinks>
      </MobileMenu>
    </>
  );
};

export default Navigation;
