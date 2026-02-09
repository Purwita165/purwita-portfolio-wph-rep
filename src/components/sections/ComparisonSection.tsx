export default function ComparisonSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-neutral-400">
            Comparison
          </p>
          <h2 className="text-3xl font-bold mt-2">
            What Sets Me Apart
          </h2>
          <p className="text-neutral-500 mt-3 max-w-xl mx-auto">
            A comparison of my approach and skills compared to typical developers
          </p>
        </div>

        {/* Comparison Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Me */}
          <div className="rounded-xl border p-6 bg-white">
            <h3 className="font-semibold text-lg mb-4 text-center">
              Me
            </h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>✔ Clean & maintainable code</li>
              <li>✔ Strong React & TypeScript</li>
              <li>✔ Responsive-first mindset</li>
              <li>✔ UI-focused development</li>
              <li>✔ Performance awareness</li>
            </ul>
          </div>

          {/* Others */}
          <div className="rounded-xl border p-6 bg-neutral-50">
            <h3 className="font-semibold text-lg mb-4 text-center">
              Others
            </h3>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>✖ Inconsistent code structure</li>
              <li>✖ Limited responsiveness</li>
              <li>✖ Less UI attention</li>
              <li>✖ Minimal performance concern</li>
              <li>✖ Hard to maintain</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}