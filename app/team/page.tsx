import MemberGrid from "@/components/member-grid";
import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const data = [
  {
    id: "1",
    image: "/manvendra.jpg",
    name: "Manvendra",
    redirect: "https://www.linkedin.com/in/manvendra-singh-832466146",
  },
  {
    id: "2",
    image: "/neeraj.jpg",
    name: "Neeraj",
    redirect: "https://www.linkedin.com/in/neeraj-kumar-2002",
  },
  {
    id: "3",
    image: "/nandini.jpg",
    name: "Nandini",
    redirect: "https://in.linkedin.com/in/nandini-sahu-118a40225",
  },
  {
    id: "4",
    image: "/sachin.jpg",
    name: "Sachin",
    redirect: "https://www.linkedin.com/in/sachin-kumar-a7110a183",
  },
  {
    id: "5",
    image: "/tiya.jpg",
    name: "Tiya",
    redirect: "https://in.linkedin.com/in/tiya-roy",
  },
  {
    id: "6",
    image: "/harsh.jpg",
    name: "Harrsh",
    redirect: "https://in.linkedin.com/in/harshgoyal0128",
  },
  {
    id: "7",
    image: "/rito.jpeg",
    name: "Ritabrata",
    redirect: "/team",
  },
  {
    id: "8",
    image: "/deepak.jpg",
    name: "Deepak",
    redirect: "https://www.linkedin.com/in/deepaksuda",
  },
  {
    id: "9",
    image: "/rishikesh.jpeg",
    name: "Rishikesh",
    redirect: "https://www.linkedin.com/in/be-rishi",
  },
];
export default function Team() {
  return (
    <main className="container">
      <section className="w-full grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1
            className={cn(
              "font-bold leading-tight tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
              fontMono.className
            )}
          >
            TEAM
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            The ones who made it possible. Meet the OSOC 2023 batch.
          </p>
        </div>
      </section>
      <MemberGrid members={data} />
    </main>
  );
}
