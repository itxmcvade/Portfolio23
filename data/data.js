import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import {
  HiOutlineBolt,
  HiOutlineCalendar,
  HiOutlineEnvelope,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
} from "react-icons/hi2";

export const NavLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Stack", href: "/stack" },
  { name: "Contact", href: "/links" },
];


export const SocialIcons = [
  
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/isaiah-mcvade-6a820a174/",
  },
];

export const AllProducts = [
  {
    id: 0,
    slug: "noirfolio",
    src: "/images/products/noirfolio-thumbnail.png",
    title: "NoirFolio",
    desc: "A minimal portfolio template for creatives. Showcase work, blog, and sell online.",
    url: "https://Isaiah.lemonsqueezy.com/checkout?cart=05159033-b7d2-4b00-b5f0-511d9cd5345a",
    category: "Learn more",
  },
  {
    id: 1,
    slug: "consulting",
    src: "/images/products/consulting.png",
    title: "Ultimate 1:1 Consulting",
    desc: "Consulting, Mentoring, Product Feedback and more.",
    url: "https://Isaiah.lemonsqueezy.com/checkout?cart=c360622b-23c0-43c3-bea5-27c0c8a6851a",
    category: "Get it for FREE",
  },
  {
    id: 2,
    slug: "frontend-developer-checklist",
    src: "/images/products/frontend-checklist.png",
    title: "Frontend Checklist",
    desc: "A free starter guide for frontend development.",
    url: "https://Isaiah.lemonsqueezy.com/checkout?cart=ae505430-c5e3-4b74-9535-694ede450d56",
    category: "Get it for FREE",
  },
  {
    id: 3,
    slug: "frontend-project-powerhouse",
    src: "/images/products/frontend-projects.png",
    title: "Frontend Project Ideas",
    desc: "100+ project ideas to imporve your coding skills.",
    url: "https://Isaiah.lemonsqueezy.com/checkout/buy/9901e3ce-4fe4-48bc-8fce-f10a6e99155e",
    category: "Get it for FREE",
  },

  {
    id: 4,
    slug: "resume-revamp-kit",
    src: "/images/products/resume-revamp.png",
    title: "ResumeRevamp Kit",
    desc: "Level up your job search with professional Figma resume templates.",
    url: "https://Isaiah.lemonsqueezy.com/checkout/buy/6f5285b4-5826-4eba-a2d8-dac939349afb",
    category: "Learn more",
  },
  {
    id: 5,
    slug: "mastering-javascript-and-react",
    src: "/images/products/react-js.png",
    title: "Mastering JavaScript and React",
    desc: "60+ React & JavaScript Q&A to ace your interview.",
    url: "https://Isaiah.lemonsqueezy.com/checkout?cart=deccdf0a-7e84-481d-85f7-ea8684e3d3ab",
    category: "Get it for FREE",
  },

  {
    id: 6,
    slug: "lofi-life",
    src: "/images/products/lofi-life-cover.png",
    title: "Lofi.life",
    desc: "Relax & Code with ambient sounds, a timer, and to-do list.",
    url: "https://lofi-life.vercel.app/",
    category: "Get it for FREE",
  },
];

export const BlogData = [
  {
    id: 0,
    slug: "wind-down",
    url: "/images/blog-3.svg",
    title: "Wind down",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt.",
  },
  {
    id: 1,
    slug: "deep-work",
    url: "/images/blog-1.svg",
    title: "Deep Work",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt.",
  },

  {
    id: 2,
    slug: "growth-mindset",
    url: "/images/blog-4.svg",
    title: "Growth mindset",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt.",
  },
  {
    id: 3,
    slug: "time-management",
    url: "/images/blog-2.svg",
    title: "Time management",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt.",
  },
];

export const SocialData = [
  

  {
    id: 1,
    src: "/images/gmail-logo.svg",
    url: "mailto:isaiahxmcvade@gmail.com",
    title: "Email",
    desc: "isaiahxmcvade@gmail.com",
    customBg: "gmail",
  },
  
  
  
  {
    id: 5,
    src: "/images/github-logo.svg",
    url: "https://github.com/itxmcvade",
    title: "GitHub",
    desc: "@itxmcvade",
    customBg: "github",
  },
  
  {
    id: 7,
    src: "/images/linkedin-logo.svg",
    url: "https://www.linkedin.com/in/isaiah-mcvade-6a820a174/",
    title: "Linkedin",
    desc: "@isaiahmcvade",
    customBg: "linkedin",
  },
  
  
];

export const ContactData = [
  {
    id: 0,
    Icon: HiOutlineBolt,
    title: "Hire me",
    desc: "I design & build for selected clients",
    customBg: "green",
    url: "https://tally.so/r/mK5B8z",
  },


  {
    id: 2,
    Icon: HiOutlineRocketLaunch,
    title: "Get in touch",
    desc: "isaiahxmcvade@gmail.com",
    customBg: "purple",
    url: "mailto:isaiahxmcvade@gmail.com",
  },

  

];

export const StackData = [
  {
    id: 0,
    url: "/images/software/figma-logo.png",
    title: "Figma",
    desc: "Design",
  },
  {
    id: 1,
    url: "/images/software/arc-logo.png",
    title: "Arc",
    desc: "Browser",
  },
  {
    id: 2,
    url: "/images/software/notion-logo.png",
    title: "Notion",
    desc: "Second Brain",
  },
  {
    id: 3,
    url: "/images/software/screenstudio-logo.png",
    title: "Screen Studio",
    desc: "Screen Recording",
  },
  {
    id: 4,
    url: "/images/software/raycast-logo.png",
    title: "Raycast",
    desc: "Productivity",
  },
  {
    id: 5,
    url: "/images/software/tailwind-logo.png",
    title: "Tailwind",
    desc: "Framework",
  },
  {
    id: 6,
    url: "/images/software/chatgpt-logo.png",
    title: "Chat GPT",
    desc: "AI Assistant",
  },
  {
    id: 7,
    url: "/images/software/vscode-logo.png",
    title: "VSCode",
    desc: "Code",
  },

  {
    id: 8,
    url: "/images/software/lmsqueezy-logo.png",
    title: "Lemon Squeezy",
    desc: "Payment",
  },

  {
    id: 9,
    url: "/images/software/framer-logo.png",
    title: "Framer",
    desc: "Website",
  },
  {
    id: 10,
    url: "/images/software/audible-logo.png",
    title: "Audible",
    desc: "Books",
  },
  {
    id: 11,
    url: "/images/software/canva-logo.png",
    title: "Canva",
    desc: "Design",
  },
  {
    id: 12,
    url: "/images/software/raindrop-logo.png",
    title: "Raindrop",
    desc: "Bookmarks",
  },
  
  {
    id: 14,
    url: "/images/software/typefully-logo.png",
    title: "Typefully",
    desc: "Schedulling",
  },
];

export const SetupData = [
  {
    id: 0,
    url: "/images/setup/macbook-air.svg",
    title: "Macbook Air M2",
    desc: "Laptop",
  },
  {
    id: 1,
    url: "/images/setup/apple-watch.svg",
    title: "Apple Watch Series 8",
    desc: "Watch",
  },
  {
    id: 2,
    url: "/images/setup/airpods.svg",
    title: "AirPods Pro",
    desc: "Headphone",
  },
  {
    id: 3,
    url: "/images/setup/mxkeys.svg",
    title: "MX KEYS MINI",
    desc: "Keyboard",
  },
  {
    id: 4,
    url: "/images/setup/mxmaster.svg",
    title: "MX Master 3S",
    desc: "Mouse",
  },
];
