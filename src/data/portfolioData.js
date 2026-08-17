export const PERSONAL_INFO = {
  name: 'Md Mahmudul Hasan',
  logo: '/hsn.jpg', // Website logo image (replaces "MH" text)
  initials: 'MH',
  role: 'Full-Stack & Android Engineer',
  company: 'Open for Roles',
  headline: 'Software Engineer (Web & Android)',
  bio: 'Full-stack software engineer & Android developer based in Mestre, Italy. I build performant web applications, native mobile apps, and robust database architectures using React, Next.js, Node.js, PostgreSQL, and Java / Android SDK.',
  location: 'Mestre (Venice), Italy',
  timezone: 'CET (UTC+1)',
  availability: 'Available for Full-Time, Contract & Remote (EU/Global)',
  resumeUrl: '/resume.pdf',
  email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || process.env.EMAIL_ADDRESS || 'mortuza.7@gmail.com',
  github: process.env.NEXT_PUBLIC_GITHUB_URL || process.env.GITHUB_URL || 'https://github.com/Mike-leonard',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || process.env.TWITTER_URL || 'https://twitter.com',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/mr-hasan',
  stats: [
    { line1: 'Web & Mobile', line2: 'Apps', label: 'Web & Mobile Apps', value: '10+' },
    { line1: 'Years', line2: 'Experience', label: 'Years Experience', value: '4+' },
    { line1: 'Latency', line2: 'Reduction', label: 'Latency Reduction', value: '35%' },
    { line1: 'Code', line2: 'Quality', label: 'Code Quality', value: '100%' },
  ]
};

export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    name: 'Languages & Core',
    badge: 'Core Syntax',
    skills: ['JavaScript (ES6+)', 'Java', 'SQL', 'PHP', 'HTML5', 'CSS3 / Tailwind']
  },
  {
    id: 'frontend',
    name: 'Frontend & UI',
    badge: 'Modern Web',
    skills: ['React', 'Next.js (App Router)', 'Tailwind CSS', 'Responsive Design', 'Component Systems']
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    badge: 'Server Architecture',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'WordPress / PHP', 'Server Actions', 'Auth & Security']
  },
  {
    id: 'databases',
    name: 'Databases & ORM',
    badge: 'Data Layer',
    skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Prisma ORM', 'Query Optimization (-35%)', 'Database Schema']
  },
  {
    id: 'mobile',
    name: 'Mobile & Native',
    badge: 'Android Ecosystem',
    skills: ['Android SDK', 'Java Android', 'Background Services', 'MediaSession', 'LibGDX Game Engine', 'Offline Persistence']
  },
  {
    id: 'qa-tools',
    name: 'QA, Testing & Tools',
    badge: 'Reliability & CI/CD',
    skills: ['Quality Control (QC)', 'Functional Testing', 'UI Testing', 'Defect Tracking', 'Git & GitHub', 'CI/CD Pipelines']
  }
];

