import Link from 'next/link';
import { Button } from './ui/button';
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTiktokFill,
  RiTwitterXFill,
  RiWhatsappLine,
  RiYoutubeFill,
} from 'react-icons/ri';

export default function FooterMenu() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-col gap-8 sm:gap-16 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h3 className="text-xl font-bold">ACCESS ENGLISH SCHOOL</h3>
          <p className="text-sm text-muted-foreground text-justify">
            ACCESS English School mengabdi sejak tahun 2006 dan menjadi salah
            satu pelopor program belajar Bahasa Inggris dengan metode English
            Area di Kampung Inggris Pare.
          </p>
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              asChild
            >
              <Link
                href="https://www.facebook.com/Accessesofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookFill className="w-6 h-6 text-muted-foreground" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
            >
              <Link
                href="https://www.instagram.com/access_es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramLine className="w-6 h-6 text-muted-foreground" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
            >
              <Link
                href="https://www.tiktok.com/@access_es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTiktokFill className="w-6 h-6 text-muted-foreground" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
            >
              <Link
                href="https://twitter.com/AccessOfficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill className="w-6 h-6 text-muted-foreground" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send?phone=6282133060606&text=*Himin,PengendaftarkeACCESS-ESnih.Sayamautanya*"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiWhatsappLine className="w-6 h-6 text-muted-foreground" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
            >
              <Link
                href="https://www.youtube.com/c/AccessEnglishSchoolKediri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiYoutubeFill className="w-6 h-6 text-muted-foreground" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Belajar Gratis</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="/blog"
              className="text-muted-foreground hover:underline"
            >
              Blog
            </Link>
            <Link
              href="/toefl-training"
              className="text-muted-foreground hover:underline"
            >
              Latihan TOEFL
            </Link>
            <Link
              href="/toeic-training"
              className="text-muted-foreground hover:underline"
            >
              Latihan TOEIC
            </Link>
            <Link
              href="/assessment-test"
              className="text-muted-foreground hover:underline"
            >
              Cek Kemampuan Bahasa Inggrismu
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Tentang</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="/about"
              className="text-muted-foreground hover:underline"
            >
              Tentang kami
            </Link>
            <Link
              href="/program"
              className="text-muted-foreground hover:underline"
            >
              Program
            </Link>
            <Link
              href="/class"
              className="text-muted-foreground hover:underline"
            >
              Kelas
            </Link>
            <Link
              href="/career"
              className="text-muted-foreground hover:underline"
            >
              Karir
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Kontak</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="https://maps.app.goo.gl/QoNgsiWSBCpnEbJB7"
              className="text-muted-foreground  hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jl. Dahlia No.26, Mangunrejo, Tulungrejo, Kec. Pare, Kabupaten
              Kediri, Jawa Timur 64212
            </Link>
            <p className="text-muted-foreground">Telepon: (0354) 399925</p>
            <p className="text-muted-foreground">Whatsapp: +62821-3306-0606</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; 2006 - {currentYear}{' '}
          <Link
            href="/"
            className="hover:underline"
          >
            ACCESS-ES
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
