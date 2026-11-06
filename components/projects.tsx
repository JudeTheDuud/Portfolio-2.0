"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/images/images";
import { cn } from "@/utils/libs";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, stagger, viewport } from "@/utils/motion";
export default function Projects() {
  const { letona, hermon,mbo, rightArrow } = images();
  const built = [
    {
      src: letona,
      name: "Letona Consulting",
      type: "Client work",
      stack: ["Next.js", "Node.js", "Tailwind CSS"],
      description:
        "A modern, high-conversion single-page website for a brand consulting agency, engineered to showcase services and capture leads.",
      link: "https://letona.vercel.app",
      live: true,
    },
    {
      src: hermon,
      name: "Fort Hermon",
      type: "Client work",
      stack: ["Next.js", "Node.js", "Tailwind CSS"],
      description:
        "A professional corporate web platform built for a specialized engineering and civil infrastructure firm.",
      link: "https://forthermon.com",
      live: true,
    },
    {
      src: mbo,
      name: "Michael Olomu Foundation",
      type: "Client work",
      stack: ["Next.js", "Node.js", "Tailwind CSS"],
      description:
        "A non-profit web application designed to showcase community outreach programs, medical initiatives, and social impact metrics.  ",
      link: "https://michaelolomufoundation.vercel.app",
      live: true,
    },
    {
      name: "Fan IQ",
      type: "Product",
      stack: ["Next.js", "Websockets", "Framer Motion"],
      description:
        "Real-time peer-to-peer trivia game modes powered by WebSockets, with rich motion throughout.",
      live: false,
    },
  ];
  return (
    <div id="project" className="py-[72px] px-[20px] flex flex-col gap-[25px] lg:py-[112px] lg:px-[130px] lg:gap-[40px]">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="flex flex-col gap-[10px]"
      >
        <motion.p variants={slideLeft} className="text-[12px] font-jet text-[#0F766E] tracking-[0] leading-0">
          03 / Projects
        </motion.p>
        <motion.p variants={fadeUp} className="text-[clamp(2.25rem,1.6818rem+2.2727vw,3.5rem)] leading-[105%] tracking-[-2.5%] font-bold text-[#0D1B1A]">
          Things I've built.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 gap-[19px] lg:grid-cols-[auto_auto_auto]">
        {built.map((project, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            whileHover={{ y: -6 }}
            className=" rounded-[22px] relative"
          >
            {!project.live ? (
              <div className="absolute top-[1px] right-[1px] bg-[#e01238] z-[2] rounded-tr-[22px] px-[10px]">
                <p className="font-dm text-[12px] font-semibold text-white leading-[160%]">
                  Discontinued
                </p>
              </div>
            ) : null}
            <div
              className={cn(
                "h-[213px] rounded-t-[22px] relative border border-[#DCEAE7] overflow-hidden",
                project.src ? "bg-transparent" : "bg-[#0F766E] ",
              )}
            >
              {project.src ? (
                <motion.div
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewport}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.src}
                    alt=""
                    className="object-fill w-full h-full  rounded-t-[22px]"
                  />
                </motion.div>
              ) : null}

              <p className="absolute bottom-[0px] bg-[#0F766E] text-white font-bold text-[20px]  tracking-[-2%] rounded-t-[10px] px-[18px] w-full ">
                {project.name}
              </p>
            </div>

            <div className="bg-white  border border-[#DCEAE7] rounded-b-[22px] flex flex-col gap-[14px] py-[24px] px-[22px]">
              <div className="h-[24px] bg-[#E3F2EF] px-[10px] flex items-center justify-center w-fit rounded-[999px]">
                <p className="font-dm text-[12px] font-semibold text-[#0B4F4A]">
                  {project.type}
                </p>
              </div>

              <p className="font-dm font-normal text-[16px] leading-[160%] text-[#3E5250]">
                {project.description}
              </p>

              <div className="flex gap-[6px] ">
                {project.stack.map((stack, idx) => (
                  <div
                    key={idx}
                    className="h-[26px] px-[9px] flex justify-center items-center rounded-[8px] border border-[#DCEAE7]"
                  >
                    <p className="text-[12px] text-[#0D1B1A] font-jet">
                      {stack}
                    </p>
                  </div>
                ))}
              </div>

              {project.link ? (
                <Link
                  target="_blank"
                  href={project.link}
                  className="bg-[#0F766E] rounded-[12px] h-[44px] flex justify-center items-center gap-[8px] w-fit px-[34.75px] shrink-0"
                >
                  <p className="font-dm font-semibold text-[14px] text-white ">
                    Live site
                  </p>
                  <Image
                    src={rightArrow}
                    className="w-[12px] h-[12px]"
                    alt=""
                  />
                </Link>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}