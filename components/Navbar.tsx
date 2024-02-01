import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import Image from 'next/image';
import { Button } from './ui/button';
import NavbarSheet from './NavbarSheet';

export default function Navbar() {
  return (
    <section className="flex max-w-screen-xl items-center mx-auto justify-between">
      <NavbarSheet />

      <Link
        href="/"
        className="sm:mr-auto md:mr-0"
      >
        <Image
          src="/logo_text.svg"
          alt="Access English School Logo"
          width={112}
          height={40}
        />
      </Link>

      <NavbarMenu />

      <Link
        href="/register"
        className="font-bold hover:text-primary sm:hidden"
      >
        Daftar
      </Link>

      <div className="hidden sm:flex items-center gap-2">
        <Button
          variant="outline"
          asChild
          className="font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Link href="/login">Masuk</Link>
        </Button>
        <Button asChild>
          <Link href="/register">Daftar</Link>
        </Button>
      </div>
    </section>
  );
}
