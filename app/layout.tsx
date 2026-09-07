import type { Metadata } from 'next';
import { Geist, Barlow_Condensed } from 'next/font/google';
import './globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const displayFont = Barlow_Condensed({ variable: '--font-display', subsets: ['latin'], weight: ['600','700','800'], style: ['normal','italic'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://holeshot-puerto-rico.vast-newt-7368.chatgpt.site'),
  title: 'Holeshot | Piezas y Gear para Motocross, ATV & UTV en Puerto Rico',
  description: 'Equipa tu próxima salida con Holeshot Power Parts. Piezas y gear para motocross, ATV y UTV en Puerto Rico. Consulta por WhatsApp al (787) 662-6169.',
  icons: { icon: '/images/holeshot-logo.webp' },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="es-PR"><body className={`${geistSans.variable} ${displayFont.variable} antialiased`}>{children}</body></html>;
}