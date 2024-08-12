import Link from "next/link";

import {
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { UserButton, useAuth } from "@clerk/nextjs";
 

const menu2 = [
  "Dashboard",
  "Activity",
  "Assets",
  "Analytics",
  "License",
  "Accessories",
  "Consumables",
  "Component",
  "Furnitures",
  "Vehicles",
  "Appliances",
  "Users",
  "Settings",
];
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

export default function Nav() {
  const { userId } = useAuth();
  return (
    <div className="flex flex-col gap-4  w-full ">
      
      <header className="top-0 flex h-16 items-center justify-center gap-4 bg-background px-4 md:px-6 bg-yellow-300 drop-shadow-lg w-full">
        <div className="flex flex-row items-center justify-center">
        </div>
        <div className="flex flex-row items-center justify-center">
          <a href="/dashboard" className="font-bold ">
            UAS INVENTORY SYSTEM
          </a>
        </div>
        <div>
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <h1 className="font-bold">|</h1>
            <Link
              href="/dashboard"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Dashboard</p>
            </Link>
            <Link
              href="/activity"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Activity</p>
            </Link>
            <Link
              href="/analytics"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Analytics</p>
            </Link>
            <Link
              href="/users"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Users</p>
            </Link>
          </nav>
        </div>
        <div className="flex w-auto items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">

          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>

        </div>
        {!userId && (
          <Link href={"/sign-in"}>
            <Button>Sign In</Button>
          </Link>
        )}
        {userId && <UserButton />}
      </header>
    </div>
  );
}