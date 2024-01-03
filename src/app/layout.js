/* eslint-disable react/jsx-key */
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <nav className="navbar nav2 navbar-dark fixed-top">
          <div className="container-fluid ">
            <div className='d-flex'>
              <Link href={`/Search/1`} className='search-btn btn btn-outline-warning mt-0 mb-1 rounded-4 ms-0 cursor-pointer col-sm-1'>
                <i className="fa-solid fs-6 fa-magnifying-glass"></i>
              </Link>
            </div>
            <Link className="navbar-brand m-auto" href="/">
              <h1><i className="fa-solid fa-film px-1 fw-bolder text-danger"></i> MOVIES CLUB</h1>
            </Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end nav2" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body nav2">
                <h4 className=' px-3  text-white '><i className="fa-solid fa-film text-danger fs-5 px-1"></i> Movies</h4>
                <ul className="navbar-nav justify-content-end flex-grow-1 px-5 py-1 ">
                  <li className="nav-item py-2">
                    <Link href={`/Movies/AllMovies/1`} >
                      <h6 className='list-items'>All Movies</h6>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/Movies/Trending/1`} >
                      <h6 className='list-items'>Trending</h6>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/Movies/now_playing/1`} >
                      <h6 className='list-items'>Now Playing</h6>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/Movies/popular/1`}>
                      <h6 className='list-items'>Popular</h6>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/Movies/top_rated/1`} className='text-white   text-decoration-none' >
                      <h6 className='list-items'>Top Rated</h6>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/Movies/upcoming/1`} className='text-white   text-decoration-none' >
                      <h6 className='list-items'>Upcoming</h6>
                    </Link>
                  </li>
                </ul>
                <hr className='text-white w-75 ' />
                <h4 className=' px-3  text-white   justify-content-start'> <i className="fa-solid fa-tv text-warning ms-0 fs-5 px-1 me-1"></i>Tv Shows</h4>
                <ul className="navbar-nav justify-content-end flex-grow-1  px-5 py-1 ">
                  <li className="nav-item py-2 ">
                    <Link href={`/TvShows/AllShows/1`} >
                      <h6 className='list-items'>All Shows</h6>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/TvShows/Trending/1`} >
                      <h6 className='list-items'>Trending</h6>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/TvShows/airing_today/1`} >
                      <h6 className='list-items'>Airing Today</h6>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/TvShows/on_the_air/1`}>
                      <h6 className='list-items'>On The Air</h6>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/TvShows/top_rated/1`} className='text-white   text-decoration-none' >
                      <h6 className='list-items'>Top Rated</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>


        <div className=' col-sm-10 py-2 text-center d-flex justify-content-center align-items-center content-margain ms-auto me-3 nav1'>
          <div className='col-sm-4 m-auto'>
            <Link href="/" className='text-white ms-0 px-0 navbar-brand' >
              <h1> <i className="fa-solid fa-film text-danger logo-ico "></i> MOVIES CLUB</h1>
            </Link>
          </div>
          <Link href={`/Search/1`} className='search-btn btn btn-outline-warning py-2 rounded-4 cursor-pointer col-sm-1'>
            <div><i className="fa-solid fs-6 fa-magnifying-glass"></i> Search</div>
          </Link>
        </div>
        <hr className='text-white w-100 text-center mt-0' />


        <div className='container '>
          <div className='sideBar col-lg-2 col-md-2 ms-0 nav1'>
            <div className=' row d-flex justify-content-center px-2 py-2 mb-1 navbar'>
              <h4 className=' px-3  text-white my-3'><i className="fa-solid fa-film text-danger fs-5"></i> Movies</h4>
              <div className=' px-4 py-1 hoverElmnts'>
                <Link href={`/Movies/AllMovies/1`} className='text-white  text-decoration-none' >
                  <h6 className='list-items '>All Movies</h6>
                </Link>
              </div>
              <div className='  px-4 py-1 hoverElmnts'>
                <Link href={`/Movies/Trending/1`} >
                  <h6 className='list-items'>Trending</h6>
                </Link>
              </div>
              <div className='  px-4 py-1 hoverElmnts'>
                <Link href={`/Movies/now_playing/1`} >
                  <h6 className='list-items'>Now Playing</h6>
                </Link>
              </div>
              <div className='  px-4 py-1 hoverElmnts'>
                <Link href={`/Movies/popular/1`}>
                  <h6 className='list-items'>Popular</h6>
                </Link>
              </div>
              <div className='  px-4 py-1 hoverElmnts'>
                <Link href={`/Movies/top_rated/1`} className='text-white   text-decoration-none' >
                  <h6 className='list-items'>Top Rated</h6>
                </Link>
              </div>
              <div className='  px-4 py-1 hoverElmnts'>
                <Link href={`/Movies/upcoming/1`} >
                  <h6 className='list-items'>Upcoming</h6>
                </Link>
              </div>
              <hr className='text-white w-75 mt-2 mb-0' />

            </div>
            <div className=' row d-flex justify-content-center px-2 py-2  navbar'>
              <h4 className=' px-3 mb-3 text-white '> <i className="fa-solid fa-tv text-warning fs-5 me-1"></i>Tv Shows</h4>
              <div className=' px-4 py-1 hoverElmnts'>
                <Link href={`/TvShows/AllShows/1`} className='text-white  text-decoration-none' >
                  <h6 className='list-items '>All Shows</h6>
                </Link>
              </div>
              <div className='  px-4 py-1 hoverElmnts'>
                <Link href={`/TvShows/Trending/1`} >
                  <h6 className='list-items'>Trending</h6>
                </Link>
              </div>
              <div className='  px-4 py-1 hoverElmnts'>
                <Link href={`/TvShows/airing_today/1`} >
                  <h6 className='list-items'>Airing Today</h6>
                </Link>
              </div>
              <div className='  px-4 py-1 hoverElmnts'>
                <Link href={`/TvShows/on_the_air/1`}>
                  <h6 className='list-items'>On The Air</h6>
                </Link>
              </div>
              <div className='  px-4 py-1 hoverElmnts'>
                <Link href={`/TvShows/top_rated/1`} >
                  <h6 className='list-items'>Top Rated</h6>
                </Link>
              </div>
            </div>
            <div className='vl'></div>
          </div>
        </div>

        <div className=' col-sm-10 content-margain ms-auto'>
          {children}
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  )
}
