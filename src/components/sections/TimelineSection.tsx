import { SECTION_STYLE, CONTAINER_STYLE } from "@/components/ui/sectionStyles";

const timelineData = [
  {
    year: "2022",
    title: "Front-End Bootcamp",
    description:
      "Built strong foundations in HTML, CSS, JavaScript, and React through hands-on projects.",
  },
  {
    year: "2023 – Present",
    title: "Front-End Developer",
    description:
      "Developed responsive web applications and reusable UI components with clean architecture.",
  },
];

export default function TimelineSection() {
  return (
    <section style={SECTION_STYLE}>
      {/* Section Header */}
      <div style={CONTAINER_STYLE}>
        <h2 style={{ marginBottom: "8px" }}>Experience</h2>
        <p style={{ color: "#6b7280" }}>My professional journey so far</p>
      </div>

      {/* Timeline List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {timelineData.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              backgroundColor: "#ffffff",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              {item.year}
            </span>

            <h3 style={{ margin: "8px 0" }}>{item.title}</h3>

            <p style={{ margin: 0, color: "#4b5563" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
