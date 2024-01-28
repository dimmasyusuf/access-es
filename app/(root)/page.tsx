import YoutubeVideo from '@/components/YoutubeVideo';

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-16">
      <YoutubeVideo />
    </main>
  );
}
