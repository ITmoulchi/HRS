import { site } from "@/lib/site";

const tiles = [
  { label: "Thérapie manuelle", tone: "from-teal/30 to-teal-soft/20" },
  { label: "Rééducation sport", tone: "from-navy/20 to-teal/20" },
  { label: "Dry needling", tone: "from-teal-soft/30 to-mist" },
  { label: "Conseils bien-être", tone: "from-sand to-teal/15" },
  { label: "Coulisses cabinet", tone: "from-teal/20 to-navy/15" },
  { label: "Actualités HRS", tone: "from-mist to-teal-soft/25" },
] as const;

export default function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="scroll-mt-24 bg-navy px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-soft">
              {site.instagram.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight">
              {site.instagram.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {site.instagram.intro}
            </p>
          </div>

          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-7 py-4 text-sm font-bold text-white shadow-[0_8px_32px_-8px_rgba(236,72,153,0.6)] transition hover:scale-105 hover:shadow-[0_12px_40px_-8px_rgba(236,72,153,0.75)] active:scale-95"
          >
            <InstagramIcon className="h-5 w-5" />
            Suivre {site.instagramHandle}
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-5">
          {tiles.map((tile) => (
            <li key={tile.label}>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-[1.25rem] ring-1 ring-white/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tile.tone}`}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
                  <InstagramIcon className="h-5 w-5 text-navy/70" />
                  <span className="font-display text-sm font-semibold text-navy sm:text-base">
                    {tile.label}
                  </span>
                </div>
                <span className="absolute inset-0 flex items-center justify-center bg-navy/0 text-sm font-semibold text-white opacity-0 transition group-hover:bg-navy/55 group-hover:opacity-100">
                  Voir sur Instagram
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
