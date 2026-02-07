export default function HeroProfileCard() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "360px",
        background: "#e9eff6",
        borderRadius: "16px",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "96px",
          height: "96px",
          borderRadius: "50%",
          background: "#cfd8e3",
          marginBottom: "16px",
        }}
      />

      {/* Name */}
      <h3 style={{ margin: "0 0 4px 0" }}>Alex Johnson</h3>

      {/* Role */}
      <p style={{ margin: "0 0 12px 0", color: "#555" }}>
        Front-End Developer
      </p>

      {/* Short bio */}
      <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
        Focused on building clean UI, scalable components, and smooth user
        experiences.
      </p>
    </div>
  );
}