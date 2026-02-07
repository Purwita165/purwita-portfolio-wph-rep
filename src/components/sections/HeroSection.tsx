import HeroProfileCard from "./HeroProfileCard";

export default function HeroSection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "80px 24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6b7280",
              marginBottom: "16px",
            }}
          >
            Alex’s Portfolio
          </p>

          <h1
            style={{
              fontSize: "40px",
              lineHeight: "1.2",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            I am a Front-End Developer <br />& Web Programming Instructor
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#4b5563",
              maxWidth: "460px",
              marginBottom: "28px",
            }}
          >
            Hi, I’m Alex, a passionate web developer with over 3 years of
            experience.
          </p>

          <button
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              borderRadius: "6px",
              border: "1px solid #111827",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            View Portfolio
          </button>
        </div>

        {/* RIGHT CONTENT (PROFILE PLACEHOLDER) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <HeroProfileCard />
        </div>
      </div>
    </section>
  );
}
