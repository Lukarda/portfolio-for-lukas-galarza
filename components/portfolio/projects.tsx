"use client"

import Image from "next/image"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ExternalLink, Github, Folder } from "lucide-react"

const projects = [
  {
    title: "Trabajo Web Final",
    description: "Trabajo final de la materia Programación Web. Sitio web completo con HTML, CSS y JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Lukarda/TrabajowebFinal.github.io",
    live: "https://lukarda.github.io/TrabajowebFinal.github.io/",
    image: "/images/StyleSneakers.png",
  },
  {
    title: "Parcial 1 - Plataformas de Desarrollo",
    description: "Primer parcial de Plataformas de Desarrollo en Escuela Da Vinci.",
    tags: ["CSS", "JavaScript", "HTML"],
    github: "https://github.com/Lukarda/parcial-1-pd-acn4bv-galarza-salazar",
    live: null,
    image: "/images/BugLogweb.jpeg",
  },
  {
    title: "Final - Aplicaciones Móviles",
    description: "Parcial evolutivo de Aplicaciones Móviles en Escuela Da Vinci.",
    tags: ["Java", "Android"],
    github: "https://github.com/AnthonyNadsat/final-am-acn4bv-galarza-salazar",
    live: null,
    image: "/images/BugLogmobile.jpeg",
  },
  {
    title: "Yenny",
    description: "Proyecto Python de Análisis y Metodologías de Sistemas en Escuela Da Vinci.",
    tags: ["Python"],
    github: "https://github.com/Beeejs/Yenny",
    live: null,
    image: null,
  },
]

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-secondary/30"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div
          className={`mb-16 transition-all duration-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="font-mono text-xs font-medium text-primary">
            {"// 02. Proyectos"}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Trabajo seleccionado
          </h2>
          <div
            className="mt-3 h-1 w-12 rounded-full bg-primary"
            aria-hidden="true"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden bg-secondary">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-primary transition-transform duration-300 group-hover:scale-110">
                      <Folder className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.preview
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <div className="flex shrink-0 items-center gap-2">
                    
                     <a href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      aria-label={`Ver codigo de ${project.title} en GitHub`}
                      >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.live && (
                      
                        <a href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          aria-label={`Ver demo de ${project.title}`}
                          >
                          <ExternalLink className="h-4 w-4" />
                         </a>
                    )}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}