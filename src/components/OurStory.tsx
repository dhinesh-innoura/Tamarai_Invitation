import Reveal from "./Reveal";

export default function OurStory() {
  return (
    <section className="bg-pillar-border relative overflow-hidden px-6 py-28 text-center">
      <div className="relative z-10">
        <Reveal>
          <p className="font-script text-3xl text-[var(--gold)]">Our Story</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divider-orn mt-6" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[var(--ink)]/85 sm:text-2xl">
            What began as a chance meeting blossomed into a lifetime of love,
            laughter, and endless memories. Through every season, we found in
            each other a home. Now, we joyfully invite you to celebrate the
            next beautiful chapter of our journey together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
