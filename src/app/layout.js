import { Inter } from 'next/font/google'
import './globals.css'
import NavbarCustom from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Next App 14',
    template: '%s | Info-next',
  },
  description: 'App created in Next - 14',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
        <NavbarCustom/>
        <div style={{minHeight: 'calc(100vh - 100px)'}}>
        {children}
        </div>
        <Footer/>
        </div>
        </body>
    </html>
  )
}
