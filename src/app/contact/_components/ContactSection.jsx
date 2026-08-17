'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  Clock,
  Copy,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Twitter
} from 'lucide-react';
import { PERSONAL_INFO } from '../../../data/portfolioData';

const SUBJECT_LABELS = {
  engineering: 'Full-Stack / Software Engineering Project',
  mobile: 'Android Mobile Application Development',
  database: 'Database & PostgreSQL Optimization',
  advisory: 'Technical Advisory & Architecture Consulting',
  general: 'General Inquiry & Connection',
};

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [localTime, setLocalTime] = useState('');
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');
  const [lastGmailUrl, setLastGmailUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'engineering',
    message: '',
  });

  useEffect(() => {
    const updateTime = () => {
      try {
        setLocalTime(
          new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Europe/Rome',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          }).format(new Date())
        );
      } catch {
        setLocalTime('');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email || 'mortuza.7@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const topic = SUBJECT_LABELS[formData.subject] || formData.subject;
    const recipient = PERSONAL_INFO.email || 'mortuza.7@gmail.com';
    const subjectLine = `[Portfolio Inquiry] ${topic} - ${formData.name}`;
    const bodyContent = `Hi Mahmudul,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${topic}\n\nMessage:\n${formData.message}\n\n---\nSent via Md Mahmudul Hasan Portfolio`;

    const mailtoUri = `mailto:${recipient}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    const gmailUri = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;

    setLastMailtoUrl(mailtoUri);
    setLastGmailUrl(gmailUri);
    setFormSubmitted(true);

    // Trigger user mail client
    if (typeof window !== 'undefined') {
      window.location.href = mailtoUri;
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-3 sm:py-6">
      {/* Bento Header */}
      <div className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs mb-4 sm:mb-6">
        <span className="text-zinc-400 dark:text-[#71717a] text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold block mb-1">
          Initiate Connection
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a1a1aa] leading-relaxed mt-1 sm:mt-2">
          Full-Stack Web Engineering &bull; Android Application Development &bull; Engineering Inquiries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Contact Info & Direct Email Tile */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] shadow-xs flex flex-col justify-between">
          <div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a1a1aa] leading-relaxed mb-4 sm:mb-6">
              I am open to full-time engineering roles, high-impact contract opportunities, and technical collaborations across Europe and globally.
            </p>

            {/* Timezone & Availability Chip */}
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Timezone & Status</span>
                </div>
                {localTime && (
                  <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-300 flex items-center gap-1 bg-white dark:bg-[#18181b] px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <Clock className="w-3 h-3 text-emerald-500" />
                    <span>{localTime} CET</span>
                  </span>
                )}
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 font-mono leading-tight">
                Based in <span className="font-semibold text-zinc-800 dark:text-zinc-200">{PERSONAL_INFO.location}</span> (UTC+1) &bull; Rapid response within 24 hours.
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-[#71717a]">
                Direct Communication Channels
              </span>

              <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-[#27272a] gap-2">
                <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs text-zinc-800 dark:text-zinc-200 truncate min-w-0">
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email || 'Direct Email'}</span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  id="btn-copy-email-main"
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg sm:rounded-xl transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 sm:pt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors group"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors group"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-[11px] sm:text-xs font-mono text-zinc-500 dark:text-[#71717a] flex items-center justify-between">
            <span>Location: {PERSONAL_INFO.location}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">&bull; Available</span>
          </div>
        </div>

        {/* Interactive Message Form Tile */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] shadow-xs">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 sm:p-8 text-center space-y-4"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                  Email Prepared & Opened!
                </h3>
                <p className="text-xs text-zinc-600 dark:text-[#a1a1aa] leading-relaxed mt-1 max-w-sm mx-auto">
                  Your message has been formatted to send directly to <strong className="text-zinc-900 dark:text-zinc-100">{PERSONAL_INFO.email}</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
                <a
                  href={lastGmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-[#09090b] font-mono text-xs font-bold transition-all hover:opacity-90 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Gmail Web</span>
                </a>
                <a
                  href={lastMailtoUrl}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#27272a] dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Reopen Mail Client</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'engineering', message: '' });
                }}
                className="text-[11px] font-mono text-zinc-500 hover:text-emerald-500 transition-colors pt-2 underline cursor-pointer"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  id="input-contact-name"
                  className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-[#09090b] border border-zinc-300 dark:border-[#27272a] rounded-xl sm:rounded-2xl text-base sm:text-sm text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  id="input-contact-email"
                  className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-[#09090b] border border-zinc-300 dark:border-[#27272a] rounded-xl sm:rounded-2xl text-base sm:text-sm text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  id="select-contact-subject"
                  className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-[#09090b] border border-zinc-300 dark:border-[#27272a] rounded-xl sm:rounded-2xl text-base sm:text-sm text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-sans"
                >
                  <option value="engineering">Full-Stack / Software Engineering Project</option>
                  <option value="mobile">Android Mobile Application Development</option>
                  <option value="database">Database & PostgreSQL Optimization</option>
                  <option value="advisory">Advisory / Architecture Consulting</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, contract, or question..."
                  id="input-contact-message"
                  className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-[#09090b] border border-zinc-300 dark:border-[#27272a] rounded-xl sm:rounded-2xl text-base sm:text-sm text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                id="btn-send-message"
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-[#09090b] font-mono text-xs font-bold transition-all hover:opacity-90 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer copyright */}
      <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-zinc-200 dark:border-[#27272a] text-center text-[11px] sm:text-xs font-mono text-zinc-500 dark:text-[#71717a]">
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} &bull; Built with Next.js & Tailwind CSS
      </div>
    </section>
  );
}
