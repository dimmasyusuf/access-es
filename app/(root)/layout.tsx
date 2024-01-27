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
      <header className="max-w-screen-xl mx-auto">
        <Navbar />
      </header>
      {children}
      <footer></footer>
      <NavbarMobile />
    </>
  );
}
