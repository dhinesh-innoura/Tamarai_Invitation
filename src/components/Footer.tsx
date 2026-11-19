export default function Footer() {
  return (
    <footer className="bg-pillar-border relative overflow-hidden px-6 py-12 text-center text-[var(--cream)]/80">
      <div className="absolute inset-0 bg-[var(--maroon)]/92" />

      <div className="relative z-10">
        <p className="font-script text-2xl text-[var(--cream)]">
          E. Tamarai Selvan &amp; P. Akshaya
        </p>
        <p className="font-numeral mt-2 text-xs uppercase tracking-[0.3em] text-[var(--cream)]/80">
          14 December 2026 · NS Khalyana Mahal, Madurai
        </p>
      </div>
    </footer>
  );
}
