import Image from "next/image";
import Reveal from "./Reveal";

const families = [
  {
    title: "Bride",
    name: "P. Akshaya",
    qualification: "M.Com., NET JRF, TNSET., Ph.D.",
    photo: "/photos/bride.jpg",
  },
  {
    title: "Groom",
    name: "E. Tamarai Selvan",
    qualification: "DME., B.E., (Mech)",
    photo: "/photos/groom.jpg",
  },
];

export default function Family() {
  return (
    <section className="bg-pillar-border relative overflow-hidden px-6 py-28 text-center">
      <div className="relative z-10">
        <Reveal>
          <p className="font-script text-3xl text-[var(--gold)]">Meet the</p>
          <h2 className="font-display mt-1 text-2xl text-[var(--ink)] sm:text-3xl">
            Bride &amp; Groom
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-2">
          {families.map((f, i) => (
            <Reveal
              key={f.name}
              delay={i * 0.15}
              direction={i === 0 ? "left" : "right"}
            >
              <div className="card-frame relative mx-auto h-56 w-44 overflow-hidden rounded-[50%] sm:h-72 sm:w-56">
                <Image
                  src={f.photo}
                  alt={f.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-display mt-5 text-lg text-black">
                {f.name}
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
                {f.title}
              </p>
              <p className="mt-1 text-base text-[var(--ink)]/70">
                {f.qualification}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
