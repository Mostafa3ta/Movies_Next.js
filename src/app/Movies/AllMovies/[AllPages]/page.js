/* eslint-disable react/jsx-key */
import React from 'react'
import { MoviesWrapper } from '../../../components';
import { fetchAllMovies } from '../../../utils';

export const metadata = {
    title: "All Movies",
}

export default async function AllMoviePages({ params }) {
    const pageNum = params.AllPages

    const movies = await fetchAllMovies(pageNum);

    return <>
        <div className='container text-white '>
            <div className='d-flex '>
                <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> All Movies</h2>
                <i className="fa-solid text-danger px-2 mt-2 fs-2 fa-film"></i>
            </div>
            <MoviesWrapper movies={movies} pageLink={`/Movies/AllMovies/MovieDetails`} pageNavLink={`/Movies/AllMovies`} />

        </div>
    </>
}