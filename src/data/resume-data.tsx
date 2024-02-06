import {
  ClevertechLogo,
  ConsultlyLogo,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { BookText } from "lucide-react";

export const RESUME_DATA = {
  name: "Nahuel Luca",
  initials: "NL",
  location: "Mendoza, Argentina, ARG",
  locationLink: "https://maps.app.goo.gl/XqXztw5BQJkZjaLA7",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "I'm a Frontend Developer with 2 years of software development experience. Proficient in Remix, NextJS, tailwindCSS, supabase, TypeScript, React, Prisma, tRCP. My passion lies in creating seamless user interfaces that blend functionality with aesthetics. Let's bring your ideas to life through clean and efficient code.",
  avatarUrl: "https://avatars.githubusercontent.com/u/55501475?v=4",
  contact: {
    email: "nahueldevelop@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Nahuelluca20",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nahueldevelop/",
        icon: LinkedInIcon,
      },
      {
        name: "Blog",
        url: "https://nahuel-dev.pages.dev/blog",
        icon: BookText,
      },
    ],
  },
  education: [
    {
      school: "Maria Auxiliadora School",
      degree: "Bachelor's degree in economics and administration",
      start: "2015",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Incubator",
      link: "https://incubator.com.ar/es",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description:
        "Creating user interfaces and implementing new features with cutting-edge tools and written code. With special vision on detail. Technologies: React, TypeScript, Next.js, Tailwind CSS, Supabase, Clerk, Auth.js",
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Remote"],
      title: "Freelance FrontEnd Developer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2021",
      description:
        "Work as a freelance developer creating websites with HTML, CSS, javascript and React.js",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "Nest.js",
    "Supabase",
    "tRCP",
    "Tailwind CSS",
    "Prisma",
  ],
  projects: [
    {
      title: "Trello Clone",
      techStack: ["Side Project", "TypeScript", "Remix", "Prisma"],
      description: "Trello clone made with Remix, React-Aria and prisma",
      logo: ConsultlyLogo,
      link: {
        label: "trello-clone",
        href: "https://trello-clone-zeta-wheat.vercel.app/",
      },
    },
    {
      title: "My blog",
      techStack: ["Side Project", "Remix", "D1 database", "Cludflare Pages",],
      description: "A blog made with NextJS, shadcn/ui and MDX",
      logo: ConsultlyLogo,
      link: {
        label: "siderdev-blog",
        href: "https://nahuel-dev.pages.dev/blog",
      },
    },
    {
      title: "Task Manager",
      techStack: ["Side Project", "TypeScript", "Remix", "Prisma", "Supabase"],
      description: "App to manage tasks and catalog them",
      logo: MonitoLogo,
      link: {
        label: "task-manager-remix",
        href: "https://task-manager-remix.vercel.app/",
      },
    },
    {
      title: "Whosin",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Prisma",
        "Supabase",
      ],
      description: "App to create team and events",
      logo: MonitoLogo,
      link: {
        label: "whos-in",
        href: "https://whos-in-sage.vercel.app/",
      },
    },
    {
      title: "Remix PrefetchPage Links demo",
      techStack: ["Side Project", "Remix", "API"],
      description: "A small demo to see how PrefetchPage Links works in Remix",
      logo: MonitoLogo,
      link: {
        label: "remix-PrefetchPageLinks-demo",
        href: "https://remix-prefetch-page-links-demo.vercel.app/",
      },
    },
    {
      title: "Next.js Authjs Example",
      techStack: ["Side Project", "Next.js", "Auth.js", "Supabase"],
      description: "App to search pokemons and select favorites",
      logo: MonitoLogo,
      link: {
        label: "nextjs-authjs-example",
        href: "https://nextjs-authjs-example.vercel.app",
      },
    },
    {
      title: "Pokedux",
      techStack: ["Side Project", "React.js", "Redux", "API"],
      description: "App to search pokemons and select favorites",
      logo: MonitoLogo,
      link: {
        label: "pokedux",
        href: "https://pokedux-web.netlify.app/",
      },
    },
  ],
} as const;
