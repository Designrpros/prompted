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

const ExampleCard = styled.div`
  margin-bottom: 2rem;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  padding: 1rem;
  background: var(--color-background-content);

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding: 0.8rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 1rem;
    padding: 0.6rem;
  }
`;

const PromptText = styled.p`
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.5;
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const OutputText = styled.pre`
  font-size: 0.9rem;
  color: var(--color-text-dark);
  background: var(--color-primary);
  padding: 1rem;
  border-radius: 4px;
  white-space: pre-wrap;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
    padding: 0.6rem;
  }
`;

const Examples: React.FC = () => {
  return (
    <PageContainer>
      <Toolbar />
      <SubpageTitle>Examples</SubpageTitle>
      <IntroText>
        See prompt engineering in action with real-world examples and their outputs.
      </IntroText>
      <ExampleCard>
        <PromptText>
          <strong>Prompt:</strong> "Write a 100-word sci-fi story about Mars."
        </PromptText>
        <OutputText>
          The crimson dust of Mars swirled around the colony as Aeva stared at the horizon. Her oxygen gauge beeped—low again. The terraformers had failed, leaving the settlers with dwindling supplies. A signal pulsed from the abandoned rover: alien tech, buried deep. Aeva ventured out, her suit crackling in the thin air. Beneath the sand, she found a glowing orb, whispering in an unknown tongue. It promised breathable air, a new dawn. She activated it, and the sky shimmered—oxygen surged. Mars awoke, but so did something else, watching from the shadows.
        </OutputText>
      </ExampleCard>
      <ExampleCard>
        <PromptText>
          <strong>Prompt:</strong> "List 3 benefits of renewable energy in bullet points."
        </PromptText>
        <OutputText>
          - Reduces greenhouse gas emissions, combating climate change.
          - Decreases reliance on finite fossil fuels, enhancing energy security.
          - Creates jobs in sustainable industries, boosting economies.
        </OutputText>
      </ExampleCard>
    </PageContainer>
  );
};

export default Examples;
