import Link from "next/link";
import { spreads } from "@/lib/data";

export default function SpreadsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 pt-24 md:px-8 md:pt-32">
      <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#5f4959]">Structures</p>
      <h1 className="mt-4 font-serif text-[38px] leading-[1.05] text-[#171210] md:text-[48px]">Choose a spread</h1>
      <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-black/68">A spread defines how many cards are drawn and what each position asks. Start simple; depth comes from attention.</p>

      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {spreads.map((spread) => (
          <Link key={spread.id} href={`/reading/${spread.id}`} className="rounded-[24px] border border-black/12 bg-[#f1e8dc] p-5 transition hover:bg-[#171210] group">
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5f4959] group-hover:text-[#d7c6bd]">{spread.positions.length} card{spread.positions.length > 1 ? "s" : ""}</p>
            <h2 className="mt-3 font-serif text-[26px] leading-[1.05] text-[#171210] group-hover:text-[#f4ede4]">{spread.title}</h2>
            <p className="mt-5 text-[14px] leading-[1.75] text-black/66 group-hover:text-[#f4ede4]/76">{spread.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {spread.positions.map((position) => (
                <span key={position} className="font-mono text-[9px] uppercase tracking-[.16em] text-black/48 group-hover:text-[#f4ede4]/54">{position}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
