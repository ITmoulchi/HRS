import Image from "next/image";
import { site } from "@/lib/site";

const serviceImages: { src: string; gradient: string }[] = [
  { src: "/service_kinesitherapie_v2.jpg", gradient: "from-teal/30 to-sky-200/30" },
  { src: "/service_therapie_manuelle.jpg",gradient: "from-navy/20 to-teal/20" },
  { src: "/service_sport_rehab.png",      gradient: "from-rose-100/40 to-teal/15" },
  { src: "/service_reathletisation.jpg",  gradient: "from-sky-100/50 to-teal/20" },
  { src: "/service_dry_needling.png",     gradient: "from-purple-100/30 to-teal/15" },
  { src: "/service_tecar.png",            gradient: "from-amber-100/40 to-teal/20" },
  { src: "/service_hijama.png",           gradient: "from-teal/25 to-navy/20" },
  { src: "/service_perineal.png",         gradient: "from-navy/15 to-teal-soft/30" },
  { src: "/service_drainage.jpg",         gradient: "from-teal-soft/30 to-sand/50" },
  { src: "/service_respiratoire.png",     gradient: "from-sky-100/50 to-teal/20" },
];

const placeholderIcons = [PainIcon, AssessmentIcon, DrainageIcon];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-mist/60 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
            {site.servicesSection.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight text-navy">
            {site.servicesSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {site.servicesSection.intro}
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service, index) => {
            const img = serviceImages[index];
            const hasPhoto = Boolean(img?.src);
            const PlaceholderIcon = placeholderIcons[(index - 6) % placeholderIcons.length];

            return (
              <li
                key={service.title}
                className="group overflow-hidden rounded-[1.5rem] border border-navy/8 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_20px_50px_-28px_rgba(88,176,184,0.85)]"
              >
                {/* Image header */}
                <div className="relative h-44 w-full overflow-hidden">
                  {hasPhoto ? (
                    <>
                      <Image
                        src={img.src}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${img?.gradient ?? "from-teal/20 to-navy/15"} flex items-center justify-center`}
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/60 text-teal-deep shadow-sm backdrop-blur-sm ring-1 ring-teal/20">
                        <PlaceholderIcon />
                      </div>
                    </div>
                  )}
                </div>

                {/* Text body */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-lg font-semibold leading-snug text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-muted"
          >
            Prendre rendez-vous
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-teal"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Placeholder SVG icons for services without photos ── */

function PainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <path
        d="M12 3C8.13 3 5 6.13 5 10c0 2.67 1.4 5 3.5 6.37V19a1 1 0 001 1h5a1 1 0 001-1v-2.63C17.6 15 19 12.67 19 10c0-3.87-3.13-7-7-7z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function AssessmentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 3v2M15 3v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DrainageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <ellipse cx="12" cy="12" rx="7" ry="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3c0 0-4 3-4 7s4 7 4 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 3c0 0 4 3 4 7s-4 7-4 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
