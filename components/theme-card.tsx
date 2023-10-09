import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

export default function ThemeCard({ title, image }: Props) {
  return (
    <div className="w-full h-[400px] relative pointer">
      <Image src={image} fill alt="member image" className="object-cover" />
      <div className="w-full h-full flex items-center justify-center py-6 bg-zinc-800/80 top-0 left-0 absolute">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3
            className={
              "text-4xl font-bold text-center uppercase tracking-wider text-white"
            }
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
