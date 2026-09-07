import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Inspections() {
  const { inspections } = site;

  return (
    <section
      id="inspecciones"
      aria-labelledby="inspections-heading"
      className="section-pad bg-surface"
    >
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-blue uppercase">
            Inspecciones
          </p>
          <h2
            id="inspections-heading"
            className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl"
          >
            {inspections.headline}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {inspections.description}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-3">
          {inspections.points.map((point, index) => (
            <Reveal key={point}>
              <article className="h-full border-l-4 border-blue bg-white/70 py-1 pl-4 sm:pl-5">
                <p className="text-sm font-bold tracking-wide text-blue">
                  0{index + 1}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/85 sm:text-base">
                  {point}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <a
            href="#contacto"
            className="inline-flex w-full items-center justify-center rounded-md bg-blue px-6 py-3.5 text-base font-semibold text-white transition hover:bg-navy sm:w-auto"
          >
            {inspections.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
