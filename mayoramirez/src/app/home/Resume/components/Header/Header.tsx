'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '../../hooks/use-scroll';
import { cn } from '../../lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const selectedLayout = useSelectedLayoutSegment();
  const [headerHeight, setHeaderHeight] = useState(49); // Altura inicial del encabezado

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
      // Cambiar la altura del encabezado según el desplazamiento
      setHeaderHeight(isScrolled ? 75 : 49);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`, // Agregamos 'px' al final
        {
          'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': selectedLayout,
        },
      )}
    >
      <div className={`flex items-center justify-between p-2 transition-all duration-300 h-[${headerHeight}px]` }>
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex flex-row space-x-3 items-center justify-center md:hidden">
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl flex ">Logo</span>
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
            <span className="font-semibold text-sm">HQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
