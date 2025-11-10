import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// Light theme with sans-serif font
const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#4caf50',
    secondary: '#ff9800',
  },
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

// Dark theme with monospace font for distinct difference
const darkTheme = {
  colors: {
    background: '#121212',
    text: '#ffffff',
    primary: '#90caf9',
    secondary: '#f48fb1',
  },
  fontFamily: "'Courier New', Courier, monospace"
};

// Global styles applying theme colors and fonts
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fontFamily};
    margin: 0;
    transition: background-color 0.3s ease, color 0.3s ease, font-family 0.3s ease;
  }
`;

// Themed button styled component
const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
`;

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <h1>Dynamic Theme & Font Switcher</h1>
        <p>This page's background, text color, and font family change when toggling theme.</p>
        <Button onClick={toggleTheme}>
          Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
        </Button>
      </Container>
    </ThemeProvider>
  );
}
