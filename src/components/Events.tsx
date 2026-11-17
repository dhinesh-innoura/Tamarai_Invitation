import Image from "next/image";
import Reveal from "./Reveal";

const events = [
  {
    title: "Engagement",
    date: "Sunday, 13 December 2026",
    time: "6:25 PM – 8:00 PM",
    venue: "N.S. Kalyana Mahal",
    desc: "Nichayathartham ceremony, followed by family celebrations.",
    photo: "/photos/couple-engagement.jpg",
    imageSide: "left" as const,
  },
  {
    title: "Wedding Muhurtham",
    date: "Monday, 14 December 2026",
    time: "6:00 AM – 7:25 AM",
    venue: "N.S. Kalyana Mahal",
    desc: "Auspicious muhurtham under Dhanusu Lagnam — Shukla Paksha Panchami, Thiruvonam Nakshatram, Amrita Yogam.",
    photo: "/photos/couple-wedding.jpg",
    imageSide: "right" as const,
  },
];

export default function Events() {
  return (
    <section className="bg-pillar-border relative overflow-hidden px-6 py-28 text-center">
      <div className="relative z-10">
        <Reveal>
          <p className="font-script text-3xl text-[var(--gold)]">Events</p>
        </Reveal>

        <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-20">
          {events.map((e) => (
            <div
              key={e.title}
              className={`flex flex-col overflow-hidden rounded-xl sm:flex-row ${
                e.imageSide === "right" ? "sm:flex-row-reverse" : ""
              }`}
            >
              <Reveal
                direction={e.imageSide === "right" ? "right" : "left"}
                className="relative h-80 w-full sm:h-[480px] sm:w-1/2"
              >
                <Image
                  src={e.photo}
                  alt={`${e.title} photo`}
                  fill
                  className="object-cover"
                />
              </Reveal>

              <Reveal
                direction={e.imageSide === "right" ? "left" : "right"}
                delay={0.1}
                className="flex w-full flex-col justify-center p-8 text-left sm:w-1/2"
              >
                <h3 className="font-display text-2xl text-[var(--maroon)]">
                  {e.title}
                </h3>
                <p className="font-numeral mt-3 text-sm uppercase tracking-[0.2em] text-[#141414]">
                  {e.date}
                </p>
                <p className="font-numeral text-sm text-[#141414]">{e.time}</p>
                <p className="mt-4 text-base text-[var(--ink)]/80">{e.desc}</p>
                <p className="font-numeral mt-5 text-sm uppercase tracking-[0.2em] text-[#141414]">
                  {e.venue}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