export const PROJECTS = [
  {
    id: 'sphinix-mobile',
    title: 'Sphinix Mobile',
    subtitle: 'Smartphone discovery, comparison & AI-assisted publishing platform',
    description: 'A production-grade smartphone specification, 3-way comparison, and content platform built with Next.js App Router, React 19, Server Actions, PostgreSQL (Supabase), and Prisma ORM. Features multi-attribute filtering, geo-targeted affiliate links, and an AI-powered editorial CMS.',
    longDescription: 'Sphinix Mobile is a full-stack mobile research and content ecosystem. It combines fast, SEO-optimized React Server Components on the public frontend with an authenticated admin CMS supporting multi-provider AI specification generation (Gemini, OpenAI, Anthropic), Jina Reader URL scraping, GA4/GSC analytics, and automated cPanel deployment via GitHub Actions.',
    category: ['web-apps', 'open-source'],
    featured: true,
    stars: 240,
    forks: 42,
    language: 'Next.js / JavaScript',
    tags: ['Next.js 15', 'React 19', 'Server Actions', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'AI', 'Supabase'],
    githubUrl: 'https://github.com/Mike-leonard/sphinix-mobile',
    docsUrl: 'https://sphinix.xyz',
    demoUrl: 'https://sphinix.xyz',
    codeSnippet: `// Sphinix Mobile: Server Action & Cached Query Abstraction
import { prisma } from '@/prisma/client';
import { unstable_cache } from 'next/cache';

// Multi-attribute device search & filter query with cache tag invalidation
export const getFilteredDevices = unstable_cache(
  async ({ brandSlug, filters, page = 1, limit = 20 }) => {
    return prisma.device.findMany({
      where: {
        status: 'PUBLISHED',
        ...(brandSlug ? { brand: { slug: brandSlug } } : {}),
        attributes: {
          some: {
            attributeId: { in: filters.attributeIds },
            value: { in: filters.values },
          },
        },
      },
      include: {
        brand: true,
        ratingBars: true,
        prices: true,
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { releaseDate: 'desc' },
    });
  },
  ['devices-catalog'],
  { tags: ['devices'], revalidate: 3600 }
);`
  },
  {
    id: 'fourdots',
    title: 'FourDots Game',
    subtitle: 'Arcade color-matching puzzle & reflex game built with LibGDX & Java',
    description: 'A fast-paced 2D arcade color-matching game built with LibGDX and Java for Android. Players rotate a 4-colored central core to match incoming falling spheres, featuring smooth tween animations (Universal Tween Engine), custom OpenGL shader rendering, collision physics, and audio soundscapes.',
    longDescription: 'FourDots is a 2D reflex and arcade game engine developed with LibGDX and Java. The game architecture implements a decoupled Entity-Component game loop (GameWorld & GameRenderer), 60 FPS OpenGL rendering via SpriteBatch and ShapeRenderer, smooth rotational animations powered by Aurelien Ribon\'s Universal Tween Engine, dynamic difficulty scaling, and high-score tracking.',
    category: ['mobile-apps', 'open-source'],
    featured: true,
    stars: 60,
    forks: 14,
    language: 'Java / LibGDX',
    tags: ['LibGDX', 'Java', 'Game Dev', 'Android', 'OpenGL', 'Tween Engine', 'Arcade'],
    githubUrl: 'https://github.com/Mike-leonard/FourDots',
    codeSnippet: `// FourDots: LibGDX 2D Core Rotation & Collision Engine
package gameworld;

public class GameWorld {
    private Core core;
    private Ball ball;
    private GameState gameState;

    public void update(float delta) {
        switch (gameState) {
            case RUNNING:
                core.update(delta);
                ball.update(delta);
                
                // Color match & collision detection
                if (Intersector.overlaps(ball.getCircle(), core.getCurrentDot().getCircle())) {
                    if (ball.getColor().equals(core.getCurrentDot().getColor())) {
                        score++;
                        SoundHelper.playMatchSound();
                        ball.resetWithNewColor();
                    } else {
                        gameState = GameState.GAMEOVER;
                    }
                }
                break;
        }
    }
}`
  },
  {
    id: 'planet-fitness',
    title: 'Planet Fitness (Health Manager)',
    subtitle: 'All-in-one Android health & biometric suite with step tracking',
    description: 'A comprehensive Android health and fitness tracking suite built with Java and Android SDK. Features 20+ specialized clinical and fitness calculators—including BMI, BMR, Body Fat %, Calorie Burn/Intake, Blood Volume, Water Hydration Reminders, and an integrated Pedometer Step Tracker with customized goal progress.',
    longDescription: 'Planet Fitness (Health Manager) is an all-in-one Android biometric tracking application. Developed using native Java, custom ViewPump typography injection, SharedPreferenceManager data persistence, and interactive chart visualizations, the application offers modules for BMI, BMR, Body Surface Area (BSA), Body Adiposity Index (BAI), step counting (Walk & Step), blood pressure logs, and daily hydration reminders.',
    category: ['mobile-apps', 'open-source'],
    featured: true,
    stars: 95,
    forks: 22,
    language: 'Java / Android',
    tags: ['Android SDK', 'Java', 'Health & Fitness', 'BMI/BMR', 'Pedometer', 'Biometrics', 'Mobile App'],
    githubUrl: 'https://github.com/Mike-leonard/Planet-Fitness',
    codeSnippet: `// Planet Fitness: Harris-Benedict BMR & Biometric Evaluation Engine
package com.leonard.healthmanager.BMR;

public class bmr_calculator extends Activity {
    public void calculateBMR(double weightKg, double heightCm, int age, String gender) {
        // Harris-Benedict equation calculation
        if (gender.equalsIgnoreCase("male")) {
            bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
        }
        
        Intent intent = new Intent(this, BMR_Result.class);
        intent.putExtra("BMR_VALUE", bmr);
        intent.putExtra("CALORIE_MAINTENANCE", bmr * 1.55); // Moderate activity factor
        startActivity(intent);
    }
}`
  },
  {
    id: 'youtags',
    title: 'YouTags - Video SEO & Tags',
    subtitle: 'Android video SEO & tag discovery tool with categorized database',
    description: 'An Android video SEO and tag management utility designed for digital creators. Features categorical tag discovery, SQLite database persistence, one-tap comma-separated clipboard copying, and international RTL layout support.',
    longDescription: 'YouTags is an Android developer & creator utility app built with Java and Android SDK. It helps content creators research high-ranking video tags, keywords, and metadata across categories (Gaming, Tech, Education, Vlogs). Built with a localized SQLite tag database (DataBaseHelper), fast RecyclerView adapters, and clipboard integration for video uploads.',
    category: ['mobile-apps', 'open-source'],
    featured: true,
    stars: 45,
    forks: 10,
    language: 'Java / Android',
    tags: ['Android SDK', 'Java', 'SEO', 'Video Tags', 'SQLite', 'Mobile App', 'Creator Tools'],
    githubUrl: 'https://github.com/Mike-leonard/YouTags',
    codeSnippet: `// YouTags: Tag Extraction & Clipboard Export Engine
package com.leonard.youtags;

public class TagsActivity extends AppCompatActivity implements TagsAdapter.ItemClickListener {
    private void copyTagsToClipboard(List<Tags> tagsList) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < tagsList.size(); i++) {
            sb.append(tagsList.get(i).getTagName());
            if (i < tagsList.size() - 1) {
                sb.append(", ");
            }
        }
        
        ClipboardManager clipboard = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
        ClipData clip = ClipData.newPlainText("YouTags", sb.toString());
        clipboard.setPrimaryClip(clip);
        
        Toast.makeText(this, "Tags copied to clipboard for video SEO!", Toast.LENGTH_SHORT).show();
    }
}`
  },
  {
    id: 'musicplay',
    title: 'MusicPlay - Android Music Player',
    subtitle: 'Material Design Android audio player with background service & ID3 tag editor',
    description: 'A feature-rich local Android audio player application built with Java and Android SDK. Features background playback via a foreground MediaPlayer service, lock screen and notification media controls (MediaSessionCompat), a sliding bottom player drawer, album art caching, ID3 song tag editor, and custom playlist management.',
    longDescription: 'MusicPlay is a full-featured Android music playback and media library app. Built in native Java with Android Jetpack, it features a background foreground MusicService with MediaSessionCompat for lock-screen controls, SlidingUpPanelLayout for seamless now-playing expansion, embedded ID3 metadata tag editing (SongTagEditor), MediaMetadataRetriever album art extraction, and custom playlist curation.',
    category: 'mobile-apps',
    featured: true,
    isPrivate: true,
    language: 'Java / Android',
    tags: ['Android SDK', 'Java', 'Audio Player', 'MediaSession', 'Service', 'ID3 Tags', 'Mobile App', 'Private'],
    codeSnippet: `// MusicPlay: Foreground Audio Playback Service with MediaSession
package com.leonard.musicplay.services;

public class MusicService extends Service implements MediaPlayer.OnCompletionListener {
    MediaPlayer mediaPlayer;
    MediaSessionCompat mediaSessionCompat;

    public void showNotification(int playPauseBtn) {
        Intent intent = new Intent(this, PlayerActivity.class);
        PendingIntent contentIntent = PendingIntent.getActivity(this, 0, intent, 0);

        Notification notification = new NotificationCompat.Builder(this, CHANNEL_ID_2)
            .setSmallIcon(R.drawable.ic_music_note)
            .setLargeIcon(AlbumArtImageMethod.getAlbumArt(musicFiles.get(position).getPath()))
            .setContentTitle(musicFiles.get(position).getTitle())
            .setContentText(musicFiles.get(position).getArtist())
            .addAction(R.drawable.ic_skip_previous, "Previous", prevPending)
            .addAction(playPauseBtn, "Play", playPending)
            .addAction(R.drawable.ic_skip_next, "Next", nextPending)
            .setStyle(new androidx.media.app.NotificationCompat.MediaStyle()
                .setMediaSession(mediaSessionCompat.getSessionToken()))
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .build();

        startForeground(2, notification);
    }
}`
  }
];

