'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { getInitials } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import { Separator } from './ui/separator';
import {
  RiBankCardLine,
  RiBookLine,
  RiLogoutBoxLine,
  RiUser3Line,
} from 'react-icons/ri';

export default async function NavbarProfile({ session }: { session: Session }) {
  const handleLogout = () => {
    signOut();
  };

  return (
    <Popover>
      <PopoverTrigger>
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

        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            asChild
            className="flex w-full justify-start pl-0 rounded-sm"
          >
            <Link href="/profile">
              <RiUser3Line className="w-5 h-5 mr-2" /> Profile
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="flex w-full justify-start pl-0 rounded-sm"
          >
            <Link href="/class">
              <RiBookLine className="w-5 h-5 mr-2" /> Kelas
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="flex w-full justify-start pl-0 rounded-sm"
          >
            <Link href="/transaction">
              <RiBankCardLine className="w-5 h-5 mr-2" /> Transaksi
            </Link>
          </Button>
        </div>

        <Separator />

        <Button
          variant="ghost"
          className="flex w-full justify-start pl-0 rounded-sm"
          onClick={handleLogout}
        >
          <RiLogoutBoxLine className="w-5 h-5 mr-2" /> Keluar
        </Button>
      </PopoverContent>
    </Popover>
  );
}
