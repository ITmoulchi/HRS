import Image from "next/image";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate min-h-[100svh] overflow-hidden pt-[4.5rem]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,#b8e4e8_0%,transparent_55%),radial-gradient(ellipse_at_85%_20%,#d9f0f2_0%,transparent_45%),linear-gradient(160deg,#eef8f9_0%,#f7fcfc_42%,#e3f2f4_100%)]" />
        <div
          className="absolute -left-24 top-16 h-[28rem] w-[28rem] rounded-full bg-teal/25 blur-3xl animate-float-soft"
          aria-hidden
        />
        <div
          className="absolute -right-16 bottom-10 h-[26rem] w-[26rem] rounded-full bg-teal-soft/35 blur-3xl animate-float-soft delay-300"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23082848' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:py-16">
        <div className="relative z-10 max-w-xl">
          <p className="animate-rise-in text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
            {site.city} · Maroc
          </p>

          <h1 className="animate-rise-in delay-100 mt-5 font-display text-[clamp(2.75rem,8vw,5.25rem)] font-semibold leading-[0.95] tracking-tight text-navy">
            {site.brand}
          </h1>

          <p className="animate-rise-in delay-200 mt-6 max-w-md font-display text-xl font-medium text-navy-muted sm:text-2xl">
            {site.tagline}
          </p>

          <p className="animate-rise-in delay-300 mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Prise en charge personnalisée par {site.practitioner}, formatrice
            en thérapie manuelle à Casablanca.
          </p>

          <div className="animate-rise-in delay-400 mt-10 flex flex-wrap items-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(8,40,72,0.85)] transition hover:-translate-y-0.5 hover:bg-navy-muted"
            >
              Prendre rendez-vous
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-navy/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-navy backdrop-blur transition hover:border-teal hover:bg-white"
            >
              Localiser le cabinet
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none lg:justify-end">
          <div className="relative aspect-square w-full max-w-[28rem]">
            <div
              className="absolute inset-[8%] rounded-full bg-teal/20 animate-pulse-ring"
              aria-hidden
            />
            <div
              className="absolute inset-[4%] rounded-full border border-teal/30"
              aria-hidden
            />
            <div className="absolute inset-0 overflow-hidden rounded-full bg-white/55 shadow-[0_40px_80px_-30px_rgba(88,176,184,0.75)] ring-1 ring-white/70 backdrop-blur-sm animate-float-soft">
              <Image
                src="/logo-mark.png"
                alt={`${site.brand} — ${site.practitioner}`}
                fill
                priority
                className="object-contain p-[8%] drop-shadow-[0_20px_40px_rgba(8,40,72,0.2)]"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
