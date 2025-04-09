"use client";

import { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Toolbar from "../../components/Toolbar";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { CSSProperties } from "react";

// Define the theme object and its TypeScript type
interface Theme {
  colors: {
    backgroundLight: string;
    backgroundDark: string;
    backgroundContent: string;
    primary: string;
    textLight: string;
    textDark: string;
  };
}

const theme: Theme = {
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
  background: ${({ theme }) => theme.colors.backgroundLight};
  margin: 0;
  padding: 5rem 2rem 2rem 2rem;

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
  color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.textLight};
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

const ChatContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.backgroundContent};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 70vh;
  max-height: 70vh;
  overflow: hidden;

  @media (max-width: 1200px) {
    max-width: 750px;
    padding: 0.9rem;
    height: 65vh;
  }

  @media (max-width: 1024px) {
    max-width: 700px;
    padding: 0.85rem;
    height: 60vh;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 0.8rem;
    height: 55vh;
  }

  @media (max-width: 600px) {
    padding: 0.7rem;
    height: 50vh;
  }

  @media (max-width: 400px) {
    padding: 0.6rem;
    height: 45vh;
  }

  @media (max-width: 320px) {
    padding: 0.5rem;
    height: 40vh;
  }
`;

const ChatHistory = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 4px;
  margin-bottom: 1rem;
  max-width: 100%;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    `${theme.colors.primary} ${theme.colors.backgroundLight}`};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundLight};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }

  @media (max-width: 1200px) {
    padding: 0.9rem;
    margin-bottom: 0.9rem;
  }

  @media (max-width: 1024px) {
    padding: 0.85rem;
    margin-bottom: 0.85rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 600px) {
    padding: 0.7rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 400px) {
    padding: 0.6rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const UserMessage = styled.div`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textDark};
  border-radius: 8px;
  max-width: 80%;
  align-self: flex-end;
  overflow-wrap: break-word;

  & > p {
    margin: 0;
  }

  @media (max-width: 1200px) {
    padding: 0.45rem 0.9rem;
    margin: 0.45rem 0;
    max-width: 82%;
  }

  @media (max-width: 1024px) {
    padding: 0.4rem 0.85rem;
    margin: 0.4rem 0;
    max-width: 84%;
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.8rem;
    margin: 0.35rem 0;
    max-width: 86%;
  }

  @media (max-width: 600px) {
    padding: 0.3rem 0.7rem;
    margin: 0.3rem 0;
    max-width: 88%;
  }

  @media (max-width: 400px) {
    padding: 0.25rem 0.6rem;
    margin: 0.25rem 0;
    max-width: 90%;
  }

  @media (max-width: 320px) {
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0;
    max-width: 92%;
  }
