"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const { contact, email, phones } = site;
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const userEmail = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Consulta AL Consulting${company ? ` — ${company}` : ""}`,
    );
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${userEmail}\nEmpresa: ${company}\n\n${message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="section-pad bg-gradient-to-b from-surface-2 to-surface"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-blue uppercase">
            Contacto
          </p>
          <h2
            id="contact-heading"
            className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl"
          >
            {contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {contact.lead}
          </p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-xs font-semibold tracking-wide text-blue uppercase">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${email}`}
                  className="break-all text-base font-semibold text-navy transition hover:text-blue sm:text-lg"
                >
                  {email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-wide text-blue uppercase">
                Teléfono / WhatsApp
              </dt>
              <dd className="mt-2 flex flex-col gap-2">
                {phones.map((phone) => (
                  <div key={phone.tel} className="flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${phone.tel}`}
                      className="text-lg font-semibold text-navy hover:text-blue"
                    >
                      {phone.display}
                    </a>
                    <a
                      href={`https://wa.me/${phone.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue underline-offset-2 hover:underline"
                    >
                      WhatsApp
                    </a>
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-white/90 p-5 shadow-[0_20px_60px_-30px_rgba(10,58,98,0.45)] sm:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-sm font-medium text-navy">
                  {contact.form.name}
                </span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-md border border-navy/15 bg-surface px-3 py-2.5 text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-light-blue/40"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-sm font-medium text-navy">
                  {contact.form.email}
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-md border border-navy/15 bg-surface px-3 py-2.5 text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-light-blue/40"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-navy">
                  {contact.form.company}
                </span>
                <input
                  name="company"
                  autoComplete="organization"
                  className="w-full rounded-md border border-navy/15 bg-surface px-3 py-2.5 text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-light-blue/40"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-navy">
                  {contact.form.message}
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-md border border-navy/15 bg-surface px-3 py-2.5 text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-light-blue/40"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-blue px-5 py-3.5 text-base font-semibold text-white transition hover:bg-navy sm:w-auto"
            >
              {contact.form.submit}
            </button>
            {status === "sent" && (
              <p className="mt-3 text-sm text-muted" role="status">
                Se abrirá tu cliente de correo para enviar la consulta.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
