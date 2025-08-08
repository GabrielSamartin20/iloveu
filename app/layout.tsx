import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Para o Amor da Minha Vida ❤️',
  description: 'Um site especial feito com muito amor',
  viewport: 'width=device-width, initial-scale=1',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}
