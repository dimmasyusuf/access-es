import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from './ui/button';
import Link from 'next/link';
import { RiBookLine, RiWhatsappLine } from 'react-icons/ri';

export default function FAQ() {
  return (
    <section className="max-w-screen-xl px-6 sm:px-8 md:px-0 w-full">
      <div className="flex flex-col py-8 md:py-10 gap-8 md:gap-10 w-full">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="font-medium text-3xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="hidden md:flex text-2xl">
            Berikut adalah pertanyaan yang sering diajukan oleh calon siswa.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 md:grid-cols-2 md:gap-6 w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Apa itu ACCESS-ES?</AccordionTrigger>
            <AccordionContent className="text-justify">
              ACCESS English School atau dikenal dengan ACCESS-ES adalah lembaga
              kursus bahasa inggris yang dibuka secara resmi pada tahun 2006 dan
              menjadi salah satu pelopor program belajar Bahasa Inggris dengan
              metode English Area di Kampung Inggris Pare.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Dimana lokasi ACCESS-ES?</AccordionTrigger>
            <AccordionContent className="text-justify">
              ACCESS-ES berada di Kampung Inggris Pare, Jl. Dahlia No.26,
              Mangunrejo, Tulungrejo, Kecamatan Pare, Kabupaten Kediri, Jawa
              Timur 64212
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Mengapa harus belajar di ACCESS-ES?
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              Belajar di ACCESS-ES memberikan banyak keuntungan, diantaranya
              adalah metode English Area yang efektif, pengajar yang
              berpengalaman, dan fasilitas yang lengkap. Selain itu, Kamu juga
              akan mendapatkan sertifikat setelah menyelesaikan program belajar
              di ACCESS-ES.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Bagaimana cara mendaftar ke ACCESS-ES?
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              Kamu bisa mendaftar ke ACCESS-ES dengan cara menghubungi Admin
              melalui Whatsapp atau dengan membeli kelas secara langsung di
              website ini.
              <div className="grid grid-cols-2 gap-2 md:gap-4 mt-4">
                <Button asChild>
                  <Link href="/program">
                    <RiBookLine className="w-5 h-5 mr-2" /> Pilih Kelasmu
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#25D366] hover:bg-[#25D366]/90"
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
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              Kapan waktu belajar di ACCESS-ES?
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              Waktu belajar di ACCESS-ES berdasarkan periode setiap tanggal 10
              dan 25 setiap bulannya. Kamu bisa memilih periode belajar yang
              sesuai dengan jadwalmu.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              Apakah ACCESS-ES menyediakan kelas online?
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              ACCESS-ES memiliki program kelas online yang bisa diikuti oleh
              siapapun dari manapun. Kamu bisa memilih program kelas online yang
              sesuai dengan kebutuhanmu.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
