// app/layout.tsx
import "./globals.css";
import Navigation from "../components/Navigation";
import StyledComponentsRegistry from "./styled-components-registry";

// Metadata for the application
export const metadata = {
  title: "Prompted 2.0 // Cyber-Swiss Design System",
  description: "High-Tech Manual: Master AI prompting with professional-grade patterns, agents, and workflows.",
  icons: {
    icon: "/favicon.ico",
  },
};

// Viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

// RootLayout component with TypeScript typing
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Cyber-Swiss Typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        style={{
          marginTop: "64px", // Offset for navigation height
          minHeight: "100vh",
          backgroundColor: "#0D0D0D",
        }}
      >
        <StyledComponentsRegistry>
          <Navigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
