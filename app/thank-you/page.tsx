export default function ThankYou() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Thanks — we've got your request</h1>
        <p className="text-primary-600 mb-8">We'll reply within one business day with next steps and a sample if requested.</p>
        <div className="card p-6 text-left">
          <h2 className="text-xl font-semibold text-primary-900 mb-3">What happens next</h2>
          <ul className="list-disc pl-5 space-y-2 text-primary-700">
            <li>We confirm your scope and target vertical.</li>
            <li>We share a short intake for anchors/regions/roles.</li>
            <li>Delivery window: 24–48 hours after scope lock.</li>
          </ul>
        </div>
        <div className="mt-6 p-4 bg-accent-50 rounded border border-accent-200 text-accent-700">
          <div className="font-semibold mb-1">Guarantee</div>
          <p>
            If your ordered scope yields fewer than the guaranteed number of High-confidence pods, you choose: a full refund or a no-cost re-run with adjusted scope.
            High-confidence = 2–5 people, same employer, ≥90 days overlap, density ≥50%, passes layoff-timing filter; contractors/interns excluded. Role/patent evidence included when available.
          </p>
        </div>
      </div>
    </section>
  )
}


