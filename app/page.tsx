import InfiniteTextScroll from "@/components/infinite-text-scroll";
import { RegisterForm } from "@/components/register-form";
import { Separator } from "@/components/ui/separator";
import { fontMono, fontSans2 } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="relative container flex flex-col justify-center -mt-32 md:-mt-20 h-screen w-full ">
        <h3
          className={cn(
            "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-none tracking-tighter dark:text-[#616161]  text-muted-foreground text-left"
          )}
        >
          OSOC Presents
        </h3>
        <h1>
          <span
            className={cn(
              "text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-none font-bold tracking-tighter text-[#FF4747] ",
              fontMono.className
            )}
          >
            <em>technofania</em>
          </span>
          <span
            className={cn(
              "text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase italic leading-none font-bold tracking-tighter [-webkit-text-stroke:2px_#FF4747] text-transparent",
              fontSans2.className
            )}
          >
            {" '23"}
          </span>
        </h1>
        <div className="mt-8 md:mt-16 flex flex-row gap-8 lg:gap-12 items-center">
          <RegisterForm />
          <Separator orientation="vertical" className="bg-[#FF4747]" />
          <Link
            href={"/events"}
            className="dark:text-[#D2D2D2] text-muted-foreground p-0 text-lg sm:text-xl md:text-2xl"
          >
            Events {"->"}
          </Link>
        </div>
      </main>
      <InfiniteTextScroll />
    </>
  );
}
