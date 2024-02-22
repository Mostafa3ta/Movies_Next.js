/* eslint-disable react/jsx-key */
import React from 'react'
import { MoviesWrapper } from '../../../components';
import { fetchTrendShows } from '../../../utils';

export const metadata = {
    title: "Trending Tv Shows",
}

async function TrendingPages({ params }) {

    const pageNum = params.TrendingPages
    const TvShows = await fetchTrendShows(pageNum)

    return <>

        <div className='container text-white'>
            <div className='d-flex '>
                <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Trending TV Shows</h2>
                <i className="fa-solid text-warning fs-4 fa-arrow-trend-up"></i>
            </div>
            <MoviesWrapper movies={TvShows} pageLink={`/TvShows/AllShows/ShowDetails`} pageNavLink={`/TvShows/Trending`} />
        </div>
    </>

}

export default TrendingPages