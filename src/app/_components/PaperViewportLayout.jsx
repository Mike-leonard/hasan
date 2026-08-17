'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Download,
  FileText,
  Layers,
  Maximize2,
  Mail,
  User,
  Code,
  Briefcase,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';
import { useTheme } from '../../hooks/useTheme';
import { ResumeModal } from './ResumeModal';

import { AboutSection } from './AboutSection';
import { SkillsSection } from '../skills/_components/SkillsSection';
import { ProjectsSection } from '../projects/_components/ProjectsSection';
import { ExperienceSection } from '../experience/_components/ExperienceSection';
import { ContactSection } from '../contact/_components/ContactSection';

export const SHEETS = [
  {
    path: '/',
    id: 'about',
    number: '01',
    title: 'Overview',
    subtitle: 'Bio & Focus',
    icon: User,
    badge: 'Executive Summary',
    component: AboutSection,
  },
  {
    path: '/skills',
    id: 'skills',
    number: '02',
    title: 'Skills',
    subtitle: 'Competencies & Tech Radar',
    icon: Cpu,
    badge: 'Tech Radar',
    component: SkillsSection,
  },
  {
    path: '/projects',
    id: 'projects',
    number: '03',
    title: 'Projects',
    subtitle: 'Open Source & Core Systems',
    icon: Code,
    badge: 'Selected Works',
    component: ProjectsSection,
  },
  {
    path: '/experience',
    id: 'experience',
    number: '04',
    title: 'Career',
    subtitle: 'Professional History',
    icon: Briefcase,
    badge: 'Timeline',
    component: ExperienceSection,
  },
  {
    path: '/contact',
    id: 'contact',
    number: '05',
    title: 'Contact',
    subtitle: 'Inquiries & Socials',
    icon: Mail,
    badge: 'Get In Touch',
    component: ContactSection,
  },
];

// High-performance GPU-accelerated motion variants (zero blur filters for 60/120fps mobile smoothness)
const paperVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    zIndex: 10,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 360,
      damping: 30,
      mass: 0.65,
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.18,
      ease: [0.32, 0.72, 0, 1],
    },
  }),
};

