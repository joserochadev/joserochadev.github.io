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
import { projects } from "./utils/projects";
import { useState } from "react";

const INITIAL_VISIBLE_COUNT = 4;

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  function toggleVisibleProjects() {
    setVisibleCount((prevCount) =>
      prevCount === INITIAL_VISIBLE_COUNT
        ? projects.length
        : INITIAL_VISIBLE_COUNT
    );
  }

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          {t("projects.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <Card
              key={index}
              className="group p-0 pb-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-background/60 backdrop-blur"
              style={{ animationDelay: `${index * 150}ms` }}
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

        {projects.length > INITIAL_VISIBLE_COUNT && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={toggleVisibleProjects}
              className="bg-[#6900FF] hover:bg-[#5500CC]"
            >
              {visibleCount === projects.length
                ? t("projects.viewLess")
                : t("projects.viewMore")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
