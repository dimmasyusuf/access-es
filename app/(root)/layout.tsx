import Navbar from '@/components/Navbar';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="max-w-screen-xl mx-auto py-4 px-6">
        <Navbar />
      </header>
      {children}
      <footer></footer>
    </>
  );
}
