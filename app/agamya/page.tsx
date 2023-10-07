// "use client";
import InfiniteTextScroll from "@/components/infinite-text-scroll";
import { Separator } from "@/components/ui/separator";
import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { RegisterForm } from "@/components/register-form";
import { SignInButton, auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default async function Agamya() {
  const { userId } = auth();
  return (
    <>
      <main className="relative container flex md:flex-row flex-col items-center justify-center md:justify-between -mt-20 h-screen w-full min-h-[600px]">
        <div>
          <h3
            className={cn(
              "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-none tracking-tighter dark:text-[#616161]  text-muted-foreground text-center md:text-left"
            )}
          >
            Hackathon
          </h3>
          <h1
            className={cn(
              "text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-none font-bold tracking-tighter text-center md:text-left text-[#FF4747] ",
              fontMono.className
            )}
          >
            AGAMYA
          </h1>
          <div className="mt-8 md:mt-16 flex flex-row h-8 md:h-12 gap-8 lg:gap-12 items-center md:justify-start justify-center">
            {!userId ? (
              <SignInButton mode="modal">
                <Button
                  className="dark:text-[#D2D2D2] text-muted-foreground text-lg sm:text-xl md:text-2xl p-0"
                  variant="link"
                >
                  Register
                </Button>
                im
              </SignInButton>
            ) : (
              <RegisterForm userId={userId} />
            )}
            <Separator orientation="vertical" className="bg-[#FF4747] h-full" />
            <Link
              href={"#themes"}
              scroll={true}
              className="dark:text-[#D2D2D2] text-muted-foreground p-0 text-lg sm:text-xl md:text-2xl"
            >
              Explore {"->"}
            </Link>
          </div>
        </div>
        <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[520px] md:h-[520px] relative">
          <Image
            src="/hackathon-2.svg"
            alt="hackathon image"
            className="object-contain w-full h-full absolute"
            fill
          />
        </div>
      </main>
      <div className="container" id="themes">
        <section className="w-full grid items-center gap-12 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1
              className={cn(
                "font-bold leading-tight tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
                fontMono.className
              )}
            >
              THEMES
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Build innovative solutions to tackle real-world challenges
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8 w-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-96 flex justify-center items-center flex-col gap-4 border bg-opacity-20 border-[#FF4747] rounded-sm"
              >
                <div className="w-16 h-16 rounded-full bg-gray-400 flex justify-center items-center">
                  <Icons.navigation size={32} />
                </div>
                <h3 className="text-3xl">Theme #{i}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="w-full flex flex-col items-start md:flex-row">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 md:pb-16 mt-2 md:mt-12">
              <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1
                  className={cn(
                    "font-bold leading-tight tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
                    fontMono.className
                  )}
                >
                  TIMELINE
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground">
                  Explore the journey of AGAMYA through time...
                </p>
              </div>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden py-10 h-full">
                  <div
                    className="border-2-2 border-[#ff4747] absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #FF4747",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-[#ff4747] absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #FF4747",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#FF4747]">
                        1-6 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Registration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-muted-foreground">
                        Pick your favourite event(s) and register in that event
                        by filling the form corresponding to that event. Its
                        that easy :)
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-[#FF4747]">
                        6-9 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Participation
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-muted-foreground">
                        Participate online. The links for your registered events
                        will be sent to you via email and whatsapp groups. Use
                        those links and show your talent.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#FF4747]">
                        {" "}
                        10 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Result Declaration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-muted-foreground">
                        The ultimate genius will be revealed by our judging
                        panel on 10th May, 2021 and the resukts will be
                        announced on the whatsapp groups and will be mailed to
                        you.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-[#FF4747]">
                        12 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Prize Distribution
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-muted-foreground">
                        The winners will be contacted by our team for their
                        addresses and the winning goodies will be sent at their
                        addresses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-auto -mt-20 md:-mt-20 h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 relative">
                  <Image
                    src={"/prize.svg"}
                    alt="Success Hackathon Image"
                    className="object-contain w-full h-full absolute"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1
              className={cn(
                "font-bold leading-tight tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
                fontMono.className
              )}
            >
              RULES
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Play by the rules to ensure a fair and enjoyable experience for
              all.
            </p>
          </div>
          <div className="h-screen" />
        </section>
      </div>
      <InfiniteTextScroll />
    </>
  );
}
