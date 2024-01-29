import Hero from '@/components/Hero';
import Reason from '@/components/Reason';
import YoutubeVideo from '@/components/YoutubeVideo';

export default async function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Reason />
      <YoutubeVideo />
    </main>
  );
}
