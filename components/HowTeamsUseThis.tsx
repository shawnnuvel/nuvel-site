import React from "react";

export default function HowTeamsUseThis() {
  return (
    <section id="how-teams-use-this" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <header className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            How teams use <span className="whitespace-nowrap">Register-Anchored Expert Packs</span>
          </h2>
          <p className="mt-3 text-slate-600">
            Two high-value workflows in <span className="font-medium">R&D Strategy</span> and <span className="font-medium">Competitive Intelligence</span>, powered by verified patent-to-people mapping.
          </p>
        </header>

        {/* Two Tiles */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Tile A: R&D Strategy */}
          <div className="p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-semibold mb-3">R&D Strategy: build/buy/partner in 48h</h3>
            
            <div className="mb-4">
              <p className="text-slate-600 font-medium mb-2">Outcome:</p>
              <p className="text-slate-700">
                A defensible longlist + clusters so you can book the right 5–8 calls and make a build/buy/partner call — this week.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-slate-600 font-medium mb-2">How it works:</p>
              <ol className="list-decimal list-inside space-y-1 text-slate-700 text-sm">
                <li>Send 5–15 domain terms (e.g., "gate-all-around process").</li>
                <li>Get 100/200 registry-linked inventors + 1-page summary.</li>
                <li>Sort by centrality/recency/organization and start outreach.</li>
              </ol>
            </div>

            <div className="mt-4">
              <a href="/sample" className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium">
                See a redacted sample →
              </a>
            </div>
          </div>

          {/* Tile B: Competitive Intelligence */}
          <div className="p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-semibold mb-3">Competitive Intelligence: pressure-test a rival claim</h3>
            
            <div className="mb-4">
              <p className="text-slate-600 font-medium mb-2">Outcome:</p>
              <p className="text-slate-700">
                Fast evidence for "is this real or slideware?"
              </p>
            </div>

            <div className="mb-4">
              <p className="text-slate-600 font-medium mb-2">How it works:</p>
              <ol className="list-decimal list-inside space-y-1 text-slate-700 text-sm">
                <li>Filter by competitor org + adjacent suppliers/universities.</li>
                <li>Inspect cluster density and filing cadence.</li>
                <li>Drop registry links into exec decks to settle debates.</li>
              </ol>
            </div>

            <div className="mt-4">
              <a href="/sample" className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium">
                See a redacted sample →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
