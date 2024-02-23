/* eslint-disable react/jsx-key */
import Link from 'next/link'
import { MoviesWrapper } from './components';
import { fetchTrendMovies, fetchTrendShows, imgBaseUrl } from './utils';
import Image from 'next/image';

export const metadata = {
  title: "Home",
}

export default async function Home() {

  const movies = await fetchTrendMovies(1)

  const TvShows = await fetchTrendShows(1)


  return <>

    <div className='container text-white'>

      {/* Shows */}
      <div className=' my-3 row d-flex justify-content-center text-white'>
        <div className='d-flex '>
          <h2 className='ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Trending Tv Shows</h2>
          <i className="fa-solid text-warning fs-4 fa-arrow-trend-up"></i>
        </div>
        <div className='row col-lg-10 col-10 text-center my-2 recom-contain'>
          {TvShows.results.map((show) =>
            <div className='col-lg-3 col-md-4 col-6  m-1 px-2'>
              <Link href={`/TvShows/AllShows/ShowDetails/${show.id}`}>
                <div className='d-flex align-items-center flex-column img-content'>
                  {show.poster_path === null ?
                    <Image src="/download3.jpg" className='w-100 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                    :
                    <Image src={imgBaseUrl + show.poster_path} className='w-100 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                  }
                  <span>{show.name}</span>
                </div>
              </Link>
            </div>
          )}
          <div className='d-flex  justify-content-center col-lg-3 col-md-4 col-6  m-1 px-2 align-items-center'>
            <Link href={`/TvShows/Trending/${TvShows.page}`}>
              <button className='btn-sm  btn rounded-3 btn-warning'>View More Shows <i className="fa-solid fa-angles-right"></i></button>
            </Link>
          </div>
        </div >
      </div >
      <hr className='fw-bold my-5 m-auto w-75' />

      {/* Movies */}
      <div className='d-flex '>
        <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Trending Movies</h2>
        <i className="fa-solid text-danger fs-4 fa-arrow-trend-up"></i>
      </div>
      <div className='row text-center my-2 '>
        <MoviesWrapper movies={movies} pageLink={`/Movies/AllMovies/MovieDetails`} show={`visually-hidden`} />
        <div className='d-flex mt-5 mb-3 justify-content-center align-items-center '>
          <Link href={`/Movies/Trending/${movies.page}`}>
            <button className='btn-sm  btn rounded-3 btn-danger'>View More Movies <i className="fa-solid fa-angles-right"></i></button>
          </Link>
        </div>
      </div>
    </div>

  </>
}
