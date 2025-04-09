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

const FAQSection = styled.div`
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

const FAQHeader = styled.div`
  background: var(--color-background-content);
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;

  &:hover {
    background: var(--color-background-light);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 0.6rem;
  }

  @media (max-width: 400px) {
    padding: 0.6rem 0.4rem;
  }
`;

const FAQQuestion = styled.h2`
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

const FAQAnswer = styled.div<{ $isOpen: boolean }>`
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

const AnswerText = styled.p`
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.5;
  margin: 0 0 0.5rem 0;
  max-width: 100%;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const FAQ: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({
    0: true,
  });

  const toggleSection = (sectionIndex: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const faqs = [
    {
      question: "Why does the AI give vague answers?",
      answer: (
        <AnswerText>
          The AI might give vague answers if your prompt lacks specificity. Try adding details like format, tone, or context (e.g., "Explain quantum physics to a 5-year-old in simple terms" instead of "Explain quantum physics").
        </AnswerText>
      ),
    },
    {
      question: "How do I reduce hallucinations?",
      answer: (
        <AnswerText>
          To reduce AI hallucinations, ground your prompt with factual context or constraints (e.g., "List 3 real historical events from the 1800s" instead of "Tell me about the 1800s").
        </AnswerText>
      ),
    },
    {
      question: "What if the output is too long?",
      answer: (
        <AnswerText>
          Specify a length in your prompt (e.g., "Summarize this in 50 words" instead of "Summarize this"). You can also ask the AI to be concise.
        </AnswerText>
      ),
    },
  ];

  return (
    <PageContainer>
      <Toolbar />
      <SubpageTitle>FAQ & Troubleshooting</SubpageTitle>
      <IntroText>
        Find answers to common prompt engineering questions and solutions to typical issues.
      </IntroText>
      {faqs.map((faq, index) => (
        <FAQSection key={index}>
          <FAQHeader onClick={() => toggleSection(index)}>
            <FAQQuestion>{faq.question}</FAQQuestion>
            <ToggleIcon>{openSections[index] ? "−" : "+"}</ToggleIcon>
          </FAQHeader>
          <FAQAnswer $isOpen={!!openSections[index]}>
            {faq.answer}
          </FAQAnswer>
        </FAQSection>
      ))}
    </PageContainer>
  );
};

export default FAQ;
