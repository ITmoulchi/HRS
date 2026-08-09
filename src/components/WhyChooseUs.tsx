import { site } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section
      id="pourquoi"
      className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
              {site.whyChoose.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight text-navy">
              {site.whyChoose.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {site.whyChoose.intro}
            </p>

            <div className="mt-8 hidden rounded-[1.75rem] bg-navy p-6 text-white lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-soft">
                {site.practitioner}
              </p>
              <p className="mt-3 font-display text-2xl font-semibold">
                {site.brand}
              </p>
              <p className="mt-2 text-sm text-white/70">{site.tagline}</p>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-teal-soft"
              >
                Appeler le cabinet
              </a>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {site.whyChoose.reasons.map((reason, index) => (
              <li
                key={reason.title}
                className="rounded-[1.5rem] border border-navy/8 bg-white p-6 shadow-sm"
              >
                <span className="font-display text-3xl font-semibold text-teal/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
