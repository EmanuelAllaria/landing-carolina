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
            className="font-display mt-2 max-w-3xl text-[1.65rem] leading-snug font-semibold text-navy text-balance sm:mt-3 sm:text-4xl"
          >
            Prefactibilidades, aptitudes y permisos ADA
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
            {ada.intro}
          </p>
        </Reveal>

        <ol className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
          {ada.steps.map((step) => (
            <Reveal key={step.step}>
              <li className="flex gap-3 rounded-xl bg-surface/80 p-3 sm:block sm:bg-transparent sm:p-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue to-navy text-base font-bold text-white sm:h-14 sm:w-14 sm:text-xl">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-wide text-navy uppercase sm:mt-4 sm:text-sm">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted sm:mt-2">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
