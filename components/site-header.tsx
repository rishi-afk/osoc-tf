import { siteConfig } from "@/config/site";
import Link from "next/link";
import { MainNav } from "./main-nav";
import Image from "next/image";
import { auth, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Separator } from "./ui/separator";
export function SiteHeader() {
  const { userId, user } = auth();
  return (
    <header className="top-0 z-40 w-full">
      <div className="container flex h-32 md:h-20 gap-4 md:gap-0 items-center md:justify-between justify-center flex-col md:flex-row">
        <div className="md:w-44">
          <Link href="/">
            <Image src={"/osoc.png"} alt="OSOC Logo" width={48} height={48} />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-8 h-full">
          <MainNav items={siteConfig.mainNav} />
          <Separator
            orientation="vertical"
            className="h-1/3 bg-[#FF4747] -mr-2"
          />
          <div className="w-8">
            {!!userId ? (
              <UserButton
                afterSignOutUrl="/"
                appearance={{ elements: { avatarImage: user?.imageUrl } }}
              />
            ) : (
              <SignInButton mode="modal">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Icons.user className="h-5 w-5" />
                  <span className="sr-only">Login/Sign Up</span>
                </Button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
