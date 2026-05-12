"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { GraduationCap, Target, Users, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Formacion",
    description: "3er año de Analista de Sistemas en Escuela Da Vinci",
  },
  {
    icon: Target,
    title: "Enfoque",
    description: "Desarrollo de software y gestion de infraestructura cloud",
  },
  {
    icon: Users,
    title: "Trabajo en equipo",
    description: "Compromiso con los objetivos del equipo y colaboracion activa",
  },
  {
    icon: Lightbulb,
    title: "Aprendizaje continuo",
    description: "Resolución eficiente de problemas y constante evolucion",
  },
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="font-mono text-xs font-medium text-primary">
            {"// 01. Sobre mi"}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Conoce un poco mas sobre mi
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden="true" />
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Text */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
            {/* Terminal-style about card */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-destructive/60" />
                  <span className="h-3 w-3 rounded-full bg-chart-4/60" />
                  <span className="h-3 w-3 rounded-full bg-primary/60" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">about-me.md</span>
              </div>
              <div className="p-6 md:p-8">
                <p className="leading-relaxed text-muted-foreground">
                  Soy estudiante de tercer año de la carrera de Analista de Sistemas en la Escuela Da Vinci.
                  Poseo una fuerte motivacion por incorporarme a un equipo tecnico donde pueda aplicar mis
                  conocimientos en desarrollo de software y gestion de infraestructura de nube.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Mi enfoque esta en el aprendizaje continuo, el compromiso con los objetivos del equipo
                  y la resolucion eficiente de problemas. Siempre buscando nuevas tecnologias y metodologias
                  que me permitan crecer como profesional.
                </p>
                <div className="mt-6 flex items-center gap-2 font-mono text-sm text-primary">
                  <span className="animate-pulse" aria-hidden="true">{">"}</span>
                  <span>Listo para nuevos desafios_</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`group rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 ${
                    isInView ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${(i + 3) * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
