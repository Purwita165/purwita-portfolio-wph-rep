import PortfolioCard from "../ui/PortfolioCard";

const projects = [
  {
    title: "Landing Page",
    description: "React HTML CSS",
    image: "/images/project-1.png",
    tech: ["HTML", "CSS", "React"],
    link: "#",
  },
  {
    title: "Dashboard UI",
    description: "Admin dashboard design",
    image: "/images/project-2.png",
    tech: ["UI", "UX", "Tailwind"],
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="projects">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <p className="text-neutral-400">
          Selected projects I have worked on
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {projects.map((project) => (
    <PortfolioCard
      key={project.title}
      title={project.title}
      description={project.description}
      image={project.image}
      tech={project.tech}
      link={project.link}
    />
  ))}
</div>
    </section>
  );
}