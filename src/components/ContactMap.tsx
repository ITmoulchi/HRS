import { site } from "@/lib/site";

// Coordonnées exactes du Cabinet HRStherapy (extraites du lien Google Maps réel)
// Lat: 33.5855669, Lng: -7.606956
const mapEmbedSrc =
  "https://maps.google.com/maps?q=33.5855669,-7.606956&z=17&output=embed";


export default function ContactMap() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
            {site.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight text-navy">
            {site.contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {site.contact.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-navy/8 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-xl font-semibold text-navy">
              Informations pratiques
            </h3>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
                  Adresse
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {site.address}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
                  Téléphone
                </dt>
                <dd className="mt-2">
                  <a
                    href={site.phoneHref}
                    className="text-base font-semibold text-navy hover:text-teal-deep"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
                  Horaires
                </dt>
                <dd className="mt-2 space-y-1 text-sm text-muted sm:text-base">
                  <p>{site.hours.weekdays}</p>
                  <p>{site.hours.saturday}</p>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-muted"
              >
                Prendre rendez-vous
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition hover:border-teal"
              >
                Ouvrir dans Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-navy/8 bg-mist shadow-sm">
            <iframe
              title="Localisation HRStherapy sur Google Maps"
              src={mapEmbedSrc}
              className="h-[22rem] w-full sm:h-[26rem] lg:h-full lg:min-h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
