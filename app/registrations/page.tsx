import { RegistrationsTable } from "@/components/registrations-table";
import { fontMono } from "@/lib/fonts";
import { getRegistrations } from "@/lib/schema";
import { cn } from "@/lib/utils";

export default async function Registrations() {
  const data = await getRegistrations();
  return (
    <main className="container">
      <section className="w-full pb-8 pt-6 md:pt-10 md:pb-6">
        <h1
          className={cn(
            "font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
            fontMono.className
          )}
        >
          REGISTRATIONS
        </h1>
      </section>
      <RegistrationsTable data={data} />
    </main>
  );
}
