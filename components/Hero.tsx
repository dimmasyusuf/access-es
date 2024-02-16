import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-screen-xl w-full mt-0 sm:mt-6 mb-6">
      <div className="flex flex-col items-center justify-center px-6 md:px-0 w-full min-h-[320px] md:h-[420px] aspect-video md:aspect-auto bg-gradient-to-b from-sky-600 to-sky-400 md:bg-[url('/hero_md.webp')] lg:bg-[url('/hero_lg.webp')] xl:bg-[url('/hero_xl.webp')] md:bg-cover md:bg-center md:rounded-xl">
        <div className="flex flex-col gap-8 max-w-[480px] xl:max-w-xl">
          <div className="flex flex-col gap-4">
            <h1 className="text text-3xl sm:text-5xl xl:text-6xl font-bold text-primary-foreground">
              KAMPUNG INGGRIS
            </h1>
            <p className="text-primary-foreground sm:text-lg xl:text-xl xl:font-medium">
              Jelajahi pengalaman belajar Bahasa Inggris dengan mudah dan
              menyenangkan di Access English School.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              size="lg"
              asChild
              className="bg-slate-950 hover:bg-slate-950/80 text-primary-foreground hover:text-primary-foreground/80"
            >
              <Link href="/tentang">Daftar Sekarang</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
            >
              <Link href="/daftar">Tanya Admin</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
