"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-40 border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center font-semibold">
          <Icons.logo className="mr-2 h-6 w-6" />
          {siteConfig.name}
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/programs" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Programs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/admissions" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Admissions
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faculty" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Faculty
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink>
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink>
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>AI-HUB Institute</SheetTitle>
              <SheetDescription>
                Explore the AI-HUB Institute and learn about our programs, admissions, faculty, and more.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link href="/programs">Programs</Link>
              <Link href="/admissions">Admissions</Link>
              <Link href="/faculty">Faculty</Link>
              <Link href="/news">News</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
