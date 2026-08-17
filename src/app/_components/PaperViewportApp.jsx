'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  FileText,
  Layers,
  Sparkles,
  Maximize2,
  Minimize2,
  RotateCw,
  Mail,
  User,
  Code,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';
import { AboutSection } from './AboutSection';
import { SkillsSection } from '../skills/_components/SkillsSection';
import { ProjectsSection } from '../projects/_components/ProjectsSection';
import { ExperienceSection } from '../experience/_components/ExperienceSection';
import { ContactSection } from '../contact/_components/ContactSection';
import { useTheme } from '../../hooks/useTheme';

const SHEETS = [
  {
    id: 'about',
    alias: 'overview',
    number: '01',
    title: 'Overview',
    subtitle: 'Bio & Engineering Focus',
    icon: User,
    badge: 'Executive Summary',
  },
  {
    id: 'skills',
    alias: 'skills',
    number: '02',
    title: 'Skills',
    subtitle: 'Competencies & Tech Radar',
    icon: Cpu,
    badge: 'Tech Radar',
  },
  {
    id: 'projects',
    alias: 'projects',
    number: '03',
    title: 'Projects',
    subtitle: 'Open Source & Core Systems',
    icon: Code,
    badge: 'Selected Works',
  },
  {
    id: 'experience',
    alias: 'career',
    number: '04',
    title: 'Career',
    subtitle: 'Professional History',
    icon: Briefcase,
    badge: 'Timeline',
  },
  {
    id: 'contact',
    alias: 'contact',
    number: '05',
    title: 'Contact',
    subtitle: 'Inquiries & Socials',
    icon: Mail,
    badge: 'Get In Touch',
  },
];

// Motion variants for authentic physical paper swapping
const paperVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 160 : -160,
    y: direction > 0 ? 40 : -40,
    rotateZ: direction > 0 ? 8 : -8,
    scale: 0.92,
    opacity: 0,
    filter: 'blur(4px)',
  }),
  center: {
    zIndex: 10,
    x: 0,
    y: 0,
    rotateZ: 0,
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 26,
      mass: 0.85,
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 180 : -180,
    y: direction < 0 ? 50 : -50,
    rotateZ: direction < 0 ? -10 : 10,
    scale: 0.9,
    opacity: 0,
    filter: 'blur(6px)',
    transition: {
      duration: 0.32,
      ease: [0.32, 0.72, 0, 1],
    },
  }),
};

