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
] as const;

export const skillsData = [
  "Java",
  "Spring",
  "Spring Boot",
  "Rest API",
  "Mobile App Development",
  "Spring MVC",
  "Kotlin",
  "Jetpack Compose",
  "React Native",
  "Expo",
  "Firebase",
  "XML",
  "JavaScript",
  "TypeScript",
  "Data Structure & Algorithm",
  "Git",
  "MongoDB",
  "Figma",
  "UI/UX Design",
] as const;
