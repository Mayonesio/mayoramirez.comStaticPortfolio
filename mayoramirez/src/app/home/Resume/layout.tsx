import '../../../../src/app/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '../Resume/components/Header/Header';
import HeaderMobile from '../Resume/components/HeaderMobile/HeaderMobile';
import MarginWidthWrapper from '../Resume/components/MarginWidthWraper/MarginWidthWraper';
import PageWrapper from '../Resume/components/PageWraper/PageWraper';
import SideNav from '../Resume/components/SideNav/SideNav';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Foooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: 'Dashboard de presentación',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
            <div className="flex  mt-[75px]">
              <SideNav />
              <main className="flex-1">
                <MarginWidthWrapper>
                  <Header />
                  <HeaderMobile />
                  <PageWrapper>{children}</PageWrapper>
                </MarginWidthWrapper>
              </main>
            </div>
    </>
  )
}
