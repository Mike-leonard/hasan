'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Coins,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  Mic,
  Terminal,
  Twitter,
  User
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

const NAV_ITEMS = [
  { id: 'about', label: 'Overview' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Career' },
  { id: 'contact', label: 'Contact' },
];

export function HeaderSidebar({
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
}) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header className="sticky top-4 z-40 mb-8 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white/90 dark:bg-[#18181b]/90 border border-zinc-200 dark:border-[#27272a] rounded-2xl md:rounded-3xl p-2.5 sm:p-4 px-3 sm:px-6 backdrop-blur-xl shadow-lg flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Logo / Avatar */}
        <button
          onClick={() => onNavigate('about')}
          id="btn-nav-logo"
          className="flex items-center gap-2 sm:gap-3 text-left group shrink-0 min-w-0 cursor-pointer"
        >
          <Logo size="lg" />
          <div className="min-w-0">
            <div className="font-bold text-xs sm:text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 transition-colors truncate">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono text-zinc-500 dark:text-[#a1a1aa] truncate">
              {PERSONAL_INFO.role}
            </div>
          </div>
        </button>

        {/* Center Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-[#09090b]/60 p-1.5 rounded-2xl border border-zinc-200/60 dark:border-[#27272a]/60 font-medium text-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                id={`nav-link-${item.id}`}
                className={`relative px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'text-zinc-900 dark:text-white font-semibold'
                    : 'text-zinc-500 dark:text-[#a1a1aa] hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="bento-nav-active"
                    className="absolute inset-0 bg-white dark:bg-[#27272a] rounded-xl shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={handleCopyEmail}
            id="btn-header-copy-email"
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-mono transition-colors flex items-center gap-1.5 relative cursor-pointer"
            title="Copy Email"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-500" />
            <span className="hidden lg:inline">{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            {copiedEmail && (
              <span className="lg:hidden absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] bg-emerald-600 text-white rounded font-sans shadow-sm">
                Copied
              </span>
            )}
          </button>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex items-center gap-1 overflow-x-auto py-2 scrollbar-none text-xs -mx-2 px-2 touch-pan-x">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`px-2.5 py-1.5 rounded-xl whitespace-nowrap border text-xs font-medium transition-colors shrink-0 cursor-pointer ${
              activeSection === item.id
                ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-[#09090b] dark:border-white font-semibold'
                : 'bg-white/80 dark:bg-[#18181b]/80 border-zinc-200 dark:border-[#27272a] text-zinc-600 dark:text-[#a1a1aa]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
