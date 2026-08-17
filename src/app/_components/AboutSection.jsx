'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Code2,
  Compass,
  Cpu,
  Database,
  FileText,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export function AboutSection({ onNavigate }) {
  return (
    <section id="about" className="scroll-mt-24 py-2 sm:py-4 space-y-6 sm:space-y-8">
      {/* Top Bento Grid Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
        {/* Hero Card - 58% Width on Desktop (lg:col-span-7) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
          <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-5 dark:opacity-10 pointer-events-none">
            <svg width="130" height="130" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900 dark:text-white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] sm:text-xs font-mono font-medium mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.role}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight sm:tracking-tighter text-zinc-900 dark:text-white leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-4">
              Building polished <br className="hidden sm:inline" />
              digital experiences.
            </h1>

            <p className="text-zinc-600 dark:text-[#a1a1aa] text-xs sm:text-sm md:text-base max-w-md lg:max-w-lg leading-relaxed mt-2 sm:mt-4 font-normal">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-[#27272a] flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link
              href="/projects"
              id="btn-hero-explore-projects"
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-[#09090b] text-xs font-mono font-bold transition-all hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-black flex items-center gap-2 shadow-xs group cursor-pointer"
              title="Explore Featured Projects"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-500 group-hover:scale-110 transition-transform" />
              <span>Explore Projects</span>
            </Link>

            <Link
              href="/contact"
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium transition-colors flex items-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
            </Link>
          </div>
        </div>

        {/* Right Side: Hero Companion Grid - 42% Width on Desktop (lg:col-span-5) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Top: Key Impact Stats (Spans full width of right column, 4-col Grid) */}
          <div className="col-span-1 sm:col-span-2 bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-zinc-400 dark:text-[#71717a] text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">
                Key Impact Stats
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">
                Track Record
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 my-auto">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="py-2.5 px-1 sm:px-1.5 rounded-xl bg-zinc-50/70 dark:bg-[#121215] border border-zinc-200/80 dark:border-[#27272a] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group flex flex-col items-center justify-center text-center"
                >
                  <div className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-white tracking-tight group-hover:text-emerald-500 transition-colors leading-none text-center">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-zinc-600 dark:text-zinc-300 mt-1 leading-tight text-center flex flex-col items-center">
                    <span className="whitespace-nowrap">{stat.line1 || stat.label}</span>
                    {stat.line2 && <span className="whitespace-nowrap">{stat.line2}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle-Left: Social Profile (Square Tile) */}
          <div className="col-span-1 bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <span className="text-zinc-400 dark:text-[#71717a] text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold mb-2">
              Social Profiles
            </span>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 my-auto">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 rounded-xl sm:rounded-2xl flex items-center justify-center aspect-square text-zinc-800 dark:text-white font-bold transition-all hover:scale-105"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 rounded-xl sm:rounded-2xl flex items-center justify-center aspect-square text-blue-600 dark:text-blue-400 font-bold transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 rounded-xl sm:rounded-2xl flex items-center justify-center aspect-square text-emerald-600 dark:text-emerald-400 font-bold transition-all hover:scale-105"
                title="Direct Email / Contact"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 dark:text-zinc-500 pt-2 border-t border-zinc-100 dark:border-[#27272a] truncate">
              GitHub &bull; LinkedIn &bull; Mail
            </div>
          </div>

          {/* Middle-Right: Featured Work */}
          <Link
            href="/projects"
            className="col-span-1 bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer group shadow-xs hover:border-emerald-500/60 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-zinc-400 dark:text-[#71717a] text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">
                Featured Work
              </span>
              <Code2 className="w-4 h-4 text-emerald-500 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="my-1.5 sm:my-2">
              <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                Sphinix Mobile
              </div>
              <div className="text-xs text-zinc-500 dark:text-[#a1a1aa] mt-0.5 truncate">
                Next.js &bull; AI Publishing
              </div>
            </div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium inline-flex items-center gap-1">
              <span>Explore Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Bottom: Availability (Spans full width of right column) */}
          <div className="col-span-1 sm:col-span-2 bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.7)] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white leading-tight">
                  Available for Full-Time & Contract
                </div>
                <div className="text-[11px] font-mono text-zinc-500 dark:text-[#a1a1aa] mt-0.5 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold transition-colors shrink-0"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Engineering Philosophy Cards */}
      <div className="space-y-3">
        <span className="text-zinc-500 dark:text-[#71717a] text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold block">
          Core Engineering Philosophy
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs">
            <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl sm:rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3 sm:mb-4">
              <Cpu className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white mb-1">
              Architecture & Scalability
            </h3>
            <p className="text-xs text-zinc-600 dark:text-[#a1a1aa] leading-relaxed">
              Modular application architecture, clean component hierarchy, robust RESTful APIs, and scalable PostgreSQL database design.
            </p>
          </div>

          <div className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs">
            <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl sm:rounded-2xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-3 sm:mb-4">
              <Layers className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white mb-1">
              Performance & Reliability
            </h3>
            <p className="text-xs text-zinc-600 dark:text-[#a1a1aa] leading-relaxed">
              PostgreSQL query optimization, 35% latency reduction, offline SQLite caching, and Android background service architecture.
            </p>
          </div>

          <div className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs sm:col-span-2 md:col-span-1">
            <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl sm:rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-3 sm:mb-4">
              <Compass className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white mb-1">
              Full-Stack & Mobile Synergy
            </h3>
            <p className="text-xs text-zinc-600 dark:text-[#a1a1aa] leading-relaxed">
              Seamless integration between native Android clients, modern React/Next.js frontends, and reliable Node.js backends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
