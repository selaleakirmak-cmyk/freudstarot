"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cards, spreads, type Card } from "@/lib/data";

type DrawnCard = {
  card: Card;
  position: string;
  revealed: boolean;
};

function draw(count: number): Card[] {
  return [...cards].sort(() => Math.random() - 0.5).slice(0, count);
}

function synthesize(items: DrawnCard[]) {
  const revealed = items.filter((item) => item.revealed);
  const keywords = revealed.flatMap((item) => item.card.keywords);
  const recurring = keywords.find((keyword, index) => keywords.indexOf(keyword) !== index);
  const first = revealed[0];
  const last = revealed[revealed.length - 1];

  if (revealed.length === 0) return "Reveal the cards first.";

  return [
    recurring ? `This spread turns around ${recurring}.` : "This spread reads as a slow internal arrangement.",
    "",
    first && last
      ? `The movement begins with ${first.position.toLowerCase()} and opens toward ${last.position.toLowerCase()}. The cards do not give a verdict; they show where attention can stay longer.`
      : "The card offers a single point of attention rather than a conclusion.",
    "",
    "Questions to stay with:",
    "• What repeats here without becoming fully clear?",
    "• What would change if this were read slowly rather than solved quickly?",
  ].join("\n");
}

export default function ReadingPage({ params }: { params: { spreadId: string } }) {
  const spread = spreads.find((item) => item.id === params.spreadId) ?? spreads[0];
  const [intention, setIntention] = useState("");
  const [started, setStarted] = useState(false);
  const [synthesis, setSynthesis] = useState("");
  const [drawn, setDrawn] = useState<DrawnCard[]>([]);

  const complete = drawn.length > 0 && drawn.every((item) => item.revealed);

  function begin() {
    const picked = draw(spread.positions.length);
    setDrawn(picked.map((card, index) => ({ card, position: spread.positions[index], revealed: false })));
    setStarted(true);
    setSynthesis("");
  }

  function reveal(index: number) {
    setDrawn((prev) => prev.map((item, i) => i === index ? { ...item, revealed: true } : item));
  }

  if (!started) {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-10 pt-24 md:px-8 md:pt-32">
        <div className="card-surface rounded-[28px] p-5 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#5f4959]">{spread.positions.length} card{spread.positions.length > 1 ? "s" : ""}</p>
          <h1 className="mt-4 font-serif text-[36px] leading-[1.02] text-[#171210] md:text-[56px]">{spread.title}</h1>
          <p className="mt-5 text-[15px] leading-[1.75] text-black/68">{spread.description}</p>
          <div className="mt-7 rounded-[22px] border border-black/12 bg-[#e8ddd3] p-5">
            <p className="text-[15px] leading-[1.85] text-black/70">A question, a knot, or even a faint sense of direction is enough. The aim here is not certainty, but a way of looking.</p>
          </div>
          <label className="mt-8 block font-mono text-[10px] uppercase tracking-[.18em] text-black/52">Intention</label>
          <textarea value={intention} onChange={(event) => setIntention(event.target.value)} rows={5} placeholder="What do you want to look at today?" className="mt-4 w-full resize-none rounded-[20px] border border-black/14 bg-[#e8ddd3] px-5 py-4 text-[16px] leading-[1.7] outline-none placeholder:text-black/34" />
          <button onClick={begin} className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#171210] bg-[#171210] px-6 py-3 font-mono text-[11px] uppercase tracking-[.18em] text-[#f4ede4] md:w-auto">Shuffle the deck</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 pt-24 md:px-8 md:pt-32">
      <div className="mb-7">
        <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5f4959]">Reading session</p>
        <h1 className="mt-3 font-serif text-[34px] leading-[1.02] text-[#171210] md:text-[50px]">{spread.title}</h1>
        {intention ? <p className="mt-4 text-[15px] italic leading-[1.75] text-black/68">{intention}</p> : null}
      </div>

      <div className="grid gap-5 md:grid-cols-[1fr_340px]">
        <section className="card-surface rounded-[28px] p-5">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[.18em] text-black/52">Reveal slowly</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {drawn.map((item, index) => (
              <button key={item.position} onClick={() => reveal(index)} disabled={item.revealed} className="text-left">
                <p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[.16em] text-black/52">{item.position}</p>
                <div className="aspect-[2/3] rounded-[22px] border border-black/14 bg-[linear-gradient(180deg,#1d171c,#141012)] p-4 shadow-[0_18px_50px_rgba(0,0,0,.18)]">
                  {item.revealed ? (
                    <div className="flex h-full flex-col rounded-[16px] border border-black/12 bg-[#f1e8dc] p-4">
                      <p className="font-mono text-[9px] uppercase tracking-[.16em] text-[#5f4959]">{item.card.category}</p>
                      <div className="flex flex-1 items-center justify-center"><div className="h-16 w-px bg-black/24" /></div>
                      <h2 className="font-serif text-[24px] leading-[1.05] text-[#171210]">{item.card.title}</h2>
                    </div>
                  ) : (
                    <div className="flex h-full items-center justify-center rounded-[16px] border border-[#f4ede4]/10"><div className="h-20 w-px bg-[#f4ede4]/24" /></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        <aside className="card-surface rounded-[28px] p-5">
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5f4959]">Interpretation</p>
          <div className="mt-5 space-y-5">
            {drawn.filter((item) => item.revealed).map((item) => (
              <div key={item.position} className="border-t border-black/14 pt-5">
                <p className="font-mono text-[9px] uppercase tracking-[.16em] text-black/48">{item.position}</p>
                <h3 className="mt-2 font-serif text-[24px] text-[#171210]">{item.card.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-black/70">{item.card.meaning}</p>
              </div>
            ))}
          </div>
          {complete ? (
            <div className="mt-6 border-t border-black/14 pt-5">
              <button onClick={() => setSynthesis(synthesize(drawn))} className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#171210] bg-[#171210] px-5 py-3 font-mono text-[10px] uppercase tracking-[.18em] text-[#f4ede4]">Read the spread as a whole</button>
              {synthesis ? <p className="mt-5 whitespace-pre-line text-[14px] leading-[1.85] text-black/74">{synthesis}</p> : null}
            </div>
          ) : null}
        </aside>
      </div>

      <div className="mt-8 flex gap-5">
        <Link href="/spreads" className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5f4959]">Back to spreads</Link>
        <button onClick={() => setStarted(false)} className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5f4959]">New reading</button>
      </div>
    </div>
  );
}
