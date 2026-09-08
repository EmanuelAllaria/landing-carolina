"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-navy/10 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-navy/80 via-navy/45 to-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-3 py-2.5 sm:gap-4 sm:py-3">
        <a
          href="#inicio"
          className="relative z-10 flex min-w-0 items-center gap-2 sm:gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-mark.png"
            alt={`${site.name} — Calidad y Seguridad e Higiene`}
            width={80}
            height={46}
            className={`h-8 w-auto shrink-0 sm:h-10 ${
              solid ? "" : "rounded-sm bg-white/95 p-0.5"
            }`}
            priority
          />
          <span className="min-w-0">
            <span
              className={`block truncate text-sm font-bold tracking-tight ${
                solid ? "text-navy" : "text-white"
              }`}
            >
              {site.name}
            </span>
            <span
              className={`hidden text-[11px] font-medium min-[400px]:block ${
                solid ? "text-blue" : "text-light-blue"
              }`}
            >
              {site.claim}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Principal"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-2 py-2 text-[12px] font-medium whitespace-nowrap transition-colors 2xl:px-2.5 2xl:text-[13px] ${
                solid
                  ? "text-ink/80 hover:text-navy"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contacto"
            className={`hidden rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition md:inline-flex ${
              solid
                ? "bg-blue text-white hover:bg-navy"
                : "bg-light-blue text-navy hover:bg-white"
            }`}
          >
            Hablemos
          </a>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border transition sm:h-11 sm:w-11 xl:hidden ${
              solid
                ? "border-navy/15 bg-white text-navy"
                : "border-white/35 bg-white/15 text-white backdrop-blur-sm"
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-navy/10 bg-white xl:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="container-page flex flex-col gap-1 py-3 sm:py-4"
          aria-label="Móvil"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-base font-medium text-navy active:bg-surface"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 rounded-md bg-blue px-3 py-3 text-center text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Hablemos
          </a>
        </nav>
      </div>
    </header>
  );
}
