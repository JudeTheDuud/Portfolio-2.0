"use client";
import { useState } from "react";
import Image from "next/image";
import { images } from "@/images/images";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { cn } from "@/utils/libs";

// Centre of the menu button, relative to the top-left of the drawer:
// 20px page padding + 22px (half of the 44px button) from the right edge,
// and half the 69px navbar height above the drawer's top edge.
const ORIGIN = "calc(100% - 42px) -34px";

const drawer: Variants = {
  closed: {
    clipPath: `circle(0px at ${ORIGIN})`,
    transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
  },
  open: {
    clipPath: `circle(1400px at ${ORIGIN})`,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const list: Variants = {
  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const item: Variants = {
  closed: { opacity: 0, y: 16 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconTransition = { duration: 0.35, ease: [0.22, 1, 0.36, 1] } as const;

export default function Navbar() {
  const { menu, close, logo } = images();
  const [showNav, setShowNav] = useState(false);
  const links = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Project",
      link: "#project",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const handleScrollClick = (
    e: React.MouseEvent<HTMLElement>,
    link: string,
  ) => {
    e.preventDefault();
    setShowNav(false); // Close mobile menu

    const targetId = link.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      // Updates the URL hash cleanly without jumping
    }
  };
  return (
    <div className="h-[69px] bg-[#F6FAF9] flex items-center   border-b border-b-[#DCEAE7] sticky top-0 z-[500]">
      <div className=" flex justify-between items-center w-full px-[20px] lg:px-[130px]">
        <Link
          href={"/"}
          scroll = {false}
          onClick={(e) => handleScrollClick(e, "#home")}
          className="flex gap-[10px] items-center "
        >
          <Image src={logo} alt="" className="w-[36px] h-[36px]" />
          <p className="font-medium text-[16px] leading-[100%] text-[#0D1B1A] ">
            Juda Osai
          </p>
        </Link>

        <button
          type="button"
          aria-label={showNav ? "Close menu" : "Open menu"}
          aria-expanded={showNav}
          onClick={() => setShowNav((prev) => !prev)}
          className="relative w-[44px] h-[44px] lg:hidden"
        >
          {/* Menu icon: spins and shrinks away when opening */}
          <motion.span
            initial={false}
            animate={
              showNav
                ? { opacity: 0, rotate: 90, scale: 0.4 }
                : { opacity: 1, rotate: 0, scale: 1 }
            }
            transition={iconTransition}
            className="absolute inset-0"
          >
            <Image src={menu} alt="" className="w-[44px] h-[44px]" />
          </motion.span>

          {/* Close icon: spins and grows in when opening */}
          <motion.span
            initial={false}
            animate={
              showNav
                ? { opacity: 1, rotate: 0, scale: 1 }
                : { opacity: 0, rotate: -90, scale: 0.4 }
            }
            transition={iconTransition}
            className="absolute inset-0"
          >
            <Image src={close} alt="" className="w-[44px] h-[44px]" />
          </motion.span>
        </button>
      </div>

      <div className="desktop-nav hidden lg:flex gap-[28px] pr-[130px]  items-center">
        {links.map((link, idx) => (
          <Link
            href={link.link}
            onClick={(e) => {
              e.preventDefault();
              handleScrollClick(e, link.link);
            }}
            key={idx}
            className={cn("font-dm text-[15px] font-medium text-[#0D1B1A]",
              link.name === 'Contact' && 'hidden'
            )}
          >
            {link.name}
          </Link>
        ))}

        

        <Link
          href="#contact"
          scroll={false}
          onClick={(e) => handleScrollClick(e, "#contact")}
          className="h-[42px] bg-[#0F766E] rounded-[999px] px-[20px] flex items-center justify-center shrink-0"
        >
          <p className="text-white font-semibold text-[15px] font-dm">
            Let's talk
          </p>
        </Link>
      </div>

      <AnimatePresence>
        {showNav && (
          <motion.div
            key="drawer"
            variants={drawer}
            initial="closed"
            animate="open"
            exit="closed"
            className="bg-[#F6FAF9] fixed inset-x-0 top-[69px] h-[calc(100dvh-69px)] px-[20px] lg:hidden"
          >
            <motion.div
              variants={list}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col "
            >
              {links.map((link, idx) => (
                <motion.div key={idx} variants={item}>
                  <Link
                    href={link.link}
                    onClick={(e) => handleScrollClick(e, link.link)}
                    className="h-[61px] border-b border-b-[#DCEAE7] flex justify-between items-center "
                  >
                    <p className="font-medium text-[22px] leading-[100%] tracking-0 text-[#0D1B1A]">
                      {link.name}
                    </p>

                    <div className="w-[10px] h-[10px] rounded-full bg-[#0F766E]" />
                  </Link>
                </motion.div>
              ))}

            
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}