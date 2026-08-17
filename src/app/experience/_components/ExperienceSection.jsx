'use client';

import { Briefcase, Building2, Calendar, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../../../data/portfolioData';

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-3 sm:py-6">
      {/* Bento Header */}
      <div className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] sm:text-xs font-mono font-semibold mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Career Trajectory</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Career & Professional Experience
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              4+ Years Combined
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a1a1aa] leading-relaxed max-w-2xl mt-1">
          Full-stack engineering, native Android mobile applications, PostgreSQL optimization, and high-standard software quality assurance.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-10 space-y-6 sm:space-y-8 before:absolute before:left-2 sm:before:left-3.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-emerald-500/40 before:to-zinc-200 dark:before:to-zinc-800">
        {EXPERIENCES.map((exp, idx) => {
          const isLatest = idx === 0;
          return (
            <div key={idx} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[29px] sm:-left-[43px] top-6 flex items-center justify-center">
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 bg-white dark:bg-[#18181b] flex items-center justify-center transition-all ${
                  isLatest
                    ? 'border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                    : 'border-zinc-300 dark:border-zinc-700 group-hover:border-emerald-500'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${isLatest ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400 dark:bg-zinc-600 group-hover:bg-emerald-500'}`} />
                </div>
              </div>

              {/* Experience Card */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base sm:text-xl font-bold text-zinc-900 dark:text-white">
                        {exp.role}
                      </h2>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm sm:text-base">
                        @ {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 mt-1 text-xs text-zinc-500 dark:text-[#a1a1aa] font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shrink-0 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Type & Domain Tags */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 my-3">
                  {exp.roleType && (
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-zinc-100 dark:bg-[#27272a] text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-800">
                      {exp.roleType}
                    </span>
                  )}
                  {exp.workplaceType && (
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-[#1f1f23] border border-zinc-200/60 dark:border-zinc-800/80">
                      {exp.workplaceType}
                    </span>
                  )}
                  {exp.domain && (
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      {exp.domain}
                    </span>
                  )}
                </div>

                {/* Description Bullets */}
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-[#a1a1aa] leading-relaxed">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5 sm:mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Skills Badges */}
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-zinc-100 dark:border-[#27272a] flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-zinc-100 dark:bg-[#27272a] text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

