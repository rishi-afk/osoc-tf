import InfiniteTextScroll from "@/components/infinite-text-scroll";
import { Separator } from "@/components/ui/separator";
import { fontMono, samarkan } from "@/lib/fonts";
import { catchError, cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { RegisterForm } from "@/components/register-form";
import { SignInButton, currentUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { checkIfRegisteredForAgamya } from "../actions";
import { Metadata } from "next";
import ThemeCard from "@/components/theme-card";

export const metadata: Metadata = {
  title: "Agamya: The Hackathon",
  description:
    "Agamya: The Hackathon is an exciting and innovative flagship event organized by OSOC (Open Source Open Community) as part of the Technofania tech fest.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Agamya: The Hackathon",
    description:
      "Agamya: The Hackathon is an exciting and innovative flagship event organized by OSOC (Open Source Open Community) as part of the Technofania tech fest. This hackathon is designed to bring together tech enthusiasts, developers, designers, and problem solvers of the MCA batch 2025.",
  },
};

export default async function Agamya() {
  const user = await currentUser();
  let registered = false;
  if (user?.emailAddresses[0]?.emailAddress) {
    try {
      registered = await checkIfRegisteredForAgamya(
        user.emailAddresses[0].emailAddress
      );
    } catch (error) {
      catchError(error);
    }
  }
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
              "text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase text-center md:text-left text-[#FF4747]",
              samarkan.className
            )}
          >
            AGAMYA
          </h1>
          <div className="mt-8 md:mt-16 flex flex-row h-8 md:h-12 gap-8 lg:gap-12 items-center md:justify-start justify-center">
            {!!user ? (
              !registered ? (
                <RegisterForm email={user?.emailAddresses[0]?.emailAddress} />
              ) : (
                <Button
                  className="text-green-500 text-lg sm:text-xl md:text-2xl p-0"
                  variant="link"
                >
                  Registered
                </Button>
              )
            ) : (
              <SignInButton
                mode="modal"
                afterSignUpUrl="/agamya"
                afterSignInUrl="/agamya"
              >
                <Button
                  className="dark:text-[#D2D2D2] text-muted-foreground text-lg sm:text-xl md:text-2xl p-0"
                  variant="link"
                >
                  Register
                </Button>
              </SignInButton>
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
            <ThemeCard title="Road Safety" image="/themes/roadSafety.jpg" />
            <ThemeCard title="Plagairism Check" image="/themes/plagriasm.jpg" />
            <ThemeCard title="HealthTech" image="/themes/health.jpg" />
            <ThemeCard title="Productivity" image="/themes/productivity.png" />
            <ThemeCard
              title="Environmental Monitoring"
              image="/themes/environment.jpg"
            />
            <ThemeCard title="NITT Problems" image="/themes/nitt.jpeg" />
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
                        11 October, 2023
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Abstract Submission
                      </h4>
                      {/* <p className="text-sm md:text-base leading-snug text-muted-foreground">
                        Pick your favourite event(s) and register in that event
                        by filling the form corresponding to that event. Its
                        that easy :)
                      </p> */}
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-[#FF4747]">
                        17 October, 2023
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        First Round
                      </h4>
                      {/* <p className="text-sm md:text-base leading-snug text-muted-foreground">
                        Participate online. The links for your registered events
                        will be sent to you via email and whatsapp groups. Use
                        those links and show your talent.
                      </p> */}
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#FF4747]">
                        22 October, 2023
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Final Round
                      </h4>
                      {/* <p className="text-sm md:text-base leading-snug text-muted-foreground">
                        The ultimate genius will be revealed by our judging
                        panel on 10th May, 2021 and the resukts will be
                        announced on the whatsapp groups and will be mailed to
                        you.
                      </p> */}
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-[#FF4747]">
                        22 October, 2023
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Prize Distribution
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-muted-foreground">
                        The winners will be contacted by our team for their
                        details and the prizes will be distributed.
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
        <section className="w-full grid items-center gap-12 pb-8 pt-6 md:py-10">
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
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <h2
                className={cn(
                  "font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl"
                )}
              >
                Overview
              </h2>
              <Separator orientation="horizontal" className="bg-[#FF4747]" />
            </div>
            <p>
              Agamya: The Hackathon is an exciting and innovative flagship event
              organized by OSOC (Open Source Open Community) as part of the
              Technofania tech fest. This hackathon is designed to bring
              together tech enthusiasts, developers, designers, and problem
              solvers of the MCA community of NITT. It is a platform to turn
              innovative ideas into reality and make a positive impact on
              society through technology. And the OSOC is happy to announce the
              Agamya{"'"}
              beginning for this year and looking forward to welcoming the best
              of the innovations and in turn, giving back to the society to make
              the lives of others better.
            </p>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <h2
                className={cn(
                  "font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl"
                )}
              >
                Details
              </h2>
              <Separator orientation="horizontal" className="bg-[#FF4747]" />
            </div>
            <ul className="list-decimal flex gap-2 flex-col">
              <li>
                This hackathon expects the participants either in a team (max of
                4) or as an individual.
              </li>
              <li>
                You only have to choose theme from the list of themes provided.
              </li>
              <li>
                Make sure to register yourself and the team on the Technofania
                website. Please make sure that only one member of the team needs
                to register on the website.
              </li>
              <li>
                While registering, choose the theme that you’ll work towards.
              </li>
              <li>
                After registration and selecting the theme of your choice you
                need to first start working on the abstract. The format of the
                abstract is attached in the form on the website.
              </li>
              <li>
                You strictly need to stick to the theme of your choice when
                giving the title to your project. That is, your project should
                not differ from the theme you have chosen while registering.
              </li>
              <li>
                The deadline for abstract submission is 11th October, 11:59 pm.
              </li>
              <li>
                After the abstract submission, each participant has to submit
                the first round of the progress to their project. The deadline
                for the same is 17th october.
              </li>
              <li>
                Then a few projects, based on the quality of the abstract and
                the work progress will be selected for the final submission and
                the presentation. (The platforms for abstract and first round of
                submission will be communicated to participants on time)
              </li>
              <li>
                The final round will be in the offline mode where you need to
                present your project in front of the jury.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <InfiniteTextScroll />
    </>
  );
}
