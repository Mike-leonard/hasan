'use client';

import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ theme, onToggle }) {
  return (
    <div className="inline-flex items-center gap-1 p-1 bg-zinc-200/80 dark:bg-zinc-800/80 backdrop-blur border border-zinc-300/50 dark:border-zinc-700/50 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-400">
      <button
        onClick={() => onToggle('dark')}
        id="theme-btn-dark"
        type="button"
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
          theme === 'dark'
            ? 'text-zinc-900 dark:text-white font-semibold'
            : 'hover:text-zinc-900 dark:hover:text-white'
        }`}
        title="Dark mode"
      >
        {theme === 'dark' && (
          <motion.div
            layoutId="theme-active"
            className="absolute inset-0 bg-white dark:bg-zinc-700/90 rounded-full shadow-xs"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <Moon className="w-3.5 h-3.5 relative z-10 text-emerald-500 dark:text-emerald-400" />
        <span className="relative z-10">Dark</span>
      </button>

      <button
        onClick={() => onToggle('light')}
        id="theme-btn-light"
        type="button"
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
          theme === 'light'
            ? 'text-zinc-900 dark:text-white font-semibold'
            : 'hover:text-zinc-900 dark:hover:text-white'
        }`}
        title="Light mode"
      >
        {theme === 'light' && (
          <motion.div
            layoutId="theme-active"
            className="absolute inset-0 bg-white dark:bg-zinc-700/90 rounded-full shadow-xs"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <Sun className="w-3.5 h-3.5 relative z-10 text-amber-500" />
        <span className="relative z-10">Light</span>
      </button>
    </div>
  );
}
