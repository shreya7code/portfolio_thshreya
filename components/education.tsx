"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  const badgeLabels = ["Masters", "Bachelors"];

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Education</SectionHeading>

      <div className="max-w-2xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-xl p-6"
              style={{
                background: theme === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                border: theme === "light" ? "0.5px solid rgba(0,0,0,0.15)" : "0.5px solid rgba(255,255,255,0.15)",
              }}
            >
              {/* Top: icon + badge + date */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-full text-lg"
                  style={{
                    width: "44px",
                    height: "44px",
                    flexShrink: 0,
                    background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.08)",
                    border: theme === "light" ? "1.5px solid rgba(0,0,0,0.15)" : "1.5px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <span
                    className="inline-block text-xs font-medium rounded-full"
                    style={{
                      padding: "2px 12px",
                      background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.08)",
                      color: theme === "light" ? "#374151" : "rgba(255,255,255,0.6)",
                      border: theme === "light" ? "0.5px solid rgba(0,0,0,0.12)" : "0.5px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    {badgeLabels[index]}
                  </span>
                  <p
                    className="text-xs mt-1 tracking-wide"
                    style={{ color: theme === "light" ? "#9ca3af" : "rgba(255,255,255,0.35)" }}
                  >
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "0.5px",
                  background: theme === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)",
                }}
              />

              {/* Content */}
              <h3
                className="font-medium text-base"
                style={{ color: theme === "light" ? "#111827" : "#ffffff" }}
              >
                {item.institution}
              </h3>
              <p
                className="text-sm"
                style={{ color: theme === "light" ? "#4b5563" : "rgba(255,255,255,0.6)" }}
              >
                {item.degree}
              </p>
              <p
                className="text-xs"
                style={{ color: theme === "light" ? "#9ca3af" : "rgba(255,255,255,0.35)" }}
              >
                📍 {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}