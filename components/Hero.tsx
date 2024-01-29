'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

export default function Hero() {
  return (
    <section className="flex md:px-8 lg:px-16 max-w-screen-xl w-full mt-0 sm:mt-6 mb-6">
      <Carousel
        plugins={[
          Autoplay({
            delay: 10000,
            stopOnMouseEnter: true,
          }),
        ]}
        className="max-w-screen-xl w-full"
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/hero_1.webp"
              alt="Coach ACCESS-ES Telah Tersertifikasi ETS (Score > 800)."
              width={1152}
              height={494}
              className="aspect-video md:aspect-auto md:rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/hero_2.webp"
              alt="ACCESS-ES Berpengalaman Lebih Dari 17 Tahun di Kampung Inggris Pare."
              width={1152}
              height={494}
              className="aspect-video md:aspect-auto md:rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/hero_3.webp"
              alt="ACCESS-ES Menggunakan Standar Eropa (CEFR) yang telah diakui secara Internasional."
              width={1152}
              height={494}
              className="aspect-video md:aspect-auto md:rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/hero_4.webp"
              alt="ACCESS-ES Menggunakan Metode Natural Learning Ability."
              width={1152}
              height={494}
              className="aspect-video md:aspect-auto md:rounded-xl"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
