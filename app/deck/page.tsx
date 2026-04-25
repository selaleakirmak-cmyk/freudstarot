import { cards } from "@/lib/data";

export default function DeckPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 pt-24 md:px-8 md:pt-32">
      <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#5f4959]">The deck</p>
      <h1 className="mt-4 font-serif text-[38px] leading-[1.05] text-[#171210] md:text-[48px]">{cards.length} cards</h1>
      <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-black/68">A small placeholder deck. Your real Freudstarot book meanings and artwork can replace these later.</p>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.id} className="rounded-[22px] border border-black/12 bg-[#f1e8dc] p-3">
            <div className="aspect-[2/3] rounded-[18px] border border-black/12 bg-[linear-gradient(180deg,#e8ddd3,#dcccc4)] p-4">
              <div className="flex h-full items-center justify-center rounded-[14px] border border-black/10">
                <div className="h-14 w-px bg-black/24" />
              </div>
            </div>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[.16em] text-[#5f4959]">{card.category}</p>
            <h2 className="mt-1 font-serif text-[20px] leading-[1.05] text-[#171210]">{card.title}</h2>
            <p className="mt-2 line-clamp-3 text-[12px] leading-[1.5] text-black/60">{card.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
