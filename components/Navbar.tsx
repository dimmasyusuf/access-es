import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import Image from 'next/image';
import { Button } from './ui/button';
import NavbarSheet from './NavbarSheet';
import { auth } from '@/auth';

export default async function Navbar() {
  const session = await auth();

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

      {!session && (
        <Link
          href="/register"
          className="font-bold hover:text-primary sm:hidden"
        >
          Daftar
        </Link>
      )}

      {session ? (
        <div className="">
          <Image
            src={session?.user?.image!}
            alt={session?.user?.name!}
            width={40}
            height={40}
            className="rounded-full"
          />
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
