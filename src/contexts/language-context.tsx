import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "pt" | "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero Section
    "hero.title":
      "José Rocha: Desenvolvedor Web Transformando Ideias em Experiências Digitais",
    "hero.subtitle":
      "Criando aplicações web modernas, responsivas e escaláveis.",
    "hero.cta": "Veja meus projetos",

    // About Section
    "about.title": "Sobre Mim",
    "about.description":
      "Desenvolvedor web apaixonado por tecnologia e fascinado por desafios de baixo nível, como o desenvolvimento de emuladores. Essa curiosidade por otimização e performance se reflete na minha maneira de criar soluções digitais inovadoras e eficientes, buscando sempre a excelência em cada projeto que assumo.",
    "about.skills": "Principais Habilidades",

    // Projects Section
    "projects.title": "Meus Projetos",
    "projects.viewRepo": "Ver Repositório",
    "projects.viewDemo": "Ver Deploy",
    "projects.viewMore": "Ver mais projetos",
    "projects.viewLess": "Ver menos",

    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.media.title": "Conecte-se comigo",
    "contact.media.description":
      "Vamos trabalhar juntos para criar algo incrível!",

    // Contact Form Errors
    "contact.error.nameRequired": "O nome é obrigatório",
    "contact.error.emailInvalid": "Endereço de e-mail inválido",
    "contact.error.messageRequired": "A mensagem é obrigatória",

    // Footer
    "footer.rights": `© ${new Date().getFullYear()}  José Rocha. Todos os direitos reservados.`,
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title":
      "José Rocha: Web Developer Transforming Ideas into Digital Experiences",
    "hero.subtitle":
      "Creating modern, responsive and scalable web applications.",
    "hero.cta": "View my projects",

    // About Section
    "about.title": "About Me",
    "about.description":
      "I am a web developer passionate about technology and fascinated by low-level challenges, such as emulator development. This curiosity for optimization and performance is reflected in how I create innovative and efficient digital solutions, always striving for excellence in every project I undertake.",
    "about.skills": "Main Skills",

    // Projects Section
    "projects.title": "My Projects",
    "projects.viewRepo": "View Repository",
    "projects.viewDemo": "View Demo",
    "projects.viewMore": "View more projects",
    "projects.viewLess": "View less",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.media.title": "Connect with me",
    "contact.media.description":
      "Let's work together to create something amazing!",

    // Contact Form Errors
    "contact.error.nameRequired": "Name is required",
    "contact.error.emailInvalid": "Invalid email address",
    "contact.error.messageRequired": "Message is required",

    // Footer
    "footer.rights": `© ${new Date().getFullYear()} José Rocha. All rights reserved.`,
  },
  es: {
    // Header
    "nav.about": "Acerca",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title":
      "José Rocha: Desarrollador Web Transformando Ideas en Experiencias Digitales",
    "hero.subtitle":
      "Creación de aplicaciones web modernas, responsivas y escalables.",
    "hero.cta": "Ver mis proyectos",

    // About Section
    "about.title": "Sobre Mí",
    "about.description":
      "Soy un desarrollador web apasionado por la tecnología y fascinado por los desafíos de bajo nivel, como el desarrollo de emuladores. Esta curiosidad por la optimización y el rendimiento se refleja en mi forma de crear soluciones digitales innovadoras y eficientes, buscando siempre la excelencia en cada proyecto que asumo.",
    "about.skills": "Principales Habilidades",

    // Projects Section
    "projects.title": "Mis Proyectos",
    "projects.viewRepo": "Ver Repositorio",
    "projects.viewDemo": "Ver Demo",
    "projects.viewMore": "Ver más proyectos",
    "projects.viewLess": "Ver menos",

    // Contact Section
    "contact.title": "Ponte en Contacto",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar Mensaje",
    "contact.media.title": "Conéctate conmigo",
    "contact.media.description":
      "¡Trabajemos juntos para crear algo increíble!",

    // Contact Form Errors
    "contact.error.nameRequired": "El nombre es obligatorio",
    "contact.error.emailInvalid": "Dirección de correo electrónico no válida",
    "contact.error.messageRequired": "El mensaje es obligatorio",

    // Footer
    "footer.rights": `© ${new Date().getFullYear()}  José Rocha. Todos los derechos reservados.`,
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
