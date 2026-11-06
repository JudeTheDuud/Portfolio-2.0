"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

interface CounterProps {
  target: number;
  duration?: number; // Optional custom duration adjustment
  prefix?: string;   // For currency or symbols like "$"
  suffix?: string;   // For symbols like "+" or "%"
}

export default function Counter({ target, prefix = "", suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);

  // Smooth spring physics. Adjust stiffness and damping to change the speed feel.
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 80,
  });

  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    });
  }, [springValue]);

  return (
    <div className=" text-[clamp(1.75rem,1.3874rem+1.547vw,2.625rem)]  font-bold text-[#0F766E] flex gap-[2.6px] lg:gap-[8px]">
      <span>{prefix}</span>
      <span ref={ref} >0</span>
      <span>{suffix}</span>
    </div>
  );
}
