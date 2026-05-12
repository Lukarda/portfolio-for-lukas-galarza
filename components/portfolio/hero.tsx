"use client"

import Image from "next/image"
import { MapPin, ChevronDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse"
        aria-hidden="true"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* Avatar */}
        <div className="animate-fade-up mb-8 relative">
          <div className="absolute -inset-1 rounded-full bg-primary/20 blur-md animate-glow-pulse" aria-hidden="true" />
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary/30 md:h-36 md:w-36">
            <Image
              src="/images/luka.jpg"
              alt="Foto de perfil de Lukas Galarza"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 112px, 144px"
            />
          </div>
        </div>

        {/* Status badge */}
        <div className="animate-fade-up animation-delay-100 mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponible para trabajar
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-up animation-delay-200 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          Lukas Galarza
        </h1>

        {/* Title with code aesthetics */}
        <p className="animate-fade-up animation-delay-300 mt-4 font-mono text-sm text-primary md:text-base">
          {"< Analista de Sistemas / Developer >"}
        </p>

        {/* Description */}
        <p className="animate-fade-up animation-delay-400 mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Estudiante de tercer año en Escuela Da Vinci. Enfocado en desarrollo de software e infraestructura cloud.
        </p>

        {/* Location */}
        <div className="animate-fade-up animation-delay-500 mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Buenos Aires, Argentina</span>
        </div>

        {/* Social links */}
        <div className="animate-fade-up animation-delay-600 mt-8 flex items-center gap-3">
          <a
            href="https://github.com/Lukarda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-md hover:shadow-primary/5"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/lukas-galarza/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-md hover:shadow-primary/5"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:lgalarza145@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-md hover:shadow-primary/5"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-up animation-delay-700 mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/20"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:shadow-md"
          >
            Contactame
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll hacia abajo"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
