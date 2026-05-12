"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5 / CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "Express", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "REST APIs", level: 80 },
      { name: "Docker", level: 60 },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 60 },
      { name: "Git / GitHub", level: 85 },
      { name: "Linux", level: 70 },
      { name: "CI/CD", level: 55 },
      { name: "Networking", level: 65 },
      { name: "Terraform", level: 45 },
    ],
  },
  {
    label: "Soft Skills",
    skills: [
      { name: "Trabajo en equipo", level: 90 },
      { name: "Resolucion de problemas", level: 85 },
      { name: "Comunicacion", level: 80 },
      { name: "Aprendizaje rapido", level: 90 },
      { name: "Gestion del tiempo", level: 75 },
      { name: "Pensamiento critico", level: 80 },
    ],
  },
]

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  return (
    <section id="skills" ref={ref} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="font-mono text-xs font-medium text-primary">
            {"// 03. Skills"}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Tecnologias y habilidades
          </h2>
          <div
            className="mt-3 h-1 w-12 rounded-full bg-primary"
            aria-hidden="true"
          />
        </div>

        {/* Skills grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.label}
              className={`overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(catIdx + 1) * 150}ms` }}
            >
              {/* Category header (terminal style) */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-5 py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {category.label.toLowerCase().replace(/\s+/g, "-")}.config
                </span>
              </div>

              <div className="flex flex-col gap-4 p-5 md:p-6">
                <h3 className="font-mono text-sm font-semibold text-primary">
                  {`{${category.label}}`}
                </h3>
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-1.5 w-full overflow-hidden rounded-full bg-secondary"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name}: ${skill.level}%`}
                      >
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                          style={{
                            width: isInView ? `${skill.level}%` : "0%",
                            transitionDelay: `${(catIdx * 6 + skillCategories[catIdx].skills.indexOf(skill)) * 50 + 300}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
