import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Ada() {
  const { ada } = site;

  return (
    <section id="ada" aria-labelledby="ada-heading" className="section-pad">
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-blue uppercase">
            Tramitaciones ADA
          </p>
          <h2
            id="ada-heading"
            className="font-display mt-3 max-w-3xl text-3xl font-semibold text-navy sm:text-4xl"
          >
            Prefactibilidades, aptitudes y permisos ADA
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {ada.intro}
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
          {ada.steps.map((step) => (
            <Reveal key={step.step}>
              <li className="text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue to-navy text-lg font-bold text-white sm:h-14 sm:w-14 sm:text-xl">
                  {step.step}
                </div>
                <h3 className="mt-4 text-xs font-bold tracking-wide text-navy uppercase sm:text-sm">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
