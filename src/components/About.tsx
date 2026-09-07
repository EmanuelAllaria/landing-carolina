import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section
      id="quienes-somos"
      aria-labelledby="about-heading"
      className="section-pad"
    >
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-blue uppercase">
            Quiénes somos
          </p>
          <h2
            id="about-heading"
            className="font-display mt-3 max-w-3xl text-3xl font-semibold text-navy text-balance sm:text-4xl"
          >
            {site.about.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {site.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <aside className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-blue to-light-blue p-6 text-white shadow-xl sm:p-8">
              <div
                className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10"
                aria-hidden
              />
              <p className="font-display relative text-xl font-semibold leading-snug sm:text-2xl">
                Enfoque práctico. Sistemas que funcionan en la práctica.
              </p>
              <ul className="relative mt-6 space-y-3 text-sm text-white/90 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  Sistemas de gestión e ISO
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  Metrología y mediciones confiables
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  Seguridad e higiene laboral
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  Inspecciones y tramitaciones ADA
                </li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
