"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/images/images";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewport } from "@/utils/motion";

export default function Contact() {
    const{github, linkedin} = images()
  return (
    <div id="contact" className="pt-[16px] pb-[56px] lg:py-[88px] px-[20px] lg:px-[130px]">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="flex flex-col gap-[24px] px-[24px] bg-[#0B3B37] rounded-[24px] py-[36px] lg:px-[80px] lg:py-[80px]"
      >
        <motion.div
          variants={stagger(0.12, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col gap-[24px]"
        >
          <motion.p variants={fadeUp} className="text-[12px] font-jet text-[#5EEAD4] tracking-[0] leading-0">
            05 / Contact
          </motion.p>

          <motion.p variants={fadeUp} className="text-[clamp(2.375rem,1.2955rem+4.3182vw,4.75rem)] font-bold leading-[104%] tracking-[-2.5%] text-white">
            Have a project or a role in mind?<br /><span className="text-[#5EEAD4]">Let's talk</span>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col lg:items-start">
            <Link href={'mailto:judaosai@gmail.com'} className="w-full bg-[#2DD4BF] rounded-[999px] h-[53px] flex items-center justify-center lg:w-fit lg:px-[26px]">
                    <p className="font-dm font-bold text-[16px] text-[#04211F] ">judaosai@gmail.com</p>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-[16px] pt-[12px] border-t border-t-[#15524C] lg:flex-row">
              <Link href={'https://linkedin.com/in/judaosai'} className="flex gap-[10px] items-center ">
                  <Image src={linkedin} alt="linkedin" />
                  <p className="font-dm font-medium text-[15px] text-[#D7F2EE]">linkedin.com/in/judaosai</p>
              </Link>
              <Link href={'https://github.com/JudeTheDuud'} className="flex gap-[10px] items-center ">
                  <Image src={github} alt="linkedin" />
                  <p className="font-dm font-medium text-[15px] text-[#D7F2EE]">github.com/JudeTheDuud</p>
              </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}