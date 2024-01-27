import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <section className="flex justify-between w-full">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="access english school logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
      </Link>
      <div className="flex items-center gap-16">
        <NavbarMenu />
        <Button asChild>
          <Link href="/register">Daftar</Link>
        </Button>
      </div>
    </section>
  );
}
