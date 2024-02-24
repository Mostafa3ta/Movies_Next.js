/* eslint-disable react/jsx-key */
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { Footer, ResponsiveNav, SideNav } from './components'

export const metadata = {
  title: 'Movies Club',
  description: 'Movies and Shows App',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>

        <div className=' col-sm-10 py-2 text-center d-flex justify-content-center align-items-center content-margain ms-auto me-3 nav1'>
          <div className='col-sm-4 m-auto'>
            <Link href="/" className='text-white ms-0 px-0 navbar-brand' >
              {/* <Image src="/movies-club.png" className='logo-ico h-auto' alt='poster' priority width={0} height={0} sizes='100vw' /> */}
              <img src="/movies-club.png" className='logo-ico' alt='poster'/>
            </Link>
          </div>
          <Link href={`/Search/1`} className='search-btn btn btn-outline-warning py-2 d-flex justify-content-center rounded-4 cursor-pointer col-sm-1'>
            <div><i className="fa-solid fs-6 fa-magnifying-glass"></i> Search</div>
          </Link>
        </div>
        <hr className='nav-1-hr' />

        <SideNav />
        <ResponsiveNav />

        <div className=' col-sm-10 content-margain ms-auto'>
          {children}
        </div>

        <Footer />

        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  )
}
