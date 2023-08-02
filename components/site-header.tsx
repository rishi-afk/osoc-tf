import { siteConfig } from "@/config/site";
import Link from "next/link";
import { MainNav } from "./main-nav";
import Image from "next/image";
export function SiteHeader() {
  return (
    <header className="md:sticky top-0 z-40 w-full">
      <div className="container flex h-32 md:h-20 gap-4 md:gap-0 items-center md:justify-between justify-center flex-col md:flex-row">
        <div className="md:w-44">
          <Link href="/">
            <Image src={"/osoc.png"} alt="OSOC Logo" width={48} height={48} />
          </Link>
        </div>
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  );
}
