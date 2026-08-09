import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/8 bg-white px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="#accueil" className="inline-flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-mist ring-1 ring-teal/20">
                <Image
                  src="/logo-mark.png"
                  alt=""
                  width={44}
                  height={44}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <span>
                <span className="block font-display text-lg font-semibold text-navy">
                  {site.brand}
                </span>
                <span className="block text-sm text-muted">
                  {site.practitioner}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Cabinet de kinésithérapie à Casablanca. Thérapie manuelle,
              rééducation du sport et prise en charge personnalisée.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href={site.phoneHref} className="transition hover:text-navy">
                  {site.phone}
                </a>
              </li>
              <li>{site.hours.weekdays}</li>
              <li>{site.hours.saturday}</li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-navy"
                >
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy/8 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.brand}. Tous droits réservés.
          </p>
          <p>{site.city}, Maroc</p>
        </div>
      </div>
    </footer>
  );
}
