import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Dra. Marina Moura | Pediatria em João Pessoa – PB',
  description: 'Atendimento pediátrico em João Pessoa – PB, em consultório e com possibilidade de atendimento domiciliar. Entre em contato pelo WhatsApp.',
  robots: { index: true, follow: true },
  openGraph: {title:'Dra. Marina Moura | Pediatria',description:'Cuidado pediátrico com atenção e carinho em João Pessoa – PB.',type:'website'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>}
