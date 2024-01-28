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
import { classItems, programItems } from '@/constant';
import { useState } from 'react';
import Image from 'next/image';

export default function NavbarSheet() {
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
        <SheetHeader className="mt-6 space-y-0">
          <Button
            variant="ghost"
            size="lg"
            asChild
            className="w-full justify-start pl-0 rounded-none h-[52px]"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/">Beranda</Link>
          </Button>
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
                        className="w-full justify-start pl-4 rounded-none h-[52px]"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href={item.route}>{item.title}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-none"
            >
              <AccordionTrigger className="hover:no-underline">
                Kelas
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <ul className="flex flex-col">
                  {classItems.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="ghost"
                        size="lg"
                        asChild
                        className="w-full justify-start pl-4 rounded-none h-[52px]"
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
            className="w-full justify-start pl-0 rounded-none h-[52px]"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/blog">Blog</Link>
          </Button>
        </SheetHeader>
        <SheetFooter className="flex flex-row gap-2 justify-between">
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
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
