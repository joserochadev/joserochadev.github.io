import { createContext, useContext, useState, type ReactNode } from 'react'

export type Language = 'pt' | 'en' | 'es'

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
	t: (key: string) => string
}

const translations = {
	pt: {
		// Header
		'nav.about': 'Sobre',
		'nav.projects': 'Projetos',
		'nav.contact': 'Contato',

		// Hero Section
		'hero.title':
			'José Rocha: Desenvolvedor Web Transformando Ideias em Experiências Digitais',
		'hero.subtitle':
			'Criando aplicações web modernas, responsivas e escaláveis.',
		'hero.cta': 'Veja meus projetos',

		// About Section
		'about.title': 'Sobre Mim',
		'about.description':
			'Desenvolvedor web com foco no desenvolvimento de aplicações ponta a ponta, utilizando React, Next.js, TypeScript e Node.js. Atualmente finalizando a graduação em Ciência da Computação e atuando como Analista de Suporte Técnico. Meu diferencial está no engajamento com projetos de pesquisa voltados para acessibilidade web, buscando criar interfaces inclusivas que funcionem para todos os usuários. Essa combinação de desenvolvimento full-stack e consciência inclusiva me permite entregar soluções técnicas e humanizadas.',
		'about.skills': 'Principais Habilidades',

		// Projects Section
		'projects.title': 'Meus Projetos',
		'projects.viewRepo': 'Ver Repositório',
		'projects.viewDemo': 'Ver Deploy',
		'projects.viewMore': 'Ver mais projetos',
		'projects.viewLess': 'Ver menos',

		// Contact Section
		'contact.title': 'Entre em Contato',
		'contact.form.name': 'Nome',
		'contact.form.email': 'Email',
		'contact.form.message': 'Mensagem',
		'contact.form.send': 'Enviar Mensagem',
		'contact.media.title': 'Conecte-se comigo',
		'contact.media.description':
			'Vamos trabalhar juntos para criar algo incrível!',

		// Contact Form Errors
		'contact.error.nameRequired': 'O nome é obrigatório',
		'contact.error.emailInvalid': 'Endereço de e-mail inválido',
		'contact.error.messageRequired': 'A mensagem é obrigatória',

		// Footer
		'footer.rights': `© ${new Date().getFullYear()}  José Rocha. Todos os direitos reservados.`,
	},
	en: {
		// Header
		'nav.about': 'About',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',

		// Hero Section
		'hero.title':
			'José Rocha: Web Developer Transforming Ideas into Digital Experiences',
		'hero.subtitle':
			'Creating modern, responsive and scalable web applications.',
		'hero.cta': 'View my projects',

		// About Section
		'about.title': 'About Me',
		'about.description':
			'Web developer focused on end-to-end application development, using React, Next.js, TypeScript, and Node.js. Currently finishing a degree in Computer Science and working as a Technical Support Analyst. My key differentiator lies in my engagement with research projects focused on web accessibility, aiming to create inclusive interfaces that work for all users. This combination of full-stack development expertise and inclusive awareness allows me to deliver technical and human-centered solutions.',
		'about.skills': 'Main Skills',

		// Projects Section
		'projects.title': 'My Projects',
		'projects.viewRepo': 'View Repository',
		'projects.viewDemo': 'View Demo',
		'projects.viewMore': 'View more projects',
		'projects.viewLess': 'View less',

		// Contact Section
		'contact.title': 'Get in Touch',
		'contact.form.name': 'Name',
		'contact.form.email': 'Email',
		'contact.form.message': 'Message',
		'contact.form.send': 'Send Message',
		'contact.media.title': 'Connect with me',
		'contact.media.description':
			"Let's work together to create something amazing!",

		// Contact Form Errors
		'contact.error.nameRequired': 'Name is required',
		'contact.error.emailInvalid': 'Invalid email address',
		'contact.error.messageRequired': 'Message is required',

		// Footer
		'footer.rights': `© ${new Date().getFullYear()} José Rocha. All rights reserved.`,
	},
	es: {
		// Header
		'nav.about': 'Acerca',
		'nav.projects': 'Proyectos',
		'nav.contact': 'Contacto',

		// Hero Section
		'hero.title':
			'José Rocha: Desarrollador Web Transformando Ideas en Experiencias Digitales',
		'hero.subtitle':
			'Creación de aplicaciones web modernas, responsivas y escalables.',
		'hero.cta': 'Ver mis proyectos',

		// About Section
		'about.title': 'Sobre Mí',
		'about.description':
			'Desarrollador web enfocado en el desarrollo de aplicaciones de extremo a extremo, utilizando React, Next.js, TypeScript y Node.js. Actualmente estoy finalizando la carrera de Ciencias de la Computación y trabajando como Analista de Soporte Técnico. Mi diferencial radica en la participación en proyectos de investigación orientados a la accesibilidad web, buscando crear interfaces inclusivas que funcionen para todos los usuarios. Esta combinación de desarrollo full-stack y conciencia inclusiva me permite ofrecer soluciones técnicas y centradas en las personas.',
		'about.skills': 'Principales Habilidades',

		// Projects Section
		'projects.title': 'Mis Proyectos',
		'projects.viewRepo': 'Ver Repositorio',
		'projects.viewDemo': 'Ver Demo',
		'projects.viewMore': 'Ver más proyectos',
		'projects.viewLess': 'Ver menos',

		// Contact Section
		'contact.title': 'Ponte en Contacto',
		'contact.form.name': 'Nombre',
		'contact.form.email': 'Email',
		'contact.form.message': 'Mensaje',
		'contact.form.send': 'Enviar Mensaje',
		'contact.media.title': 'Conéctate conmigo',
		'contact.media.description':
			'¡Trabajemos juntos para crear algo increíble!',

		// Contact Form Errors
		'contact.error.nameRequired': 'El nombre es obligatorio',
		'contact.error.emailInvalid': 'Dirección de correo electrónico no válida',
		'contact.error.messageRequired': 'El mensaje es obligatorio',

		// Footer
		'footer.rights': `© ${new Date().getFullYear()}  José Rocha. Todos los derechos reservados.`,
	},
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>('pt')

	const t = (key: string): string => {
		return (
			translations[language][
				key as keyof (typeof translations)[typeof language]
			] || key
		)
	}

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
