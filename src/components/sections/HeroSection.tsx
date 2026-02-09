import HeroProfileCard from "./HeroProfileCard";
import { CONTAINER_STYLE } from "@/components/ui/sectionStyles";

export default function HeroSection() {
  return (
    <section
      id = "home"
      style={{
        padding: "120px 0 96px", // HERO KHUSUS
        backgroundColor: "#f9fafb",
      }}
    >
      <div style={CONTAINER_STYLE}>
        <div
          style={{
            display: "flex",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ flex: 1 }}>
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#6b7280",
              }}
            >
              Alex’s Portfolio
            </span>

            <h1 style={{ margin: "16px 0" }}>
              I am a Front-End Developer <br />
              & Web Programming Instructor
            </h1>

            <p style={{ maxWidth: "420px", color: "#555" }}>
              Hi, I’m Alex, a passionate web developer with over 3 years of experience.
            </p>

            <button style={{ marginTop: "24px" }}>
              View Portfolio
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <HeroProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}