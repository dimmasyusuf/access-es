import React from 'react';
import {
  RiGlobalLine,
  RiGraduationCapLine,
  RiTimerLine,
  RiVerifiedBadgeLine,
} from 'react-icons/ri';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Reason() {
  return (
    <section className="flex px-6 sm:px-8 md:px-0 max-w-screen-xl">
      <div className="flex flex-col py-8 md:py-10 gap-10 md:gap-16">
        <h2 className="font-medium text-3xl md:text-5xl">Kenapa ACCESS-ES?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-row md:flex-col gap-3 md:gap-6 items-center md:items-start">
              <div className="w-7 h-7 md:w-9 md:h-9">
                <RiTimerLine className="w-full h-full" />
              </div>
              <h3 className="text-lg md:text-2xl xl:h-16 w-full">
                +15 Tahun Berpengalaman
              </h3>
            </div>
            <p className="text-muted-foreground text-pretty">
              ACCESS English School mengabdi sejak tahun 2006 dan menjadi salah
              satu pelopor program belajar bahasa Inggris dengan metode English
              Area di Kampung Inggris Pare.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-row md:flex-col gap-3 md:gap-6 items-center md:items-start">
              <div className="w-7 h-7 md:w-9 md:h-9">
                <RiGraduationCapLine className="w-full h-full" />
              </div>
              <h3 className="text-lg md:text-2xl xl:h-16 w-full">
                +150.796 Alumni
              </h3>
            </div>
            <p className="text-muted-foreground text-pretty">
              Meluluskan alumni yang tersebar di seluruh Indonesia dan
              Mancanegara dengan berbagai macam latar belakang pendidikan,
              profesi, dan usia.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-row md:flex-col gap-3 md:gap-6 items-center md:items-start">
              <div className="w-7 h-7 md:w-9 md:h-9">
                <RiVerifiedBadgeLine className="w-full h-full" />
              </div>
              <h3 className="text-lg md:text-2xl xl:h-16 w-full">
                Coach Tersertifikasi
              </h3>
            </div>
            <p className="text-muted-foreground text-pretty">
              Memiliki tim pengajar yang telah mendapatkan sertifikasi ETS
              (Educational Testing Service) dengan skor lebih dari 800.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-row md:flex-col gap-3 md:gap-6 items-center md:items-start">
              <div className="w-7 h-7 md:w-9 md:h-9">
                <RiGlobalLine className="w-full h-full" />
              </div>
              <h3 className="text-lg md:text-2xl xl:h-16 w-full">
                Kurikulum Internasional
              </h3>
            </div>
            <p className="text-muted-foreground text-pretty">
              Menggunakan metode Common European Framework of Reference (CEFR)
              sebagai standar belajar bahasa Inggris di tingkat Internasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
