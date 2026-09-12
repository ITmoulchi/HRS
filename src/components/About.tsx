import Image from "next/image";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="apropos" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-16">

        {/* BLOC 1 : À propos du cabinet HRStherapy */}
        <div className="overflow-hidden rounded-[1.75rem] border border-navy/8 bg-mist/50 shadow-[0_24px_60px_-32px_rgba(8,40,72,0.25)] backdrop-blur">
          <div className="grid items-center lg:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 flex flex-col justify-center p-8 sm:p-12 lg:order-1 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
                {site.about.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-navy">
                {site.about.cabinet.title}
              </h2>

              <p className="mt-5 text-base font-medium leading-relaxed text-navy-muted sm:text-lg">
                {site.about.cabinet.paragraphs[0]}
              </p>

              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {site.about.cabinet.paragraphs.slice(1).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {site.specialties.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-teal/20 bg-white/80 px-4 py-1.5 text-sm font-medium text-navy shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative order-1 w-full p-4 sm:p-6 lg:order-2 lg:p-8 lg:pl-4">
              <div
                className="absolute -right-4 top-4 h-32 w-32 rounded-full bg-teal/20 blur-3xl lg:-right-2 lg:top-6"
                aria-hidden
              />
              <div
                className="absolute -bottom-4 left-4 h-28 w-28 rounded-full bg-teal-soft/25 blur-2xl"
                aria-hidden
              />

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_-24px_rgba(8,40,72,0.45)] ring-1 ring-navy/10 sm:aspect-[3/2]">
                <Image
                  src={site.about.cabinet.imageSrc}
                  alt={site.about.cabinet.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-navy/5 to-transparent lg:bg-gradient-to-l lg:from-navy/30 lg:via-transparent lg:to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 lg:hidden">
                  <p className="font-display text-lg font-semibold text-white">
                    {site.brand}
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    {site.city} · Maroc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOC 2 : Fondatrice de HRStherapy */}
        <div className="overflow-hidden rounded-[1.75rem] border border-navy/8 bg-mist/50 shadow-[0_24px_60px_-32px_rgba(8,40,72,0.25)] backdrop-blur">
          <div className="grid items-center lg:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 flex flex-col justify-center p-8 sm:p-12 lg:order-1 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
                {site.about.practitioner.subtitle}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-navy">
                {site.about.practitioner.title}
              </h2>

              <p className="mt-5 text-base font-medium leading-relaxed text-navy-muted sm:text-lg">
                {site.about.practitioner.paragraphs[0]}
              </p>

              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {site.about.practitioner.paragraphs.slice(1).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {site.about.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-teal/20 bg-white/80 px-4 py-1.5 text-sm font-medium text-navy shadow-sm"
                  >
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

            <div className="relative order-1 w-full p-4 sm:p-6 lg:order-2 lg:p-8 lg:pl-4">
              <div
                className="absolute -right-4 top-4 h-32 w-32 rounded-full bg-teal/20 blur-3xl lg:-right-2 lg:top-6"
                aria-hidden
              />
              <div
                className="absolute -bottom-4 left-4 h-28 w-28 rounded-full bg-teal-soft/25 blur-2xl"
                aria-hidden
              />

              <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl shadow-[0_20px_50px_-24px_rgba(8,40,72,0.45)] ring-1 ring-navy/10 sm:max-w-sm lg:mx-0 lg:max-w-none">
                <Image
                  src={site.about.practitioner.imageSrc}
                  alt={site.about.practitioner.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                  <p className="font-display text-lg font-semibold text-white sm:text-xl">
                    {site.practitioner}
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    {site.tagline} · {site.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
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
