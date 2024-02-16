import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { RiWhatsappLine } from 'react-icons/ri';

export default function CTA() {
  return (
    <section className="max-w-screen-xl px-6 sm:px-8 md:px-0 w-full">
      <div className="flex py-8 md:py-10">
        <div className="flex flex-wrap md:flex-nowrap px-8 gap-8 w-full bg-primary h-full md:h-[322px] rounded-xl text-primary-foreground">
          <div className="flex items-end justify-center md:min-w-[350px] order-2 md:order-1 mx-auto md:mx-0">
            <Image
              src="/cta.webp"
              alt="Study Hard or Go Home"
              width={400}
              height={321}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-4 md:gap-6 justify-center order-1 md:order-2 mt-8 md:mt-0">
            <div className="flex flex-col gap-2 md:gap-4 w-full">
              <p className="text-pretty">Masih ragu dengan pilihanmu?</p>
              <h2 className="font-medium text-3xl md:text-5xl">
                Yuk, Konsultasi Sekarang!
              </h2>
            </div>
            <Button
              size="lg"
              asChild
              className="bg-[#25D366] hover:bg-[#25D366]/90 w-fit"
            >
              <Link
                href="https://api.whatsapp.com/send?phone=6282133060606&text=*Himin,PengendaftarkeACCESS-ESnih.Sayamautanya*"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RiWhatsappLine className="w-5 h-5 mr-2" /> Tanya Admin
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
