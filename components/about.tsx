"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, stagger, viewport } from "@/utils/motion";

export default function About() {
  return (
    <motion.div
      id="about"
      variants={stagger(0.15)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="flex flex-col gap-[20px] py-[72px] border-y-[#DCEAE7] border-y px-[20px] lg:flex-row lg:px-[130px] lg:gap-[56px] lg:w-full lg:py-[112px] "
    >
      <motion.p
        variants={slideLeft}
        className="text-[12px] font-jet text-[#0F766E] tracking-[0] leading-0 lg:w-[60%]"
      >
        01 / About
      </motion.p>
      <div className="flex flex-col gap-[20px] lg:w-[%40]">
        <motion.p
          variants={fadeUp}
          className="text-[clamp(1.5625rem,1.1932rem+1.4773vw,2.375rem)] text-[#0D1B1A] font-medium leading-[132%] tracking-[-1%]"
        >
          I care about the small details that make an interface feel{" "}
          <span className="text-[#0F766E] ">effortless</span>: consistent
          patterns, smooth motion and layouts that just work on any device.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-dm leading-[170%] text-[#3E5250] text-[16px] lg:text-[17px] lg:w-[80%] "
        >
          I've led front-end teams, trained interns and shipped products from real-time trivia games to e-commerce stores. I work closely with designers and back-end engineers, integrate REST and WebSocket APIs, and keep performance and accessibility in check from the first commit.
        </motion.p>
      </div>
    </motion.div>
  );
}