export const EXPERIENCES = [
  {
    period: 'July 2020 – October 2023',
    role: 'Software Engineer',
    company: 'Hitnext Technologies',
    location: 'Sylhet, Bangladesh',
    roleType: 'Full-Time',
    workplaceType: 'On-Site',
    domain: 'Full-Stack & Android',
    description: [
      'Developed and maintained full-stack web and native Android mobile applications using React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, WordPress/PHP, and Java / Android SDK.',
      'Architected native Android applications with background services, offline SQLite caching, media session controls, and RESTful API integrations.',
      'Optimized PostgreSQL query execution plans and database schema, resolving critical bottlenecks and reducing query response latency by 35%.',
      'Designed reusable application architecture, integrated third-party APIs/services, and resolved critical production issues across web and mobile systems.'
    ],
    skills: ['Android SDK', 'Java', 'React', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'SQLite', 'PHP / WordPress', 'Mobile Dev', 'API Integration']
  },
  {
    period: 'March 2019 – April 2020',
    role: 'Quality Control',
    company: 'Nitro9',
    location: 'Odense NØ, Denmark',
    roleType: 'Full-Time',
    workplaceType: 'Remote',
    domain: 'Quality Assurance & QC',
    description: [
      'Tested web applications and software systems to verify functionality, reliability, and adherence to project requirements.',
      'Identified, reproduced, analyzed, and documented functional and UI defects with clear reproduction steps and expected versus actual behavior.',
      'Collaborated with developers on defect resolution, regression testing, and verification of fixes before release.'
    ],
    skills: ['Quality Control (QC)', 'Functional Testing', 'UI Testing', 'Defect Tracking', 'Regression Testing', 'Release Verification']
  }
];
