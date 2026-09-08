import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const serviceIcons = [
  <svg
    key="cap"
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6 sm:h-7 sm:w-7"
    aria-hidden
  >
    <path
      d="M12 3 2 8l10 5 10-5-10-5Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <path
      d="M5 10.5V16c0 1.5 3.1 3 7 3s7-1.5 7-3v-5.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>,
  <svg
    key="gear"
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6 sm:h-7 sm:w-7"
    aria-hidden
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
    <path
      d="M12 2.5v2.2M12 19.3v2.2M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2.5 12h2.2M19.3 12h2.2M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>,
  <svg
    key="chart"
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6 sm:h-7 sm:w-7"
    aria-hidden
  >
    <path
      d="M4 19V5M4 19h16"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      d="M8 15v-3M12 15V8M16 15v-6"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>,
];

const iconColors = [
  "bg-rose-100 text-rose-600",
  "bg-orange-100 text-orange-600",
  "bg-teal-100 text-teal-700",
] as const;

export function Quality() {
  const { quality } = site;

  return (
    <section
      id="calidad"
      aria-labelledby="quality-heading"
      className="section-pad bg-gradient-to-b from-surface to-white"
    >
      <div className="container-page">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[4/3] sm:rounded-2xl">
              <Image
                src="/calidad.jpg"
                alt="Procesos de calidad y gestión en entorno profesional"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
          </Reveal>
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.14em] text-blue uppercase">
              Calidad
            </p>
            <h2
              id="quality-heading"
              className="font-display mt-2 text-[1.65rem] leading-snug font-semibold text-navy text-balance sm:mt-3 sm:text-4xl"
            >
              {quality.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
              {quality.intro}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10 sm:mt-12">
          <h3 className="font-display text-center text-lg font-semibold text-navy sm:text-2xl">
            Normas que implementamos
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-4">
            {quality.norms.map((norm) => (
              <article
                key={norm.code}
                className="border-t-4 border-blue bg-white/80 pt-4 pb-1 sm:px-1 sm:pt-5"
              >
                <p className="text-base font-bold text-navy sm:text-xl">
                  {norm.code}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-blue sm:mt-1 sm:text-sm">
                  {norm.name}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:mt-3 sm:text-sm">
                  {norm.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 sm:mt-16">
          <h3 className="font-display text-center text-lg font-semibold text-navy sm:text-2xl">
            ¿Cómo te acompañamos?
          </h3>
          <ol className="mt-6 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
            {quality.stages.map((stage) => (
              <li
                key={stage.step}
                className="flex gap-3 rounded-xl bg-white/70 p-3 sm:block sm:bg-transparent sm:p-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white sm:mb-4 sm:h-12 sm:w-12 sm:text-lg">
                  {stage.step}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy sm:text-lg">
                    {stage.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {stage.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-12 sm:mt-16">
          <h3 className="font-display text-center text-lg font-semibold text-navy sm:text-2xl">
            {quality.servicesHeading}
          </h3>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-blue" aria-hidden />
          <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0">
            {quality.services.map((service, index) => (
              <article
                key={service.title}
                className="w-[min(85vw,300px)] shrink-0 snap-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/8 sm:w-auto sm:p-7"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14 ${iconColors[index]}`}
                >
                  {serviceIcons[index]}
                </div>
                <h4 className="mt-4 text-base font-bold text-navy sm:mt-5 sm:text-xl">
                  {service.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-snug text-ink/85"
                    >
                      <span className="shrink-0 text-blue">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center sm:mt-10">
            <a
              href="#contacto"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-blue px-5 py-3 text-center text-base font-semibold text-white transition hover:bg-navy sm:w-auto sm:px-6 sm:py-3.5"
            >
              {quality.servicesCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
