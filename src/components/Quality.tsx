import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Quality() {
  const { quality } = site;

  return (
    <section
      id="calidad"
      aria-labelledby="quality-heading"
      className="section-pad bg-gradient-to-b from-surface to-white"
    >
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-blue uppercase">
            Calidad
          </p>
          <h2
            id="quality-heading"
            className="font-display mt-3 max-w-3xl text-3xl font-semibold text-navy sm:text-4xl"
          >
            {quality.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {quality.intro}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <h3 className="font-display text-center text-xl font-semibold text-navy sm:text-2xl">
            Normas que implementamos
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {quality.norms.map((norm) => (
              <article
                key={norm.code}
                className="border-t-4 border-blue bg-white/80 px-1 pt-5 pb-2 sm:last:col-span-2 md:last:col-span-1"
              >
                <p className="text-xl font-bold text-navy">{norm.code}</p>
                <p className="mt-1 text-sm font-semibold text-blue">{norm.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {norm.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h3 className="font-display text-center text-xl font-semibold text-navy sm:text-2xl">
            ¿Cómo te acompañamos?
          </h3>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {quality.stages.map((stage) => (
              <li key={stage.step}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-base font-bold text-white sm:h-12 sm:w-12 sm:text-lg">
                  {stage.step}
                </div>
                <h4 className="text-base font-bold text-navy sm:text-lg">
                  {stage.title}
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {stage.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-light-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-12 space-y-12 sm:mt-16 sm:space-y-14">
          {quality.services.map((service) => (
            <Reveal key={service.title}>
              <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {service.description}
                  </p>
                </div>
                <ul className="columns-1 gap-x-10 md:columns-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="mb-2.5 break-inside-avoid text-sm text-ink/85"
                    >
                      <span className="mr-2 inline-block text-blue">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
