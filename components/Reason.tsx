import React from 'react';
import { RiGlobalLine, RiGraduationCapLine, RiTimerLine } from 'react-icons/ri';
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
    <section className="flex px-6 sm:px-8 lg:px-16 max-w-screen-xl">
      <div className="flex flex-col py-8 gap-6">
        <h2 className="font-semibold text-2xl">Why ACCESS-ES?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-none">
            <CardHeader className="flex flex-row md:flex-col gap-3 items-center md:items-start space-y-0">
              <div className="w-6 h-6 md:w-8 md:h-8">
                <RiTimerLine className="w-full h-full" />
              </div>
              <CardTitle>+15 Tahun Berpengalaman</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                ACCESS English School mengabdi sejak tahun 2006 dan menjadi
                salah satu pelopor program belajar bahasa Inggris dengan metode
                English Area di Kampung Inggris Pare.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader className="flex flex-row md:flex-col gap-3 items-center md:items-start space-y-0">
              <div className="w-6 h-6 md:w-8 md:h-8">
                <RiGraduationCapLine className="w-full h-full" />
              </div>
              <CardTitle>+150.796 Alumni</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Meluluskan alumni yang tersebar di seluruh Indonesia dan
                mancanegara.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader className="flex flex-row md:flex-col gap-3 items-center md:items-start space-y-0">
              <div className="w-6 h-6 md:w-8 md:h-8">
                <RiGlobalLine className="w-full h-full" />
              </div>
              <CardTitle>Kurikulum Internasional</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Menggunakan metode Common European Framework of Reference (CEFR)
                sebagai standar belajar bahasa Inggris di tingkat Internasional.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
