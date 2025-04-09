"use client";

import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Image from "next/image";
import Toolbar from "../../components/Toolbar";
import TopicCard from "./TopicCard";

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
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  overflow: hidden;
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.8;

  @media (max-width: 1200px) {
    height: 90vh;
  }

  @media (max-width: 1024px) {
    height: 85vh;
  }

  @media (max-width: 768px) {
    object-fit: cover;
    height: 70vh;
  }

  @media (max-width: 600px) {
    height: 60vh;
  }

  @media (max-width: 400px) {
    height: 50vh;
  }

  @media (max-width: 320px) {
    height: 45vh;
  }
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
    padding: 2rem;
    border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${theme.colors.textDark};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.8rem;
  }

  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${theme.colors.textDark};
  margin-top: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  background: rgba(33, 33, 33, 0.7);
  @media (max-width: 1200px) {
    font-size: 1.4rem;
    margin-top: 0.9rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.35rem;
    margin-top: 0.85rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-top: 0.7rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    margin-top: 0.6rem;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 1200px) {
    max-width: 1000px;
    padding: 1.8rem;
  }

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 1.6rem;
  }

  @media (max-width: 768px) {
    max-width: 700px;
    padding: 1.4rem;
  }

  @media (max-width: 600px) {
    max-width: 90%;
    padding: 1.2rem;
  }

  @media (max-width: 400px) {
    max-width: 95%;
    padding: 1rem;
  }

  @media (max-width: 320px) {
    padding: 0.8rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;

  @media (max-width: 1200px) {
    margin-bottom: 2.8rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 2.6rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.4rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 1.8rem;
  }

  @media (max-width: 320px) {
    margin-bottom: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  border-bottom: 2px solid ${theme.colors.primary};
  padding-bottom: 0.5rem;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 2.4rem;
    margin-bottom: 0.9rem;
    padding-bottom: 0.45rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.3rem;
    margin-bottom: 0.85rem;
    padding-bottom: 0.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    padding-bottom: 0.35rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
    margin-bottom: 0.7rem;
    padding-bottom: 0.3rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
    padding-bottom: 0.25rem;
  }

  @media (max-width: 320px) {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.2rem;
  }
`;

const LargeText = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 100%;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
    line-height: 1.75;
    margin-bottom: 1.4rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.15rem;
    line-height: 1.7;
    margin-bottom: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.65;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.95rem;
    line-height: 1.55;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.6rem;
  }
`;

// === Main Component ===
const Patterns: React.FC = () => {
  const [openTopics, setOpenTopics] = useState<{ [key: number]: boolean }>({});

  const toggleTopic = (index: number) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "Prompt Pattern Foundations",
      topics: [
        {
          title: "Prompt Pattern Basics",
          purpose:
            "Prompt patterns are reusable strategies for crafting effective prompts, ensuring consistent and high-quality AI responses.",
          useCase:
            "Use prompt patterns when you need predictable outputs, such as generating summaries, answering questions, or creating content in a specific style.",
          example:
            "Start with a simple 'Few-Shot' pattern: 'Here are two examples of summaries: [Summary 1], [Summary 2]. Summarize this text: [Text].'",
          proTip:
            "Begin with basic patterns and gradually add complexity as you understand how the AI responds to different structures.",
          subpage: "/patterns/basics",
        },
      ],
    },
    {
      title: "Core Prompt Patterns",
      largeText:
        "Core prompt patterns like 'Few-Shot', 'Chain-of-Thought', and 'Role-Play' form the foundation of effective prompt engineering. 'Few-Shot' uses examples to set expectations, 'Chain-of-Thought' encourages step-by-step reasoning, and 'Role-Play' sets a persona for context.",
      topics: [
        {
          title: "Few-Shot Pattern",
          purpose:
            "The 'Few-Shot' pattern provides examples to guide the AI, ensuring it follows a specific format or style.",
          useCase:
            "Ideal for tasks requiring a consistent output format, such as summarizing articles, generating lists, or writing in a specific tone.",
          example:
            "Give two summaries as examples: 'Summary 1: [Example]', 'Summary 2: [Example]'. Then ask: 'Summarize this text in the same style: [Text].'",
          proTip:
            "Use 2-3 examples for best results; too many can overwhelm the AI, while too few may not provide enough guidance.",
          subpage: undefined,
        },
        {
          title: "Chain-of-Thought Pattern",
          purpose:
            "The 'Chain-of-Thought' pattern prompts the AI to explain its reasoning step-by-step, improving transparency and accuracy.",
          useCase:
            "Great for complex tasks like problem-solving, logical reasoning, or tasks requiring detailed explanations, such as math problems or decision-making.",
          example:
            "Prompt the AI: 'Solve this problem and explain each step: 2x + 3 = 7.' The AI will break down the solution: 'First, subtract 3 from both sides...'",
          proTip:
            "Encourage detailed steps by adding 'show all calculations' or 'explain your reasoning' to the prompt for clearer outputs.",
          subpage: undefined,
        },
        {
          title: "Role-Play Pattern",
          purpose:
            "The 'Role-Play' pattern sets a persona for the AI, tailoring its responses to a specific audience or perspective.",
          useCase:
            "Useful for creating audience-specific content, such as explaining concepts to children, professionals, or beginners.",
          example:
            "Set the persona: 'You are a teacher explaining photosynthesis to a 5th grader.' The AI will simplify its language: 'Plants use sunlight to make food...'",
          proTip:
            "Be specific about the persona’s expertise and audience to get the most relevant and appropriately toned responses.",
          subpage: undefined,
        },
      ],
    },
    {
      title: "Advanced Prompt Patterns",
      topics: [
        {
          title: "Critique then Improve",
          purpose:
            "The 'Critique then Improve' pattern asks the AI to evaluate and enhance its own output, leading to better quality responses.",
          useCase:
            "Perfect for iterative refinement, such as improving a draft, refining creative writing, or enhancing a generated idea.",
          example:
            "Prompt the AI: 'Write a short story, then critique it and provide an improved version.' The AI will analyze its story and suggest improvements.",
          proTip:
            "Ask the AI to focus on specific aspects (e.g., 'critique the plot') to get more targeted improvements.",
          subpage: undefined,
        },
        {
          title: "Zero-Shot Pattern",
          purpose:
            "The 'Zero-Shot' pattern asks the AI to perform a task without examples, relying on its pre-trained knowledge.",
          useCase:
            "Useful for straightforward tasks where examples aren’t needed, such as translations, simple definitions, or basic questions.",
          example:
            "Prompt the AI: 'Translate this text to French: [Text].' The AI will perform the task without needing prior examples.",
          proTip:
            "Ensure the task is simple and well-defined, as 'Zero-Shot' may not work well for complex or ambiguous requests.",
          subpage: undefined,
        },
      ],
    },
    {
      title: "Practical Applications",
      largeText:
        "Prompt patterns can be applied to various tasks—creative writing, problem-solving, and more. Combine patterns for complex needs: use 'Few-Shot' with 'Chain-of-Thought' to guide the AI through a multi-step task with examples.",
      topics: [
        {
          title: "Creative Writing",
          purpose:
            "Use prompt patterns to guide the AI in generating creative content that matches your desired style and tone.",
          useCase:
            "Ideal for writing stories, poems, or scripts where consistency in tone, style, or structure is important.",
          example:
            "Use 'Few-Shot' for creative writing: 'Here are two story intros: [Intro 1], [Intro 2]. Write a story intro in the same style.' The AI will match the tone and style.",
          proTip:
            "Combine 'Few-Shot' with 'Role-Play' (e.g., 'You are a novelist') to further refine the AI’s creative output.",
          subpage: undefined,
        },
        {
          title: "Problem-Solving",
          purpose:
            "Apply prompt patterns to solve complex problems by guiding the AI through logical, step-by-step reasoning.",
          useCase:
            "Useful for tasks like solving math problems, logic puzzles, or decision-making scenarios where detailed reasoning is needed.",
          example:
            "Use 'Chain-of-Thought': 'Solve this logic puzzle step-by-step: [Puzzle].' The AI will break down its reasoning: 'First, let’s identify the clues...'",
          proTip:
            "If the AI skips steps, add 'explain each step in detail' to the prompt to ensure a thorough breakdown.",
          subpage: undefined,
        },
      ],
    },
  ];

  return (
    <GlobalStyle>
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Toolbar />
          <HeroContainer>
            <HeroImage
              src="/images/Patterns-logo.png" // Placeholder path; replace with your hero image
              alt="Patterns Hero"
              layout="fill"
              priority
            />
            <HeroText>
              <HeroTitle>Patterns</HeroTitle>
              <HeroSubtitle>Your guide to mastering prompt patterns</HeroSubtitle>
            </HeroText>
          </HeroContainer>

          <ContentContainer>
            {sections.map((section, sectionIndex) => (
              <Section key={sectionIndex}>
                <SectionTitle>{section.title}</SectionTitle>
                {section.largeText && <LargeText>{section.largeText}</LargeText>}
                {section.topics.map((topic, topicIndex) => {
                  const globalIndex = sectionIndex * 100 + topicIndex;
                  return (
                    <TopicCard
                      key={globalIndex}
                      title={topic.title}
                      purpose={topic.purpose}
                      useCase={topic.useCase}
                      example={topic.example}
                      proTip={topic.proTip}
                      subpage={topic.subpage}
                      isOpen={!!openTopics[globalIndex]}
                      onToggle={() => toggleTopic(globalIndex)}
                    />
                  );
                })}
              </Section>
            ))}
          </ContentContainer>
        </PageContainer>
      </ThemeProvider>
    </GlobalStyle>
  );
};

export default Patterns;