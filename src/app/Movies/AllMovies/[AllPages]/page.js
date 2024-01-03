/* eslint-disable react/jsx-key */
import React from 'react'
import Link from 'next/link'

export const metadata = {
    title : "All Movies",
}

export default async function AllMoviePages({ params }) {
    const pageNum = params.AllPages

    const baseURL = 'https://image.tmdb.org/t/p/w500';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmYzZGJkZWM5NmY5MDg1NDEwN2IyM2ZmMTRhMGQ3ZSIsInN1YiI6IjY1ODhjMmI0NGRhM2Q0NjRjYTQxODhkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CLtVHt8DtHtNC_v2wKKAxtJOZMP6GZ-NlE7ed3sk2gY'
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${pageNum}`, options, {
        next: {
            revalidate: 300
        }
    })
    const movies = await response.json()

    return <>
        <div className='container text-white '>
            <div className='d-flex '>
                <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> All Movies</h2>
                <i className="fa-solid text-danger px-2 py-3 fs-3 fa-film"></i>
            </div>
            <div className='row text-center text-white'>
                {movies.results.map((movie) =>
                    <div className='col-lg-3 col-md-4 col-6  my-2 px-2 '>
                        <Link className='linkAttr' href={`/Movies/AllMovies/MovieDetails/${movie.id}`}>
                            <div className='d-flex align-items-center flex-column img-content'>
                                {movie.poster_path === null ? 
                                <img src="/download3.jpg" className='w-75 m-2 rounded-2' />
                                : 
                                <img src={baseURL + movie.poster_path} className='w-75 m-2 rounded-2' />
                                }
                                <i className="fa-regular fa-circle-play play-ico mt-5 py-5"></i>
                                <span className='title'> {movie.title}</span>
                            </div>
                        </Link>
                    </div>
                )}
                <div className='d-flex justify-content-center  align-items-center'>
                    <div className='mt-5 mb-3 '>
                        {movies.page === movies.total_pages ? null :
                            <Link href={`/Movies/AllMovies/${movies.page + 1}`}>
                                <button className=' btn me-3 rounded-3 btn-danger'><i className="fa-solid fa-angles-left"></i></button>
                            </Link>
                        }
                        <Link href={`/Movies/AllMovies/${movies.page + 1}`}>
                            <button className='btn  btn-danger mx-1'> {movies.page + 1} </button>
                        </Link>
                        <button className='btn fs-4 btn-danger mx-1'>  {movies.page} </button>
                        {movies.page !== 1 ?
                            <Link href={`/Movies/AllMovies/${movies.page - 1}`}>
                                <button className='btn  btn-danger mx-1'> {movies.page - 1} </button>
                            </Link>
                            : null}
                        {movies.page === 1 ?
                            <button className='btn ms-3 rounded-3 btn-danger' type='button' disabled><i className="fa-solid fa-angles-right"></i></button>
                            : <>

                                <Link href={`/Movies/AllMovies/${movies.page - 1}`}>
                                    <button className='btn ms-3 rounded-3 btn-danger'><i className="fa-solid fa-angles-right"></i></button>
                                </Link>
                            </>

                        }
                    </div>

                </div>
            </div>
        </div>
    </>
}