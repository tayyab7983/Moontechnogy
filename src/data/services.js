// import {
//   Code2,
//   Palette,
//   Smartphone,
//   Brain,
//   Monitor,
//   Settings,
// } from "lucide-react";

// const services = [
//   {
//     id: 1,
//     number: "01",
//     title: "Website Development",
//     description:
//       "Modern, fast and SEO-friendly business websites built with React, MERN and Next.js.",
//     icon: Code2,
//   },

//   {
//     id: 2,
//     number: "02",
//     title: "UI / UX Design",
//     description:
//       "Premium UI/UX design focused on beautiful interfaces and smooth user experience.",
//     icon: Palette,
//   },

//   {
//     id: 3,
//     number: "03",
//     title: "AI Automation",
//     description:
//       "AI chatbots, workflow automation and intelligent business solutions.",
//     icon: Brain,
//   },

//   {
//     id: 4,
//     number: "04",
//     title: "Mobile App Development",
//     description:
//       "High-performance Android & iOS applications with modern technology.",
//     icon: Smartphone,
//   },

//   {
//     id: 5,
//     number: "05",
//     title: "SaaS Product Development",
//     description:
//       "Complete SaaS platforms with authentication, dashboard and payment integration.",
//     icon: Monitor,
//   },

//   {
//     id: 6,
//     number: "06",
//     title: "Custom Software Development",
//     description:
//       "Custom CRM, ERP and business software tailored to your company's workflow.",
//     icon: Settings,
//   },
// ];

// export default services;
import {
  Code2,
  Palette,
  Smartphone,
  Brain,
  Monitor,
  Settings,
} from "lucide-react";

import website from "../assets/services/website.png";
import app from "../assets/services/app.png";
import aiautomation from "../assets/services/aiautomation.png";
import saas from "../assets/services/saas.png";
import uiux from "../assets/services/uiux.png";
import customsoftware from "../assets/services/costumesoftware.png";

const services = [
  {
    id: 1,
    number: "01",
    title: "Website Development",
    description:
      "Modern, fast and SEO-friendly business websites built with React, MERN and Next.js.",
    icon: Code2,
    image: website,
  },

  {
    id: 2,
    number: "02",
    title: "UI / UX Design",
    description:
      "Premium UI/UX design focused on beautiful interfaces and smooth user experience.",
    icon: Palette,
    image: uiux,
  },

  {
    id: 3,
    number: "03",
    title: "AI Automation",
    description:
      "AI chatbots, workflow automation and intelligent business solutions.",
    icon: Brain,
    image: aiautomation,
  },

  {
    id: 4,
    number: "04",
    title: "Mobile App Development",
    description:
      "High-performance Android & iOS applications with modern technology.",
    icon: Smartphone,
    image: app,
  },

  {
    id: 5,
    number: "05",
    title: "SaaS Product Development",
    description:
      "Complete SaaS platforms with authentication, dashboard and payment integration.",
    icon: Monitor,
    image: saas,
  },

  {
    id: 6,
    number: "06",
    title: "Custom Software Development",
    description:
      "Custom CRM, ERP and business software tailored to your company's workflow.",
    icon: Settings,
    image: customsoftware,
  },
];

export default services;