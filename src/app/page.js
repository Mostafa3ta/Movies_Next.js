/* eslint-disable react/jsx-key */
import Link from 'next/link'

export const metadata = {
  title: "Home",
}

export default async function Home() {

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmYzZGJkZWM5NmY5MDg1NDEwN2IyM2ZmMTRhMGQ3ZSIsInN1YiI6IjY1ODhjMmI0NGRhM2Q0NjRjYTQxODhkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CLtVHt8DtHtNC_v2wKKAxtJOZMP6GZ-NlE7ed3sk2gY'
    }
  };

  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day`, options, {
    next: {
      revalidate: 300
    }
  })
  const movies = await response.json()

  const response1 = await fetch(`https://api.themoviedb.org/3/trending/tv/day`, options, {
    next: {
      revalidate: 300
    }
  })
  const TvShows = await response1.json()


  return <>


    <div className='container text-white'>
      <div className=' my-3 row d-flex justify-content-center text-white'>
        <div className='d-flex '>
          <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Trending Tv Shows</h2>
          <i className="fa-solid text-warning fs-4 fa-arrow-trend-up"></i>
        </div>
        <div className='row col-lg-10 col-10 text-center my-2 recom-contain'>
          {TvShows.results.map((show) =>
            <div className='col-lg-3 col-md-4 col-6  m-1 px-2'>
              <Link href={`/TvShows/AllShows/ShowDetails/${show.id}`}>
                <div className='d-flex align-items-center flex-column img-content'>
                  {show.poster_path === null ?
                    <img alt='poster' src="/download2.png" className='rounded-2 w-100 m-2 movieCont poster-img ' /> :
                    <img alt='poster' src={imgBaseUrl + show.poster_path} className='rounded-2 w-100 m-2 movieCont ' />
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
      <hr className='text-white fw-bold mb-5 m-auto w-75  ' />

      
      <div className='d-flex '>
        <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Trending Movies</h2>
        <i className="fa-solid text-danger fs-4 fa-arrow-trend-up"></i>
      </div>
      <div className='row text-center my-2 '>
        {movies.results.map((movie) =>
          <div className='col-lg-3 col-md-4 col-6  my-2 px-2'>
            <Link href={`/Movies/AllMovies/MovieDetails/${movie.id}`}>
              <div className='d-flex align-items-center flex-column img-content'>
                {movie.poster_path === null ?
                  <img alt='poster' src="/download2.png" className='rounded-2 w-75 m-2 movieCont poster-img ' /> :
                  <img alt='poster' src={imgBaseUrl + movie.poster_path} className='rounded-2 w-75 m-2 movieCont ' />
                }
                <i className="fa-regular fa-circle-play play-ico mt-5 py-5"></i>
                <span className='title' > {movie.title}</span>
              </div>
            </Link>
          </div>
        )}
        <div className='d-flex mt-5 mb-3 justify-content-center align-items-center'>
          <Link href={`/Movies/Trending/${movies.page}`}>
            <button className='btn-sm  btn rounded-3 btn-danger'>View More Movies <i className="fa-solid fa-angles-right"></i></button>
          </Link>
        </div>
      </div>
    </div>

  </>
}
