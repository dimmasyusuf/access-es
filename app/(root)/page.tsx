import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import Reason from '@/components/Reason';
import YoutubeVideo from '@/components/YoutubeVideo';

export default async function Home() {
  return (
    <main className="flex flex-col items-center px-0 md:px-8">
      <Hero />
      <CategoryList />
      <Reason />
      <YoutubeVideo />
    </main>
  );
}
