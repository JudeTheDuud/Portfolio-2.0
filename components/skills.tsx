"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/images/images";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, slideLeft, stagger, viewport } from "@/utils/motion";
export default function Skills() {
  const {graduate} = images()
  const skills = [
    {
      name: 'Core',
      list: ['React.js', 'Next.js', 'Typescript', 'JavaScript (ES6+)', 'Node.js']
    },
    {
      name: 'Styling & Motion',
      list: ['Tailwind CSS', 'Framer Motion', 'Responsive design', 'UI/UX implementation']
    },
    {
      name: 'Data & State',
      list: ['Redux', 'Zustand', 'Context API', 'Axios', 'REST APIs', 'WebSockeets']
    },
    {
      name: 'Tooling & ways of working',
      list: ['Git & GitHub', 'Vite', 'Webpack', 'Postman', 'Notion', 'Performance Optimisation']
    },
  ]
  return (
    <div id="skills" className="bg-white py-[72px] px-[20px] flex flex-col gap-[24px] lg:py-[112px] lg:px-[130px] lg:gap-[40px]">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="flex flex-col gap-[10px]"
      >
        <motion.p variants={slideLeft} className="text-[12px] font-jet text-[#0F766E] tracking-[0] leading-0">
          04 / Projects
        </motion.p>
        <motion.p variants={fadeUp} className="text-[clamp(2.25rem,1.6818rem+2.2727vw,3.5rem)] leading-[105%] tracking-[-2.5%] font-bold text-[#0D1B1A]">
          My toolkit.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid grid-cols-1 gap-[24px] lg:grid-cols-[auto_auto_auto_auto]"
      >
          {
            skills.map((skill, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col gap-[14px] bg-[#F6FAF9] border border-[#DCEAE7] p-[20px] rounded-[18px]" >
                <p className="font-medium text-[17px] text-[#0D1B1A]">
                  {skill.name}
                </p>

                <motion.div variants={stagger(0.05, 0.2)} className="flex flex-wrap gap-[8px]">
                  {
                  skill.list.map((list, idx) => (
                    <motion.div key={idx} variants={scaleIn} className="px-[12px] py-[6px] rounded-[999px] bg-white border border-[#CFE5E1]">
                        <p className="font-dm font-medium text-[14px] text-[#0B4F4A]">{list}</p>
                </motion.div>
                  ) )
                }
                </motion.div>
              </motion.div>
            ))
          }
      </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="py-[22px] px-[20px] gap-[12px] flex flex-col items-start rounded-[18px] bg-[#E3F2EF] lg:flex-row lg:px-[30px]"
          >
            <Image src={graduate} alt="graduate" className="lg:h-[52px] w-[52px]"/>

            <div className="flex flex-col gap-[12px]">
              <p className="font-medium text-[18px] leading-[125%] text-[#0D1B1A]">B.Sc. Software Engineering · Babcock University</p>
              <p className="font-normal font-dm text-[15px] leading-[150%] text-[#3E5250]">Second Class Upper, top 15% of class · Built a university management mobile app</p>
            </div>
            <p className="font-jet text-[12px] text-[#0B4F4A] lg:ml-auto">2019 — 2023</p>
          </motion.div>
          
    </div>
  );
}