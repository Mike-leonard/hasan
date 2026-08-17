import { ProjectsSection } from './_components/ProjectsSection';

export const metadata = {
  title: 'Featured Projects & Creator Tools',
  description:
    'Explore production web applications, native Android mobile apps, and open-source software built by Md Mahmudul Hasan using Next.js, Java, and PostgreSQL.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
