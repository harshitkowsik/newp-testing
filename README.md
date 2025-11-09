# Personal Portfolio Website for Dr. Ashutosh Mishra

This repository contains the source code for the personal portfolio website of Dr. Ashutosh Mishra. The site is a modern, responsive single-page application (SPA) built with React and TypeScript, designed to showcase his professional experience, services, publications, and ventures.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Key Dependencies](#key-dependencies)
- [Live Demo](#live-demo)
- [Project Structure](#project-structure)
- [Key Features & Pages](#key-features--pages)
- [Data Management](#data-management)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The website serves as a digital portfolio for Dr. Ashutosh Mishra. It highlights his multifaceted career spanning academia, law, corporate strategy, and social impact. The site is designed to be clean, professional, and easy to navigate, providing visitors with a comprehensive look at his expertise and accomplishments.

## Technology Stack

- **Framework:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router](https://reactrouter.com/) (`react-router-dom`)
- **Styling:** Tailwind CSS

## Key Dependencies

- **`react` & `react-dom`**: The core library for building the user interface.
- **`react-router-dom`**: Handles all client-side routing for this single-page application.
- **`tailwindcss`**: A utility-first CSS framework used for all styling.
- **`@vitejs/plugin-react`**: The official Vite plugin for React support.
- **`typescript`**: Provides static typing for the project, improving code quality and maintainability.
- **`vite`**: Serves as the build tool and development server, offering a fast and modern development experience.

The project also utilizes various other libraries, which can be found in the `package.json` file.

## Live Demo

A live version of the website can be viewed here.

## Project Structure

The project follows a standard React application structure, organizing files by their function.

```
/
├── public/
│   └── fab-icon.png
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── Icons.tsx      # SVG icon components
│   │   ├── Footer.tsx         # Site-wide footer
│   │   ├── Header.tsx         # Site-wide header and navigation
│   │   └── ScrollToTop.tsx    # Utility to scroll to top on route changes
│   │
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── BooksPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HighlightsPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NGODetailPage.tsx
│   │   ├── NGOsListPage.tsx
│   │   ├── PrivacyPolicyPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── StartupsPage.tsx
│   │   └── TermsPage.tsx
│   │
│   ├── constants/
│   │   └── index.ts           # (Inferred) Centralized data for the site
│   │
│   ├── App.tsx                # Main component with all routing logic
│   └── index.tsx              # Application entry point
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Key Features & Pages

The application is composed of several pages, each serving a distinct purpose:

- **HomePage:** The main landing page, featuring a hero section, key statistics, a professional summary, and links to featured services.
- **AboutPage:** Provides a detailed biography, including professional summary, leadership philosophy, education, and global roles.
- **ServicesPage:** A comprehensive list of professional services offered, such as Training & Development, Project Management, and Legal Operations.
- **HighlightsPage:** Showcases key professional achievements, including certifications, awards, and core strengths.
- **BooksPage:** A gallery of books authored by Dr. Mishra, with images, descriptions, and links to purchase.
- **StartupsPage:** Lists the startup ventures founded by Dr. Mishra.
- **NGOsListPage & NGODetailPage:** A portfolio of non-profit organizations, with a main list page and dynamic detail pages for each NGO.
- **ContactPage:** An interactive form for booking appointments, along with other contact details. The form includes dynamic time validation to ensure appointments are scheduled within working hours.
- **TermsPage & PrivacyPolicyPage:** Standard legal pages for terms of service and privacy policy.

## Data Management

Most of the website's content (e.g., service descriptions, book details, startup info) is managed statically within the `/src/constants/index.ts` file. This approach keeps content separate from the component logic, making it easy to update information without touching the JSX code. Data is imported directly into the relevant page components.

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

You need to have Node.js (version 18.x or later) and npm installed on your machine.
