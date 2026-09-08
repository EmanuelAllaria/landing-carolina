import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Safety() {
  const { safety } = site;

  return (
    <section
      id="seguridad"
      aria-labelledby="safety-heading"
      className="section-pad"
    >
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-blue uppercase">
            Seguridad e Higiene
          </p>
          <h2
            id="safety-heading"
            className="font-display mt-2 text-[1.65rem] leading-snug font-semibold text-navy text-balance sm:mt-3 sm:text-4xl"
          >
            {safety.title}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[4/3] sm:rounded-2xl">
              <Image
                src="/safety.jpg"
                alt="Entorno industrial con foco en prevención de riesgos laborales"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
          </Reveal>
          <Reveal>
            <h3 className="font-display text-lg font-semibold text-navy sm:text-2xl">
              {safety.integral.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
              {safety.integral.lead}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted/90 sm:text-base">
              {safety.integral.legal}
            </p>
            <h4 className="mt-6 text-sm font-bold text-navy sm:mt-8 sm:text-lg">
              Nuestro servicio incluye
            </h4>
            <ul className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3">
              {safety.integral.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-snug text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-10 sm:mt-16">
          <div className="overflow-hidden rounded-xl bg-navy sm:rounded-2xl">
            <div className="relative aspect-[16/10] sm:aspect-[21/9] lg:hidden">
              <Image
                src="/construccion.jpg"
                alt="Seguridad e higiene en obra de construcción"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"
                aria-hidden
              />
            </div>

            <div className="grid lg:grid-cols-2 lg:items-stretch">
              <div className="px-4 py-6 text-white sm:px-10 sm:py-10">
                <h3 className="font-display text-lg font-semibold sm:text-2xl md:text-3xl">
                  {safety.construction.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-base">
                  {safety.construction.lead}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                  {safety.construction.body}
                </p>

                <h4 className="mt-6 text-sm font-bold text-light-blue sm:mt-8 sm:text-lg">
                  Nuestro servicio incluye
                </h4>
                <ul className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5">
                  {safety.construction.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-white/90">
                      <span className="shrink-0 text-light-blue">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative hidden min-h-[420px] lg:block">
                <Image
                  src="/construccion.jpg"
                  alt="Seguridad e higiene en obra de construcción"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
