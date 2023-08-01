"use client";
import React, { useEffect } from "react";

import { AnimationControls, motion, useAnimation } from "framer-motion";
import MemberCard from "./member-card";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  members: any[];
}

const MemberGrid = ({ members }: Props) => {
  const animation = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
  }, [animation, inView, members]);

  return (
    <>
      <motion.div
        ref={ref}
        className="grid gap-1 md:grid-cols-2 lg:grid-cols-3 mb-8 w-full"
        initial="hidden"
        animate={animation}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {members.map((member) => (
          <MemberCard member={member} key={member.id} />
        ))}
      </motion.div>
    </>
  );
};

export default MemberGrid;
