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
import { programItems } from '@/constant';
import {
  RiBookLine,
  RiBuilding4Line,
  RiEBikeLine,
  RiLandscapeLine,
  RiLiveLine,
  RiMedalFill,
} from 'react-icons/ri';

export default function NavbarMenu() {
  return (
    <NavigationMenu className="hidden md:flex justify-between w-full">
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
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-4 w-[458px] lg:w-[544px]">
              {programItems.map((item, index) => (
                <li
                  key={index}
                  className="p-4 rounded-md hover:bg-accent"
                >
                  <NavigationMenuLink
                    href={item.route}
                    className="flex gap-4"
                  >
                    <div className="flex items-center lg:items-start justify-center min-h-full">
                      {item.title === 'Paket Camp' && (
                        <RiBuilding4Line className="w-7 h-7 lg:mt-0.5" />
                      )}
                      {item.title === 'Paket Non Camp' && (
                        <RiEBikeLine className="w-7 h-7 lg:mt-0.5" />
                      )}
                      {item.title === 'Kelas Satuan' && (
                        <RiBookLine className="w-7 h-7 lg:mt-0.5" />
                      )}
                      {item.title === 'Kelas Online' && (
                        <RiLiveLine className="w-7 h-7 lg:mt-0.5" />
                      )}
                      {item.title === 'English Staycation' && (
                        <RiLandscapeLine className="w-7 h-7 lg:mt-0.5" />
                      )}
                      {item.title === 'Beasiswa' && (
                        <RiMedalFill className="w-7 h-7 lg:mt-0.5" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuLink
            href="/promo"
            className={navigationMenuTriggerStyle()}
          >
            Promo
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
