import Image from "next/image";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="apropos" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
            {site.about.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight text-navy">
            {site.about.title}
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {site.about.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-navy/8 bg-white/70 px-4 py-3 text-sm font-medium text-navy shadow-sm backdrop-blur"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-deep">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-teal-deep"
          >
            Suivre sur Instagram {site.instagramHandle}
            <ArrowIcon />
          </a>
        </div>

        <div className="relative">
          {/* Decorative blobs */}
          <div
            className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-teal/15 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-6 right-4 h-32 w-32 rounded-full bg-teal/10 blur-2xl"
            aria-hidden
          />

          {/* Portrait photo */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_32px_80px_-24px_rgba(8,40,72,0.40)]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/hanane.png"
                alt="PT. Hanane Harrouss – HRStherapy"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
            </div>

            {/* Info badge over photo */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7">
              <p className="font-display text-xl font-semibold text-white">
                {site.practitioner}
              </p>
              <p className="mt-1 text-sm text-white/75">
                {site.tagline} · {site.city}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {site.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Formations card below photo */}
          <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-navy/8 bg-white p-5 shadow-[0_8px_32px_-8px_rgba(8,40,72,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">
              Formations
            </p>
            <ul className="mt-3 space-y-2">
              {site.formations.map((formation) => (
                <li
                  key={formation.title}
                  className="rounded-xl bg-mist px-4 py-3 transition hover:bg-sand"
                >
                  <p className="font-display text-sm font-semibold text-navy">
                    {formation.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{formation.school}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M5 12.5 9.5 17 19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
