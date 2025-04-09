"use client";

import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Toolbar from "../../components/Toolbar";
import Sidebar from "./Sidebar";

// === Theme ===
const theme = {
  colors: {
    backgroundLight: "#F7F4E9",
    backgroundDark: "#2A2A2A",
    backgroundContent: "#E8E2D1",
    primary: "#1C2526",
    textLight: "#333333",
    textDark: "#FFFFFF",
  },
};

// === Global Box Sizing Reset ===
const GlobalStyle = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

// === Styled Components ===
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden;
  background: ${theme.colors.backgroundLight};
  margin: 0;
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 200px; /* Space for the sidebar */
  padding: 5rem 1rem 1rem 1rem; /* Account for fixed toolbar */
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 1200px) {
    padding: 4.5rem 0.9rem 0.9rem 0.9rem;
  }

  @media (max-width: 1024px) {
    padding: 4rem 0.8rem 0.8rem 0.8rem;
  }

  @media (max-width: 768px) {
    margin-left: 0; /* Remove sidebar space on mobile */
    padding: 3rem 0.7rem 0.7rem 0.7rem;
  }

  @media (max-width: 600px) {
    padding: 2.5rem 0.6rem 0.6rem 0.6rem;
  }

  @media (max-width: 400px) {
    padding: 2rem 0.5rem 0.5rem 0.5rem;
  }

  @media (max-width: 320px) {
    padding: 1.5rem 0.4rem 0.4rem 0.4rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  max-width: 100%; /* Prevent overflow */
`;

const Section = styled.section`
  margin-bottom: 0rem;
  scroll-margin-top: 4rem;
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 1200px) {
    scroll-margin-top: 3.8rem;
  }

  @media (max-width: 1024px) {
    scroll-margin-top: 3.6rem;
  }

  @media (max-width: 768px) {
    scroll-margin-top: 3.4rem;
  }

  @media (max-width: 600px) {
    scroll-margin-top: 3.2rem;
  }

  @media (max-width: 400px) {
    scroll-margin-top: 3rem;
  }

  @media (max-width: 320px) {
    scroll-margin-top: 2.8rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  max-width: 100%; /* Prevent overflow */
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${theme.colors.primary};
  padding-bottom: 0.2rem;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 1.45rem;
    margin-bottom: 0.45rem;
    padding-bottom: 0.18rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    padding-bottom: 0.16rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.35rem;
    padding-bottom: 0.14rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    padding-bottom: 0.12rem;
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    padding-bottom: 0.1rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
    margin-bottom: 0.2rem;
    padding-bottom: 0.08rem;
  }
`;

const ToggleIcon = styled.span`
  font-size: 1.2rem;
  color: ${theme.colors.primary};
  flex-shrink: 0;

  @media (max-width: 1200px) {
    font-size: 1.15rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`;

const SectionText = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.textLight};
  line-height: 1.4;
  margin-bottom: 0.75rem;
  max-width: 100%;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 0.74rem;
    line-height: 1.38;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.73rem;
    line-height: 1.36;
    margin-bottom: 0.65rem;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 1.34;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 600px) {
    font-size: 0.68rem;
    line-height: 1.32;
    margin-bottom: 0.55rem;
  }

  @media (max-width: 400px) {
    font-size: 0.66rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 320px) {
    font-size: 0.64rem;
    line-height: 1.28;
    margin-bottom: 0.45rem;
  }
`;

const SectionContent = styled.div<{ isOpen: boolean }>`
  padding: ${(props) => (props.isOpen ? "0.5rem 0" : "0")};
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 1200px) {
    padding: ${(props) => (props.isOpen ? "0.45rem 0" : "0")};
  }

  @media (max-width: 1024px) {
    padding: ${(props) => (props.isOpen ? "0.4rem 0" : "0")};
  }

  @media (max-width: 768px) {
    padding: ${(props) => (props.isOpen ? "0.35rem 0" : "0")};
  }

  @media (max-width: 600px) {
    padding: ${(props) => (props.isOpen ? "0.3rem 0" : "0")};
  }

  @media (max-width: 400px) {
    padding: ${(props) => (props.isOpen ? "0.25rem 0" : "0")};
  }

  @media (max-width: 320px) {
    padding: ${(props) => (props.isOpen ? "0.2rem 0" : "0")};
  }
`;

const SectionList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 1200px) {
    padding-left: 1.4rem;
  }

  @media (max-width: 1024px) {
    padding-left: 1.3rem;
  }

  @media (max-width: 768px) {
    padding-left: 1.2rem;
  }

  @media (max-width: 600px) {
    padding-left: 1.1rem;
  }

  @media (max-width: 400px) {
    padding-left: 1rem;
  }

  @media (max-width: 320px) {
    padding-left: 0.9rem;
  }
