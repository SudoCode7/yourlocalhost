import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: "swap",
});

export const metadata = {
  title: "Yourlocalhost",
  description: "Portfolio website for akshat jain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.className} antialiased`}
      >
        <main className="relative">
          <Navigation />  
          <div className="md:pl-[calc(2rem+210px)] lg:pl-[calc(1.5rem+250px)] flex justify-center pl-6 pr-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
