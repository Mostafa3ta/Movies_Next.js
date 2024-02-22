/* eslint-disable react/jsx-key */
import React from 'react';
import { MoviesWrapper } from '../../../components';
import { fetchShowsLists } from '../../../utils';

export const metadata = {
    title: "Tv Shows Lists",
}

async function movieListNum({ params }) {

    const listType = params.lists
    const pageNum = params.listPage


    const TvShows = await fetchShowsLists(listType, pageNum)

    return <>
        <div className='container text-white'>
            <div className='d-flex '>
                <h2 className=' ms-4 py-2 text-capitalize'><i className="fa-solid fa-angles-right fs-4"></i> {listType.split("_").join(' ')} </h2>
                {listType === 'top_rated' ?
                    <i className="fa-solid text-warning px-2 mt-1 fs-4 fa-star"></i>
                    : null}
                {listType === 'on_the_air' ?
                    <i className="fa-solid text-warning px-2 mt-1 fs-3 fa-fire-flame-curved"></i>
                    : null}
                {listType === 'airing_today' ?
                    <i className="fa-solid text-warning px-2 mt-1 fs-3 fa-circle-play"></i>
                    : null}
            </div>
            <MoviesWrapper movies={TvShows} pageLink={`/TvShows/AllShows/ShowDetails`} pageNavLink={`/TvShows/${listType}`} />
        </div>
    </>
}
export default movieListNum