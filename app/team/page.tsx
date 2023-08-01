import MemberGrid from "@/components/member-grid";
import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const data = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Deepak Suda",
    redirect: "/",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Rito",
    redirect: "/",
  },
  {
    id: "3",
    image:
      "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Nandini Kumari",
    redirect: "/",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Bhushan",
    redirect: "/",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Manvendra",
    redirect: "/",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Surendra",
    redirect: "/",
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
