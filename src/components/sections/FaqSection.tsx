"use client";

import { useState } from "react";
import { SECTION_STYLE, CONTAINER_STYLE } from "@/components/ui/sectionStyles";

/* ===============================
   FAQ DATA
================================ */
const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I primarily work with React, Next.js, TypeScript, and modern CSS. I focus on building clean, scalable, and accessible UI components.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. All interfaces I build are mobile-first and tested across different screen sizes to ensure a consistent user experience.",
  },
  {
    question: "Are you open to collaboration?",
    answer:
      "Absolutely. I enjoy working with designers, back-end developers, and product teams to deliver high-quality products.",
  },
];

/* ===============================
   FAQ SECTION COMPONENT
================================ */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section 
    id = "faq"
    style={SECTION_STYLE}>
      {/* Section Header */}
      <div style={CONTAINER_STYLE}>
        <h2 style={{ marginBottom: "8px" }}>FAQ</h2>
        <p style={{ color: "#555" }}>
          Common questions about my work and experience
        </p>
      </div>

      {/* FAQ List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              {/* Question */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "16px",
                  }}
                >
                  {item.question}
                </h3>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              {isOpen && (
                <p
                  style={{
                    marginTop: "12px",
                    color: "#444",
                    lineHeight: 1.6,
                  }}
                >
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
