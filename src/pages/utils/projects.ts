interface IProject {
  title: string;
  description: {
    pt: string;
    en: string;
    es: string;
  };
  image: string;
  technologies: string[];
  repoUrl: string;
  demoUrl: string;
}

export const projects: IProject[] = [
  {
    title: "Link-up",
    description: {
      pt: "Uma aplicação de videoconferência em tempo real para criar e participar de salas de reunião virtuais de forma simples e rápida.",
      en: "A real-time video conferencing application to create and join virtual meeting rooms easily and quickly.",
      es: "Una aplicación de videoconferencia en tiempo real para crear y unirse a salas de reuniones virtuales de forma sencilla y rápida.",
    },
    image:
      "https://github.com/joserochadev/link-up/blob/main/apps/web/public/link-up.png?raw=true",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Fastify",
      "Shadcn-ui",
    ],
    repoUrl: "https://github.com/joserochadev/link-up",
    demoUrl: "https://github.com/joserochadev/link-up",
  },
  {
    title: "EchoSub",
    description: {
      pt: "É uma aplicação em Python que gera automaticamente legendas para vídeos usando o modelo Whisper da OpenAI, com interface gráfica simples em Tkinter.",
      en: "It's a Python application that automatically generates subtitles for videos using OpenAI's Whisper model, with a simple Tkinter GUI.",
      es: "Es una aplicación en Python que genera automáticamente subtítulos para videos utilizando el modelo Whisper de OpenAI, con una interfaz gráfica simple en Tkinter.",
    },
    image:
      "https://github.com/joserochadev/echosub/blob/master/public/echosub.png?raw=true",
    technologies: ["Python", "Tkinter", "OpenAI Whisper"],
    repoUrl: "https://github.com/joserochadev/echosub",
    demoUrl: "https://github.com/joserochadev/echosub",
  },
  {
    title: "EmuChan",
    description: {
      en: "EmuChan is a Game Boy DMG emulator written in Rust, focused on learning and exploring hardware emulation.",
      pt: "EmuChan é um emulador de Game Boy DMG escrito em Rust, focado em aprender e explorar a emulação de hardware.",
      es: "EmuChan es un emulador de Game Boy DMG escrito en Rust, enfocado en aprender y explorar la emulación de hardware.",
    },
    image: "/public/projects/images/emuchan.png",
    technologies: ["Rust", "SDL2"],
    repoUrl: "https://github.com/joserochadev/EmuChan",
    demoUrl: "https://github.com/joserochadev/EmuChan",
  },
  {
    title: "Books API",
    description: {
      pt: "Uma API RESTful para gerenciar livros com funcionalidades de CRUD.",
      en: "A RESTful API to manage books with CRUD functionalities.",
      es: "Una API RESTful para gestionar libros con funcionalidades CRUD.",
    },
    image: "/public/projects/images/books-api.png",
    technologies: ["Python", "Django", "Django REST Framework", "sqlite"],
    repoUrl: "https://github.com/joserochadev/books-api",
    demoUrl: "https://github.com/joserochadev/books-api",
  },
  {
    title: "Polls",
    description: {
      pt: "Uma aplicação de enquetes simples para criar e participar de enquetes em tempo real.",
      en: "A simple polls application to create and participate in real-time polls.",
      es: "Una aplicación de encuestas simple para crear y participar en encuestas en tiempo real.",
    },
    image: "/public/projects/images/poll.png",
    technologies: ["Node.js", "Fastify", "Socket.IO", "TypeScript"],
    repoUrl: "https://github.com/joserochadev/Polls",
    demoUrl: "https://github.com/joserochadev/Polls",
  },
  {
    title: "Pass-in",
    description: {
      pt: "O pass.in é uma aplicação de gestão de participantes em eventos presenciais.",
      en: "Pass.in is an application for managing participants in in-person events.",
      es: "Pass.in es una aplicación para gestionar participantes en eventos presenciales.",
    },
    image: "/public/projects/images/pass-in.png",
    technologies: [
      "Node.js",
      "Fastify",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Zod",
    ],
    repoUrl: "https://github.com/joserochadev/pass-in",
    demoUrl: "https://github.com/joserochadev/pass-in",
  },
  {
    title: "DT Money",
    description: {
      pt: "Uma aplicação de controle financeiro pessoal para gerenciar receitas e despesas.",
      en: "A personal finance management application to track income and expenses.",
      es: "Una aplicación de gestión financiera personal para rastrear ingresos y gastos.",
    },
    image: "/public/projects/images/dt-money.png",
    technologies: ["React", "TypeScript", "Vite", "Styled Components"],
    repoUrl: "https://github.com/joserochadev/dt-money",
    demoUrl: "https://dt-money-three-omega.vercel.app/",
  },
  {
    title: "Chip8 Emulator",
    description: {
      pt: "Um emulador de Chip8 contruido com html, css e javascript.",
      en: "A Chip8 emulator built with html, css and javascript.",
      es: "Un emulador de Chip8 creado con html, css y javascript.",
    },
    image: "/public/projects/images/chip8.png",
    technologies: ["html", "css", "JavaScript"],
    repoUrl: "https://github.com/joserochadev/chip8Emulator",
    demoUrl: "https://github.com/joserochadev/chip8Emulator",
  },
  {
    title: "Coffee Delivery",
    description: {
      pt: "Uma aplicação de delivery de café, onde é possível fazer pedidos e gerenciar o carrinho.",
      en: "A coffee delivery application where you can place orders and manage the cart.",
      es: "Una aplicación de entrega de café donde puedes hacer pedidos y gestionar el carrito.",
    },
    image:
      "https://github.com/joserochadev/coffee-delivery/raw/master/public/coffe-delivery.png?raw=true",
    technologies: ["React", "TypeScript", "Vite", "Styled Components"],
    repoUrl: "https://github.com/joserochadev/coffee-delivery",
    demoUrl: "https://joserochadev.github.io/coffee-delivery/",
  },
  {
    title: "NLW eSports",
    description: {
      pt: "Uma aplicação para encontrar e criar duplas para jogar games online.",
      en: "An application to find and create pairs to play online games.",
      es: "Una aplicación para encontrar y crear parejas para jugar juegos en línea.",
    },
    image:
      "https://user-images.githubusercontent.com/92328683/200575563-c6250d14-8092-4ef3-a8d4-c1c4f152fde3.png?raw=true",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Vite",
      "Styled Components",
    ],
    repoUrl: "https://github.com/joserochadev/NLW_eSports",
    demoUrl: "http://nlw-e-sports-ashen.vercel.app/",
  },
  {
    title: "Who is that Pokémon?",
    description: {
      pt: "Um jogo de adivinhação de Pokémon, onde você deve descobrir qual é o Pokémon da imagem.",
      en: "A Pokémon guessing game where you must guess which Pokémon is in the image.",
      es: "Un juego de adivinanza de Pokémon donde debes adivinar cuál es el Pokémon de la imagen.",
    },
    image:
      "https://user-images.githubusercontent.com/92328683/208701735-5385712a-1093-4541-a138-a8057cc1f043.png?raw=true",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    repoUrl: "https://github.com/joserochadev/who_is_that_pokemon",
    demoUrl: "http://who-is-that-pokemon-seven.vercel.app/",
  },
  {
    title: "GitHub Explorer",
    description: {
      pt: "Uma aplicação para explorar repositórios do GitHub, onde é possível buscar por usuários e visualizar seus repositórios.",
      en: "An application to explore GitHub repositories, where you can search for users and view their repositories.",
      es: "Una aplicación para explorar repositorios de GitHub, donde puedes buscar usuarios y ver sus repositorios.",
    },
    image:
      "https://user-images.githubusercontent.com/92328683/182242292-b31d6f17-abe0-43a1-84f8-db30876eb401.png?raw=true",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Styled Components",
      "GitHub API",
    ],
    repoUrl: "https://github.com/joserochadev/github_explorer",
    demoUrl: "http://github-explorer-lemon-pi.vercel.app/",
  },
];
