import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

export default function GetStarted() {
  return (
    <section className="max-w-screen-xl px-6 sm:px-8 md:px-0 w-full">
      <div className="flex flex-col py-8 md:py-10 gap-8 md:gap-10 w-full">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="font-medium text-3xl md:text-5xl">
            Cara Memulai Belajar
          </h2>
          <p className="hidden md:flex text-2xl">
            Mulai belajar dengan mengikuti langkah-langkah berikut.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <Link
            href="/register"
            className="flex justify-between items-center gap-4 rounded-xl p-6 h-20 md:h-28 lg:h-32 bg-gradient-to-r from-sky-600 to-sky-500 text-primary-foreground"
          >
            <h3 className="text-xl md:text-3xl">Daftar Akun</h3>
            <RiArrowRightLine className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
          <Link
            href="/program"
            className="flex justify-between items-center gap-4 rounded-xl p-6 h-20 md:h-28 lg:h-32 bg-gradient-to-r from-sky-600 to-sky-500 text-primary-foreground"
          >
            <h3 className="text-xl md:text-3xl">Pilih Kelasmu</h3>
            <RiArrowRightLine className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
          <Link
            href="/"
            className="flex justify-between items-center gap-4 rounded-xl p-6 h-20 md:h-28 lg:h-32 bg-gradient-to-r from-sky-600 to-sky-500 text-primary-foreground"
          >
            <h3 className="text-xl md:text-3xl">Mulai Belajar</h3>
            <RiArrowRightLine className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </div>
      </div>
    </section>
  );
}
