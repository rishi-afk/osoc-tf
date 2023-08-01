import Event from "@/components/event-card";
import { Separator } from "@/components/ui/separator";
import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Events() {
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
            EVENTS
          </h1>
        </div>
      </section>
      <div className="flex flex-col w-full gap-16 mb-16">
        <Event
          heading="Codezilla"
          description="The perfect fusion of masterminds, proves it's
              excellence every year with innovation and proactive topping to
              fresh young minds. This event took its birth in 2017. "
        />
        <Event
          heading="Codezilla"
          description="The perfect fusion of masterminds, proves it's
              excellence every year with innovation and proactive topping to
              fresh young minds. This event took its birth in 2017. "
        />
        <Event
          heading="Codezilla"
          description="The perfect fusion of masterminds, proves it's
              excellence every year with innovation and proactive topping to
              fresh young minds. This event took its birth in 2017. "
        />
      </div>
    </main>
  );
}
