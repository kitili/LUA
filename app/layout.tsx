import type { Metadata } from 'next'
import '../styles.css'
import ScriptLoader from './components/ScriptLoader'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'QUANTUMGRID ENERGY - Renewable Energy Solutions',
  description: 'Empowering communities and businesses with sustainable, reliable, and cost-effective renewable energy solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScriptLoader scripts={['/js/main.js']} />
      </body>
    </html>
  )
}

