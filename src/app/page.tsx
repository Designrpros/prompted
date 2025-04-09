"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Toolbar from "../components/Toolbar"; // Adjust path as needed

// === Theme ===
const theme = {
  colors: {
    backgroundLight: "#F7F4E9", // Softer, neutral beige for left panel and content
    backgroundDark: "#2A2A2A", // Lighter black (dark gray) for right panel
    backgroundContent: "#E8E2D1", // Muted beige for lower content
    primary: "#1C2526", // Dark charcoal for accents
    textLight: "#333333", // Dark gray for light background
    textDark: "#FFFFFF", // White for dark background
  },
};

// === Typewriter Animation ===
const typeWriter = keyframes`
  0%, 20% { content: "LLM"; }
  25%, 40% { content: "Prompting"; }
  45%, 60% { content: "AI Skills"; }
  65%, 80% { content: "Online Course"; }
  85%, 100% { content: "Mastery"; }
`;

const blinkCaret = keyframes`
  50% { border-color: transparent; }
`;

// === Styled Components ===
const PageContainer = styled.div`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden;
  background: ${theme.colors.backgroundLight};
  margin: 0;
`;

const HeroSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  padding-top: 70px;
  box-sizing: border-box;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    padding-top: 60px;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  background: ${theme.colors.backgroundLight};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6rem 4rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 2rem 1rem;
    min-height: 50vh;
  }

  @media (max-width: 400px) {
    padding: 2rem 1rem 1rem;
  }
`;

const RightPanel = styled.div`
  flex: 2;
  background: ${theme.colors.backgroundDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: -70px;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex: 1;
    padding: 0;
    margin-top: 0;
    min-height: 50vh;
  }
`;

const EventText = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.textLight};
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const SubText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${theme.colors.textLight};
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  border-right: 2px solid ${theme.colors.textLight};
  animation: ${blinkCaret} 0.75s step-end infinite;

  &::after {
    content: "LLM"; /* Initial content */
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: ${typeWriter} 10s infinite; /* 10s to cycle through all words */
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LogoText = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  color: ${theme.colors.textDark};
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

const LogoSubText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${theme.colors.textDark};
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

interface SocialLinkProps {
  href: string;
  target?: string;
  rel?: string;
}

const SocialLink = styled.a<SocialLinkProps>`
  color: ${theme.colors.textLight};
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
    transform: scale(1.1);
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

// === Content Section Styles ===
const ContentContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 4rem 2rem;
  background: ${theme.colors.backgroundContent};
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${theme.colors.textLight};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SectionList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  color: ${theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${theme.colors.primary};
    font-weight: bold;
  }

  strong {
    color: ${theme.colors.primary};
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// === Main Component ===
const Home: React.FC = () => {
  return (
    <PageContainer>
      <Toolbar />
      <HeroSection>
        <LeftPanel>
          <div>
            <EventText>Learn AI Now</EventText>
            <SubText />
          </div>
          <SocialIcons>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              f
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              i
            </SocialLink>
            <SocialLink href="mailto:contact@prompted.com">✉</SocialLink>
          </SocialIcons>
        </LeftPanel>
        <RightPanel>
          <LogoWrapper>
            <LogoText>PROMPTED</LogoText>
            <LogoSubText>Master AI Communication</LogoSubText>
          </LogoWrapper>
        </RightPanel>
      </HeroSection>

      <ContentContainer>
        <Section>
          <SectionTitle>What is Prompted?</SectionTitle>
          <SectionText>
            Prompted is your hands-on learning companion for becoming a better AI communicator. Whether you're writing prompts for ChatGPT, DALL·E, or any other generative model — we've got you covered with structured lessons, live examples, and a growing library of best practices.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>What You'll Learn</SectionTitle>
          <SectionText>
            Our curriculum covers everything from prompt basics to advanced strategies for various AI models:
          </SectionText>
          <SectionList>
            <ListItem>
              <strong>Foundations</strong>: Understand how prompts work, prompt anatomy, and why phrasing matters so much.
            </ListItem>
            <ListItem>
              <strong>Prompt Patterns</strong>: Learn reusable templates like "Few-Shot", "Chain-of-Thought", "Critique then Improve", and more.
            </ListItem>
            <ListItem>
              <strong>Model Behavior</strong>: Dive into how different models interpret prompts, including GPT, Claude, Gemini, and open-source AIs.
            </ListItem>
            <ListItem>
              <strong>Creative Prompts</strong>: Use AI to write stories, generate images, or even build games. Prompted helps you unlock creative uses too.
            </ListItem>
            <ListItem>
              <strong>Live Playground</strong>: Test prompts live with instant feedback and tweaks — learn by doing.
            </ListItem>
            <ListItem>
              <strong>Resources</strong>: Explore tools, cheat sheets, prompt libraries, and community best practices.
            </ListItem>
            <ListItem>
              <strong>Index</strong>: Get a quick, compact overview of everything on Prompted. This page summarizes key concepts in bite-sized sections, perfect for a refresher or quick reference.
            </ListItem>
          </SectionList>
          <SectionText>
            Ready to start talking to AI with confidence? <strong>Prompted</strong> is here to help.
          </SectionText>
        </Section>
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;