"use client";

import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Toolbar from "../../components/Toolbar";

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
  padding: 5rem 2rem 2rem 2rem; /* Account for fixed toolbar */

  @media (max-width: 1200px) {
    padding: 4.5rem 1.8rem 1.8rem 1.8rem;
  }

  @media (max-width: 1024px) {
    padding: 4rem 1.5rem 1.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem 1rem 1rem;
  }

  @media (max-width: 600px) {
    padding: 2.5rem 0.8rem 0.8rem 0.8rem;
  }

  @media (max-width: 400px) {
    padding: 2rem 0.5rem 0.5rem 0.5rem;
  }

  @media (max-width: 320px) {
    padding: 1.5rem 0.3rem 0.3rem 0.3rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 1200px) {
    font-size: 3.2rem;
    margin-bottom: 1.9rem;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.textLight};
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 1.15rem;
    max-width: 750px;
    line-height: 1.55;
    margin-bottom: 1.9rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    max-width: 700px;
    line-height: 1.5;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
    line-height: 1.45;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    max-width: 90%;
    line-height: 1.4;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
    line-height: 1.35;
    margin-bottom: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
    line-height: 1.3;
    margin-bottom: 0.8rem;
  }
`;

const CategorySection = styled.div`
  margin-bottom: 2rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 1200px) {
    margin-bottom: 1.8rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.6rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 320px) {
    margin-bottom: 0.8rem;
  }
`;

const CategoryHeader = styled.div`
  background: ${theme.colors.backgroundContent};
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%; /* Prevent overflow */

  &:hover {
    background: ${theme.colors.backgroundLight};
  }

  @media (max-width: 1200px) {
    padding: 0.9rem 0.8rem;
  }

  @media (max-width: 1024px) {
    padding: 0.85rem 0.7rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 0.6rem;
  }

  @media (max-width: 600px) {
    padding: 0.7rem 0.5rem;
  }

  @media (max-width: 400px) {
    padding: 0.6rem 0.4rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem 0.3rem;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin: 0;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 1.7rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`;

const ToggleIcon = styled.span`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  flex-shrink: 0;

  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.35rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const CategoryContent = styled.div<{ isOpen: boolean }>`
  padding: ${(props) => (props.isOpen ? "1rem" : "0")};
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
  background: ${theme.colors.backgroundLight};
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 1200px) {
    padding: ${(props) => (props.isOpen ? "0.9rem" : "0")};
  }

  @media (max-width: 1024px) {
    padding: ${(props) => (props.isOpen ? "0.85rem" : "0")};
  }

  @media (max-width: 768px) {
    padding: ${(props) => (props.isOpen ? "0.8rem" : "0")};
  }

  @media (max-width: 600px) {
    padding: ${(props) => (props.isOpen ? "0.7rem" : "0")};
  }

  @media (max-width: 400px) {
    padding: ${(props) => (props.isOpen ? "0.6rem" : "0")};
  }

  @media (max-width: 320px) {
    padding: ${(props) => (props.isOpen ? "0.5rem" : "0")};
  }
`;

const ResourceCard = styled.div`
  background: ${theme.colors.backgroundLight};
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: 1px solid ${theme.colors.primary};
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 1200px) {
    padding: 0.9rem;
    margin: 0.45rem 0;
  }

  @media (max-width: 1024px) {
    padding: 0.85rem;
    margin: 0.4rem 0;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    margin: 0.35rem 0;
  }

  @media (max-width: 600px) {
    padding: 0.7rem;
    margin: 0.3rem 0;
  }

  @media (max-width: 400px) {
    padding: 0.6rem;
    margin: 0.25rem 0;
  }

  @media (max-width: 320px) {
    padding: 0.5rem;
    margin: 0.2rem 0;
  }
`;

const ResourceTitle = styled.h3`
  font-size: 1.4rem;
  color: ${theme.colors.primary};
  margin: 0 0 0.5rem 0;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 1.35rem;
    margin-bottom: 0.45rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.35rem;
  }

  @media (max-width: 600px) {
    font-size: 1.15rem;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`;

const ResourceLink = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const ResourceDescription = styled.div`
  font-size: 1rem;
  color: ${theme.colors.textLight};
  line-height: 1.5;
  margin: 0;
  max-width: 100%;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 0.98rem;
    line-height: 1.45;
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.3;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    line-height: 1.25;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
    line-height: 1.15;
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

const ResourceText = styled.p`
  margin: 0.5rem 0;
  max-width: 100%;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    margin: 0.45rem 0;
  }

  @media (max-width: 1024px) {
    margin: 0.4rem 0;
  }

  @media (max-width: 768px) {
    margin: 0.35rem 0;
  }

  @media (max-width: 600px) {
    margin: 0.3rem 0;
  }

  @media (max-width: 400px) {
    margin: 0.25rem 0;
  }

  @media (max-width: 320px) {
    margin: 0.2rem 0;
  }
