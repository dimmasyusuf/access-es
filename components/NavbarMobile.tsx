import { HomeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import {
  RiBookLine,
  RiHome5Line,
  RiSearchLine,
  RiShoppingCartLine,
  RiUser3Line,
} from 'react-icons/ri';

export default function NavbarMobile() {
  return (
    <nav className="sticky bg-background overflow-hidden bottom-0 p-4 w-full shadow-2xl sm:hidden">
      <ul className="grid grid-cols-5 gap-2">
        <li className="flex flex-col items-center">
          <Link
            href="/"
            className="flex flex-col items-center"
          >
            <RiHome5Line className="w-6 h-6 text-sky-600" />
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link
            href="/"
            className="flex flex-col items-center"
          >
            <RiSearchLine className="w-6 h-6" />
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link
            href="/"
            className="flex flex-col items-center"
          >
            <RiBookLine className="w-6 h-6" />
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link
            href="/"
            className="flex flex-col items-center"
          >
            <RiShoppingCartLine className="w-6 h-6" />
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link
            href="/"
            className="flex flex-col items-center"
          >
            <RiUser3Line className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
