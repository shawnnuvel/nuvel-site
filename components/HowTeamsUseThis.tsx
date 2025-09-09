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

        {/* R&D Strategy */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12">
          <div className="p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-semibold mb-2">R&D Strategy: Build / Buy / Partner in 48 hours</h3>
            <p className="text-slate-600 mb-4">
              Decide whether to build internally, partner/license, or run a small M&A scan—using named inventors with working registry links and collaboration clusters.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Share 5–15 domain terms (e.g., "gate-all-around", "nanoribbon", "FinFET → GAA").</li>
              <li>Receive CSV of 100/200 <span className="font-medium">registry-linked inventors</span> + 1-page PDF summary.</li>
              <li>Sort by <span className="font-medium">centrality</span>, <span className="font-medium">recency</span>, and <span className="font-medium">organization</span>.</li>
              <li>Book 5–8 expert advisory calls (use the longlist as targets).</li>
              <li>Hand BD a partner/license shortlist and flag red-zones.</li>
            </ol>
            <div className="mt-4 text-slate-700">
              <span className="font-medium">Outcome:</span> a defensible Build/Buy/Partner recommendation with registry-backed proof—delivered in days, not weeks.
            </div>
          </div>

          {/* Competitive Intelligence */}
          <div className="p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-semibold mb-2">Competitive Intelligence: Pressure-test a competitor claim</h3>
            <p className="text-slate-600 mb-4">
              Verify whether a rival's "we lead in HBM thermals" (or similar) is substance or slideware—using cluster density and filing cadence.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Filter by competitor org and adjacent suppliers/universities.</li>
              <li>Inspect <span className="font-medium">cluster density</span> and <span className="font-medium">filing cadence</span>.</li>
              <li>Identify <span className="font-medium">likely partners</span> and tuck-in targets.</li>
              <li>Drop registry links into exec decks to end provenance debates.</li>
              <li>Brief product & legal on hot zones to avoid or license.</li>
            </ol>
            <div className="mt-4 text-slate-700">
              <span className="font-medium">Outcome:</span> faster, cleaner CI briefings with evidence leadership will trust.
            </div>
          </div>
        </div>

        {/* What you get */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <h4 className="text-lg font-semibold mb-2">What you get in every pack</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><span className="font-medium">CSV:</span> 100 or 200 registry-linked inventors (name, issuer, patent/app no., issued date, org context, cluster_id, centrality, topic tags) + backup links when available.</li>
            <li><span className="font-medium">PDF (1-page):</span> top clusters, office coverage, and a plain-English Methods & Limitations (data cut-off 2024-12-31).</li>
            <li><span className="font-medium">SLA:</span> 48h standard delivery; optional 24h rush (+30%).</li>
            <li><span className="font-medium">Guarantee:</span> 100 working registry links or we re-run and add +50 working links at no cost.</li>
          </ul>
          <p className="mt-3 text-slate-600 text-sm">
            Designed for research/strategy (R&D, CI). Not a legal or evidentiary product.
          </p>
          <div className="mt-5">
            <a href="#pricing" className="inline-flex items-center rounded-xl px-4 py-2 border border-slate-300 hover:border-slate-400">
              See pricing
            </a>
          </div>
        </div>

        {/* Wins */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl border border-slate-200">
            <div className="text-3xl font-semibold">30–40h</div>
            <div className="text-slate-600">analyst time saved per domain sweep</div>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200">
            <div className="text-3xl font-semibold">Evidence-ready</div>
            <div className="text-slate-600">registry links drop straight into exec decks</div>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200">
            <div className="text-3xl font-semibold">Cleaner shortlists</div>
            <div className="text-slate-600">central clusters over noisy longlists</div>
          </div>
        </div>
      </div>
    </section>
  );
}