`;

const ResourceList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
  max-width: 100%;

  @media (max-width: 1200px) {
    padding-left: 1.4rem;
    margin: 0.45rem 0;
  }

  @media (max-width: 1024px) {
    padding-left: 1.3rem;
    margin: 0.4rem 0;
  }

  @media (max-width: 768px) {
    padding-left: 1.2rem;
    margin: 0.35rem 0;
  }

  @media (max-width: 600px) {
    padding-left: 1.1rem;
    margin: 0.3rem 0;
  }

  @media (max-width: 400px) {
    padding-left: 1rem;
    margin: 0.25rem 0;
  }

  @media (max-width: 320px) {
    padding-left: 0.9rem;
    margin: 0.2rem 0;
  }
`;

const ResourceListItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${theme.colors.textLight};
  max-width: 100%;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    margin-bottom: 0.45rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 0.4rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.35rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 0.3rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 0.25rem;
  }

  @media (max-width: 320px) {
    margin-bottom: 0.2rem;
  }
`;

const ReferencesSection = styled.div`
  margin-top: 3rem;
  text-align: center;

  @media (max-width: 1200px) {
    margin-top: 2.8rem;
  }

  @media (max-width: 1024px) {
    margin-top: 2.6rem;
  }

  @media (max-width: 768px) {
    margin-top: 2.4rem;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
  }

  @media (max-width: 400px) {
    margin-top: 1.8rem;
  }

  @media (max-width: 320px) {
    margin-top: 1.5rem;
  }
`;

const ReferencesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 1.9rem;
    margin-bottom: 0.9rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 0.85rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 400px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const ReferencesText = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textLight};
  line-height: 1.5;
  margin: 0;
  max-width: 100%;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 0.98rem;
    line-height: 1.45;
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.3;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    line-height: 1.25;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
    line-height: 1.15;
  }
`;

