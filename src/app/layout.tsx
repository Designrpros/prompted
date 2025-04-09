// app/layout.tsx
import "./globals.css";
import Toolbar from "../components/Toolbar";
import Chatbot from "../components/ChatBot";

// Metadata for the application (without viewport)
export const metadata = {
  title: "Prompted - Your AI-Powered Learning Hub",
  description: "Explore AI-driven tools, resources, and patterns with Prompted.",
  icons: {
    icon: "/favicon.ico", // Adjust path if needed
  },
};

// Separate viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

// RootLayout component with TypeScript typing
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Toolbar />
        {children}
        <Chatbot />
      </body>
    </html>
  );
};

export default RootLayout;