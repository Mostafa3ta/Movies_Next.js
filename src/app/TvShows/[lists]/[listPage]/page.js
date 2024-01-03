/* eslint-disable react/jsx-key */
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title : "Tv Shows Lists",
}

async function movieListNum({ params }) {

    const listType = params.lists
    const pageNum = params.listPage

    const baseURL = 'https://image.tmdb.org/t/p/w500';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmYzZGJkZWM5NmY5MDg1NDEwN2IyM2ZmMTRhMGQ3ZSIsInN1YiI6IjY1ODhjMmI0NGRhM2Q0NjRjYTQxODhkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CLtVHt8DtHtNC_v2wKKAxtJOZMP6GZ-NlE7ed3sk2gY'
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/tv/${listType}?page=${pageNum}`, options, {
        next: {
            revalidate: 300
        }
    })
    const TvShows = await response.json()

    return <>
        <div className='container text-white'>
            {listType === 'top_rated' ?
                <div className='d-flex '>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Top Rated </h2>
                    <i className="fa-solid text-warning px-2 py-3 fs-4 fa-star"></i>
                </div>
                : null}
            {listType === 'on_the_air' ?
                <div className='d-flex '>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> On The Air </h2>
                    <i className="fa-solid text-warning px-2 py-3 fs-3 fa-fire-flame-curved"></i>
                </div>
                : null}
            {listType === 'airing_today' ?
                <div className='d-flex '>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Airing Today</h2>
                    <i className="fa-solid text-warning px-2 py-3 fs-3 fa-circle-play"></i>
                </div>
                : null}
            {listType === 'upcoming' ?
                <div className='d-flex '>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Upcoming . . .</h2>
                </div>
                : null}

            <div className='row text-center '>
                {TvShows.results.map((show) =>
                    <div className='col-lg-3 col-md-4 col-6  my-2 px-2'>
                        <Link href={`/TvShows/AllShows/ShowDetails/${show.id}`}>
                            <div className='d-flex align-items-center flex-column img-content'>
                                {show.poster_path === null ?
                                    <img src="/download2.png" className='w-75 m-2 rounded-2' />
                                    :
                                    <img src={baseURL + show.poster_path} className='w-75 m-2 rounded-2' />
                                }
                                <i className="fa-regular fa-circle-play play-ico mt-5 py-5"></i>
                                <span className='title'> {show.name}</span>
                            </div>
                        </Link>
                    </div>
                )}
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='mt-5 mb-2' >
                        {TvShows.page === TvShows.total_pages ? null :
                            <Link href={`/TvShows/${listType}/${TvShows.page + 1}`}>
                                <button className=' btn me-3 rounded-3 btn-warning'><i className="fa-solid fa-angles-left"></i></button>
                            </Link>
                        }
                        <Link href={`/TvShows/${listType}/${TvShows.page + 1}`}>
                            <button className='btn  btn-warning mx-1'> {TvShows.page + 1} </button>
                        </Link>
                        <button className='btn fs-4 btn-warning mx-1'>  {TvShows.page} </button>
                        {TvShows.page !== 1 ?
                            <Link href={`/TvShows/${listType}/${TvShows.page - 1}`}>
                                <button className='btn  btn-warning mx-1'> {TvShows.page - 1} </button>
                            </Link>
                            : null}
                        {TvShows.page === 1 ?
                            <button className='btn ms-3 rounded-3 btn-warning' type='button' disabled><i className="fa-solid fa-angles-right"></i></button>
                            :
                            <Link href={`/TvShows/${listType}/${TvShows.page - 1}`}>
                                <button className='btn ms-3 rounded-3 btn-warning'><i className="fa-solid fa-angles-right"></i></button>
                            </Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    </>
}
export default movieListNum