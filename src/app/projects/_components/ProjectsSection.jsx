'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  ExternalLink,
  FolderGit2,
  GitFork,
  Github,
  Lock,
  Star,
  Terminal,
  X
} from 'lucide-react';
import { PROJECTS } from '../../../data/portfolioData';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCodeProject, setSelectedCodeProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-apps', label: 'Web Applications' },
    { id: 'mobile-apps', label: 'Mobile Apps' },
    { id: 'open-source', label: 'Open Source' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    if (Array.isArray(p.category)) return p.category.includes(activeCategory);
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="scroll-mt-24 py-3 sm:py-6">
      {/* Bento Header */}
      <div className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div>
            <span className="text-zinc-400 dark:text-[#71717a] text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold block mb-1">
              Open Source & Architecture
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Projects & Creator Tools
            </h2>
          </div>

          {/* Category Tabs with Animated Spring Pill Indicator */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none bg-zinc-100 dark:bg-[#09090b] p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-zinc-200 dark:border-[#27272a] max-w-full touch-pan-x">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  id={`btn-project-cat-${cat.id}`}
                  className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-zinc-900 dark:text-white font-semibold'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-[#a1a1aa] dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="project-tab-active"
                      className="absolute inset-0 bg-white dark:bg-[#27272a] rounded-lg sm:rounded-xl shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-500 dark:text-[#a1a1aa] max-w-2xl leading-relaxed">
          Libraries, design systems, and developer tooling built with zero compromise on types, performance, or accessibility.
        </p>
      </div>

      {/* Animated Project Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -12 }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
                layout: { type: 'spring', damping: 28, stiffness: 350 }
              }}
              className="group relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* GitHub Stars & External Links */}
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 self-start">
                    {project.isPrivate && (
                      <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-[#27272a] px-2 sm:px-2.5 py-1 rounded-lg sm:rounded-xl border border-zinc-200 dark:border-zinc-700" title="Private Repository">
                        <Lock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-zinc-400" />
                        <span>Private</span>
                      </div>
                    )}

                    {project.stars && !project.isPrivate && (
                      <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono text-zinc-600 dark:text-[#a1a1aa] bg-zinc-100 dark:bg-[#27272a] px-2 sm:px-2.5 py-1 rounded-lg sm:rounded-xl border border-zinc-200 dark:border-zinc-700">
                        <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-500 fill-amber-500" />
                        <span>{project.stars.toLocaleString()}</span>
                      </div>
                    )}

                    {project.githubUrl && !project.isPrivate && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-zinc-500 hover:text-zinc-900 dark:text-[#a1a1aa] dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                      </a>
                    )}

                    {project.docsUrl && (
                      <a
                        href={project.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-zinc-500 hover:text-zinc-900 dark:text-[#a1a1aa] dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 transition-colors"
                        title="Documentation / Live Site"
                      >
                        <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a1a1aa] leading-relaxed my-2 sm:my-3">
                  {project.description}
                </p>
              </div>

              {/* Tags & Code Snippet Button */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-100 dark:border-[#27272a] flex flex-wrap items-center justify-between gap-2 sm:gap-3">
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono rounded-lg sm:rounded-xl bg-zinc-100 dark:bg-[#27272a] text-zinc-600 dark:text-[#a1a1aa]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {project.codeSnippet && (
                  <button
                    onClick={() => setSelectedCodeProject(project)}
                    id={`btn-view-code-${project.id}`}
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline font-medium cursor-pointer"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Code Snippet</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Code Snippet Modal */}
      <AnimatePresence>
        {selectedCodeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs"
            onClick={() => setSelectedCodeProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-white font-mono text-xs"
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm truncate">{selectedCodeProject.title} Example</span>
                </div>
                <button
                  onClick={() => setSelectedCodeProject(null)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-zinc-400 mb-3 sm:mb-4 font-sans text-xs leading-relaxed">
                {selectedCodeProject.longDescription || selectedCodeProject.description}
              </p>

              <pre className="p-3 sm:p-4 bg-zinc-950 rounded-xl overflow-x-auto text-emerald-300 border border-zinc-800/80 leading-relaxed text-[11px] sm:text-xs">
                <code>{selectedCodeProject.codeSnippet}</code>
              </pre>

              <div className="mt-4 sm:mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedCodeProject(null)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-sans font-medium transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
