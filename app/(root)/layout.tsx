import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky bg-background shadow-sm top-0 py-5 px-4 sm:py-6 sm:px-8">
        <Navbar />
      </header>
      {children}
      <footer></footer>
      <NavbarMobile />
    </>
  );
}
