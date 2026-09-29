# Ehab Ellati — Personal Portfolio Website

A professional personal portfolio website for Ehab Ellati, Software Engineer & AI/GenAI Specialist.

**Live URL:** https://ehab-ellati.vercel.app

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 11
- **Typing Animation:** react-type-animation
- **Icons:** react-icons
- **Contact Form:** Formspree (free tier)
- **Deployment:** Vercel (free tier)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
  components/     # One file per section component
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Experience.tsx
    Education.tsx
    Projects.tsx
    Certifications.tsx
    Contact.tsx
    Footer.tsx
    ScrollToTop.tsx
    SectionHeading.tsx
  data/           # Typed data constants
    experience.ts
    projects.ts
    skills.ts
    education.ts
    certifications.ts
  hooks/
    useScrollSpy.ts
  types/
    index.ts
public/
  Ehab_Ellati_CV.pdf   # CV download file
  favicon.svg
```

## Deployment (Vercel)

1. Push this repository to GitHub
2. Go to https://vercel.com and sign in with GitHub
3. Click **Add New Project** → import this repository
4. Leave all settings as default (Vite is auto-detected)
5. Click **Deploy**
6. Your site will be live at `https://<project-name>.vercel.app`

To set a custom project name: in Vercel dashboard → Project Settings → General → Project Name → set to `ehab-ellati`.

## Contact Form

The contact form uses [Formspree](https://formspree.io). The endpoint is already configured in `src/components/Contact.tsx`. No environment variables are required for the default setup.

To use your own Formspree endpoint:
1. Sign up at https://formspree.io
2. Create a new form → copy your endpoint URL
3. Replace `FORMSPREE_ENDPOINT` in `src/components/Contact.tsx`
