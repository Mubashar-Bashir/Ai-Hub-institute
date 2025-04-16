
//Here's the updated Navbar.tsx code:

// src/components/navbar.tsx
"use client";

import Link from "next/link";
import { Menu } from 'lucide-react'; // Import the Menu icon

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button"; // Import buttonVariants
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// Removed NavigationMenu imports as we'll use simpler Links for this layout

// Define your navigation links data
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" }, // Added About based on Flowbite example
  { href: "/programs", label: "Programs" },
  { href: "/admissions", label: "Admissions" },
  { href: "/faculty", label: "Faculty" }, // Uncomment if needed
  { href: "/news", label: "News" },       // Uncomment if needed
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },       // Uncomment if needed / Maybe link from Contact or Footer
];

export function Navbar() {
  return (
    // Updated classes: sticky is generally preferred over fixed for navbars
    // Increased z-index to ensure it's above most content
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Use container for max-width and centering */}
      <div className="container flex h-14 max-w-screen-2xl items-center">

        {/* Logo and Site Name */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Icons.logo /> {/* Assuming Icons.logo renders your SVG */}
          <span className="font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation Links (Hidden on mobile) */}
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // Example styling - adjust as needed. Use buttonVariants for consistency?
              // Or simple text styling like Flowbite:
              className="text-foreground/60 transition-colors hover:text-foreground/80"
              // For active link styling, you'll need to use `usePathname` hook
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side container for CTA and Mobile Trigger */}
        <div className="flex flex-1 items-center justify-end space-x-4">

          {/* Desktop CTA Button (Hidden on mobile) */}
          <div className="hidden md:flex">
            <Link
              href="/apply" // Example link for CTA
              // Use Shadcn buttonVariants for consistent styling
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              Apply Now {/* Or "Get Started" */}
            </Link>
            {/* You could add other elements here like Theme Toggle */}
          </div>

          {/* Mobile Menu Trigger (Visible on mobile) */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              {/* Use a Button with variant="ghost" for the icon trigger */}
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 sm:max-w-xs">
              {/* Mobile Menu Header */}
              <SheetHeader className="px-4 text-left">
                 <SheetTitle>
                    <Link href="/" className="flex items-center space-x-2">
                        <Icons.logo />
                        <span>{siteConfig.name}</span>
                    </Link>
                 </SheetTitle>
                 {/* Optional Description */}
                 {/* <SheetDescription>
                   Explore our programs and resources.
                 </SheetDescription> */}
              </SheetHeader>

              {/* Mobile Menu Links */}
              <div className="mt-4 flex flex-col space-y-3 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    // You might want SheetClose here if clicking a link should close the sheet
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Mobile CTA Button */}
                <Link
                  href="/apply"
                  className={buttonVariants({ variant: "default", size: "sm", className: "mt-4 w-full" })} // Make it full width
                >
                   Apply Now
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
