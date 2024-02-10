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
            <div className='d-flex justify-content-center'>
              <Link href={`/Search/1`} className=' cursor-pointer col-sm-1'>
                <i className="fa-solid search-btn btn btn-outline-warning rounded-4 text-white fs-6 fa-magnifying-glass"></i>
              </Link>
            </div>
            <Link className="navbar-brand d-flex m-auto" href="/">
              <img src='/movies-club.png' className=' logo-ico' />
            </Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end nav2" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body nav2">
                <h5 className='  text-white '><i className="fa-solid fa-film text-danger fs-5 px-1"></i> Movies</h5>
                <ul className="navbar-nav justify-content-end flex-grow-1 px-5 py-2 ">
                  <li className="nav-item py-2">
                    <Link href={`/Movies/AllMovies/1`} >
                      <span className='list-items'>All Movies</span>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/Movies/Trending/1`} >
                      <span className='list-items'>Trending</span>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/Movies/now_playing/1`} >
                      <span className='list-items'>Now Playing</span>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/Movies/popular/1`}>
                      <span className='list-items'>Popular</span>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/Movies/top_rated/1`} >
                      <span className='list-items'>Top Rated</span>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/Movies/upcoming/1`} >
                      <span className='list-items'>Upcoming</span>
                    </Link>
                  </li>
                </ul>
                <hr className='text-white w-75 ' />
                
                <h5 className='text-white  justify-content-start'> <i className="fa-solid fa-tv text-warning ms-0 fs-5 px-2 "></i>Tv Shows</h5>
                <ul className="navbar-nav justify-content-end flex-grow-1  px-5 py-1 ">
                  <li className="nav-item py-2 ">
                    <Link href={`/TvShows/AllShows/1`} >
                      <span className='list-items'>All Shows</span>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/TvShows/Trending/1`} >
                      <span className='list-items'>Trending</span>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/TvShows/airing_today/1`} >
                      <span className='list-items'>Airing Today</span>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/TvShows/on_the_air/1`}>
                      <span className='list-items'>On The Air</span>
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link href={`/TvShows/top_rated/1`} cl >
                      <span className='list-items'>Top Rated</span>
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
              <img src='/movies-club.png' className=' logo-ico' />
            </Link>
          </div>
          <Link href={`/Search/1`} className='search-btn btn btn-outline-warning py-2 d-flex justify-content-center rounded-4 cursor-pointer col-sm-1'>
            <div><i className="fa-solid fs-6 fa-magnifying-glass"></i> Search</div>
          </Link>
        </div>
        <hr className='text-white w-100 text-center nav-1-hr mt-2' />


        <div className='container '>
          <div className='sideBar col-lg-2 col-md-2 ms-0 nav1'>
            <div className=' row d-flex justify-content-center px-2 py-2 mb-1 navbar'>
              <h5 className=' px-3  text-white mt-1 mb-3'><i className="fa-solid fa-film text-danger fs-5"></i> Movies</h5>
              <div className=' px-4 side-item '>
                <Link href={`/Movies/AllMovies/1`}  >
                  <span className=' '>All Movies</span>
                </Link>
              </div>
              <div className='px-4 side-item'>
                <Link href={`/Movies/Trending/1`} >
                  <span className=''>Trending</span>
                </Link>
              </div>
              <div className='px-4 side-item'>
                <Link href={`/Movies/now_playing/1`} >
                  <span className=''>Now Playing</span>
                </Link>
              </div>
              <div className='px-4 side-item'>
                <Link href={`/Movies/popular/1`}>
                  <span className=''>Popular</span>
                </Link>
              </div>
              <div className='px-4 side-item'>
                <Link href={`/Movies/top_rated/1`} >
                  <span className=''>Top Rated</span>
                </Link>
              </div>
              <div className='px-4 side-item'>
                <Link href={`/Movies/upcoming/1`} >
                  <span className=''>Upcoming</span>
                </Link>
              </div>
              <hr className='text-white w-75 mt-2 mb-0' />

            </div>
            <div className=' row d-flex justify-content-center px-2 py-2  navbar'>
              <h5 className=' px-3 mb-3 text-white '> <i className="fa-solid fa-tv text-warning fs-5 me-1"></i>Tv Shows</h5>
              <div className='px-4 side-item'>
                <Link href={`/TvShows/AllShows/1`}  >
                  <span className=' '>All Shows</span>
                </Link>
              </div>
              <div className='px-4 side-item'>
                <Link href={`/TvShows/Trending/1`} >
                  <span className=''>Trending</span>
                </Link>
              </div>
              <div className='px-4 side-item'>
                <Link href={`/TvShows/airing_today/1`} >
                  <span className=''>Airing Today</span>
                </Link>
              </div>
              <div className='px-4 side-item'>
                <Link href={`/TvShows/on_the_air/1`}>
                  <span className=''>On The Air</span>
                </Link>
              </div>
              <div className='px-4 side-item'>
                <Link href={`/TvShows/top_rated/1`} >
                  <span className=''>Top Rated</span>
                </Link>
              </div>
            </div>
            <div className='vl'></div>
          </div>
        </div>

        <div className=' col-sm-10 content-margain ms-auto'>
          {children}
        </div>
        <hr className='text-white w-100 text-center nav-1-hr mt-2 mb-0' />

        <footer className=" col-sm-10 content-margain ms-auto media-side text-center text-white">
          <div className="container  pb-0">
            <section>
              <Link className="m-1" href="https://www.facebook.com/profile.php?id=100007766405910&ref=xav_ig_profile_web" target='_blank' role="button">
                <i className="fab fs-4 m-2 fa-facebook-f"></i></Link>

              <Link className="m-1" href="https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0" target='_blank' role="button">
                <i className="fab fs-4 m-2 fa-instagram"></i></Link>

              <Link className=" m-1" href="https://github.com/Mostafa3ta" target='_blank' role="button">
                <i className="fab fs-4 m-2 fa-github"></i></Link>
            </section>
          </div>
        </footer>
        
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  )
}
