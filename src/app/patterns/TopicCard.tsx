import styled from "styled-components";
import Link from "next/link";
import theme from "@/theme"; // Adjust the import path as necessary
interface TopicCardProps {
  title: string;
  purpose: string;
  useCase: string;
  example: string;
  proTip: string;
  subpage?: string;
  isOpen: boolean;
  onToggle: () => void;
}

// === Styled Components ===
const CardContainer = styled.div`
  background: ${(props) => props.theme.colors.backgroundLight};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 0.6rem;
  }
`;

const CardHeader = styled.div`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.backgroundContent};

  &:hover {
    background: ${(props) => props.theme.colors.backgroundLight};
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

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin: 0;
  overflow-wrap: break-word;

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

const CardToggleIcon = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
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

const CardContent = styled.div<{ isOpen: boolean }>`
  padding: ${(props) => (props.isOpen ? "1rem" : "0")};
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
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

const SubsectionTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  margin: 0.5rem 0;
  overflow-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 1.05rem;
    margin: 0.45rem 0;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin: 0.4rem 0;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin: 0.35rem 0;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin: 0.3rem 0;
  }

  @media (max-width: 400px) {
    font-size: 0.85rem;
    margin: 0.25rem 0;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
    margin: 0.2rem 0;
  }
`;

const SubsectionText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textLight};
  line-height: 1.5;
  margin: 0 0 0.5rem 0;
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

const CardLink = styled(Link)`
  display: block;
  text-align: left; /* Align to the left */
  margin-top: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1200px) {
    font-size: 0.98rem;
    margin-top: 0.9rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    margin-top: 0.85rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    margin-top: 0.7rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
    margin-top: 0.6rem;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
`;

// === TopicCard Component ===
const TopicCard: React.FC<TopicCardProps> = ({
  title,
  purpose,
  useCase,
  example,
  proTip,
  subpage,
  isOpen,
  onToggle,
}) => {
  return (
    <CardContainer>
      <CardHeader onClick={onToggle}>
        <CardTitle>{title}</CardTitle>
        <CardToggleIcon>{isOpen ? "−" : "+"}</CardToggleIcon>
      </CardHeader>
      <CardContent isOpen={isOpen}>
        <SubsectionTitle>Purpose</SubsectionTitle>
        <SubsectionText>{purpose}</SubsectionText>
        <SubsectionTitle>Use Case</SubsectionTitle>
        <SubsectionText>{useCase}</SubsectionText>
        <SubsectionTitle>Example</SubsectionTitle>
        <SubsectionText>{example}</SubsectionText>
        <SubsectionTitle>Pro Tip</SubsectionTitle>
        <SubsectionText>{proTip}</SubsectionText>
        {subpage && <CardLink href={subpage}>Dive Deeper</CardLink>}
      </CardContent>
    </CardContainer>
  );
};

export default TopicCard;