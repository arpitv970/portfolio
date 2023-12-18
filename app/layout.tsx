import '@/styles/global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Arpit Verma's Porfolio`,
  description: `I am a Freelancer, Full-Stack Developer, Open-Source Contributor, Otaku & a Nerd`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
