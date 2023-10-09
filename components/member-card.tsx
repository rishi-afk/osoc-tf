"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Icons } from "./icons";
interface Props {
  member: {
    id: string;
    image: string;
    name: string;
    redirect: string;
  };
}

const MemberCard = ({ member }: Props) => {
  return (
    <motion.div
      className="w-full h-[400px] relative pointer"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] },
        },
      }}
    >
      <Image
        src={member.image}
        fill
        alt="member image"
        className="object-cover"
      />
      <Link href={member.redirect}>
        <motion.div
          className="w-full h-full flex items-center justify-center py-6 bg-zinc-800/40 opacity-0 top-0 left-0 absolute"
          whileHover={{ opacity: 1 }}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <h2
              className={cn(
                "text-4xl font-bold text-center uppercase tracking-wider text-white",
                fontSans.variable
              )}
            >
              {member.name}
            </h2>
            <Icons.linkedIn size={32} />
          </div>
        </motion.div>
      </Link>
    </motion.div>
    // <MotionBox
    //   w="full"
    //   h="md"
    //   pos="relative"
    //   cursor="pointer"

    // >
    //   <Image
    //     h="full"
    //     w="full"
    //     src={member.image}
    //     objectFit="cover"
    //     opacity={0.9}
    //     alt="member image"
    //   />
    //   <Link href={member.redirect}>
    //     <MotionFlex
    //       w="full"
    //       h="full"
    //       align="center"
    //       justify="center"
    //       py="6"
    //       bg="brand.overlay"
    //       opacity="0"
    //       pos="absolute"
    //       top="0"
    //       left="0"
    //       whileHover={{ opacity: 1 }}
    //     >
    //       <Flex justify="center" align="center" direction="column">
    //         <Text
    //           fontFamily="body"
    //           fontWeight="bold"
    //           fontSize="4xl"
    //           align="center"
    //           color="brand.lightest"
    //           textTransform="uppercase"
    //           letterSpacing="widest"
    //         >
    //           {member.name}
    //         </Text>
    //         {/* <Icon boxSize="8" as={FaLinkedin} /> */}
    //       </Flex>
    //     </MotionFlex>
    //   </Link>
    // </MotionBox>
  );
};

export default MemberCard;
