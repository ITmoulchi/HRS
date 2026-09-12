import Image from "next/image";
import { site } from "@/lib/site";

export default function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="scroll-mt-24 bg-navy px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-soft">
            {site.instagram.eyebrow}
          </p>

          <div className="mt-5 flex flex-col gap-5 border-b border-white/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-wrap items-end gap-4">
              <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-none tracking-tight">
                {site.instagram.title}
              </h2>
              <span className="pb-1 font-display text-lg italic text-teal-soft/80">
                {site.instagram.count}
              </span>
            </div>

            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-7 py-4 text-sm font-bold text-white shadow-[0_8px_32px_-8px_rgba(236,72,153,0.6)] transition hover:scale-105 hover:shadow-[0_12px_40px_-8px_rgba(236,72,153,0.75)] active:scale-95 lg:self-auto"
            >
              <InstagramIcon className="h-5 w-5" />
              Suivre {site.instagramHandle}
            </a>
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {site.instagram.intro}
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.instagram.tiles.map((tile) => (
            <li key={tile.number}>
              <a
                href={tile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-[22rem] overflow-hidden rounded-[1.25rem] shadow-[0_4px_20px_rgba(8,40,72,0.25)] transition duration-400 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(8,40,72,0.45)] sm:h-[24rem] lg:h-[26.25rem]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={tile.imageSrc}
                    alt={tile.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover contrast-105 grayscale-[50%] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-navy/15 transition duration-500 group-hover:bg-navy/35" />

                <div className="absolute left-6 top-6 font-display text-[0.95rem] tracking-wide text-white">
                  <span
                    className="mb-2 block h-px w-6 bg-white/60"
                    aria-hidden
                  />
                  {tile.number}
                </div>

                <div className="absolute right-6 top-6 rounded-[1.25rem] bg-white/15 px-1.5 py-2 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm [writing-mode:vertical-rl]">
                  {tile.tag}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                    {site.instagramHandle}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 sm:text-[1.75rem]">
                    {tile.label}
                  </h3>
                  <p className="mt-1 max-h-0 max-w-[15rem] overflow-hidden text-xs leading-relaxed text-white/75 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-16 group-hover:opacity-100 sm:text-sm">
                    {tile.subtitle}
                  </p>
                </div>

                <span
                  className="absolute bottom-6 right-6 flex h-9 w-9 rotate-[-45deg] items-center justify-center rounded-full border border-white/50 text-sm text-white transition duration-400 group-hover:rotate-0 group-hover:bg-white group-hover:text-navy"
                  aria-hidden
                >
                  ↗
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
