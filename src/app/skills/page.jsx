import { SkillsSection } from './_components/SkillsSection';

export const metadata = {
  title: 'Skills & Tech Radar',
  description:
    'Core technical competencies and frameworks including React, Next.js, Node.js, native Android SDK (Java), PostgreSQL query optimization, MongoDB, SQLite, and QA tooling.',
  alternates: {
    canonical: '/skills',
  },
};

export default function SkillsPage() {
  return <SkillsSection />;
}
