'use client';

import { Briefcase, Code, Cpu, Mail, User } from 'lucide-react';
import { AboutSection } from './AboutSection';
import { SkillsSection } from '../skills/_components/SkillsSection';
import { ProjectsSection } from '../projects/_components/ProjectsSection';
import { ExperienceSection } from '../experience/_components/ExperienceSection';
import { ContactSection } from '../contact/_components/ContactSection';

export const DOCUMENT_SECTIONS = [
  {
    id: 'about',
    number: '01',
    title: 'Overview',
    subtitle: 'Bio & Engineering Focus',
    icon: User,
    badge: 'Executive Summary',
    component: AboutSection,
  },
  {
    id: 'skills',
    number: '02',
    title: 'Skills',
    subtitle: 'Competencies & Tech Radar',
    icon: Cpu,
    badge: 'Tech Radar',
    component: SkillsSection,
  },
  {
    id: 'projects',
    number: '03',
    title: 'Projects',
    subtitle: 'Open Source & Core Systems',
    icon: Code,
    badge: 'Selected Works',
    component: ProjectsSection,
  },
  {
    id: 'experience',
    number: '04',
    title: 'Career',
    subtitle: 'Professional History',
    icon: Briefcase,
    badge: 'Timeline',
    component: ExperienceSection,
  },
  {
    id: 'contact',
    number: '05',
    title: 'Contact',
    subtitle: 'Inquiries & Socials',
    icon: Mail,
    badge: 'Get In Touch',
    component: ContactSection,
  },
];

export function FullDocumentView() {
  return (
    <div className="space-y-6 sm:space-y-10 pb-16">
      {/* Render All Document Sheets in Order */}
      <div className="space-y-6 sm:space-y-10">
        {DOCUMENT_SECTIONS.map((sec) => {
          const SectionComponent = sec.component;
          return (
            <article
              key={sec.id}
              id={sec.id}
              className="relative bg-white dark:bg-[#121215] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden scroll-mt-24 sm:scroll-mt-28"
            >
              {/* Paper Sheet Top Banner */}
              <div className="bg-zinc-50/90 dark:bg-[#18181c]/90 border-b border-zinc-200/80 dark:border-[#27272a]/80 px-3.5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-md bg-zinc-200/80 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-[10px] sm:text-[11px] shrink-0">
                    <span>SHEET {sec.number} / {DOCUMENT_SECTIONS.length.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px] sm:text-[11px] truncate">
                    {sec.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <span className="hidden sm:inline text-[11px] text-zinc-400 dark:text-zinc-500">
                    Section: <code className="px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">#{sec.id}</code>
                  </span>
                  <div className="w-3.5 sm:w-4 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-xs opacity-70" title="Sheet Marker" />
                </div>
              </div>

              {/* Section Body */}
              <div className="p-3.5 sm:p-6 lg:p-10">
                <SectionComponent />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
