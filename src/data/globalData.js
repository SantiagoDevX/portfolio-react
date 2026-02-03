// SVG IMPORTATIONS
// Technologies
import html from "../assets/img/technologies/HTML5.svg";
import nodejs from "../assets/img/technologies/Node.js.svg";
import javascript from "../assets/img/technologies/JavaScript.svg";
import mysql from "../assets/img/technologies/MySQL.svg";
import react from "../assets/img/technologies/react.svg";
import css from "../assets/img/technologies/CSS3.svg";
import postgresql from "../assets/img/technologies/PostgresSQL.svg";
import docker from "../assets/img/technologies/Docker.svg";
import typescript from "../assets/img/technologies/typescript.svg";

// Social Icons
import github from "../assets/img/social/github.svg";
import linkedin from "../assets/img/social/linkedin.svg";
import whatsapp from "../assets/img/social/whatsapp.svg";

export const projectList = [
  {
    id: "ecommerce-fullstack",
    title: "E-Commerce Full Stack",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos integrado, autenticación de usuarios y panel administrativo. Incluye gestión de productos, órdenes y seguimiento de inventario.",
    techList: ["React", "TypeScript", "NodeJS", "MySQL", "Express", "JWT"],
    imageSrc: "/assets/img/ecommerce.jpg",
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/SantiagoDevX/ecommerce-fullstack",
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "Dashboard de Analytics",
    description:
      "Dashboard interactivo para visualización de datos en tiempo real con gráficos dinámicos, filtros avanzados y reportes exportables. Ideal para análisis de métricas de negocio y KPIs.",
    techList: ["React", "TypeScript", "Chart.js", "NodeJS", "MySQL"],
    imageSrc: "/assets/img/dashboard.jpg",
    demoUrl: "https://demo-dashboard.example.com",
    githubUrl: "https://github.com/SantiagoDevX/analytics-dashboard",
    featured: true,
  },
  {
    id: "social-network",
    title: "Red Social Interactiva",
    description:
      "Plataforma social con sistema de posts, comentarios, likes, seguimiento de usuarios y chat en tiempo real. Incluye subida de imágenes y notificaciones instantáneas.",
    techList: ["React", "NodeJS", "Socket.io", "MySQL", "Express", "JWT"],
    imageSrc: "/assets/img/social-app.jpg",
    demoUrl: "https://demo-social.example.com",
    githubUrl: "https://github.com/SantiagoDevX/social-network",
    featured: true,
  },
  {
    id: "api-rest-documented",
    title: "API REST con Documentación",
    description:
      "API RESTful robusta con documentación Swagger/OpenAPI, autenticación JWT, validaciones completas, manejo de errores y tests automatizados. Implementa mejores prácticas de desarrollo.",
    techList: ["NodeJS", "Express", "MySQL", "Swagger", "Jest", "TypeScript"],
    imageSrc: "/assets/img/api-documented.jpg",
    githubUrl: "https://github.com/SantiagoDevX/api-rest-documented",
    featured: false,
  },
  {
    id: "auth-system",
    title: "Sistema de Autenticación",
    description:
      "Sistema completo de autenticación y autorización con registro, login, recuperación de contraseña, verificación por email, roles de usuario y protección de rutas.",
    techList: ["React", "NodeJS", "JWT", "MySQL", "Express", "bcrypt"],
    imageSrc: "/assets/img/auth-system.jpg",
    demoUrl: "https://demo-auth.example.com",
    githubUrl: "https://github.com/SantiagoDevX/auth-system",
    featured: false,
  },
  {
    id: "task-manager",
    title: "Gestor de Tareas Avanzado",
    description:
      "Aplicación de gestión de tareas con funcionalidades avanzadas: prioridades, etiquetas, fechas límite, tableros Kanban, colaboración en equipo y notificaciones.",
    techList: ["React", "TypeScript", "NodeJS", "MySQL", "Socket.io"],
    imageSrc: "/assets/img/task-manager.jpg",
    demoUrl: "https://demo-tasks.example.com",
    githubUrl: "https://github.com/SantiagoDevX/task-manager",
    featured: false,
  },
];

export const technologies = [
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ico: javascript,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    ico: typescript,
  },
  {
    name: "HTML5",
    href: "https://html.com/",
    ico: html,
  },
  {
    name: "CSS3",
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
    ico: css,
  },
  {
    name: "React",
    href: "https://react.dev/",
    ico: react,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/es",
    ico: nodejs,
  },
  {
    name: "MySQL",
    href: "https://www.mysql.com/",
    ico: mysql,
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    ico: postgresql,
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
    ico: docker,
  },
];

export const contactInfo = [
  {
    platform: "GitHub",
    href: "https://github.com/SantiagoDevX",
    ico: github,
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/santiago-dev/", // Actualiza con tu LinkedIn real
    ico: linkedin,
  },
  {
    platform: "WhatsApp",
    href: "https://wa.me/1234567890", // Actualiza con tu número real
    ico: whatsapp,
  },
];
