import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import Image from 'next/image';
import { Button } from './ui/button';
import NavbarSheet from './NavbarSheet';
import NavbarProfile from './NavbarProfile';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { RiShoppingCartLine } from 'react-icons/ri';

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <section className="flex max-w-screen-xl items-center mx-auto justify-between">
      <NavbarSheet session={session!} />

      <Link
        href="/"
        className="sm:mr-auto md:mr-0"
      >
        <Image
          src="/logo_text.svg"
          alt="ACCESS English School Logo"
          width={112}
          height={40}
        />
      </Link>

      <NavbarMenu />

      {!session && (
        <Link
          href="/register"
          className="font-bold hover:text-primary sm:hidden"
        >
          Daftar
        </Link>
      )}

      {session ? (
        <div className="flex items-center gap-8">
          <Link href="/cart">
            <RiShoppingCartLine className="w-[27px] h-[27px]" />
          </Link>
          <NavbarProfile session={session} />
        </div>
      ) : (
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
      )}
    </section>
  );
}
