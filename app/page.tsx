import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-24 md:px-8 md:pt-32">
      <section className="grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-end">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#5f4959]">A structured reflection tool</p>
          <h1 className="mt-5 font-serif text-[42px] leading-[.98] text-[#171210] md:text-[76px]">
            Not fortune-telling.
            <br />A slower way of reading what is already in motion.
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-black/70">
            Freudstarot is a psychoanalytically-inspired card interface for reflection. Choose a spread, reveal cards one by one, and read them through position, meaning, and tension.
          </p>
          <div className="mt-8 grid gap-3 sm:flex">
            <Link href="/spreads" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#171210] bg-[#171210] px-6 py-3 font-mono text-[11px] uppercase tracking-[.18em] text-[#f4ede4]">Begin a reading</Link>
            <Link href="/deck" className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/18 px-6 py-3 font-mono text-[11px] uppercase tracking-[.18em] text-black/72">Browse the deck</Link>
          </div>
        </div>
        <div className="card-surface rounded-[28px] p-5">
          <p className="font-mono text-[11px] uppercase tracking-[.18em] text-[#5f4959]">How it works</p>
          <ol className="mt-6 space-y-5 text-[15px] leading-[1.75] text-black/70">
            <li><span className="font-mono text-black/45">01</span><br />Choose a spread that matches the scale of your question.</li>
            <li><span className="font-mono text-black/45">02</span><br />Write an intention or leave the field open.</li>
            <li><span className="font-mono text-black/45">03</span><br />Reveal the cards slowly and read the spread as a whole.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
