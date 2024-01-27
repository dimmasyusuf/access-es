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
      <header className="max-w-screen-xl mx-auto py-4 px-4 sm:px-8">
        <Navbar />
      </header>
      {children}
      <footer></footer>
      <NavbarMobile />
    </>
  );
}
