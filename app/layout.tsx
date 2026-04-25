import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, DM_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Freudstarot",
  description: "A psychoanalytically-inspired reflection tool. Not prediction, attention.",
  appleWebApp: { capable: true, title: "Freudstarot", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#F1E8DC",
};

function BottomNav() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 rounded-[22px] border border-black/15 bg-[#f1e8dc]/92 px-3 py-3 shadow-[0_18px_50px_rgba(0,0,0,.16)] backdrop-blur-xl md:hidden bottom-safe">
      <div className="grid grid-cols-3 gap-2 text-center">
        <Link href="/" className="rounded-[16px] px-3 py-2 font-mono text-[10px] uppercase tracking-[.14em] text-black/68">Home</Link>
        <Link href="/spreads" className="rounded-[16px] px-3 py-2 font-mono text-[10px] uppercase tracking-[.14em] text-[#5f4959]">Spreads</Link>
        <Link href="/deck" className="rounded-[16px] px-3 py-2 font-mono text-[10px] uppercase tracking-[.14em] text-black/68">Deck</Link>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${mono.variable}`}>
      <body>
        <div className="min-h-screen pb-24 md:pb-0">
          <header className="fixed inset-x-0 top-0 z-40 border-b border-black/15 bg-[#f1e8dc]/92 backdrop-blur-md top-safe">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
              <Link href="/" className="font-mono text-[11px] uppercase tracking-[.24em] text-[#171210]">Freudstarot</Link>
              <nav className="hidden items-center gap-6 md:flex">
                <Link href="/spreads" className="font-mono text-[11px] uppercase tracking-[.18em] text-black/70">Spreads</Link>
                <Link href="/deck" className="font-mono text-[11px] uppercase tracking-[.18em] text-black/70">Deck</Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
