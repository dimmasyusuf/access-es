'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { classItems, programItems } from '@/constant';

export default function NavbarMenu() {
  return (
    <NavigationMenu className="hidden sm:flex justify-between w-full">
      <NavigationMenuList className="flex justify-between w-full">
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuLink
            href="/"
            className={navigationMenuTriggerStyle()}
          >
            Beranda
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Program</NavigationMenuTrigger>
          <NavigationMenuContent className="flex w-full">
            <ul className="grid grid-cols-2 gap-2 p-4 w-[492px]">
              {programItems.map((item, index) => (
                <li
                  key={index}
                  className="p-4 rounded-md hover:bg-accent"
                >
                  <NavigationMenuLink
                    href={item.route}
                    className="flex flex-col"
                  >
                    <span className="text-sm font-medium">{item.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kelas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-2 p-4 w-[492px]">
              {classItems.map((item, index) => (
                <li
                  key={index}
                  className="p-4 rounded-md hover:bg-accent"
                >
                  <NavigationMenuLink
                    href={item.route}
                    className="flex flex-col"
                  >
                    <span className="text-sm font-medium">{item.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuLink
            href="/blog"
            className={navigationMenuTriggerStyle()}
          >
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