`;

const ListItem = styled.li`
  font-size: 0.75rem;
  color: ${theme.colors.textLight};
  line-height: 1.4;
  margin-bottom: 0.5rem;
  max-width: 100%;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 0.74rem;
    line-height: 1.38;
    margin-bottom: 0.45rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.73rem;
    line-height: 1.36;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 1.34;
    margin-bottom: 0.35rem;
  }

  @media (max-width: 600px) {
    font-size: 0.68rem;
    line-height: 1.32;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 400px) {
    font-size: 0.66rem;
    line-height: 1.3;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 320px) {
    font-size: 0.64rem;
    line-height: 1.28;
    margin-bottom: 0.2rem;
  }
`;

const HighlightedText = styled.span`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textDark};
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-weight: 600;
  display: inline;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    padding: 0.08rem 0.25rem;
  }

  @media (max-width: 400px) {
    padding: 0.06rem 0.2rem;
  }
`;

// === Main Component ===
const IndexPage: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    welcome: false,
    "prompt-basics": false,
    "prompt-patterns": false,
    "prompt-resources": false,
    "prompt-playground": false,
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <GlobalStyle>
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Sidebar />
          <MainContent>
            <ContentContainer>
              <Section id="welcome">
                <SectionHeader onClick={() => toggleSection("welcome")}>
                  <SectionTitle>Welcome</SectionTitle>
                  <ToggleIcon>{openSections.welcome ? "−" : "+"}</ToggleIcon>
                </SectionHeader>
                <SectionText>
                  A dense snapshot of Prompted’s core concepts—everything you need in one compact place. Use the sidebar to jump to bite-sized info bits.
                </SectionText>
                <SectionContent isOpen={openSections.welcome}>
                  <SectionList>
                    <ListItem>
                      <HighlightedText>Overview:</HighlightedText> A compact overview of prompt engineering concepts.
                    </ListItem>
                    <ListItem>
                      <HighlightedText>Navigation:</HighlightedText> Jump to topics using the sidebar (desktop only).
                    </ListItem>
                    <ListItem>Explore bite-sized info for quick learning.</ListItem>
                    <ListItem>Toggle sections to see key points in bullet form.</ListItem>
                  </SectionList>
                </SectionContent>
              </Section>

              <Section id="prompt-basics">
                <SectionHeader onClick={() => toggleSection("prompt-basics")}>
                  <SectionTitle>Prompt Basics</SectionTitle>
                  <ToggleIcon>{openSections["prompt-basics"] ? "−" : "+"}</ToggleIcon>
                </SectionHeader>
                <SectionText>
                  Prompt engineering starts with clarity—specific prompts get better results. Add context and define the output format for precision.
                </SectionText>
                <SectionContent isOpen={openSections["prompt-basics"]}>
                  <SectionList>
                    <ListItem>
                      <HighlightedText>Key Concepts:</HighlightedText> Clarity: Be specific (e.g., "Write a 500-word essay"); Context: Add background (e.g., "You are a historian"); Output: Define format (e.g., "in bullet points").
                    </ListItem>
                    <ListItem>
                      <HighlightedText>Open-Ended:</HighlightedText> Encourages creativity (e.g., "Write a story about a futuristic city").
                    </ListItem>
                    <ListItem>Instructional: Directs specific tasks (e.g., "Summarize this article in 100 words").</ListItem>
                    <ListItem>Role-Based: Sets a persona (e.g., "You are a teacher explaining to a 5th grader").</ListItem>
                    <ListItem>Try a role-based prompt: "You are a scientist explaining gravity."</ListItem>
                    <ListItem>Tip: Start simple, then add context for better results.</ListItem>
                  </SectionList>
                </SectionContent>
              </Section>

              <Section id="prompt-patterns">
                <SectionHeader onClick={() => toggleSection("prompt-patterns")}>
                  <SectionTitle>Prompt Patterns</SectionTitle>
                  <ToggleIcon>{openSections["prompt-patterns"] ? "−" : "+"}</ToggleIcon>
                </SectionHeader>
                <SectionText>
                  Patterns like "Few-Shot" and "Chain-of-Thought" guide the AI—use examples to set style, or ask for step-by-step reasoning.
                </SectionText>
                <SectionContent isOpen={openSections["prompt-patterns"]}>
                  <SectionList>
                    <ListItem>
                      <HighlightedText>Pattern Types:</HighlightedText> Few-Shot: Examples (e.g., summaries); Chain-of-Thought: Step-by-step (e.g., math); Role-Play: Persona (e.g., teacher).
                    </ListItem>
                    <ListItem>
                      <HighlightedText>Few-Shot:</HighlightedText> Sets style with examples (e.g., "Here are two summaries: [Example 1], [Example 2].").
                    </ListItem>
                    <ListItem>Chain-of-Thought: Explains reasoning (e.g., "Solve 2x + 3 = 7 step-by-step").</ListItem>
                    <ListItem>Critique then Improve: Refines output (e.g., "Write a story, then improve it").</ListItem>
                    <ListItem>Try a "Few-Shot" prompt with two examples for consistency.</ListItem>
                    <ListItem>Tip: Combine patterns (e.g., "Few-Shot" + "Role-Play") for complex tasks.</ListItem>
                  </SectionList>
                </SectionContent>
              </Section>

              <Section id="prompt-resources">
                <SectionHeader onClick={() => toggleSection("prompt-resources")}>
                  <SectionTitle>Prompt Resources</SectionTitle>
                  <ToggleIcon>{openSections["prompt-resources"] ? "−" : "+"}</ToggleIcon>
                </SectionHeader>
                <SectionText>
                  Resources like libraries, tools, and guides help you craft better prompts—use templates for quick starts or tutorials for deeper learning.
                </SectionText>
                <SectionContent isOpen={openSections["prompt-resources"]}>
                  <SectionList>
                    <ListItem>
                      <HighlightedText>Resource Types:</HighlightedText> Libraries: Prompt collections (e.g., Awesome Prompts); Tools: Prompt optimizers (e.g., PromptPerfect); Guides: Tutorials (e.g., Learn Prompting).
                    </ListItem>
                    <ListItem>
                      <HighlightedText>Templates:</HighlightedText> Pre-written prompts (e.g., "Summarize this: [Text]").
                    </ListItem>
                    <ListItem>Tools: Automate prompt creation (e.g., PromptBase marketplace).</ListItem>
                    <ListItem>Guides: Learn techniques (e.g., "Chain-of-Thought" tutorials).</ListItem>
                    <ListItem>Explore a library like Awesome Prompts for inspiration.</ListItem>
                    <ListItem>Tip: Save your best prompts in a personal library for reuse.</ListItem>
                  </SectionList>
                </SectionContent>
              </Section>

              <Section id="prompt-playground">
                <SectionHeader onClick={() => toggleSection("prompt-playground")}>
                  <SectionTitle>Prompt Playground</SectionTitle>
                  <ToggleIcon>{openSections["prompt-playground"] ? "−" : "+"}</ToggleIcon>
                </SectionHeader>
                <SectionText>
                  The Playground lets you test prompts live—experiment, refine, and see instant results. Start with a simple prompt and iterate.
                </SectionText>
                <SectionContent isOpen={openSections["prompt-playground"]}>
                  <SectionList>
                    <ListItem>
                      <HighlightedText>Playground Basics:</HighlightedText> Test prompts: Real-time feedback; Refine: Adjust based on output; Experiment: Try patterns.
                    </ListItem>
                    <ListItem>
                      <HighlightedText>Start Simple:</HighlightedText> Test a basic prompt (e.g., "Write a poem").
                    </ListItem>
                    <ListItem>Use Patterns: Add "Few-Shot" (e.g., "Here’s an example poem: [Example].").</ListItem>
                    <ListItem>Analyze: Refine if output lacks detail (e.g., add "with vivid imagery").</ListItem>
                    <ListItem>Try a prompt: "Write a haiku about the ocean."</ListItem>
                    <ListItem>Tip: Log your prompts and responses to track what works.</ListItem>
                  </SectionList>
                </SectionContent>
              </Section>
            </ContentContainer>
          </MainContent>
        </PageContainer>
      </ThemeProvider>
    </GlobalStyle>
  );
};

export default IndexPage;