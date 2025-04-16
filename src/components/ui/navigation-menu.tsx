import * as React from "react"

const NavigationMenu = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
  >
    {children}
  </div>
))
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef<
  React.ElementRef<"ul">,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, children, ...props }, ref) => (
  <ul
    ref={ref}
    {...props}
  >
    {children}
  </ul>
))
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<"li">,
  React.ComponentPropsWithoutRef<"li">
>(({ className, children, ...props }, ref) => (
  <li
    ref={ref}
    {...props}
  >
    {children}
  </li>
))
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
  >
    {children}
  </div>
))
NavigationMenuContent.displayName = "NavigationMenuContent"

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    {...props}
  >
    {children}
  </button>
))
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    {...props}
  >
    {children}
  </a>
))
NavigationMenuLink.displayName = "NavigationMenuLink"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
}