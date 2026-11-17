import Reveal from "./Reveal";

export default function JoinUs() {
  return (
    <section className="bg-pillar-border relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 text-center">
      <Reveal className="relative z-10" direction="scale" duration={1}>
        <h2 className="font-display gold-text text-4xl drop-shadow-lg sm:text-6xl">
          Will You Join Us?
        </h2>
        <p className="font-script mt-4 text-2xl text-[var(--maroon)]">
          We can&apos;t wait to celebrate with you
        </p>
      </Reveal>
    </section>
  );
}
