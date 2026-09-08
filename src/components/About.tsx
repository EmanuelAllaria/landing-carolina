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
            className="font-display mt-3 max-w-3xl text-[1.65rem] leading-snug font-semibold text-navy text-balance sm:text-4xl"
          >
            {site.about.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
            {site.about.lead}
          </p>
        </Reveal>

        <Reveal className="mt-8 sm:mt-10">
          <aside className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-blue to-light-blue p-5 text-white shadow-xl sm:p-8">
            <div
              className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10"
              aria-hidden
            />
            <p className="font-display relative text-lg font-semibold leading-snug sm:text-2xl">
              {site.about.aside.lead}
            </p>
            <ul className="relative mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
              {site.about.aside.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-white/90 sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
