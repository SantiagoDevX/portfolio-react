// SVG IMPORTATIONS
// Technologies
import html from "../assets/img/technologies/HTML5.svg";
import nodejs from "../assets/img/technologies/Node.js.svg";
import javascript from "../assets/img/technologies/JavaScript.svg";
import mysql from "../assets/img/technologies/MySQL.svg";
import react from "../assets/img/technologies/react.svg";
import css from "../assets/img/technologies/CSS3.svg";
import typescript from "../assets/img/technologies/typescript.svg";

// Social Icons
import github from "../assets/img/social/github.svg"
import linkedin from "../assets/img/social/linkedin.svg"
import whatsapp from "../assets/img/social/whatsapp.svg"

export const projectList = [
  {
    id: "api-rest-crud",
    title: "API REST - CRUD",
    description:
      "API RESTful que permite la gestión de tareas con operaciones CRUD usando Node.js, Express y MySQL.",
    techList: ["JavaScript", "NodeJS", "MySQL", "Express"],
    imageSrc: "/assets/img/api-rest-crud.jpg",
  },
  {
    id: "to-do-app",
    title: "TO-DO-APP",
    description: "Aplicación básica para la organización de tareas",
    techList: ["HTML", "CSS", "JavaScript", "NodeJS", "MySQL", "Express"],
    imageSrc: "/assets/img/todo.jpg",
  },
  {
    id: "chat-realtime",
    title: "CHAT REAL-TIME",
    description: "Chat en tiempo real usando WebSockets con Socket.IO.",
    techList: ["HTML", "CSS", "JavaScript", "NodeJS", "Socket.io"],
    imageSrc: "/assets/img/chat.jpg",
  },
];

export const technologies = [
  {
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ico: javascript,
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    ico: typescript,
  },
  {
    title: "HTML",
    href: "https://html.com/",
    ico: html,
  },
  {
    title: "CSS3",
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
    ico: css,
  },
  {
    title: "React",
    href: "https://react.dev/",
    ico: react,
  },
  {
    title: "NodeJS",
    href: "https://nodejs.org/es",
    ico: nodejs,
  },
  {
    title: "MySQL",
    href: "https://www.mysql.com/",
    ico: mysql,
  },
];


export const contactInfo = [
  {
    platform : "GitHub",
    href : "https://github.com/SantiagoDevX",
    ico : github
  },
  {
    platform : "WhatsApp",
    href : "https://github.com/SantiagoDevX",
    ico : whatsapp
  },
  {
    platform : "LinKedin",
    href : "https://github.com/SantiagoDevX",
    ico : linkedin
  },
]