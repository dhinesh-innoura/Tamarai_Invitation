import Reveal from "./Reveal";

export default function InviteSection() {
  return (
    <section className="bg-pillar-border relative overflow-hidden px-6 py-28 text-center">
      <div className="absolute inset-0 bg-[var(--cream)]/20" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <p className="font-display text-xl text-[var(--ink)]/85 sm:text-2xl">
            With the blessings of God and our beloved parents, we cordially
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="font-script mt-4 text-5xl text-[var(--gold)] sm:text-6xl">
            Invite
          </p>
        </Reveal>

        {/* groom lineage */}
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[var(--ink)]/80">
            With the blessings of the Almighty and our beloved parents,
            <br />
            <span className="font-semibold text-[var(--ink)]">
              Mr. A. Periyasamy &amp; Mrs. P. Anandhi
            </span>
            <br />
            cordially invite you to grace the auspicious wedding ceremony of
            their beloved son
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <h2 className="font-display mt-6 text-5xl tracking-wide text-[var(--gold)] sm:text-6xl">
            E. TAMARAI SELVAN
          </h2>
          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-[var(--maroon)]/80">
            DME., B.E., (Mech)
          </p>
        </Reveal>

        <Reveal delay={0.42}>
          <div className="divider-orn my-10">
            <span className="font-script text-3xl text-[var(--gold)]">
              weds
            </span>
          </div>
        </Reveal>

        {/* bride lineage */}
        <Reveal delay={0.48}>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-[var(--ink)]/80">
            and beloved daughter of
            <br />
            <span className="font-semibold text-[var(--ink)]">
              Mr. P. Elangumaran &amp; Mrs. E. Annalakshmi
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.54}>
          <h2 className="font-display mt-6 text-5xl tracking-wide text-[var(--gold)] sm:text-6xl">
            P. AKSHAYA
          </h2>
          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-[var(--maroon)]/80">
            M.Com., NET JRF, TNSET., Ph.D.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="mx-auto mt-10 max-w-md text-base uppercase tracking-[0.2em] text-[var(--maroon)]/80">
            Venue
          </p>
          <p className="font-numeral mt-1 text-xl text-[#141414]">
            N.S. Kalyana Mahal
          </p>
          <p className="mt-1 text-base text-[var(--ink)]/70">
            Girivalapathai, Thenparankundram, Madurai
          </p>
        </Reveal>
      </div>
    </section>
  );
}