export function PaperViewportLayout({ children, docSlot }) {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const [direction, setDirection] = useState(1);
  const [viewMode, setViewMode] = useState('paper'); // 'paper' or 'scroll'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Normalize pathname: strip trailing slash added by trailingSlash:true in next.config.js
  // e.g. usePathname() returns '/skills/' but SHEETS paths are '/skills'
  const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  // Find index of current route path
  const activeIndex = Math.max(
    0,
    SHEETS.findIndex((sheet) => sheet.path === normalizedPathname)
  );

  const prevIndexRef = useRef(activeIndex);

  useEffect(() => {
    if (activeIndex !== prevIndexRef.current) {
      setDirection(activeIndex > prevIndexRef.current ? 1 : -1);
      prevIndexRef.current = activeIndex;
      if (viewMode === 'scroll') {
        const targetId = SHEETS[activeIndex]?.id;
        if (targetId) {
          setTimeout(() => {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [activeIndex, viewMode]);

  const currentSheet = SHEETS[activeIndex] || SHEETS[0];

  const goToNextSheet = () => {
    const nextIdx = activeIndex < SHEETS.length - 1 ? activeIndex + 1 : 0;
    setDirection(nextIdx > activeIndex ? 1 : -1);
    router.push(SHEETS[nextIdx].path, { scroll: false });
  };

  const goToPrevSheet = () => {
    const prevIdx = activeIndex > 0 ? activeIndex - 1 : SHEETS.length - 1;
    setDirection(prevIdx < activeIndex ? -1 : 1);
    router.push(SHEETS[prevIdx].path, { scroll: false });
  };

  const handleNavClick = (e, sheet) => {
    if (viewMode === 'scroll') {
      const el = document.getElementById(sheet.id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        router.push(sheet.path, { scroll: false });
      }
    }
  };

  // Keyboard navigation & quick shortcuts (1-5, Arrow keys, h/l, j/k)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Avoid triggering when user is typing in form inputs
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target?.tagName)) return;

      if (e.key === '1') {
        router.push('/', { scroll: false });
      } else if (e.key === '2') {
        router.push('/skills', { scroll: false });
      } else if (e.key === '3') {
        router.push('/projects', { scroll: false });
      } else if (e.key === '4') {
        router.push('/experience', { scroll: false });
      } else if (e.key === '5') {
        router.push('/contact', { scroll: false });
      } else if (viewMode === 'paper') {
        if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === 'l' || e.key === 'j') {
          goToNextSheet();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'h' || e.key === 'k') {
          goToPrevSheet();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, viewMode, router]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f5] dark:bg-[#09090b] text-zinc-900 dark:text-[#fafafa] transition-colors duration-300 font-sans selection:bg-emerald-500 selection:text-white pb-12">
      {/* Top Navigation Header */}
      <header className="sticky top-0 z-50 pt-2 pb-2.5 sm:pt-3 sm:pb-3 px-3 sm:px-6 lg:px-8 bg-[#f4f4f5]/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Viewport Status */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
            <Link
              href="/"
              id="btn-paper-brand"
              className="flex items-center gap-2 sm:gap-2.5 group text-left focus:outline-none min-w-0"
            >
              <Logo />
              <div className="min-w-0 flex flex-col justify-center">
                <div className="font-bold text-xs sm:text-sm tracking-tight text-zinc-900 dark:text-zinc-100 whitespace-nowrap sm:truncate">
                  {PERSONAL_INFO.name}
                </div>
                <div className="hidden sm:block text-[10px] sm:text-[11px] font-mono text-zinc-500 dark:text-zinc-400 truncate">
                  {viewMode === 'scroll'
                    ? 'Continuous Document Mode'
                    : `Sheet ${currentSheet.number} / ${SHEETS.length.toString().padStart(2, '0')} • ${currentSheet.title}`}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Route Navigation Tabs with Quick Shortcut Numbers */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-[#18181b]/80 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs text-xs">
            {SHEETS.map((sheet, index) => {
              const isActive = pathname === sheet.path || normalizedPathname === sheet.path;
              const Icon = sheet.icon;
              return (
                <Link
                  key={sheet.id}
                  href={sheet.path}
                  id={`paper-tab-${sheet.id}`}
                  onClick={(e) => handleNavClick(e, sheet)}
                  className={`relative px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 font-medium ${
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
                  <span className="relative z-10 hidden xl:inline text-[9px] font-mono text-zinc-400 dark:text-zinc-500 bg-zinc-200/60 dark:bg-zinc-800/80 px-1 rounded opacity-70">
                    {index + 1}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Actionable Resume Action Button (Opens Inline PDF Preview Modal) */}
            <button
              onClick={() => setIsResumeModalOpen(true)}
              id="btn-paper-header-cv"
              type="button"
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-zinc-900 dark:bg-white hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white dark:text-[#09090b] dark:hover:text-black text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer shrink-0 group"
              title="View & Download Resume (PDF)"
            >
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Viewport Mode Switcher */}
            <button
              onClick={() => setViewMode(viewMode === 'paper' ? 'scroll' : 'paper')}
              id="btn-toggle-viewmode"
              type="button"
              className={`p-1.5 sm:px-3 sm:py-1.5 rounded-xl border text-[11px] sm:text-xs font-mono transition-all flex items-center gap-1 sm:gap-1.5 shadow-sm cursor-pointer shrink-0 ${
                viewMode === 'scroll'
                  ? 'bg-emerald-500 text-white border-emerald-600 font-bold shadow-emerald-500/20'
                  : 'bg-white dark:bg-[#18181b] hover:bg-zinc-100 dark:hover:bg-zinc-800 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
              }`}
              title={viewMode === 'paper' ? 'Switch to Full Document View' : 'Switch to Paper Viewport View'}
            >
              {viewMode === 'paper' ? (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="hidden sm:inline">Full Doc</span>
                </>
              ) : (
                <>
                  <Layers className="w-3.5 h-3.5 text-white" />
                  <span className="hidden sm:inline">Paper</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyEmail}
              id="btn-paper-copy-email"
              type="button"
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-white dark:bg-[#18181b] hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer shrink-0"
              title="Copy Email"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">{copiedEmail ? 'Copied' : 'Email'}</span>
            </button>

            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>

        {/* Mobile Route Navigation Tabs */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto pt-2.5 pb-0.5 scrollbar-none text-xs -mx-1 px-1 touch-pan-x">
          {SHEETS.map((sheet) => {
            const isActive = pathname === sheet.path || normalizedPathname === sheet.path;
            const Icon = sheet.icon;
            return (
              <Link
                key={sheet.id}
                href={sheet.path}
                onClick={(e) => handleNavClick(e, sheet)}
                className={`px-2.5 py-1.5 rounded-xl whitespace-nowrap border text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-[#09090b] dark:border-white shadow-xs font-semibold'
                    : 'bg-white/80 dark:bg-[#18181b]/80 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400 dark:text-emerald-600' : ''}`} />
                <span>{sheet.title}</span>
              </Link>
            );
          })}
        </div>
      </header>

      {/* Main Viewport Workspace */}
      <main className="max-w-6xl mx-auto px-2.5 sm:px-6 pt-4 sm:pt-8 min-h-[calc(100vh-140px)]">
        {viewMode === 'scroll' ? (
          /* Full Document Mode via Next.js Parallel Slot */
          <div className="w-full">
            {docSlot}
          </div>
        ) : (
          /* Physical Paper Stack Container with Ambient Mesh Glow */
          <div className="relative w-full my-auto">
            {/* Ambient Background Mesh Glow */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/15 rounded-3xl blur-2xl opacity-70 dark:opacity-40 pointer-events-none transition-all duration-500" />

            {/* Backing Paper Layer 2 (Bottom shadow) */}
            <div className="absolute inset-0 bg-zinc-200/80 dark:bg-zinc-900/80 border border-zinc-300/40 dark:border-zinc-800/40 rounded-2xl sm:rounded-3xl translate-x-1 sm:translate-x-3 translate-y-2 sm:translate-y-4 rotate-[0.8deg] sm:rotate-[1.8deg] shadow-xs pointer-events-none transition-transform duration-300" />

            {/* Backing Paper Layer 1 (Middle shadow) */}
            <div className="absolute inset-0 bg-zinc-100 dark:bg-[#141417] border border-zinc-300/60 dark:border-zinc-800/60 rounded-2xl sm:rounded-3xl translate-x-0.5 sm:translate-x-1.5 translate-y-1 sm:translate-y-2 rotate-[-0.6deg] sm:rotate-[-1.2deg] shadow-sm pointer-events-none transition-transform duration-300" />

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
                    Route: <code className="px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">{normalizedPathname}</code>
                  </span>

                  {/* Paper Corner Staple Visual */}
                  <div className="w-4 sm:w-5 h-2 sm:h-2.5 bg-zinc-300 dark:bg-zinc-700 rounded-xs shadow-inner opacity-70" title="Paper Staple" />
                </div>
              </div>

              {/* Animated Paper Sheet Content Area (GPU accelerated) */}
              <div className="p-3.5 sm:p-6 lg:p-10 flex-1 overflow-x-hidden">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={normalizedPathname}
                    custom={direction}
                    variants={paperVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full transform-gpu will-change-transform"
                  >
                    {currentSheet?.component ? <currentSheet.component /> : children}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Paper Sheet Footer Controls */}
              <div className="bg-zinc-50/80 dark:bg-[#18181c]/80 border-t border-zinc-200/80 dark:border-[#27272a]/80 px-3.5 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
                <button
                  onClick={goToPrevSheet}
                  id="btn-paper-prev"
                  type="button"
                  className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-[#27272a] hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-mono font-medium transition-all flex items-center gap-1.5 sm:gap-2 shadow-2xs group cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Prev<span className="hidden sm:inline"> Route</span></span>
                </button>

                <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {currentSheet.number}
                  </span>
                  <span>/</span>
                  <span>{SHEETS.length.toString().padStart(2, '0')}</span>
                </div>

                <button
                  onClick={goToNextSheet}
                  id="btn-paper-next"
                  type="button"
                  className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 text-white dark:text-[#09090b] text-xs font-mono font-medium transition-all flex items-center gap-1.5 sm:gap-2 shadow-xs group cursor-pointer"
                >
                  <span>Next<span className="hidden sm:inline"> Route</span></span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 dark:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Inline Resume PDF Previewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
