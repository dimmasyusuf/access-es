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
        className="sm:mr-auto"
      >
        <Image
          src="/logo_text.svg"
          alt="Access English School Logo"
          width={112}
          height={40}
        />
      </Link>

      <Link
        href="/"
        className="flex sm:hidden font-bold text-sm hover:text-primary"
      >
        Daftar
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
    </section>
  );
}
