"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy/8 bg-background/85 shadow-[0_10px_40px_-24px_rgba(8,40,72,0.45)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="#accueil"
          className="group flex items-center gap-3"
          aria-label={`${site.brand} — accueil`}
        >
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-navy/5 ring-1 ring-teal/30 transition group-hover:ring-teal">
            <Image
              src="/logo-mark.png"
              alt=""
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[1.05rem] font-semibold tracking-tight text-navy">
              {site.brand}
            </span>
            <span className="hidden text-[0.7rem] font-medium tracking-wide text-muted sm:block">
              {site.practitioner}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-navy-muted transition hover:bg-teal/10 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-3.5 py-2 text-sm font-medium text-navy shadow-sm backdrop-blur md:inline-flex"
          >
            <PhoneIcon />
            {site.phone}
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_-14px_rgba(8,40,72,0.8)] transition hover:bg-navy-muted"
          >
            Prendre RDV
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white/80 text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-navy transition ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-5 rounded-full bg-navy transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-0.5 w-5 rounded-full bg-navy transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`fixed inset-0 top-[4.5rem] bg-navy/25 backdrop-blur-sm transition ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-4 top-[5rem] origin-top rounded-3xl border border-navy/8 bg-background p-5 shadow-2xl transition ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-2 scale-95 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-navy hover:bg-teal/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={site.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-teal px-4 py-3 text-sm font-semibold text-navy"
            onClick={() => setOpen(false)}
          >
            <PhoneIcon />
            Appeler {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 5.5c0-1.2.9-2.2 2.1-2.3l2.3-.2c.9-.1 1.7.4 2 1.2l.9 2.3c.3.7.1 1.5-.5 2l-1.2 1c1.2 2.2 3 4 5.2 5.2l1-1.2c.5-.6 1.3-.8 2-.5l2.3.9c.8.3 1.3 1.1 1.2 2l-.2 2.3c-.1 1.2-1.1 2.1-2.3 2.1C9.8 20.3 3.7 14.2 2.5 5.5Z"
      />
    </svg>
  );
}