// === Main Component ===
const Resources: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<{ [key: number]: boolean }>({
    0: true, // First category open by default
  });

  const toggleCategory = (categoryIndex: number) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex],
    }));
  };

  const categories = [
    {
      title: "Prompt Libraries",
      resources: [
        {
          title: "Awesome Prompts",
          link: "https://github.com/ai-boost/awesome-prompts",
          description: (
            <>
              <ResourceText>
                A curated collection of prompts for various AI models, including ChatGPT, DALL·E, and more.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Prompt engineers looking for a wide variety of pre-built prompts to inspire their work.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Explore prompts for creative writing (e.g., story generation).</ResourceListItem>
                <ResourceListItem>Find prompts for problem-solving (e.g., math and logic puzzles).</ResourceListItem>
                <ResourceListItem>Use prompts for role-playing scenarios (e.g., "Act as a teacher").</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Select a creative writing prompt like "Write a story about a futuristic city," customize it with a specific tone (e.g., "in a dystopian style"), and test it with your AI model.
              </ResourceText>
            </>
          ),
        },
        {
          title: "PromptHero",
          link: "https://prompthero.com/",
          description: (
            <>
              <ResourceText>
                A platform offering a library of prompts for AI art generation, with a focus on tools like Stable Diffusion and DALL·E.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users interested in generating AI art with detailed prompts.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Access prompts for specific art styles (e.g., "cyberpunk cityscape").</ResourceListItem>
                <ResourceListItem>Learn how to structure prompts for visual outputs (e.g., "highly detailed, 4K").</ResourceListItem>
                <ResourceListItem>Explore community-submitted prompts for inspiration.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use a prompt like "a cyberpunk cityscape, neon lights, highly detailed, 4K" to generate an image with DALL·E, then tweak the prompt by adding "rainy atmosphere" for a different effect.
              </ResourceText>
            </>
          ),
        },
      ],
    },
    {
      title: "Tools",
      resources: [
        {
          title: "PromptBase",
          link: "https://promptbase.com/",
          description: (
            <>
              <ResourceText>
                A marketplace for buying and selling prompts for AI models like ChatGPT, DALL·E, and MidJourney.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users looking to purchase high-quality prompts or monetize their own prompt creations.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Buy prompts for specific tasks (e.g., "generate a business plan").</ResourceListItem>
                <ResourceListItem>Sell your own prompts to earn money (e.g., a custom "Few-Shot" prompt).</ResourceListItem>
                <ResourceListItem>Explore prompts for creative and professional use cases.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Purchase a prompt for generating a business plan, customize it with your industry (e.g., "tech startup"), and use it to create a detailed plan with ChatGPT.
              </ResourceText>
            </>
          ),
        },
        {
          title: "PromptPerfect",
          link: "https://promptperfect.jina.ai/",
          description: (
            <>
              <ResourceText>
                An AI-powered tool to optimize and refine prompts for better performance with language models.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users who want to improve their prompts automatically for better AI responses.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Optimize prompts for clarity and specificity (e.g., refine vague prompts).</ResourceListItem>
                <ResourceListItem>Generate prompts for specific models (e.g., ChatGPT, GPT-4).</ResourceListItem>
                <ResourceListItem>Test and compare prompt variations for better results.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Input a vague prompt like "Write a story," let PromptPerfect refine it to "Write a 500-word fantasy story about a dragon," and test the improved prompt with your AI model.
              </ResourceText>
            </>
          ),
        },
        {
          title: "FlowGPT",
          link: "https://flowgpt.com/",
          description: (
            <>
              <ResourceText>
                A platform for discovering and sharing AI prompts, with a focus on community-driven content.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Prompt engineers seeking community-shared prompts and ideas.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Discover prompts for various tasks (e.g., coding, storytelling).</ResourceListItem>
                <ResourceListItem>Share your own prompts with the community for feedback.</ResourceListItem>
                <ResourceListItem>Explore trending prompts to stay updated on popular use cases.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Find a trending prompt for coding (e.g., "Write a Python script for a calculator"), test it with ChatGPT, and modify it to add new features like a scientific calculator mode.
              </ResourceText>
            </>
          ),
        },
      ],
    },
    {
      title: "Tutorials and Guides",
      resources: [
        {
          title: "Learn Prompting",
          link: "https://learnprompting.org/",
          description: (
            <>
              <ResourceText>
                A comprehensive guide to prompt engineering, covering techniques, patterns, and best practices.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Beginners and intermediate users looking to learn prompt engineering from scratch.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Learn core techniques like "Few-Shot" and "Chain-of-Thought" prompting.</ResourceListItem>
                <ResourceListItem>Explore advanced topics (e.g., prompt chaining, multi-step reasoning).</ResourceListItem>
                <ResourceListItem>Access practical examples for various AI models (e.g., ChatGPT, DALL·E).</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Follow the "Chain-of-Thought" guide to create a prompt like "Solve this math problem step-by-step: 2x + 3 = 7," and use it to teach the AI to explain its reasoning clearly.
              </ResourceText>
            </>
          ),
        },
        {
          title: "Prompt Engineering Guide by DAIR.AI",
          link: "https://github.com/dair-ai/Prompt-Engineering-Guide",
          description: (
            <>
              <ResourceText>
                An open-source guide to prompt engineering, with tutorials, examples, and research insights.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Advanced users and researchers interested in the science of prompt engineering.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Learn about prompt patterns (e.g., "Zero-Shot", "Few-Shot").</ResourceListItem>
                <ResourceListItem>Explore research on prompt optimization (e.g., reducing bias in AI responses).</ResourceListItem>
                <ResourceListItem>Access examples for specific models (e.g., GPT-3, GPT-4).</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use the guide’s "Zero-Shot" example to create a prompt like "Translate this text to Spanish: [Text]," and test it with your AI model to see how well it performs without examples.
              </ResourceText>
            </>
          ),
        },
        {
          title: "Anthropic Prompt Engineering Guide",
          link: "https://docs.anthropic.com/claude/docs/prompt-engineering",
          description: (
            <>
              <ResourceText>
                A guide by Anthropic for prompt engineering with their Claude model, with transferable techniques for other AI models.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users working with Claude or seeking general prompt engineering tips.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Learn how to structure prompts for clarity (e.g., using XML tags).</ResourceListItem>
                <ResourceListItem>Explore techniques for reducing hallucinations (e.g., grounding prompts with facts).</ResourceListItem>
                <ResourceListItem>Apply tips to other models like ChatGPT (e.g., using clear instructions).</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use the guide’s XML tag technique: "<>Write a poem</> <style>haiku</style>," and adapt it for ChatGPT to generate a haiku poem.
              </ResourceText>
            </>
          ),
        },
      ],
    },
    {
      title: "Community Contributions",
      resources: [
        {
          title: "Reddit - r/PromptEngineering",
          link: "https://www.reddit.com/r/PromptEngineering/",
          description: (
            <>
              <ResourceText>
                A Reddit community for sharing prompt engineering tips, tricks, and discussions.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Prompt engineers seeking community insights and real-world examples.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Find user-shared prompts for various tasks (e.g., coding, writing).</ResourceListItem>
                <ResourceListItem>Join discussions on prompt optimization (e.g., reducing AI bias).</ResourceListItem>
                <ResourceListItem>Share your own prompts and get feedback from the community.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Search for a coding prompt like "Write a Python script," test it with ChatGPT, and share your results on the subreddit to get feedback on improving the prompt.
              </ResourceText>
            </>
          ),
        },
        {
          title: "Hacker News - Prompt Engineering Discussions",
          link: "https://news.ycombinator.com/",
          description: (
            <>
              <ResourceText>
                A platform where prompt engineering discussions often surface, with insights from tech professionals.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users interested in cutting-edge prompt engineering trends and ideas.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Search for threads on prompt engineering (e.g., "best prompts for GPT-4").</ResourceListItem>
                <ResourceListItem>Learn from professional insights (e.g., how to handle complex tasks).</ResourceListItem>
                <ResourceListItem>Join discussions to share your own experiences and learn from others.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Find a thread on "best prompts for GPT-4," select a prompt like "Generate a marketing plan," customize it for your business, and test it with your AI model.
              </ResourceText>
            </>
          ),
        },
      ],
    },
    {
      title: "Templates",
      resources: [
        {
          title: "Prompts.Chat",
          link: "https://prompts.chat/",
          description: (
            <>
              <ResourceText>
                A collection of prompt templates for ChatGPT, categorized by use case.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users looking for ready-to-use prompt templates for ChatGPT.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Access templates for creative tasks (e.g., "Write a poem").</ResourceListItem>
                <ResourceListItem>Find templates for professional tasks (e.g., "Draft an email").</ResourceListItem>
                <ResourceListItem>Customize templates to fit your specific needs.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use a template like "Draft an email to a client," customize it with your client’s details, and use it with ChatGPT to generate a professional email.
              </ResourceText>
            </>
          ),
        },
        {
          title: "OpenAI Prompt Examples",
          link: "https://platform.openai.com/examples",
          description: (
            <>
              <ResourceText>
                Official prompt examples provided by OpenAI for various use cases with ChatGPT and other models.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users seeking official, high-quality prompt templates from OpenAI.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Explore examples for conversation (e.g., "Act as a tutor").</ResourceListItem>
                <ResourceListItem>Find examples for content generation (e.g., "Write a blog post").</ResourceListItem>
                <ResourceListItem>Use examples as a starting point for your own prompts.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use the "Act as a tutor" example, modify it to "Act as a math tutor for a 10th grader," and test it with ChatGPT to explain algebra concepts.
              </ResourceText>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <GlobalStyle>
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Toolbar />
          <Title>Resources</Title>
          <IntroText>
            Discover a curated collection of prompt engineering resources to enhance your AI interactions. From prompt libraries and tools to tutorials, community contributions, and templates, these resources will help you master prompt engineering. Toggle each category to explore more!
          </IntroText>
          {categories.map((category, index) => (
            <CategorySection key={index}>
              <CategoryHeader onClick={() => toggleCategory(index)}>
                <CategoryTitle>{category.title}</CategoryTitle>
                <ToggleIcon>{openCategories[index] ? "−" : "+"}</ToggleIcon>
              </CategoryHeader>
              <CategoryContent isOpen={!!openCategories[index]}>
                {category.resources.map((resource, i) => (
                  <ResourceCard key={i}>
                    <ResourceTitle>
                      <ResourceLink href={resource.link} target="_blank" rel="noopener noreferrer">
                        {resource.title}
                      </ResourceLink>
                    </ResourceTitle>
                    <ResourceDescription>{resource.description}</ResourceDescription>
                  </ResourceCard>
                ))}
              </CategoryContent>
            </CategorySection>
          ))}
          <ReferencesSection>
            <ReferencesTitle>References</ReferencesTitle>
            <ReferencesText>
              Some resources on this page were curated from the{" "}
              <ResourceLink href="https://github.com/ai-boost/awesome-prompts" target="_blank" rel="noopener noreferrer">
                Awesome Prompts
              </ResourceLink>{" "}
              repository, the{" "}
              <ResourceLink href="https://learnprompting.org/" target="_blank" rel="noopener noreferrer">
                Learn Prompting
              </ResourceLink>{" "}
              website, and the{" "}
              <ResourceLink href="https://github.com/dair-ai/Prompt-Engineering-Guide" target="_blank" rel="noopener noreferrer">
                Prompt Engineering Guide by DAIR.AI
              </ResourceLink>{" "}
              project.
            </ReferencesText>
          </ReferencesSection>
        </PageContainer>
      </ThemeProvider>
    </GlobalStyle>
  );
};

export default Resources;