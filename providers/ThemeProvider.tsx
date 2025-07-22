"use client";

import { ThemeContext } from '@/context/themeContext';
import React, { useContext } from 'react';

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  console.log("Current theme:", theme); // ✅ Log here

  return (
    <div className={theme}>
      {children}
    </div>
  );
};

export default ThemeProvider;
