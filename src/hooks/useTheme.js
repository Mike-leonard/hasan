'use client';

import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('sd_theme') : null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('sd_theme', theme);
    }
  }, [theme]);

  const toggleTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setTheme(newTheme);
    } else {
      setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    }
  };

  return { theme, setTheme, toggleTheme };
}
