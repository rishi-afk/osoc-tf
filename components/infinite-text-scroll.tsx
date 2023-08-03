"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function InfiniteTextScroll() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const container = useRef<HTMLElement>(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate = () => {
    if (firstText?.current && secondText?.current) {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    }
  };

  return (
    <section
      ref={container}
      className="fixed -bottom-5 md:-bottom-5 lg:-bottom-10 flex justify-center items-center overflow-hidden select-none"
    >
      <div
        className="relative text-[#494949]  dark:opacity-50 opacity-20  whitespace-nowrap m-0 text-7xl sm:text-8xl md:text-[160px] font-medium tracking-tighter"
        ref={slider}
      >
        <p ref={firstText} className="pr-[50px]">
          Open Source Open Community -
        </p>
        <p
          ref={secondText}
          className=" pr-[50px] even:absolute even:left-full even:top-0"
        >
          Open Source Open Community -
        </p>
      </div>
    </section>
  );
}
