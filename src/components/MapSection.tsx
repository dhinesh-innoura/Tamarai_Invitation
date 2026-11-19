import Reveal from "./Reveal";

const VENUE_QUERY =
  "NS Khalyana Mahal, Girivalapathai, Thenparankundram, Madurai";
const VENUE_MAPS_LINK = "https://maps.app.goo.gl/M6Nx7f7xG65h8BGp8";
const VENUE_LAT = 9.8716968;
const VENUE_LNG = 78.0713374;

export default function MapSection() {
  return (
    <section
      id="find-us"
      className="bg-pillar-border relative overflow-hidden px-6 py-28 text-center"
    >
      <div className="relative z-10">
        <Reveal>
          <p className="font-script text-2xl text-[var(--gold)] sm:text-3xl">Find Us</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-numeral mx-auto mt-3 max-w-md text-sm text-[#141414] sm:text-lg">
            {VENUE_QUERY}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={VENUE_MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="card-frame mx-auto mt-6 block max-w-3xl overflow-hidden rounded-xl sm:mt-8"
          >
            <iframe
              title="Venue location"
              src={`https://maps.google.com/maps?q=${VENUE_LAT},${VENUE_LNG}&z=16&output=embed`}
              width="100%"
              height="360"
              style={{ border: 0, pointerEvents: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href={VENUE_MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block border-b border-[var(--gold)] text-xs uppercase tracking-[0.15em] text-[var(--gold)] transition hover:text-[var(--maroon)] sm:text-sm sm:tracking-[0.2em]"
          >
            Open in Google Maps
          </a>
        </Reveal>
      </div>
    </section>
  );
}
