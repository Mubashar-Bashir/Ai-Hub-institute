# **App Name**: AI-HUB Institute

## Core Features:

- Homepage: Develop a landing page with key information, CTAs, news, and social media links.
- Section Pages: Create dedicated pages for programs, admissions, faculty, gallery/events, news, contact, and FAQs.
- AI Chatbot: Implement an AI-powered chatbot to answer FAQs and provide information about the institute. Use an LLM tool to respond intelligently to a wide array of questions.
- Admin Image Upload: Develop a system for admins to upload and manage images for the gallery and events sections.
- Optimization: Ensure the website is responsive, accessible, and optimized for performance using Next.js features.

## Style Guidelines:

- Primary color: Modern, clean blue (#2E9AFE) to convey trust and innovation.
- Secondary color: Light gray (#F5F5F5) for backgrounds and subtle contrasts.
- Accent: Teal (#008080) for interactive elements and highlights, complementing the primary blue.
- Use a clean, modern layout with ample whitespace and a grid-based structure.
- Employ a set of consistent, professional icons related to AI and education.
- Incorporate subtle animations (e.g., parallax scrolling, hover effects) to enhance user engagement.

## Original User Request:
Develop Full-Stack Website Development for AI-HUB Institute (Enhanced)

1. Project Overview:

Develop a modern, high-performance, and visually engaging full-stack website for the "AI-HUB Institute". The website will serve as the primary online presence, providing information about the institute, its programs, admissions, faculty, events, and contact points. The project must leverage a modern tech stack centered around Next.js and adhere to best practices for performance, maintainability, user experience, and accessibility.

2. Core Objective:

To create an attractive, informative, and exceptionally fast website that effectively communicates the value proposition of the AI-HUB Institute, attracts prospective students, and serves as a resource hub for its community. The design should feel cutting-edge, reflecting the institute's focus on Artificial Intelligence, incorporating subtle 3D elements and modern UI/UX patterns, while remaining lightweight and performant.

3. Target Audience:

Prospective Students (Domestic & International)

Current Students

Faculty & Staff

Industry Partners & Employers

Researchers

General Public interested in AI

4. Key Features & Sections (Modular Approach):

Each major section below should be developed as a distinct module/route within the Next.js application, promoting code isolation and maintainability.

Homepage (/):

Hero Section: Compelling headline (possibly incorporating the "Prototype an app with AI" tagline), visually striking imagery or subtle animation (potential area for 3D effect), clear Call-to-Actions (CTAs) (e.g., "Explore Programs", "Apply Now").

Key Offerings: Overview of main program categories or institute highlights.

Why AI-HUB?: Unique selling points, institute philosophy.

News/Events Highlights: Snippets from the latest updates/upcoming events.

Testimonials/Partner Logos: Social proof.

Footer:

Standard links (Privacy Policy, Terms of Use, Site Map, Accessibility).

Contact Snippet: Key contact info (Phone, Email).

Connect With Us:

Follow @AI-HUB on Instagram (Link)

Like our Facebook @AI-HUB (Link)

Follow @AI-HUB on X (Link)

Subscribe to our YouTube @AI-HUB Channel (Link)

Connect on LinkedIn @AI-HUB (Link)

Copyright notice.

About Us (/about):

Mission & Vision

History of the Institute

Leadership Team / Key Personnel Profiles

Campus Information / Facilities (if applicable)

Values / Culture

Programs/Courses (/programs):

Program Listing Page: Filterable/searchable list of all available programs/courses. Cards for each program.

Individual Program Detail Pages (/programs/[slug]): Detailed Description, Curriculum, Outcomes, Faculty, Admission Requirements, Fees, Duration, Career Prospects, Apply CTA.

Admissions (/admissions):

Application Process Overview

General Admission Requirements

Important Dates & Deadlines

Tuition Fees & Financial Aid

How to Apply / Link to Portal

FAQ Section (Consider a dedicated page /faq linked from here and elsewhere).

Faculty (/faculty):

Grid/list view, filterable.

Individual Faculty Profile Pages (/faculty/[slug]).

Gallery / Events / Seminars (/media or /events):

Combined section or separate pages showcasing institute activities.

Events Listing: Upcoming and past events/seminars with details, dates, locations.

Gallery: Visually focused section with high-quality image galleries categorized by event, seminar, or campus life. Use optimized image loading.

News (/news):

Blog-style listing of articles, press releases. Categorization/tagging.

Individual Article Pages (/news/[slug]).

Contact Us (/contact):

Multiple Contact Methods:

Contact Form (with validation and backend handling).

Direct Email: [email protected] (or relevant address).

WhatsApp Contact: Link/Button using wa.me/+92123123123.

Phone Number(s).

Option to "Start Live Chat" (Requires integration with a chat service - specify service if known, otherwise plan for integration).

Information about "Join the Phone Queue" (Clarify if this requires specific integration or is just informational).

Information:

Physical Address (if applicable).

Embedded Map (e.g., Google Maps).

Link to "View Frequently Asked Questions (/faq)".

Informational Text: "Visit the Student Service Centre or this Contact page for more information."

Connect With Us: Repeat social media links from the footer for easy access.

Frequently Asked Questions (/faq):

A dedicated page listing common questions and answers, categorized for usability. Searchable if possible.

5. Technology Stack:

Frontend Framework: Next.js (latest stable version, utilize App Router)

UI Library: ReactJS (latest stable version)

Language: TypeScript (strict mode enabled)

Styling: Tailwind CSS (utility-first, configure tailwind.config.js for theme)

Markup/Structure: Semantic HTML5 + CSS3

State Management: React Context API or Zustand (preferred).

Animations: Framer Motion (for subtle, performant UI animations).

Frontend Hosting: Vercel (recommended) or similar modern platform.

6. Optional Backend Stack (If Needed):

Purpose: Handle contact form submissions, power the Admin Image Upload feature, drive complex Chatbot logic, manage dynamic content not suited for static generation.

Technology:

Language: Python

Framework: FastAPI (preferred for performance and type hints) or Flask/Django.

Database: PostgreSQL (robust, open-source) or other suitable DB.

Deployment: Docker containers on cloud services (AWS, GCP, Azure), or platform-as-a-service (Heroku, Render).

7. Design & UX Guidelines:

Modern & Attractive: Clean, professional, ample whitespace, high-quality typography, modern color palette (consider "Firebase Studio" logo influence if applicable).

Subtle 3D Look: Achieved via shadows, gradients, layering (Tailwind), parallax effects (carefully implemented), micro-interactions/animations (Framer Motion). Avoid heavy 3D libraries unless specifically isolated and proven performant (React Three Fiber for small accents only if essential and fast).

Lightweight & Speedy Fast: Prioritize performance. Use Next.js optimization features (SSR, ISR, SSG, next/image), code splitting, lazy loading. Aim for Lighthouse Performance score > 90.

Responsive Design: Flawless adaptation across all screen sizes.

Accessibility: WCAG 2.1 AA compliance is mandatory.

AI Chatbot Integration:

Implement a Chatbot interface, typically accessible via a persistent icon (e.g., bottom-right corner).

Initial Functionality: Primarily serve as an intelligent FAQ responder.

Implementation: Could range from a simple frontend implementation pulling from a static FAQ data source to a more complex integration with an AI service (like Dialogflow, Rasa, or a custom model potentially using the Python backend) for natural language understanding. Define scope based on requirements/budget.

8. Architectural Principles:

Modular (Next.js App Router): Strict adherence to route-based modules.

Component-Based (React): Reusable UI and feature components.

Strongly-Typed (TypeScript): Enforce types everywhere (strict mode).

Utility-First Styling (Tailwind): Configure theme, minimize custom CSS.

Separation of Concerns: Isolate data fetching, UI logic, and state management.

Clean Code: Adhere to style guides, comment effectively.

9. Admin / Backend Considerations:

Image Upload Page: This requires a secure, authenticated backend interface (likely separate from the main public website).

This interface would allow authorized users (admins) to upload images for the Gallery/Events/Seminars section.

Requires backend logic (Python/FastAPI stack is suitable here) for handling file uploads, storage (e.g., S3-compatible bucket), and potentially database updates to link images to events/galleries.

The Next.js frontend would then fetch these image URLs/data to display in the relevant sections.

10. Inspiration & Context:

Reference Websites: Analyze PIAIC, Phoenix, NAIT, Notre Dame, Alverno for information architecture, content strategy, and layout patterns. Adapt successful elements to AI-HUB's unique brand and focus.

Logo & Tagline: Use the provided "Firebase Studio" logo (confirm if final). Integrate the "Prototype an app with AI" tagline appropriately. Ensure visual identity aligns with a modern AI institute.

11. Deliverables:

Fully functional website deployed to staging/production URLs.

Complete frontend source code in a Git repository.

(If applicable) Complete backend source code and deployment scripts/configuration in a separate Git repository.

README.md files for setup, build, deployment.

(Optional) Brief architectural documentation.

12. Specific Considerations:

Content Management: Determine early how content (programs, news, events, faculty profiles) will be managed. Options: Markdown files, Headless CMS (Contentful, Strapi, Sanity), or Database (if using the optional backend).

Third-Party Integrations: Plan for API keys, setup, and potential costs associated with Live Chat services or advanced Chatbot platforms.

Performance vs. Features: Continuously balance the desire for features (especially animations, chat, 3D) against the critical requirement for speed and lightness.
  
  