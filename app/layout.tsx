import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Theydon & Loughton Executive Cars — Chauffeur Service',
  description: 'Theydon & Loughton Executive Cars. Based in Theydon Bois, we take you anywhere. Airports, London, nationwide. Established 2008.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