`;

const BotMessage = styled.div`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 80%;
  align-self: flex-start;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column; /* Stack icon and text vertically */
  gap: 0.5rem;

  & > p {
    margin: 0;
  }

  @media (max-width: 1200px) {
    margin: 0.45rem 0;
    max-width: 82%;
  }

  @media (max-width: 1024px) {
    margin: 0.4rem 0;
    max-width: 84%;
  }

  @media (max-width: 768px) {
    margin: 0.35rem 0;
    max-width: 86%;
  }

  @media (max-width: 600px) {
    margin: 0.3rem 0;
    max-width: 88%;
  }

  @media (max-width: 400px) {
    margin: 0.25rem 0;
    max-width: 90%;
  }

  @media (max-width: 320px) {
    margin: 0.2rem 0;
    max-width: 92%;
  }
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  max-width: 100%;

  @media (max-width: 1200px) {
    gap: 0.9rem;
    padding: 0.45rem;
  }

  @media (max-width: 1024px) {
    gap: 0.85rem;
    padding: 0.4rem;
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
    padding: 0.35rem;
  }

  @media (max-width: 600px) {
    gap: 0.7rem;
    padding: 0.3rem;
  }

  @media (max-width: 400px) {
    gap: 0.6rem;
    padding: 0.25rem;
  }

  @media (max-width: 320px) {
    gap: 0.5rem;
    padding: 0.2rem;
  }
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textLight};
  outline: none;
  max-width: 100%;
  overflow-wrap: break-word;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px rgba(28, 37, 38, 0.3);
  }

  @media (max-width: 1200px) {
    padding: 0.45rem;
    font-size: 0.98rem;
  }

  @media (max-width: 1024px) {
    padding: 0.4rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 0.35rem;
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    padding: 0.3rem;
    font-size: 0.85rem;
  }

  @media (max-width: 400px) {
    padding: 0.25rem;
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    padding: 0.2rem;
    font-size: 0.75rem;
  }
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textDark};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundDark};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.backgroundDark};
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 1200px) {
    padding: 0.45rem 0.9rem;
    font-size: 0.98rem;
  }

  @media (max-width: 1024px) {
    padding: 0.4rem 0.85rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    padding: 0.3rem 0.7rem;
    font-size: 0.85rem;
  }

  @media (max-width: 400px) {
    padding: 0.25rem 0.6rem;
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    padding: 0.2rem 0.5rem;
    font-size: 0.75rem;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4f;
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0;
  max-width: 100%;
  overflow-wrap: break-word;

  & > p {
    margin: 0;
  }

  @media (max-width: 1200px) {
    font-size: 0.98rem;
    margin: 0.9rem 0;
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    margin: 0.85rem 0;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0.8rem 0;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    margin: 0.7rem 0;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
    margin: 0.6rem 0;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
    margin: 0.5rem 0;
  }
`;

const syntaxHighlighterStyle: { [key: string]: CSSProperties } = vscDarkPlus;

const Playground: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatHistoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
      if (!apiKey) {
        throw new Error("OpenRouter API key is not configured");
      }

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Playground",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-maverick:free",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: input,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      if (!data.choices || !data.choices[0]?.message?.content) {
        throw new Error("Unexpected API response format");
      }

      const aiResponse = data.choices[0].message.content;
      setMessages((prev) => [...prev, { text: aiResponse, isUser: false }]);
    } catch (err: any) {
      setError(`Failed to get a response: ${err.message}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      handleSend();
    }
  };

  return (
    <GlobalStyle>
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Toolbar />
          <Title>Playground</Title>
          <IntroText>
            Welcome to the Prompt Playground! Test your prompts in real-time with LLaMA-4 Maverick via OpenRouter. Enter your prompt below, and see the AI’s response instantly. Experiment, refine, and learn as you go!
          </IntroText>
          <ChatContainer>
            <ChatHistory ref={chatHistoryRef}>
              {messages.map((message, index) =>
                message.isUser ? (
                  <UserMessage key={index}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.text}
                    </ReactMarkdown>
                  </UserMessage>
                ) : (
                  <BotMessage key={index}>
                    <Image
                      src="/images/brain.png"
                      alt="Bot Icon"
                      width={24}
                      height={24}
                      style={{ flexShrink: 0 }}
                    />
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return match ? (
                            <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                            customStyle={{
                              marginTop: "1rem",
                              borderRadius: "4px",
                              padding: "1rem",
                              backgroundColor: "#1f2937",
                              position: "relative",
                              zIndex: 1,
                            }}
                          >
                            {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  </BotMessage>
                )
              )}
              {isLoading && (
                <BotMessage>
                  <Image
                    src="/images/brain.png"
                    alt="Bot Icon"
                    width={24}
                    height={24}
                    style={{ flexShrink: 0 }}
                  />
                  Thinking...
                </BotMessage>
              )}
              {error && (
                <ErrorMessage>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{error}</ReactMarkdown>
                </ErrorMessage>
              )}
            </ChatHistory>
            <ChatInputContainer>
              <ChatInput
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your prompt here (Markdown supported)..."
                disabled={isLoading}
              />
              <SendButton onClick={handleSend} disabled={isLoading}>
                Send
              </SendButton>
            </ChatInputContainer>
          </ChatContainer>
        </PageContainer>
      </ThemeProvider>
    </GlobalStyle>
  );
};

export default Playground;