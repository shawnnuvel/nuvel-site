import React from 'react'

export default function Deliverables() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What you get in every pack</h3>
          
          <p className="text-gray-700 mb-4">
            A zip with CSV + a 1-page methods PDF. The CSV includes name, issuer, patent/app no.,
            issued date, primary registry_url, backup_url (WIPO/Google), org context (best-effort),
            topic tags, cluster_id, centrality, notes. When signal quality allows, we also include
            clearly labeled overflow candidates (non-guaranteed).
          </p>

          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
            <li>expert_map.csv (100 or 200 guaranteed working-link rows + possible overflow)</li>
            <li>clusters_top.csv, edges.csv (collaboration view)</li>
            <li>methods.pdf (plain-English registry ladder, guarantee, QC)</li>
          </ul>

          <p className="text-sm text-gray-600">
            A link counts only if it resolves to an official registry or WIPO PATENTSCOPE page
            showing the number on page; Google Patents is last-resort backup.
          </p>
        </div>
      </div>
    </section>
  )
}
