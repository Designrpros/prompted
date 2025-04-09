"use client";

import { useState } from "react";
import styled from "styled-components";
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

const SubpageTitle = styled.h1`
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
  overflow-wrap: break-word; /* Prevent text overflow */

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

const Section = styled.div`
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

const SectionHeader = styled.div`
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

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin: 0;
  overflow-wrap: break-word; /* Prevent text overflow */

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
  flex-shrink: 0; /* Prevent shrinking on small screens */

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

const SectionContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  overflow: hidden;
  background: ${theme.colors.backgroundLight};
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 1200px) {
    padding: ${({ isOpen }) => (isOpen ? "0.9rem" : "0")};
  }

  @media (max-width: 1024px) {
    padding: ${({ isOpen }) => (isOpen ? "0.85rem" : "0")};
  }

  @media (max-width: 768px) {
    padding: ${({ isOpen }) => (isOpen ? "0.8rem" : "0")};
  }

  @media (max-width: 600px) {
    padding: ${({ isOpen }) => (isOpen ? "0.7rem" : "0")};
  }

  @media (max-width: 400px) {
    padding: ${({ isOpen }) => (isOpen ? "0.6rem" : "0")};
  }

  @media (max-width: 320px) {
    padding: ${({ isOpen }) => (isOpen ? "0.5rem" : "0")};
  }
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textLight};
  line-height: 1.5;
  margin: 0 0 0.5rem 0;
  max-width: 100%; /* Prevent overflow */
  overflow-wrap: break-word; /* Break long words to prevent overflow */

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

const ExpandedText = styled.p`
  margin: 0.5rem 0;
  max-width: 100%; /* Prevent overflow */
  overflow-wrap: break-word; /* Break long words to prevent overflow */

  @media (max-width: 1200px) {
    margin: 0.45rem 0;
  }

  @media (max-width: 1024px) {
    margin: 0.4rem 0;
  }

  @media (max-width: 768px) {
    margin: 0.4rem 0;
  }

  @media (max-width: 600px) {
    margin: 0.35rem 0;
  }

  @media (max-width: 400px) {
    margin: 0.3rem 0;
  }

  @media (max-width: 320px) {
    margin: 0.25rem 0;
  }
`;

const ExpandedList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
  max-width: 100%; /* Prevent overflow */

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
    margin: 0.4rem 0;
  }

  @media (max-width: 600px) {
    padding-left: 1.1rem;
    margin: 0.35rem 0;
  }

  @media (max-width: 400px) {
    padding-left: 1rem;
    margin: 0.3rem 0;
  }

  @media (max-width: 320px) {
    padding-left: 0.9rem;
    margin: 0.25rem 0;
  }
`;

const ExpandedListItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${theme.colors.textLight};
  max-width: 100%; /* Prevent overflow */
  overflow-wrap: break-word; /* Break long words to prevent overflow */

  @media (max-width: 1200px) {
    margin-bottom: 0.45rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 0.4rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.4rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 0.35rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 0.3rem;
  }

  @media (max-width: 320px) {
    margin-bottom: 0.25rem;
  }
`;

const HighlightedText = styled.span`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textDark};
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-weight: 600;
  display: inline; /* Ensure inline behavior */
  overflow-wrap: break-word; /* Break long highlighted text */

  @media (max-width: 768px) {
    padding: 0.08rem 0.25rem;
  }

  @media (max-width: 400px) {
    padding: 0.06rem 0.2rem;
  }
