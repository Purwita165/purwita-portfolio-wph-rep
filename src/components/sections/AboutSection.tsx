import { SECTION_STYLE, CONTAINER_STYLE } from "@/components/ui/sectionStyles";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={SECTION_STYLE}>
      <div style={CONTAINER_STYLE}>
        {/* Section Header */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="font-bold">
            About Me
          </h2>
          <p className="text-neutral-300 text-xl leading-[34px]">
            A short introduction
          </p>
        </div>

        {/* Narrative */}
        <div className="space-y-6 text-xl leading-[34px] text-neutral-300">
          <p>
            I’m a front-end developer who enjoys building clean, responsive,
            and user-friendly web interfaces. I care not only about how things
            look, but also how they feel when used.
          </p>

          <p>
            I have experience working with modern web technologies and enjoy
            translating designs into reliable, maintainable code. Teaching and
            sharing knowledge is also a big part of how I grow as a developer.
          </p>
        </div>

        {/* Highlights */}
        <ul className="space-y-4 text-xl leading-[34px] text-neutral-300">
          <li>
            Focused on mobile-first and responsive design
          </li>
          <li>
            Strong attention to UI detail and code readability
          </li>
          <li>
            Comfortable collaborating and explaining technical concepts
          </li>
        </ul>
      </div>
    </section>
  );
}
