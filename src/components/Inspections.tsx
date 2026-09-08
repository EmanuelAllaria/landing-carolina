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
            className="font-display mt-2 text-[1.65rem] font-semibold text-navy sm:mt-3 sm:text-4xl"
          >
            {inspections.headline}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
            {inspections.description}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
          {inspections.points.map((point, index) => (
            <Reveal key={point}>
              <article className="h-full rounded-xl border-l-4 border-blue bg-white/80 py-3 pl-4 sm:rounded-none sm:bg-white/70 sm:py-1 sm:pl-5">
                <p className="text-sm font-bold tracking-wide text-blue">
                  0{index + 1}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/85 sm:mt-3 sm:text-base">
                  {point}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 sm:mt-10">
          <a
            href="#contacto"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-blue px-5 py-3 text-base font-semibold text-white transition hover:bg-navy sm:w-auto sm:px-6 sm:py-3.5"
          >
            {inspections.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
