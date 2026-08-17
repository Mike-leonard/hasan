'use client';

import Image from 'next/image';
import { PERSONAL_INFO } from '../../data/portfolioData';

/**
 * Reusable Logo component.
 * Uses Next.js next/image when an image path (such as '/hsn.jpg') is configured.
 */
export function Logo({ className = '', size = 'md' }) {
  const logo = PERSONAL_INFO.logo || PERSONAL_INFO.initials || 'MH';

  const sizeClasses = {
    sm: 'w-7 h-7 text-xs rounded-lg',
    md: 'w-8 h-8 sm:w-9 sm:h-9 text-xs sm:text-sm rounded-xl',
    lg: 'w-9 h-9 sm:w-10 sm:h-10 text-sm sm:text-base rounded-xl sm:rounded-2xl',
  };

  const pixelDimensions = {
    sm: 28,
    md: 36,
    lg: 40,
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;
  const dimension = pixelDimensions[size] || pixelDimensions.md;

  // If the logo is an image URL (e.g. '/hsn.jpg', '/logo.png', etc.), render with Next.js Image
  if (
    typeof logo === 'string' &&
    (logo.startsWith('/') || logo.startsWith('http://') || logo.startsWith('https://') || logo.startsWith('data:'))
  ) {
    return (
      <div
        className={`${selectedSize} overflow-hidden bg-zinc-900 dark:bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0 relative border border-zinc-200/50 dark:border-zinc-700/50 ${className}`}
      >
        <Image
          src={logo}
          alt={PERSONAL_INFO.name || 'Logo'}
          width={dimension}
          height={dimension}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    );
  }

  // Otherwise render text initials/monogram
  return (
    <div
      className={`${selectedSize} bg-zinc-900 dark:bg-white text-white dark:text-[#09090b] font-bold flex items-center justify-center font-mono shadow-sm group-hover:scale-105 transition-transform shrink-0 ${className}`}
    >
      {logo}
    </div>
  );
}
