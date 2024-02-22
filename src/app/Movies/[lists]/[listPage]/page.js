/* eslint-disable react/jsx-key */
import React from 'react';
import { MoviesWrapper } from '../../../components';
import { fetchMoviesLists } from '../../../utils';

export const metadata = {
    title: "Movies Lists",
}

async function movieListNum({ params }) {

    const listType = params.lists
    const pageNum = params.listPage


    const movies = await fetchMoviesLists(listType, pageNum)

    return <>

        <div className='container text-white'>
            <div className='d-flex '>
                <h2 className=' ms-4 py-2 text-capitalize'><i className="fa-solid fa-angles-right fs-4"></i> {listType.split("_").join(' ')} </h2>
                {listType === 'top_rated' ?
                    <i className="fa-solid text-danger px-2 mt-1 fs-4 fa-star"></i>
                    : null}
                {listType === 'popular' ?
                    <i className="fa-solid text-danger px-2 mt-1 fs-3 fa-fire-flame-curved"></i>
                    : null}
                {listType === 'now_playing' ?
                    <i className="fa-solid text-danger px-2 mt-1 fs-3 fa-circle-play"></i>
                    : null}
                {listType === 'upcoming' ?
                    <i className="fa-solid text-danger px-2 mt-1 fs-3 fa-ellipsis fa-fade"></i>
                    : null}
            </div>
            <MoviesWrapper movies={movies} pageLink={`/Movies/AllMovies/MovieDetails`} pageNavLink={`/Movies/${listType}`} />
        </div>
    </>
}
export default movieListNum