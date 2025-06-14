import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../contexts/language-context";

const projects = [
  {
    title: "E-commerce Platform",
    description: {
      pt: "Plataforma completa de e-commerce com painel administrativo, carrinho de compras e integração de pagamentos.",
      en: "A complete e-commerce platform with an admin panel, shopping cart, and payment integration.",
      es: "Plataforma completa de comercio electrónico con panel de administración, carrito de compras e integración de pagos.",
    },
    image:
      "https://kzmjzt9jymy069y1yukz.lite.vusercontent.net/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    repoUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Task Management App",
    description: {
      pt: "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real.",
      en: "A task management application with real-time collaboration features.",
      es: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.",
    },
    image:
      "https://kzmjzt9jymy069y1yukz.lite.vusercontent.net/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    repoUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: {
      pt: "Dashboard meteorológico com previsões detalhadas e visualizações interativas.",
      en: "A weather dashboard with detailed forecasts and interactive visualizations.",
      es: "Panel meteorológico con previsiones detalladas y visualizaciones interactivas.",
    },
    image:
      "https://kzmjzt9jymy069y1yukz.lite.vusercontent.net/placeholder.svg?height=300&width=400",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
    repoUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Social Media Analytics",
    description: {
      pt: "Ferramenta de análise de redes sociais com métricas avançadas e relatórios personalizados.",
      en: "A social media analytics tool with advanced metrics and custom reports.",
      es: "Herramienta de análisis de redes sociales con métricas avanzadas e informes personalizados.",
    },
    image:
      "https://kzmjzt9jymy069y1yukz.lite.vusercontent.net/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Python", "FastAPI", "Redis"],
    repoUrl: "#",
    demoUrl: "#",
  },
];

export function ProjectsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          {t("projects.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-background/60 backdrop-blur"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        {t("projects.viewRepo")}
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#6900FF] hover:bg-[#5500CC]"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        {t("projects.viewDemo")}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-heading">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description[language]}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-[#6900FF]/30 text-[#6900FF]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
