import Link from 'next/link'
import React from 'react'

export default function SideNav() {
    return (
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
    )
}
