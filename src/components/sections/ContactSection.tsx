export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Let’s Work Together
        </h2>

        <p className="text-neutral-500 mt-4">
          I’m open to freelance projects, collaborations, or full-time
          opportunities. Feel free to reach out if you want to discuss an idea
          or work together.
        </p>

        <div className="mt-8">
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-black text-white hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}