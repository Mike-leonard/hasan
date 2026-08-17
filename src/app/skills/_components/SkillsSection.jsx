'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Code2,
  Database,
  Layers,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Zap
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../../../data/portfolioData';

const CATEGORY_ICONS = {
  languages: Code2,
  frontend: Layers,
  backend: Server,
  databases: Database,
  mobile: Smartphone,
  'qa-tools': ShieldCheck,
};

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-2 sm:py-4 space-y-5 sm:space-y-6">
      {/* Bento Header */}
      <div className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] sm:text-xs font-mono font-semibold mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Engineering Competencies</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Technical Skills Radar
            </h1>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a1a1aa] mt-1 leading-relaxed max-w-2xl">
              Comprehensive breakdown of languages, frameworks, native mobile SDKs, databases, and quality assurance tooling.
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
            <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              6 Core Disciplines
            </span>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
              4+ Years Experience
            </span>
          </div>
        </div>
      </div>

      {/* 6 Category Skill Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {SKILL_CATEGORIES.map((cat) => {
          const Icon = CATEGORY_ICONS[cat.id] || Terminal;
          return (
            <div
              key={cat.id}
              className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md shrink-0">
                    {cat.badge}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-xl bg-zinc-100 dark:bg-[#27272a] text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-800 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-[#27272a] flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                <span>Category ID: #{cat.id}</span>
                <span className="text-emerald-500 font-bold">Verified &bull; Production</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Database & Performance Metric Highlight Card */}
      <div className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
              PostgreSQL Optimization & Latency Reduction
            </h4>
            <p className="text-xs text-zinc-600 dark:text-[#a1a1aa] mt-0.5 leading-relaxed">
              Optimized PostgreSQL query execution plans, index tuning, and schema architecture to slash production query response latency by 35%.
            </p>
          </div>
        </div>

        <Link
          href="/projects"
          className="px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-auto"
        >
          <span>View Related Projects</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
        </Link>
      </div>
    </section>
  );
}
