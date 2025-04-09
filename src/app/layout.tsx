"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Toolbar from "../components/Toolbar";
import Chatbot from "../components/ChatBot";
import { ThemeProvider } from "styled-components";

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

// Define fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// RootLayout component with TypeScript typing
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
          <Toolbar />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;