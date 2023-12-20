import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/LoginPage.png";
import rmtdevImg from "@/public/social1.png";
// import wordanalyticsImg from "@/public/social2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Diploma Degree",
//     location: "Nagpur, MH, IN",
//     description:
//       "I recived my diploma degree in Computer Technology.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2021",
//   },
//   {
//     title: "Graduation",
//     location: "Nagpur, MH, IN",
//     description:
//       "Pursuing my graduation in the field of Computer Science and Engineering(B.Tech). So, as a final-year student that loves learning and sees opportunities to learn everywhere. ",
//     icon: React.createElement(LuGraduationCap),
//     date: "2021 - 2024",
//   },
//   // {
//   //   title: "Full-Stack Developer",
//   //   location: "Houston, TX",
//   //   description:
//   //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//   //   icon: React.createElement(FaReact),
//   //   date: "2021 - present",
//   // },
// ] as const;

export const projectsData = [
  {
    title: "Socialink (Social Media Application)",
    description:
      "Users are able to message one another, upload images, and like the posts and stories of other users..",
    tags: ["MongoDB", "Express.JS", "React", "Node.JS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Social's",
    description:
      "Real-time messaging, which enables sending and receiving instant messages, is the application's core feature.",
    tags: ["Java", "XML", "Android", "Firebase", "Material Ui"],
    imageUrl: rmtdevImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   // imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Android Studio",
  "Android",
  "Java",
  "Java AWT",
  "Java Swing",
  "Java Fx",
  "Kotlin",
  "JavaScript",
  "Firebase",
  "XML",
  "Jetpack Compose",
  "Data Structure & Algorithm",
  "Node.js",
  "Git",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Figma",
] as const;