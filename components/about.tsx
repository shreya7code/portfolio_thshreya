"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="italic">Machine Learning * Deep Learning * NLP * LLM * AI Agents</span>
        <br />
        Hi There! I am a {" "}
        <span className="font-medium">Software Engineer</span>, with 4 years of industry experience
        building large-scale systems.
        My work sits at the intersection of backend engineering, AI/ML, and data science,
        designing systems that combine scalable infrastructure, data pipelines, and machine learning - 
        translating business ideas into real digital solutions.
      </p>

      <p>
        <span className="font-medium">
        When I’m not coding, I’m usually experimenting with new ideas, exploring tech rabbit holes, 
        trying new food spots, or planning my next travel adventure.
        </span>
      </p>
    </motion.section>
  );
}