'use client';

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { programItems } from '@/constant';
import { useState } from 'react';
import Image from 'next/image';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { getInitials } from '@/lib/utils';
import { Separator } from './ui/separator';
import { RiLogoutBoxLine } from 'react-icons/ri';

export default function NavbarSheet({ session }: { session: Session }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetTrigger
        aria-label="Open Mobile Menu"
        className="flex md:hidden items-center justify-center rounded-md mr-3"
      >
        <Image
          src="/icon_menu.svg"
          alt="Open Mobile Menu"
          width={23}
          height={23}
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col justify-between"
      >
        <SheetHeader className="mt-6 space-y-0 overflow-auto">
          {session && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <Avatar className="rounded-sm">
                  <AvatarImage
                    src={session?.user?.image!}
                    className="rounded-sm"
                  />
                  <AvatarFallback className="bg-sky-600 text-primary-foreground rounded-sm">
                    {getInitials(session?.user?.name!)}
                  </AvatarFallback>
                </Avatar>
                <div className="w-full overflow-hidden">
                  <p className="text-left text-sm font-semibold truncate">
                    {session?.user?.name}
                  </p>
                  <p className="text-left text-xs text-muted-foreground truncate">
                    {session?.user?.email}
                  </p>
                </div>
              </div>

              <Separator />
            </div>
          )}
          <Button
            variant="ghost"
            size="lg"
            asChild
            className="w-full justify-start pl-0 rounded-none min-h-[52px]"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/">Beranda</Link>
          </Button>
          {session && (
            <>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="w-full justify-start pl-0 rounded-none min-h-[52px]"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/profile">Profile</Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="w-full justify-start pl-0 rounded-none min-h-[52px]"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/class">Kelas Saya</Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="w-full justify-start pl-0 rounded-none min-h-[52px]"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/transaction">Transaksi</Link>
              </Button>
            </>
          )}
          <Accordion
            type="single"
            collapsible
            className="mt-0"
          >
            <AccordionItem
              value="item-1"
              className="border-none"
            >
              <AccordionTrigger className="hover:no-underline">
                Program
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <ul className="flex flex-col">
                  {programItems.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="ghost"
                        size="lg"
                        asChild
                        className="w-full justify-start pl-4 rounded-none min-h-[52px]"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href={item.route}>{item.title}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button
            variant="ghost"
            size="lg"
            asChild
            className="w-full justify-start pl-0 rounded-none min-h-[52px]"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/promo">Promo</Link>
          </Button>
        </SheetHeader>

        <SheetFooter className="flex flex-row gap-2 justify-between">
          {session ? (
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => signOut()}
            >
              <RiLogoutBoxLine className="w-5 h-5 mr-2" /> Keluar
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full"
              >
                <Link href="/login">Masuk</Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="w-full"
              >
                <Link href="/register">Daftar</Link>
              </Button>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