`;

// === Main Component ===
const Basics: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({
    0: true, // First section open by default
  });

  const toggleSection = (sectionIndex: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const sections = [
    {
      title: "What is Prompt Engineering?",
      content: (
        <>
          <SectionText>
            Prompt engineering is the art of designing and crafting inputs (prompts) to effectively communicate with AI models, ensuring they produce the desired outputs.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> Prompt engineering involves creating clear, specific, and context-rich prompts to guide AI models like ChatGPT, DALL·E, or other LLMs to generate accurate and useful responses.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Clarity:</strong> Write prompts that are unambiguous (e.g., "Write a 500-word essay on climate change" instead of "Tell me about climate change").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Context:</strong> Provide background information to improve accuracy (e.g., "You are a historian in the 1800s explaining the Industrial Revolution").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Specificity:</strong> Define the output format or style (e.g., "List 5 benefits of renewable energy in bullet points").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Iteration:</strong> Refine prompts based on AI responses to improve results (e.g., if the output is too vague, add more details to the prompt).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Effective prompt engineering is crucial for maximizing the utility of AI models, ensuring they deliver precise, relevant, and high-quality outputs for your tasks.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Types of Prompts",
      content: (
        <>
          <SectionText>
            Different types of prompts serve distinct purposes—open-ended prompts encourage creativity, instructional prompts demand precision, and role-based prompts set context.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Prompt Type 1: Open-Ended</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Encourages creative or exploratory responses (e.g., "Write a story about a futuristic city").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Case:</strong> Ideal for brainstorming or creative tasks (e.g., generating ideas for a sci-fi novel).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Prompt Type 2: Instructional</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Directs the AI to perform a specific task (e.g., "Summarize this article in 100 words").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Case:</strong> Great for structured outputs like summaries, lists, or reports (e.g., summarizing a research paper).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Prompt Type 3: Role-Based</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Sets a persona or context for the AI (e.g., "You are a teacher explaining photosynthesis to a 5th grader").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Case:</strong> Perfect for tailoring responses to a specific audience or perspective (e.g., explaining complex topics simply).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Additional Concept: Prompt Modifiers</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Tone:</strong> Specify the tone of the response (e.g., "Answer in a formal tone").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Length:</strong> Define the length of the output (e.g., "Provide a 50-word summary").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Format:</strong> Request a specific format (e.g., "Answer in bullet points").
            </ExpandedListItem>
          </ExpandedList>
        </>
      ),
    },
    {
      title: "Understanding Prompt Structure",
      content: (
        <>
          <SectionText>
            A well-structured prompt includes a clear instruction, context, and desired output format—ensuring the AI understands your intent.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Concept 1: Instruction</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Definition:</strong> The main action you want the AI to perform (e.g., "Write", "Explain", "List").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Example:</strong> "Write a 200-word blog post about sustainable living."
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Concept 2: Context</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Definition:</strong> Background information to guide the AI (e.g., "You are a sustainability expert").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Example:</strong> "You are a sustainability expert writing for a beginner audience."
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Concept 3: Output Format</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Definition:</strong> The structure of the response (e.g., "in bullet points", "as a table").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Example:</strong> "List 5 tips for sustainable living in bullet points."
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Combine all three: "You are a sustainability expert writing for beginners. Write a 200-word blog post about sustainable living, structured in 3 paragraphs with a clear introduction, body, and conclusion."
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Getting Started with Prompt Engineering",
      content: (
        <>
          <SectionText>
            Begin your prompt engineering journey by crafting simple prompts, testing them with an AI model, and refining based on the output.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Step 1: Define Your Goal:</strong> Decide what you want the AI to do (e.g., "I need a summary of a book").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Step 2: Write a Simple Prompt:</strong> Start with a basic instruction (e.g., "Summarize the book 'To Kill a Mockingbird'").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Step 3: Add Context:</strong> Provide background to improve accuracy (e.g., "You are a literature professor summarizing 'To Kill a Mockingbird' for students").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Step 4: Specify the Output:</strong> Define the format and length (e.g., "Summarize the book 'To Kill a Mockingbird' in 100 words, focusing on the main themes").
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Step 5: Test and Refine:</strong> Run the prompt, review the output, and adjust (e.g., if the summary is too long, add "in 50 words").
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Start with: "Summarize 'To Kill a Mockingbird'." If the output is too vague, refine to: "You are a literature professor. Summarize 'To Kill a Mockingbird' in 100 words, focusing on the themes of justice and morality."
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If the AI misinterprets your prompt, add more context or clarify the instruction (e.g., "Explain the plot" instead of "Tell me about").
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Use iterative prompting—start simple, then add details based on the AI’s response to improve accuracy.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <GlobalStyle>
      <PageContainer>
        <Toolbar />
        <SubpageTitle>Basics</SubpageTitle>
        <IntroText>
          Dive into the fundamentals of AI prompt engineering with this guide to prompt types, structure, and best practices. Learn how to craft effective prompts to get the best results from AI models. Toggle each section to explore the essentials of prompt engineering!
        </IntroText>
        {sections.map((section, index) => (
          <Section key={index}>
            <SectionHeader onClick={() => toggleSection(index)}>
              <SectionTitle>{section.title}</SectionTitle>
              <ToggleIcon>{openSections[index] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionContent isOpen={!!openSections[index]}>
              {section.content}
            </SectionContent>
          </Section>
        ))}
      </PageContainer>
    </GlobalStyle>
  );
};

export default Basics;