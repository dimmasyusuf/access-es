import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import Image from 'next/image';
import { Button } from './ui/button';
import NavbarSheet from './NavbarSheet';

export default function Navbar() {
  return (
    <section className="flex justify-between w-full items-center">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="access english school logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
      </Link>
      <div className="hidden sm:flex items-center gap-16">
        <NavbarMenu />
        <div className="flex gap-2">
          <Button
            variant="outline"
            asChild
          >
            <Link href="/login">Masuk</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Daftar</Link>
          </Button>
        </div>
      </div>
      <NavbarSheet />
    </section>
  );
}
