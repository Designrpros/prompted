import styled from "styled-components";
import Link from "next/link";
import { theme } from "../theme"; // Adjust the path: from src/app/index/ to src/

// === Styled Components ===
const SidebarContainer = styled.div`
  width: 200px;
  background: ${theme.colors.backgroundLight};
  padding: 5rem 1rem 1rem 1rem; /* Account for fixed toolbar */
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  border-right: 1px solid ${theme.colors.primary};
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.primary} ${theme.colors.backgroundLight};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.backgroundLight};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    display: none; /* Hide sidebar on mobile */
  }
`;

const SidebarTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0 0 1rem 0;
  padding: 0 1rem;
  overflow-wrap: break-word;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    margin-bottom: 0.9rem;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const SidebarLink = styled(Link)`
  font-size: 1rem;
  color: ${theme.colors.textLight};
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  border-radius: 4px;
  transition: background 0.3s ease;
  overflow-wrap: break-word;

  &:hover {
    background: ${theme.colors.backgroundContent};
    color: ${theme.colors.primary};
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    padding: 0.45rem 0.9rem;
  }
`;

// === Sidebar Component ===
const Sidebar: React.FC = () => {
  const sections = [
    { id: "welcome", title: "Welcome" },
    { id: "prompt-basics", title: "Prompt Basics" },
    { id: "prompt-patterns", title: "Prompt Patterns" },
    { id: "prompt-resources", title: "Prompt Resources" },
    { id: "prompt-playground", title: "Prompt Playground" },
  ];

  return (
    <SidebarContainer>
      <SidebarTitle>Navigation</SidebarTitle>
      <SidebarList>
        {sections.map((section) => (
          <SidebarListItem key={section.id}>
            <SidebarLink href={`#${section.id}`}>{section.title}</SidebarLink>
          </SidebarListItem>
        ))}
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;