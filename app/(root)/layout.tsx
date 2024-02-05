import Navbar from '@/components/Navbar';
import FooterMenu from '@/components/FooterMenu';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky bg-background shadow-sm top-0 py-5 px-6 sm:py-6 sm:px-8 z-50">
        <Navbar />
      </header>
      {children}
      <footer className="border-t p-6 sm:p-8">
        <FooterMenu />
      </footer>
    </>
  );
}
