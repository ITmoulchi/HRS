import { site } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section
      id="pourquoi"
      className="scroll-mt-24 px-5 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-28 lg:pt-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
            {site.whyChoose.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight text-navy">
            {site.whyChoose.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {site.whyChoose.intro}
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
