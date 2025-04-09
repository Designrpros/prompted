"use client";

import { useState } from "react";
import styled from "styled-components";
import Toolbar from "../../components/Toolbar";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: var(--font-sans);
  overflow-x: hidden;
  background: var(--color-background-light);
  margin: 0;
  padding: 5rem 2rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem 1rem 1rem;
  }

  @media (max-width: 400px) {
    padding: 2rem 0.5rem 0.5rem 0.5rem;
  }
`;

const SubpageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: var(--color-text-light);
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 1rem;
  }
`;

const SectionHeader = styled.div`
  background: var(--color-background-content);
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;

  &:hover 
    background: var(--color-background-light);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 0.6rem;
  }

  @media (max-width: 400px) {
    padding: 0.6rem 0.4rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--color-primary);
  margin: 0;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

const ToggleIcon = styled.span`
  font-size: 1.5rem;
  color: var(--color-primary);
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

const SectionContent = styled.div<{ $isOpen: boolean }>`
  padding: ${({ $isOpen }) => ($isOpen ? "1rem" : "0")};
  height: ${({ $isOpen }) => ($isOpen ? "auto" : "0")};
  overflow: hidden;
  background: var(--color-background-light);
  max-width: 100%;

  @media (max-width: 768px) {
    padding: ${({ $isOpen }) => ($isOpen ? "0.8rem" : "0")};
  }

  @media (max-width: 400px) {
    padding: ${({ $isOpen }) => ($isOpen ? "0.6rem" : "0")};
  }
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.5;
  margin: 0 0 0.5rem 0;
  max-width: 100%;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
   ;3A;3A;3A;3A;3A;3A;3A font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const Advanced: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({
    0: true,
  });

  const toggleSection = (sectionIndex: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const sections = [
    {
      title: "Prompt Chaining",
      content: (
        <SectionText>
          Break complex tasks into multiple prompts to guide the AI step-by-step. For example: "First summarize this text, then analyze its tone."
        </SectionText>
      ),
    },
    {
      title: "Self-Reflection",
      content: (
        <SectionText>
          Teach the AI to critique its own responses. Example: "Review your last answer and improve it."
        </SectionText>
      ),
    },
    {
      title: "Multi-Modal Prompting",
      content: (
        <SectionText>
          Combine text and other inputs like images. Example: "Describe this image in a poem."
        </SectionText>
      ),
    },
  ];

  return (
    <PageContainer>
      <Toolbar />
      <SubpageTitle>Advanced Techniques</SubpageTitle>
      <IntroText>
        Explore advanced prompt engineering strategies to tackle complex tasks and optimize AI outputs.
      </IntroText>
      {sections.map((section, index) => (
        <Section key={index}>
          <SectionHeader onClick={() => toggleSection(index)}>
            <SectionTitle>{section.title}</SectionTitle>
            <ToggleIcon>{openSections[index] ? "−" : "+"}</ToggleIcon>
          </SectionHeader>
          <SectionContent $isOpen={!!openSections[index]}>
            {section.content}
          </SectionContent>
        </Section>
      ))}
    </PageContainer>
  );
};

export default Advanced;
