'use client'
import React from "react";
import Image from "next/image";
import { images } from "@/images/images";
import Counter from "./counter";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, slideRight, stagger, viewport } from "@/utils/motion";
export default function Hero() {
  const { downArrow, downArrowBlack } = images();
  const juda = {
    role: "Front-End Developer",
    basedIn: "Lagos, NG",
    stack: ["React", "Next.js", "TS"],
    shipping: "2022",
    available: "true",
  };

  const stats = [
    {
      number: 500,
      text: "user growth from new game modes at Fan IQ",
      suffix: "%",
    },
    {
      number: 32,
      text: "online sales at King-Jesus Collections in 2024",
      suffix: "%",
      prefix: "+",
    },
    {
      number: 12,
      text: "cart abandonment after interface redesign",
      suffix: "%",
      prefix: "-",
    },
    {
      number: 15,
      text: "of Software Engineering class, Babcock University",
      suffix: "%",
      prefix: "Top",
    },
  ];

    const handleScrollClick = (
    e: React.MouseEvent<HTMLElement>,
    link: string,
  ) => {
    e.preventDefault();

    const targetId = link.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      // Updates the URL hash cleanly without jumping
    }
  };
  return (
    <div id="home" className="px-[20px] pt-[40px] py-[72px] flex flex-col gap-[22px] lg:gap-[64px] lg:pt-[88px] lg:pb-[104px] lg:px-[130px]">
      <div className="flex flex-col gap-[22px] lg:flex-row lg:w-full lg:justify-between">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col gap-[22px] lg:w-[45%]"
        >
          <motion.p variants={fadeUp} className="text-[clamp(2.75rem,2.0249rem+3.0939vw,4.5rem)] text-[#0D1B1A] font-bold leading-[100%] tracking-[-3%] ">
            Hi, I'm Juda. <br />{" "}
            <span className="text-[#0F766E] ">
              I build interfaces people enjoy using.
            </span>
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#3E5250] text-[clamp(1.0625rem,1.0107rem+0.221vw,1.1875rem)] leading-[160%] tracking-[0%] lg:w-[82%]">
            Front-end developer in Lagos, Nigeria. I turn designs into fast,
            animated, mobile-first web apps with React, Next.js and TypeScript.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-[10px] lg:flex-row ">
            <Link href={'#project'} onClick={(e) => handleScrollClick(e, '#project') } className="bg-[#0F766E] w-full rounded-[999px] h-[50px] flex items-center justify-center gap-[8px] lg:w-[162px]">
              <p  className="font-semibold text-[15px] text-white">
                See my work
              </p>
              <Image src={downArrow} alt="" className="" />
            </Link>
            <Link href={'/Juda.pdf'} target="_blank"  className="bg-transparent border-[#0D1B1A] border-[1.5px] w-full rounded-[999px] h-[50px] flex items-center justify-center gap-[8px] lg:w-[162px]">
              <p className="font-semibold text-[15px] text-[#0D1B1A]">
                Download CV
              </p>
              <Image src={downArrowBlack} alt="" className="" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="bg-[#0B3B37] flex flex-col rounded-[18px] lg:w-[45%] lg:h-[305px] lg:self-center"
        >
          <div className="flex gap-[7px] items-center px-[16px] border-b border-b-[#15524C] h-[41px]">
            <div className="bg-[#2DD4BF] w-[10px] h-[10px] rounded-full " />
            <div className="bg-[#5EEAD499] w-[10px] h-[10px] rounded-full " />
            <div className="bg-[#99F6E459] w-[10px] h-[10px] rounded-full " />
            <p className="text-[12px] leading-[100%] tracking-[0%] text-[#8FC9C1]">
              juda.ts
            </p>
          </div>

          <motion.div
            variants={stagger(0.12, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="pt-[18px] pb-[22px] px-[18px] text-[#D7F2EE] font-jet text-[12.5px] leading-[180%]"
          >
            <motion.p variants={fadeUp} className="">
              <span className="text-[#5EEAD4] font-jet">const</span> juda =
              &#123;
            </motion.p>
            <motion.p variants={fadeUp}>
              role: <span className="text-[#FDE68A]">'{juda.role}'</span>,
            </motion.p>
            <motion.p variants={fadeUp}>
              basedIn: <span className="text-[#FDE68A]">'{juda.basedIn}'</span>,
            </motion.p>
            <motion.p variants={fadeUp}>
              role: <span className="text-[#FDE68A]">'{juda.role}'</span>,
            </motion.p>
            <motion.p variants={fadeUp}>
              shipping: <span className="text-[#5EEAD4]">since</span>{" "}
              <span className="text-[#FCA5A5]">{juda.shipping}</span>,
            </motion.p>
            <motion.p variants={fadeUp}>
              available:{" "}
              <span className="text-[#FDE68A]">{juda.available}</span>,
            </motion.p>
            <motion.p variants={fadeUp}>
              &#125;;<span className="text-[#5EEAD4]">▌</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={stagger(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className=" grid grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto_auto] gap-[12px]  items-center lg:flex-row lg:justify-between "
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={scaleIn}
            className="flex flex-col gap-[4px] lg:items-start  bg-white border border-[#DCEAE7] rounded-[18px] items-start justify-center px-[16px] py-[18px] "
          >
            <Counter
              target={stat.number}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />

            <div className="flex flex-col items-start lg:items-start  w-full">
              <p className=" text-[#3E5250] font-normal font-dm leading-[145%] text-left  text-[14px] ">
                {stat.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}