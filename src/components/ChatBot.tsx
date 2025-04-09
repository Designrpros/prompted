"use client";

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { CSSProperties } from "react";

// === Styled Components ===
const ChatbotContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatbotButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundDark};
  }
`;

const ChatbotPopover = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 350px;
  height: 450px;
  background: ${({ theme }) => theme.colors.backgroundContent};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  position: absolute;
  bottom: 80px;
  right: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const ChatHistory = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 4px 4px 0 0;
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
`;

const BotMessage = styled.div`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 80%;
  align-self: flex-start;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > p {
    margin: 0;
  }
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
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
`;
const syntaxHighlighterStyle: { [key: string]: CSSProperties } = vscDarkPlus;

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
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
          "HTTP-Referer": "https://prompted-two.vercel.app",
          "X-Title": "Prompted",
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
    <ChatbotContainer isOpen={isOpen}>
      <ChatbotButton onClick={() => setIsOpen(!isOpen)}>
        <Image
          src="/images/brain.png"
          alt="Chatbot Icon"
          width={32}
          height={32}
          style={{ flexShrink: 0 }}
        />
      </ChatbotButton>
      <ChatbotPopover isOpen={isOpen}>
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
                  src="/brain.png"
                  alt="Bot Icon"
                  width={35}
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
                width={35}
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
            placeholder="Ask me anything..."
            disabled={isLoading}
          />
          <SendButton onClick={handleSend} disabled={isLoading}>
            Send
          </SendButton>
        </ChatInputContainer>
      </ChatbotPopover>
    </ChatbotContainer>
  );
};

export default Chatbot;