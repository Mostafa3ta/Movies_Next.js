import Link from 'next/link'
import React from 'react'
import { imgBaseUrl } from '../utils'
import PagesButtons from './PagesButtons'
import Image from 'next/image'

export default function MoviesWrapper({ movies, pageLink, pageNavLink, show }) {
    return <>
        <div className='row text-center my-1'>
            {movies.results.map((movie) =>
                <div className='col-lg-3 col-md-4 col-6  my-2 px-2' key={movie.title}>
                    <Link className='linkAttr' href={`${pageLink}/${movie.id}`}>
                        <div className='d-flex align-items-center flex-column img-content'>
                            {movie.poster_path === null ?
                                <Image src="/download3.jpg" className='w-75 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                :
                                <Image src={imgBaseUrl + movie.poster_path} className='w-75 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                            }
                            <i className="fa-regular fa-circle-play play-ico mt-5 py-5"></i>
                            <span className='title'> {movie.title ? movie.title : movie.name}</span>
                        </div>
                    </Link>
                </div>
            )}
            <PagesButtons movies={movies} pageNavLink={pageNavLink} show={show} />
        </div>
    </>
}
