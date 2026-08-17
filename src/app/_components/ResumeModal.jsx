'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ExternalLink, FileText, Printer, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export function ResumeModal({ isOpen, onClose }) {
  const iframeRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const resumeUrl = `${basePath}${PERSONAL_INFO.resumeUrl || '/resume.pdf'}`;

  const handlePrint = () => {
    if (iframeRef.current) {
      try {
        iframeRef.current.contentWindow.print();
      } catch {
        window.open(resumeUrl, '_blank');
      }
    } else {
      window.open(resumeUrl, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-zinc-200 dark:border-[#27272a] bg-zinc-50/90 dark:bg-[#121215]/90 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white truncate">
                    Md Mahmudul Hasan — Curriculum Vitae
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                    <span>PDF Document</span>
                    <span>&bull;</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Ready to View</span>
                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Print Button */}
                <button
                  onClick={handlePrint}
                  id="btn-modal-print-resume"
                  type="button"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium transition-colors cursor-pointer"
                  title="Print Resume"
                >
                  <Printer className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                  <span>Print</span>
                </button>

                {/* Open in New Tab */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-modal-open-resume-tab"
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium transition-colors"
                  title="Open in New Tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="hidden sm:inline">Open</span>
                </a>

                {/* Download Button */}
                <a
                  href={resumeUrl}
                  download="Md_Mahmudul_Hasan_CV.pdf"
                  id="btn-modal-download-resume"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-emerald-600 dark:bg-white dark:hover:bg-emerald-400 text-white dark:text-[#09090b] dark:hover:text-black text-xs font-mono font-bold transition-colors shadow-2xs group"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  id="btn-modal-close-resume"
                  type="button"
                  className="p-1.5 sm:p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF iframe */}
            <div className="flex-1 w-full h-full bg-zinc-100 dark:bg-[#09090b] relative overflow-hidden">
              <iframe
                ref={iframeRef}
                src={`${resumeUrl}#view=FitH&toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title="Md Mahmudul Hasan CV Preview"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
