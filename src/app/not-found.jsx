import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        The sheet or section you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
