import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[min(100svh,820px)] items-end overflow-hidden sm:min-h-[100svh]"
    >
      <Image
        src="/hero.jpg"
        alt="Profesional trabajando en un entorno industrial con foco en calidad y procesos"
        fill
        priority
        className="object-cover object-[center_28%] sm:object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/78 to-navy/92 sm:bg-gradient-to-r sm:from-navy/92 sm:via-navy/78 sm:to-blue/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-navy/30"
        aria-hidden
      />

      <div className="container-page relative z-10 w-full pt-24 pb-10 sm:pt-36 sm:pb-16 md:pb-20">
        <div className="hero-animate max-w-2xl text-white sm:max-w-3xl">
          <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <Image
              src="/logo-mark.png"
              alt="Logo ALConsulting"
              width={160}
              height={92}
              className="h-11 w-auto shrink-0 drop-shadow-lg sm:h-14 md:h-16"
              priority
            />
            <div className="min-w-0">
              <p className="font-display text-xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                {site.name}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-light-blue sm:text-sm md:text-base">
                {site.claim}
              </p>
            </div>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-[1.65rem] leading-[1.15] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {site.hero.headline}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-lg md:text-xl">
            {site.hero.support}
          </p>
          <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href="#contacto"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-light-blue px-5 py-3 text-base font-semibold text-navy transition hover:bg-white hover:shadow-lg sm:w-auto sm:px-6 sm:py-3.5"
            >
              {site.hero.cta}
            </a>
            <a
              href="#quienes-somos"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto sm:px-6 sm:py-3.5"
            >
              Conocenos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
