import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import PopularList from '@/components/PopularList';
import GetStarted from '@/components/GetStarted';
import Reason from '@/components/Reason';
import YoutubeVideo from '@/components/YoutubeVideo';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default async function Home() {
  return (
    <main className="flex flex-col items-center px-0 md:px-8 pb-16 md:pb-20">
      <Hero />
      <CategoryList />
      <PopularList />
      <GetStarted />
      <Reason />
      <YoutubeVideo />
      <FAQ />
      <CTA />
    </main>
  );
}
