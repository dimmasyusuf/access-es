'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Session } from 'next-auth';
import { getInitials } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import { Separator } from './ui/separator';
import {
  RiBankCardLine,
  RiBookLine,
  RiBookOpenLine,
  RiLogoutBoxLine,
  RiUser3Line,
} from 'react-icons/ri';
import { signOut } from 'next-auth/react';

export default function NavbarProfile({ session }: { session: Session }) {
  return (
    <Popover>
      <PopoverTrigger className="hidden md:flex">
        <Avatar>
          <AvatarImage src={session?.user?.image!} />
          <AvatarFallback className="bg-sky-600 text-primary-foreground">
            {getInitials(session?.user?.name!)}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="flex flex-col gap-4"
      >
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
            <p className="text-sm font-semibold truncate">
              {session?.user?.name}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {session?.user?.email}
            </p>
          </div>
        </div>
        <Separator />

        <div className="flex flex-col">
          <Button
            variant="ghost"
            asChild
            className="flex w-full justify-start pl-0 rounded-sm min-h-12"
          >
            <Link href="/profile">
              <RiUser3Line className="w-5 h-5 mr-2" />
              Profile
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="flex w-full justify-start pl-0 rounded-sm min-h-12"
          >
            <Link href="/class">
              <RiBookOpenLine className="w-5 h-5 mr-2" />
              Kelas Saya
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="flex w-full justify-start pl-0 rounded-sm min-h-12"
          >
            <Link href="/transaction">
              <RiBankCardLine className="w-5 h-5 mr-2" />
              Transaksi
            </Link>
          </Button>
        </div>

        <Separator />

        <Button
          variant="ghost"
          className="flex w-full justify-start pl-0 rounded-sm min-h-12"
          onClick={() => signOut()}
        >
          <RiLogoutBoxLine className="w-5 h-5 mr-2" />
          Keluar
        </Button>
      </PopoverContent>
    </Popover>
  );
}
