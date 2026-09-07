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
            className="font-display mt-3 max-w-3xl text-3xl font-semibold text-navy sm:text-4xl"
          >
            {safety.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[4/3]">
              <Image
                src="/safety.jpg"
                alt="Entorno de obra y trabajo seguro con foco en prevención de riesgos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
          </Reveal>
          <Reveal>
            <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">
              {safety.integral.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {safety.integral.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {safety.integral.highlights.map((item) => (
                <span
                  key={item}
                  className="w-fit border-b-2 border-light-blue pb-1 text-sm font-semibold text-navy"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <h3 className="text-base font-bold text-navy sm:text-lg">
            Nuestro servicio incluye
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

        <Reveal className="mt-12 overflow-hidden rounded-2xl bg-navy px-5 py-8 text-white sm:mt-16 sm:px-10 sm:py-10">
          <h3 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">
            {safety.construction.title}
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            {safety.construction.description}
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h4 className="text-base font-bold text-light-blue sm:text-lg">
                {safety.construction.programTitle}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                {safety.construction.programLead}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {safety.construction.programBody}
              </p>
            </div>
            <ul className="space-y-2.5">
              {safety.construction.includes.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-white/90">
                  <span className="shrink-0 text-light-blue">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
