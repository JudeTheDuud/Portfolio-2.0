"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, stagger, viewport } from "@/utils/motion";

export default function Experience() {
  const worked = [
    {
      period: "Jun 2025 — Feb 2026",
      location: "Remote",
      role: "Front-End Developer",
      company: "Fan IQ",
      achieved: [
        "Designed multiple game modes that grew users by over 500%.",
        "Built scroll-activated reveals, flip interactions and layout transitions with Framer Motion.",
        "Used Next.js routing and rendering for a fast, scalable foundation.",
        "Built profile dashboards on REST APIs and mobile-first UIs with Tailwind CSS.",
      ],
    },
    {
      period: "Mar 2024 — May 2025",
      location: "Port Harcourt, NG",
      role: "Front-End Developer",
      company: "King-Jesus Collections",
      achieved: [
        "Designed admin and customer interfaces that improved usability and engagement.",
        "Turned raw data into clear, actionable views with React and CSS.",
        "Cut cart abandonment by 12%, lifting online sales by 32% in 2024.",
      ],
    },
    {
      period: "Oct 2022 — Jul 2023",
      location: "Ilishan-Remo, NG",
      role: "Front-End Lead",
      company: "Shuttle9ja",
      achieved: [
        "Owned the full front-end build and trained incoming front-end interns.",
        "Shipped responsive design and performance optimisations across the web app.",
        "Implemented real-time shuttle seat availability.",
      ],
    },
    {
      period: "Jan 2022 — Jun 2022",
      location: "Port Harcourt, NG",
      role: "Software Engineering Intern",
      company: "ChristiesLabs",
      achieved: [
        "Scraped and structured news data to feed an in-house blog during the Russia-Ukraine crisis.",
        "Built a landing page designed to attract and retain visitors.",
      ],
    },
  ];
  return (
    <div id="experience" className="py-[72px] px-[20px] flex flex-col gap-[32px] bg-white lg:px-[130px]">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="flex flex-col gap-[10px]"
      >
        <motion.p variants={slideLeft} className="text-[12px] font-jet text-[#0F766E] tracking-[0] leading-0">
          02 / Experience
        </motion.p>
        <motion.p variants={fadeUp} className="text-[clamp(2.25rem,1.6818rem+2.2727vw,3.5rem)] leading-[105%] tracking-[-2.5%] font-bold text-[#0D1B1A]">
          Where I've worked.
        </motion.p>
      </motion.div>

      <div className="">
        {worked.map((work, idx) => (
          <motion.div
            key={idx}
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="border-t border-t-[#DCEAE7] gap-[14px] flex flex-col items-start py-[28px] lg:flex-row lg:gap-[48px]"
          >
            <motion.div
              variants={slideLeft}
              className="flex items-center gap-[10px] lg:flex-col lg:items-start lg:w-[200px]"
            >
              <p className="text-[13px] font-jet text-[#3E5250]">
                {work.period}
              </p>
              <div className="h-[24px] w-[135px] flex items-center justify-center bg-[#E3F2EF] rounded-[999px]">
                <p className="font-dm font-semibold text-[12px] text-[#0B4F4A] ">
                  {work.location}
                </p>
              </div>
            </motion.div>

            <motion.div variants={stagger(0.08)} className="flex flex-col gap-[12px] ">
              <motion.div variants={fadeUp} className="flex gap-[8px] flex-wrap">
                <p className="font-medium text-[21px] text-[#0D1B1A]">
                  {work.role}
                </p>
                <p className="font-medium text-[21px] text-[#0F766E]">
                  · {work.company}
                </p>
              </motion.div>
              <motion.div variants={stagger(0.08)}>
                {work.achieved.map((list, idx) => (
                  <motion.p
                    key={idx}
                    variants={fadeUp}
                    className="font-dm text-[15px] leading-[160%] mb-[8px] text-[#3E5250]"
                  >
                    · {list}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}