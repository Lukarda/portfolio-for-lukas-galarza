"use client"

import { useRef, useState, type FormEvent } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Send, Mail, MapPin, Github, Linkedin, ArrowUpRight, CheckCircle } from "lucide-react"

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Lukarda",
    handle: "@lukasgalarza",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lukas-galarza/",
    handle: "/in/lukasgalarza",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:lgalarza145@gmail.com",
    handle: "lgalarza145@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    href: "#",
    handle: "Buenos Aires, ARG",
  },
]

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    await fetch("https://formspree.io/f/xgodqkan", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })

    setSubmitted(true)
    form.reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-secondary/30" aria-hidden="true" />

      {/* Cartel de éxito */}
      {submitted && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-xl border border-primary/30 bg-card px-6 py-4 shadow-xl shadow-primary/10 animate-fade-up">
          <CheckCircle className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-foreground">¡Mensaje enviado con éxito!</span>
        </div>
      )}

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className={`mb-16 transition-all duration-700 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="font-mono text-xs font-medium text-primary">{"// 04. Contacto"}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">Hablemos</h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden="true" />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Si tenes un proyecto interesante, una oportunidad laboral o simplemente queres charlar sobre tecnologia, no dudes en escribirme.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-5 py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">new-message.tsx</span>
              </div>
              <div className="flex flex-col gap-5 p-6 md:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Nombre</label>
                    <input type="text" id="name" name="name" required placeholder="Tu nombre"
                      className="h-10 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input type="email" id="email" name="email" required placeholder="tu@email.com"
                      className="h-10 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Asunto</label>
                  <input type="text" id="subject" name="subject" required placeholder="Asunto del mensaje"
                    className="h-10 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Mensaje</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Escribi tu mensaje..."
                    className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <button type="submit" disabled={submitted}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60">
                  {submitted ? (<><CheckCircle className="h-4 w-4" />Enviado!</>) : (<><Send className="h-4 w-4" />Enviar mensaje</>)}
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-2">
            {socials.map((s, i) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href?.startsWith("http") ? "_blank" : undefined}
                  rel={s.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 ${isInView ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${(i + 3) * 100}ms` }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-foreground">{s.label}</span>
                    <p className="text-xs text-muted-foreground">{s.handle}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}