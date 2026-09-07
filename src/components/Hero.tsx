import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
    >
      <Image
        src="/hero.jpg"
        alt="Profesional trabajando en un entorno industrial con foco en calidad y procesos"
        fill
        priority
        className="object-cover object-[center_30%] sm:object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/75 to-navy/90 sm:bg-gradient-to-r sm:from-navy/92 sm:via-navy/78 sm:to-blue/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-navy/35"
        aria-hidden
      />

      <div className="container-page relative z-10 w-full pt-28 pb-12 sm:pt-36 sm:pb-16 md:pb-20">
        <div className="hero-animate max-w-3xl text-white">
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <Image
              src="/logo.png"
              alt="Logo AL Consulting"
              width={88}
              height={88}
              className="h-14 w-14 shrink-0 rounded-lg bg-white/95 object-contain p-1.5 shadow-lg sm:h-20 sm:w-20"
              priority
            />
            <div className="min-w-0">
              <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                AL Consulting
              </p>
              <p className="mt-0.5 text-xs font-medium text-light-blue sm:mt-1 sm:text-sm md:text-base">
                {site.claim}
              </p>
            </div>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-[1.85rem] leading-[1.15] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {site.hero.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-white/95 sm:mt-5 sm:text-lg md:text-xl">
            {site.hero.subheadline}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base md:text-lg">
            {site.hero.support}
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href="#contacto"
              className="inline-flex w-full items-center justify-center rounded-md bg-light-blue px-6 py-3.5 text-base font-semibold text-navy transition hover:bg-white hover:shadow-lg sm:w-auto"
            >
              {site.hero.cta}
            </a>
            <a
              href="#quienes-somos"
              className="inline-flex w-full items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              Conocenos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
