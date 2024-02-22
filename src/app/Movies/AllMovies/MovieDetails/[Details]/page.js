/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { fetchMovieCast, fetchMovieDetails, fetchMovieRecommend, fetchMovieSimilar, imgBaseUrl } from '../../../../utils';
import Image from 'next/image';
import { CastDetails, Similar } from '../../../../components';

export const metadata = {
    title: "Movie Details",
}

async function MovieDetails({ params }) {
    const MovieID = params.Details

    const movieDetails = await fetchMovieDetails(MovieID)

    const Cast = await fetchMovieCast(MovieID)

    const Recommend = await fetchMovieRecommend(MovieID)

    const Simi = await fetchMovieSimilar(MovieID)

    return <>

        <div className='container text-white '>

            {/* Movie Details */}
            <div className='row  text-center align-items-center'>
                <div className='col-lg-5 col-md-12  ' >
                    {movieDetails.poster_path === null ?
                        <Image src="/download3.jpg" className='w-75 m-2 mt-5 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                        :
                        <Image src={imgBaseUrl + movieDetails.poster_path} className='w-75 m-2 mt-5 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                    }

                </div>
                <div className='py-2 col-lg-6 col-md-12  movie-Content'>
                    <h2 className='title fw-bolder px-2 text-center text-warning py-3 mb-1'> {movieDetails.title}</h2>
                    <hr className='details-hr ' />

                    <div className='px-1'><h4> <i className="fa-solid fa-film text-danger fs-4 me-1"></i> Movie</h4> </div>
                    <hr className='details-hr ' />

                    <div><span className='text-warning px-1'>Geners :</span> <span className='d-flex flex-wrap'> {movieDetails.genres?.map((gener) => <span className='px-1'>
                        {gener.name}</span>)} </span></div>
                    <hr className='details-hr ' />

                    <div><span className='text-warning px-1'>Rate :</span>
                        {movieDetails.vote_average === 0 ? <span> Not Rated</span> : <>
                            <span> imdb  {movieDetails.vote_average.toString(10).split('').splice(0, 3).join('')}/10 </span> <i className="fa-solid text-warning px-1 mt-1 fs-6 fa-star"></i>
                        </>}
                    </div>
                    <hr className='details-hr ' />

                    <div><span className='text-warning px-1'>Status :</span> {movieDetails.status}</div>
                    <hr className='details-hr ' />

                    <div><span className='text-warning px-1'>Language :</span> {movieDetails.spoken_languages.map((lang) => <span className='px-1'> {lang.name}</span>)}
                        <span className='px-1'> {movieDetails.original_language}</span></div>
                    <hr className='details-hr ' />

                    <div><span className='text-warning px-1'>Country :</span> {movieDetails.production_countries.map((country) => <span className='px-1'> {country.name}</span>)}</div>
                    <hr className='details-hr ' />

                    <div><span className='text-warning px-1'>Release :</span>
                        {movieDetails.release_date === "" ? <span>TBD</span> :
                            <span>{movieDetails.release_date}</span>
                        }
                    </div>
                    <hr className='details-hr ' />

                    <div><span className='text-warning px-1'>RunTime :</span>
                        {movieDetails.runtime === 0 ? <span>Unknown</span> : <>
                            <span>{movieDetails.runtime}</span>
                            <span className='text-danger'> mins </span>
                        </>}
                    </div>
                    <hr className='details-hr' />

                </div>
            </div>
            <div className='container mt-2 mb-5 ms-2 col-lg-5 col-md-12   '>
                <div className='text-center'>
                    <span className='text-warning px-1'>Story :</span>
                    {movieDetails.overview}
                </div>
            </div>
            <hr className=' details-hr ' />


            {/* Cast */}
            {Cast.cast.length === 0 && Cast.crew.length === 0 ? <div className='  my-3 row d-flex justify-content-center text-white'>
                <hr className='  w-75 text-center mt-3 ' />
                <h3 className='py-4 text-center fst-italic'>No Cast To Show</h3>
            </div> : <>
                <div className=' my-3 row d-flex justify-content-center text-white'>
                    <h2 className='py-4 text-center'>Cast</h2>
                    <div className='col-lg-8 col-10 cast-contain rounded-4 '>
                        <div className='row d-flex '>
                            <CastDetails Cast={Cast} castType={Cast.cast} />
                        </div>
                    </div>
                </div>
            </>}
            <hr className='w-75 text-center mt-5 m-auto ' />


            {/* Similar Movies */}
            <div className='container  my-3 row d-flex justify-content-center'>
                {Simi.results.length === 0 && Recommend.results.length === 0 ?
                    <h3 className='py-4 text-center fst-italic'>No Similar Movies</h3>
                    : <>
                        <h2 className='py-4 text-center'>Similar Movies</h2>
                        <div className='row col-lg-10 col-12 text-center my-2 recom-contain'>
                            <Similar Recommend={Recommend} Simi={Simi} />
                        </div >
                    </>}
            </div >
        </div>

    </>
}

export default MovieDetails