export function PaperViewportApp() {
  const [activeSheetIndex, setActiveSheetIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [viewMode, setViewMode] = useState('paper'); // 'paper' or 'scroll'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const currentSheet = SHEETS[activeSheetIndex];

  const goToSheet = useCallback(
    (targetIndex) => {
      if (targetIndex === activeSheetIndex) return;
      setDirection(targetIndex > activeSheetIndex ? 1 : -1);
      setActiveSheetIndex(targetIndex);
    },
    [activeSheetIndex]
  );

  const nextSheet = useCallback(() => {
    if (activeSheetIndex < SHEETS.length - 1) {
      setDirection(1);
      setActiveSheetIndex((prev) => prev + 1);
    } else {
      setDirection(1);
      setActiveSheetIndex(0); // Loop back
    }
  }, [activeSheetIndex]);

  const prevSheet = useCallback(() => {
    if (activeSheetIndex > 0) {
      setDirection(-1);
      setActiveSheetIndex((prev) => prev - 1);
    } else {
      setDirection(-1);
      setActiveSheetIndex(SHEETS.length - 1); // Loop to end
    }
  }, [activeSheetIndex]);

  // Handle section navigation from within child components (e.g. About section buttons)
  const handleNavigateSection = (sectionId) => {
    const idx = SHEETS.findIndex(
      (s) => s.id === sectionId || s.alias === sectionId
    );
    if (idx !== -1) {
      goToSheet(idx);
    }
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode !== 'paper') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        nextSheet();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSheet();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSheet, prevSheet, viewMode]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f5] dark:bg-[#09090b] text-zinc-900 dark:text-[#fafafa] transition-colors duration-300 font-sans selection:bg-emerald-500 selection:text-white pb-12">
      {/* Top Paper Workspace Header */}
      <header className="sticky top-0 z-50 pt-2 pb-2.5 sm:pt-3 sm:pb-3 px-3 sm:px-6 lg:px-8 bg-[#f4f4f5]/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Viewport Status */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={() => goToSheet(0)}
              id="btn-paper-brand"
              className="flex items-center gap-2 sm:gap-2.5 group text-left focus:outline-none min-w-0 cursor-pointer"
            >
              <Logo />
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm tracking-tight text-zinc-900 dark:text-zinc-100 truncate">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-zinc-500 dark:text-zinc-400 truncate">
                  Sheet {currentSheet.number} / {SHEETS.length.toString().padStart(2, '0')} &bull; {currentSheet.title}
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Paper Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-[#18181b]/80 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs text-xs">
            {SHEETS.map((sheet, index) => {
              const isActive = activeSheetIndex === index;
              const Icon = sheet.icon;
              return (
                <button
                  key={sheet.id}
                  onClick={() => goToSheet(index)}
                  id={`paper-tab-${sheet.id}`}
                  className={`relative px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 font-medium cursor-pointer ${
                    isActive
                      ? 'text-zinc-900 dark:text-white font-semibold'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="paper-tab-active"
                      className="absolute inset-0 bg-zinc-100 dark:bg-[#27272a] rounded-xl shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-emerald-500' : ''}`} />
                  <span className="relative z-10">{sheet.title}</span>
                </button>
              );
            })}
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Viewport Mode Switcher */}
            <button
              onClick={() => setViewMode(viewMode === 'paper' ? 'scroll' : 'paper')}
              id="btn-toggle-viewmode"
              className={`px-2.5 sm:px-3.5 py-1.5 rounded-xl border text-[11px] sm:text-xs font-mono transition-all flex items-center gap-1 sm:gap-1.5 shadow-sm cursor-pointer shrink-0 ${
                viewMode === 'scroll'
                  ? 'bg-emerald-500 text-white border-emerald-600 font-bold shadow-emerald-500/20'
                  : 'bg-white dark:bg-[#18181b] hover:bg-zinc-100 dark:hover:bg-zinc-800 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
              }`}
              title={viewMode === 'paper' ? 'Switch to Full Scroll View' : 'Switch to Paper Viewport View'}
            >
              {viewMode === 'paper' ? (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="hidden sm:inline">Full Document</span>
                  <span className="sm:hidden">Doc</span>
                </>
              ) : (
                <>
                  <Layers className="w-3.5 h-3.5 text-white" />
                  <span className="hidden sm:inline">Paper Viewport</span>
                  <span className="sm:hidden">Paper</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyEmail}
              id="btn-paper-copy-email"
              type="button"
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white dark:bg-[#18181b] hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer shrink-0"
              title="Copy Email"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">{copiedEmail ? 'Copied' : 'Email'}</span>
            </button>

            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>

        {/* Mobile Nav Tabs Scrollable */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto pt-2.5 pb-0.5 scrollbar-none text-xs -mx-1 px-1 touch-pan-x">
          {SHEETS.map((sheet, index) => {
            const isActive = activeSheetIndex === index;
            const Icon = sheet.icon;
            return (
              <button
                key={sheet.id}
                onClick={() => goToSheet(index)}
                className={`px-2.5 py-1.5 rounded-xl whitespace-nowrap border text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-[#09090b] dark:border-white shadow-xs font-semibold'
                    : 'bg-white/80 dark:bg-[#18181b]/80 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400 dark:text-emerald-600' : ''}`} />
                <span>{sheet.title}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Viewport Container */}
      {viewMode === 'paper' ? (
        <main className="max-w-6xl mx-auto px-2.5 sm:px-6 pt-4 sm:pt-8 min-h-[calc(100vh-140px)] flex flex-col justify-between">
          {/* Physical Paper Stack Container */}
          <div className="relative w-full my-auto">
            {/* Backing Paper Layer 2 (Bottom paper shadow effect) */}
            <div className="absolute inset-0 bg-zinc-200/70 dark:bg-zinc-900/60 border border-zinc-300/40 dark:border-zinc-800/40 rounded-2xl sm:rounded-3xl translate-x-1 sm:translate-x-3 translate-y-2 sm:translate-y-4 rotate-[0.8deg] sm:rotate-[1.8deg] shadow-xs pointer-events-none transition-transform duration-300" />

            {/* Backing Paper Layer 1 (Middle paper shadow effect) */}
            <div className="absolute inset-0 bg-zinc-100/90 dark:bg-[#141417] border border-zinc-300/60 dark:border-zinc-800/60 rounded-2xl sm:rounded-3xl translate-x-0.5 sm:translate-x-1.5 translate-y-1 sm:translate-y-2 rotate-[-0.6deg] sm:rotate-[-1.2deg] shadow-sm pointer-events-none transition-transform duration-300" />

            {/* Foreground Paper Sheet Card */}
            <div className="relative z-10 bg-white dark:bg-[#121215] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden min-h-[auto] md:min-h-[620px] flex flex-col">
              {/* Paper Sheet Top Bar Decorator */}
              <div className="bg-zinc-50/90 dark:bg-[#18181c]/90 border-b border-zinc-200/80 dark:border-[#27272a]/80 px-3.5 py-2.5 sm:px-6 sm:py-3.5 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 font-semibold text-[10px] sm:text-[11px] shrink-0">
                    <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500" />
                    <span>SHEET {currentSheet.number} / {SHEETS.length.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="hidden sm:inline-block font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[11px] truncate">
                    {currentSheet.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <span className="hidden md:inline text-[11px] text-zinc-400 dark:text-zinc-500">
                    Press <kbd className="px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-300 font-sans text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-300 font-sans text-[10px]">→</kbd> to swap sheets
                  </span>

                  {/* Paper Corner Staple Visual */}
                  <div className="w-4 sm:w-5 h-2 sm:h-2.5 bg-zinc-300 dark:bg-zinc-700 rounded-xs shadow-inner opacity-70" title="Paper Staple" />
                </div>
              </div>

              {/* Animated Paper Sheet Content Area */}
              <div className="p-3.5 sm:p-6 lg:p-10 flex-1 overflow-x-hidden">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentSheet.id}
                    custom={direction}
                    variants={paperVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full"
                  >
                    {currentSheet.id === 'about' && (
                      <AboutSection onNavigate={handleNavigateSection} />
                    )}
                    {currentSheet.id === 'skills' && (
                      <SkillsSection />
                    )}
                    {currentSheet.id === 'projects' && (
                      <ProjectsSection />
                    )}
                    {currentSheet.id === 'experience' && (
                      <ExperienceSection />
                    )}
                    {currentSheet.id === 'contact' && (
                      <ContactSection />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Paper Sheet Footer Controls */}
              <div className="bg-zinc-50/80 dark:bg-[#18181c]/80 border-t border-zinc-200/80 dark:border-[#27272a]/80 px-3.5 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
                <button
                  onClick={prevSheet}
                  id="btn-paper-prev"
                  className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-[#27272a] hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-mono font-medium transition-all flex items-center gap-1.5 sm:gap-2 shadow-2xs group cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Prev<span className="hidden sm:inline"> Sheet</span></span>
                </button>

                <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {currentSheet.number}
                  </span>
                  <span>/</span>
                  <span>{SHEETS.length.toString().padStart(2, '0')}</span>
                </div>

                <button
                  onClick={nextSheet}
                  id="btn-paper-next"
                  className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 text-white dark:text-[#09090b] text-xs font-mono font-medium transition-all flex items-center gap-1.5 sm:gap-2 shadow-xs group cursor-pointer"
                >
                  <span>Next<span className="hidden sm:inline"> Sheet</span></span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 dark:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </main>
      ) : (
        /* Continuous Document Scroll Mode */
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
          <AboutSection onNavigate={handleNavigateSection} />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      )}
    </div>
  );
}
