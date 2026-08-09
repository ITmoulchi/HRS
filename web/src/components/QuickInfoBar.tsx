import { site } from "@/lib/site";

const items = [
  {
    label: "Téléphone",
    value: site.phone,
    href: site.phoneHref,
    icon: PhoneIcon,
  },
  {
    label: "Horaires",
    value: site.hours.weekdays,
    detail: site.hours.saturday,
    icon: ClockIcon,
  },
  {
    label: "Adresse",
    value: "Résidence Albayda 1 · Casablanca",
    detail: "2ème étage, N°212",
    href: site.mapsUrl,
    external: true,
    icon: PinIcon,
  },
] as const;

export default function QuickInfoBar() {
  return (
    <section
      aria-label="Informations pratiques"
      className="relative z-10 -mt-6 px-5 sm:-mt-8 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-navy text-white shadow-[0_28px_60px_-36px_rgba(8,40,72,0.9)]">
        <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-soft ring-1 ring-teal/25">
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal-soft">
                    {item.label}
                  </span>
                  <span className="mt-1 block truncate font-display text-base font-semibold tracking-tight sm:text-lg">
                    {item.value}
                  </span>
                  {"detail" in item && item.detail ? (
                    <span className="mt-0.5 block text-sm text-white/65">
                      {item.detail}
                    </span>
                  ) : null}
                </span>
              </>
            );

            if ("href" in item && item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-start gap-4 px-6 py-6 transition hover:bg-white/5 sm:px-8 sm:py-7"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={item.label}
                className="flex items-start gap-4 px-6 py-6 sm:px-8 sm:py-7"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M2.5 5.5c0-1.2.9-2.2 2.1-2.3l2.3-.2c.9-.1 1.7.4 2 1.2l.9 2.3c.3.7.1 1.5-.5 2l-1.2 1c1.2 2.2 3 4 5.2 5.2l1-1.2c.5-.6 1.3-.8 2-.5l2.3.9c.8.3 1.3 1.1 1.2 2l-.2 2.3c-.1 1.2-1.1 2.1-2.3 2.1C9.8 20.3 3.7 14.2 2.5 5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 8v4.2l2.8 1.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M12 21s6.5-5.2 6.5-11A6.5 6.5 0 0 0 5.5 10c0 5.8 6.5 11 6.5 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
