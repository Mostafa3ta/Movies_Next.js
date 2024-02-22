/* eslint-disable react/jsx-key */
import React from 'react'
import { MoviesWrapper } from '../../../components';
import { fetchAllShows } from '../../../utils';

export const metadata = {
    title: "All Tv Shows",
}

export default async function AllMoviePages({ params }) {
    const pageNum = params.AllPages

    const TvShows = await fetchAllShows(pageNum)

    return <>
        <div className='container text-white '>
            <div className='d-flex '>
                <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> All TV Shows</h2>
                <i className="fa-solid text-warning px-2 mt-2 fs-2 fs-3 fa-tv"></i>
            </div>
            <MoviesWrapper movies={TvShows} pageLink={`/TvShows/AllShows/ShowDetails`} pageNavLink={`/TvShows/AllShows`} />
        </div>
    </>
}