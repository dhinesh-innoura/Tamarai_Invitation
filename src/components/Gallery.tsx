import Image from "next/image";
import Reveal from "./Reveal";

const photos = [
  "/photos/gallery/g24.jpg",
  "/photos/gallery/g25.jpg",
  "/photos/gallery/g26.jpg",
  "/photos/gallery/g27.jpg",
  "/photos/gallery/g28.jpg",
  "/photos/gallery/g29.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-pillar-border relative overflow-hidden px-8 py-28 text-center sm:px-6">
      <div className="relative z-10">
        <Reveal>
          <p className="font-script text-2xl text-[var(--gold)] sm:text-3xl">Our Moments</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="divider-orn mt-4 sm:mt-6" />
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-x-5 gap-y-7 sm:mt-10 sm:grid-cols-3 sm:gap-8">
          {photos.map((src, i) => (
            <Reveal key={src} delay={i * 0.08} direction="scale" duration={0.6}>
              <div className="gallery-frame group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`Our moment ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-125"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
