/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title : "Movie Details",
}

async function MovieDetails({ params }) {
    const MovieID = params.Details

    const baseURL = 'https://image.tmdb.org/t/p/w500';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmYzZGJkZWM5NmY5MDg1NDEwN2IyM2ZmMTRhMGQ3ZSIsInN1YiI6IjY1ODhjMmI0NGRhM2Q0NjRjYTQxODhkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CLtVHt8DtHtNC_v2wKKAxtJOZMP6GZ-NlE7ed3sk2gY'
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/movie/${MovieID}`, options, {
        next: {
            revalidate: 300
        }
    })
    const movieDetails = await response.json()

    const response1 = await fetch(`https://api.themoviedb.org/3/movie/${MovieID}/credits`, options, {
        next: {
            revalidate: 300
        }
    })
    const Cast = await response1.json()

    const response2 = await fetch(`https://api.themoviedb.org/3/movie/${MovieID}/recommendations `, options, {
        next: {
            revalidate: 300
        }
    })
    const Recommend = await response2.json()

    const response3 = await fetch(`https://api.themoviedb.org/3/movie/${MovieID}/similar `, options, {
        next: {
            revalidate: 300
        }
    })
    const Simi = await response3.json()


    return <>

        <div className='container text-white  '>
            <div className='row  text-center align-items-center'>
                <div className='col-lg-5 col-md-12  ' >
                    {movieDetails.poster_path === null ?
                        <img src="/download3.jpg" className='w-75 m-2 mt-5 rounded-2' />
                        :
                        <img src={baseURL + movieDetails.poster_path} className='w-75 m-2 mt-5 rounded-2' />
                    }

                </div>
                <div className='py-2 col-lg-6 col-md-12  movie-Content'>
                    <h2 className='title fw-bolder px-2 text-center text-warning py-3 mb-1'> {movieDetails.title}</h2>
                    <hr className='text-white details-hr ' />

                    <div className='px-1'><h4> <i className="fa-solid fa-film text-danger fs-4 me-1"></i> Movie</h4> </div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Geners :</span> {movieDetails.genres?.map((gener) => <span className='px-2 fs-5'>
                        {gener.name}</span>)}</div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Status :</span> {movieDetails.status}</div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Language :</span> {movieDetails.spoken_languages.map((lang) => <span className='px-1'> {lang.name}</span>)}
                        <span className='px-1'> {movieDetails.original_language}</span></div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Country :</span> {movieDetails.production_countries.map((country) => <span className='px-1'> {country.name}</span>)}</div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Release :</span>
                        {movieDetails.release_date === "" ? <span>TBD</span> :
                            <span>{movieDetails.release_date}</span>
                        }
                    </div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>RunTime :</span>
                        {movieDetails.runtime === 0 ? <span>Unknown</span> : <>
                            <span>{movieDetails.runtime}</span>
                            <span className='text-danger'> mins </span>
                        </>}
                    </div>
                    <hr className='text-white details-hr' />

                </div>
            </div>
            <div className='container mt-2 mb-5 ms-2 col-lg-5 col-md-12  text-white  '>
                <div className='text-center'>
                    <span className='text-warning fs-5 px-1'>Story :</span>
                    {movieDetails.overview}
                </div>
            </div>
            <hr className='text-white details-hr ' />
        </div>

        {Cast.cast.length === 0 && Cast.crew.length === 0 ? <div className='container  my-3 row d-flex justify-content-center text-white'>
            <hr className='text-white  w-75 text-center mt-3 ' />
            <h3 className='py-4 text-center fst-italic'>No Cast To Show</h3>
        </div> : <>
            <div className='container my-3 row d-flex justify-content-center text-white'>
                <h2 className='py-4 text-center'>Cast</h2>
                <div className='col-lg-8 col-10 cast-contain rounded-4 '>
                    <div className='row d-flex '>
                        {Cast.cast.length === 0 ? <>
                            {Cast.crew.map((actor) =>
                                <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column'>
                                    {actor.profile_path === null ?
                                        <img src="/download3.jpg" className=' w-50 rounded-5' /> :
                                        <img src={baseURL + actor.profile_path} className='w-50  rounded-5' />}
                                    <span>{actor.name}</span>
                                    <span className='text-warning text-center '>{actor.job}</span>
                                </div>
                            )} </> :
                            <>
                                {Cast.cast.map((actor) =>
                                    <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column'>
                                        {actor.profile_path === null ?
                                            <img src="/download3.jpg" className=' w-50 rounded-5' /> :
                                            <img src={baseURL + actor.profile_path} className='w-50  rounded-5' />}
                                        <span>{actor.name}</span>
                                        <span className='text-warning text-center'>{actor.character}</span>
                                    </div>
                                )}
                            </>}
                    </div>
                </div>
            </div>
        </>}



        {Simi.results.length === 0 && Recommend.results.length === 0 ? <div className='container  my-3 row d-flex justify-content-center text-white'>
            <hr className='text-white  w-75 text-center mt-3 ' />
            <h3 className='py-4 text-center fst-italic'>No Recommended Movies</h3>
        </div>
            : <>
                <div className='container  my-3  row d-flex justify-content-center text-white'>
                    <hr className='text-white  w-75 text-center mt-3 ' />
                    <h2 className='py-4 text-center'>Recommended Movies</h2>
                    <div className='row align-items-center col-lg-8 col-10  text-center my-2 recom-contain'>
                        {Simi.results.length === 0 ? <>
                            {Recommend.results.map((movie) =>
                                <div className='col-lg-3 col-md-4 col-6 m-1 px-2'>
                                    <Link className='linkAttr' href={`/Movies/AllMovies/MovieDetails/${movie.id}`}>
                                        <div className='d-flex align-items-center flex-column img-content'>
                                            {movie.poster_path === null ?
                                                <img src="/download3.jpg" className='rounded-2 w-100 m-2 movieCont ' alt='NO POSTER FOUND' /> :
                                                <img src={baseURL + movie.poster_path} className='rounded-2 w-100 m-2 movieCont ' alt='NO POSTER FOUND' />
                                            }
                                            <span className='' > {movie.title}</span>
                                        </div>
                                    </Link>
                                </div>
                            )}</>
                            : <>
                                {Simi.results.map((movie) =>
                                    <div className='col-lg-3 col-md-4 col-6  m-1 px-2'>
                                        <Link className='linkAttr' href={`/Movies/AllMovies/MovieDetails/${movie.id}`}>
                                            <div className='d-flex align-items-center flex-column img-content'>
                                                {movie.poster_path === null ?
                                                    <img src="/download3.jpg" className='rounded-2 w-100 m-2 movieCont ' alt='NO POSTER FOUND' /> :
                                                    <img src={baseURL + movie.poster_path} className='rounded-2 w-100 m-2 movieCont ' alt='NO POSTER FOUND' />
                                                }
                                                <span className='' > {movie.title}</span>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </>}

                    </div >
                </div >
            </>}

    </>
}

export default MovieDetails