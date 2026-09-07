import Image from "next/image";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="container-page flex flex-col gap-8 py-8 sm:py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-3">
          <Image
            src="/logo.png"
            alt="AL Consulting"
            width={52}
            height={52}
            className="h-11 w-11 shrink-0 rounded-md bg-white object-contain p-1 sm:h-12 sm:w-12"
          />
          <div className="min-w-0">
            <p className="font-display text-lg font-semibold sm:text-xl">
              AL Consulting
            </p>
            <p className="mt-1 text-sm text-light-blue">{site.claim}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block break-all text-sm text-white/80 hover:text-white"
            >
              {site.email}
            </a>
          </div>
        </div>

        <nav
          aria-label="Pie de página"
          className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-1 lg:text-right"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/75 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-4 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.legalName}. Todos los derechos reservados.
          </p>
          <p>Consultoría en calidad, metrología y seguridad e higiene.</p>
        </div>
      </div>
    </footer>
  );
}
