# 🚀 Portfolio Website - Local Setup Guide

## Overview
This is a modern, animated portfolio website built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v18.17 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) OR **bun** (recommended) - [Download Bun](https://bun.sh/)
- **Git** (optional, for version control) - [Download here](https://git-scm.com/)

---

## 🛠️ Installation Steps

### Step 1: Create Project Directory

```bash
# Create a new directory for your portfolio
mkdir my-portfolio
cd my-portfolio
```

### Step 2: Initialize Next.js Project

```bash
# Using npx (npm)
npx create-next-app@15 . --typescript --tailwind --app --src-dir --import-alias "@/*"

# OR using Bun (faster)
bunx create-next-app@15 . --typescript --tailwind --app --src-dir --import-alias "@/*"
```

When prompted:
- ✅ Would you like to use TypeScript? **Yes**
- ✅ Would you like to use ESLint? **Yes**
- ✅ Would you like to use Tailwind CSS? **Yes**
- ✅ Would you like to use `src/` directory? **Yes**
- ✅ Would you like to use App Router? **Yes**
- ✅ Would you like to customize the import alias? **Yes** (@/*)

### Step 3: Install Dependencies

```bash
# Using npm
npm install

# OR using Bun (recommended - much faster)
bun install
```

### Step 4: Install Required Packages

Install all the necessary packages for the portfolio:

```bash
# Using npm
npm install framer-motion lucide-react next-themes @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate tw-animate-css @tailwindcss/postcss

# OR using Bun
bun install framer-motion lucide-react next-themes @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate tw-animate-css @tailwindcss/postcss
```

### Step 5: Setup shadcn/ui (For UI Components)

Initialize shadcn/ui:

```bash
# Using npx
npx shadcn@latest init

# OR using Bun
bunx shadcn@latest init
```

When prompted:
- Style: **New York**
- Base color: **Neutral**
- CSS variables: **Yes**

Then install the required UI components:

```bash
npx shadcn@latest add button
```

---

## 📁 File Structure

Your project should have this structure:

```
my-portfolio/
├── public/
│   └── (your images here)
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   ├── certificates-section.tsx
│   │   ├── coding-profiles-section.tsx
│   │   ├── education-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── navigation.tsx
│   │   ├── projects-section.tsx
│   │   ├── skills-section.tsx
│   │   └── theme-provider.tsx
│   └── lib/
│       └── utils.ts
├── .gitignore
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🔧 Configuration Files

### 1. Update `package.json`

Replace the scripts section:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 2. Update `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
```

### 3. Update `postcss.config.mjs`

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### 4. Update `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 5. Create `src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 📝 Copy Component Files

You'll need to copy all the component files from the cloud environment:

1. **src/app/page.tsx** - Main page
2. **src/app/layout.tsx** - Root layout
3. **src/app/globals.css** - Global styles
4. **src/components/navigation.tsx** - Navigation bar
5. **src/components/hero-section.tsx** - Hero section with photo
6. **src/components/education-section.tsx** - Education section
7. **src/components/skills-section.tsx** - Skills section
8. **src/components/experience-section.tsx** - Experience section
9. **src/components/projects-section.tsx** - Projects section
10. **src/components/certificates-section.tsx** - Certificates section
11. **src/components/coding-profiles-section.tsx** - Coding profiles section
12. **src/components/footer.tsx** - Footer
13. **src/components/theme-provider.tsx** - Theme provider
14. **src/components/ui/button.tsx** - Button component

### Simplified `src/app/layout.tsx` for Local

```typescript
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Ajay Gopagoni - AI/ML Engineer Portfolio",
  description: "Portfolio of Ajay Gopagoni - Aspiring AI/ML Engineer with expertise in Python, Machine Learning, and Data Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## 🎨 Customization

### Update Profile Photo

Replace the image URL in `src/components/hero-section.tsx` (around line 95):

```typescript
<Image
  src="/your-photo.jpg"  // Put your photo in public folder
  alt="Your Name - AI/ML Engineer"
  fill
  className="object-cover"
  priority
/>
```

### Update Personal Information

Edit the following files to customize your portfolio:

1. **Hero Section** (`src/components/hero-section.tsx`):
   - Name, title, contact info, summary

2. **Education Section** (`src/components/education-section.tsx`):
   - Degrees, universities, GPAs

3. **Skills Section** (`src/components/skills-section.tsx`):
   - Programming languages, frameworks, tools

4. **Experience Section** (`src/components/experience-section.tsx`):
   - Internships, work experience

5. **Projects Section** (`src/components/projects-section.tsx`):
   - Your projects with GitHub links

6. **Certificates Section** (`src/components/certificates-section.tsx`):
   - Your certifications

7. **Coding Profiles Section** (`src/components/coding-profiles-section.tsx`):
   - LeetCode, HackerRank, etc.

8. **Footer** (`src/components/footer.tsx`):
   - Social media links

---

## 🚀 Running the Project

### Development Mode

```bash
# Using npm
npm run dev

# OR using Bun (faster)
bun run dev
```

Open your browser and visit: **http://localhost:3000**

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## 🎯 Features

✅ **Responsive Design** - Works on all devices  
✅ **Dark/Light Theme** - Toggle between themes  
✅ **Smooth Animations** - Powered by Framer Motion  
✅ **Modern UI** - Built with Tailwind CSS v4  
✅ **SEO Optimized** - Proper metadata and structure  
✅ **Fast Performance** - Next.js 15 App Router  
✅ **Type Safe** - Full TypeScript support  

---

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Kill the process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# OR use a different port
npm run dev -- -p 3001
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# OR with Bun
rm -rf node_modules bun.lockb
bun install
```

### Build Errors

```bash
# Clean Next.js cache
rm -rf .next
npm run dev
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

---

## 📄 License

This project is open source and available for personal use.

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. Check the [Framer Motion Documentation](https://www.framer.com/motion/)

---

## 🎉 You're All Set!

Your portfolio is now ready to run locally. Happy coding! 🚀
