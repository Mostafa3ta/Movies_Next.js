/* eslint-disable react/jsx-key */
import React from 'react'
import { MoviesWrapper } from '../../../components';
import { fetchTrendMovies } from '../../../utils';

export const metadata = {
    title: "Trending Movies",
}

async function TrendingPages({ params }) {

    const pageNum = params.TrendingPages


    const movies = await fetchTrendMovies(pageNum)

    return <>

        <div className='container text-white'>
            <div className='d-flex '>
                <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Trending Movies</h2>
                <i className="fa-solid text-danger fs-4 fa-arrow-trend-up"></i>
            </div>
            <MoviesWrapper movies={movies} pageLink={`/Movies/AllMovies/MovieDetails`} pageNavLink={`/Movies/Trending`} />
        </div>
    </>

}

export default TrendingPages