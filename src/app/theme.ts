// src/theme.ts
interface ThemeColors {
    backgroundLight: string;
    backgroundDark: string;
    backgroundContent: string;
    primary: string;
    textLight: string;
    textDark: string;
  }
  
  interface Theme {
    colors: ThemeColors;
  }
  
  export const theme: Theme = {
    colors: {
      backgroundLight: "#F7F4E9",
      backgroundDark: "#2A2A2A",
      backgroundContent: "#E8E2D1",
      primary: "#1C2526",
      textLight: "#333333",
      textDark: "#FFFFFF",
    },
  };