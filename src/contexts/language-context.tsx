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
      "Especialista em criar aplicações web modernas e responsivas com React e Node.js",
    "hero.cta": "Veja meus projetos",

    // About Section
    "about.title": "Sobre Mim",
    "about.description":
      "Sou um desenvolvedor web apaixonado por tecnologia, com experiência em criar soluções digitais inovadoras. Medalha de ouro na Olimpíada de Tecnologia, sempre busco excelência em cada projeto que desenvolvo.",
    "about.skills": "Principais Habilidades",

    // Projects Section
    "projects.title": "Meus Projetos",
    "projects.viewRepo": "Ver Repositório",
    "projects.viewDemo": "Ver Deploy",

    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",

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
      "Specialist in creating modern and responsive web applications with React and Node.js",
    "hero.cta": "View my projects",

    // About Section
    "about.title": "About Me",
    "about.description":
      "I am a web developer passionate about technology, with experience in creating innovative digital solutions. Gold medal winner at the Technology Olympics, I always strive for excellence in every project I develop.",
    "about.skills": "Main Skills",

    // Projects Section
    "projects.title": "My Projects",
    "projects.viewRepo": "View Repository",
    "projects.viewDemo": "View Demo",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",

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
      "Especialista en crear aplicaciones web modernas y responsivas con React y Node.js",
    "hero.cta": "Ver mis proyectos",

    // About Section
    "about.title": "Sobre Mí",
    "about.description":
      "Soy un desarrollador web apasionado por la tecnología, con experiencia en crear soluciones digitales innovadoras. Medalla de oro en la Olimpiada de Tecnología, siempre busco la excelencia en cada proyecto que desarrollo.",
    "about.skills": "Principales Habilidades",

    // Projects Section
    "projects.title": "Mis Proyectos",
    "projects.viewRepo": "Ver Repositorio",
    "projects.viewDemo": "Ver Demo",

    // Contact Section
    "contact.title": "Ponte en Contacto",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",

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
