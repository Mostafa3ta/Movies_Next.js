/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: "Tv Show Details",
}

async function ShowDetails({ params }) {
    const ShowId = params.Details

    const baseURL = 'https://image.tmdb.org/t/p/w500';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmYzZGJkZWM5NmY5MDg1NDEwN2IyM2ZmMTRhMGQ3ZSIsInN1YiI6IjY1ODhjMmI0NGRhM2Q0NjRjYTQxODhkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CLtVHt8DtHtNC_v2wKKAxtJOZMP6GZ-NlE7ed3sk2gY'
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}`, options, {
        next: {
            revalidate: 300
        }
    })
    const ShowDetails = await response.json()

    const response1 = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/credits`, options, {
        next: {
            revalidate: 300
        }
    })
    const Cast = await response1.json()

    const response2 = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/similar `, options, {
        next: {
            revalidate: 300
        }
    })
    const Recommend = await response2.json()

    const response3 = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/recommendations `, options, {
        next: {
            revalidate: 300
        }
    })
    const Simi = await response3.json()

    return <>

        <div className='container text-white  '>
            <div className='row  my-2 text-center align-items-center'>
                <div className='col-lg-5 col-md-12  ' >
                    {ShowDetails.poster_path === null ?
                        <img src="/download3.jpg" className='w-75 m-2 mt-5 rounded-2' />
                        :
                        <img src={baseURL + ShowDetails.poster_path} className='w-75 m-2 mt-5 rounded-2' />
                    }

                </div>
                <div className='py-2 col-lg-6 col-md-12  movie-Content'>
                    <h2 className='title fw-bolder text-center text-warning py-2 mb-1'> {ShowDetails.name}</h2>
                    <hr className='text-white details-hr ' />

                    <div className='px-1' ><h5> <i className="fa-solid fa-tv text-warning fs-5 me-1"></i> Tv Series</h5> </div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Geners :</span>{ShowDetails.genres.map((gener) =>
                        <span className='px-2'>{gener.name}</span>
                    )}
                    </div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Rate :</span>
                        {ShowDetails.vote_average === 0 ? <span className='fs-5'> Not Rated</span> : <>
                            <span className='fs-5 '> imdb  {ShowDetails.vote_average.toString(10).split('').splice(0, 3).join('')}/10 </span> <i className="fa-solid text-warning px-1 mt-1 fs-6 fa-star"></i>
                        </>}
                    </div>                    <hr className='text-white details-hr ' />


                    <div><span className='text-warning fs-5 px-1'>Status :</span> {ShowDetails.status}</div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Language :</span>
                        {ShowDetails.spoken_languages.map((lang) => <span className='px-1'>
                            {lang.name}</span>)}
                        <span className='px-1'> {ShowDetails.original_language}</span></div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Country :</span>
                        {ShowDetails.production_countries.map((country) => <span className='px-1'>
                            {country.name}</span>)}</div>
                    <hr className='text-white details-hr ' />


                    <div><span className='text-warning fs-5 px-1'>Seasons :</span>
                        {ShowDetails.number_of_seasons === 0 ? <span className='fs-5 px-2'>Unknown</span> : <>
                            <span className='fs-5 px-2'>{ShowDetails.number_of_seasons}</span>
                        </>}
                    </div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Episodes :</span>
                        {ShowDetails.number_of_episodes === 0 ? <span className='fs-5 px-2'>Unknown</span> : <>
                            <span className='fs-5 px-2'>{ShowDetails.number_of_episodes}</span>
                        </>}
                    </div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>First Air Date :</span>
                        {ShowDetails.first_air_date === "" ? <span>Unknown</span> :
                            <span className='fs-6 px-2'>{ShowDetails.first_air_date}</span>
                        }
                    </div>
                    <div><span className='text-warning fs-5 px-1'>Last Air Date :</span>
                        {ShowDetails.last_air_date === null ? <span>TBD</span> :
                            <span className='fs-6 px-2'>{ShowDetails.last_air_date}</span>
                        }
                    </div>
                    <hr className='text-white details-hr ' />

                </div>
            </div>
            {ShowDetails.overview === "" ? null : <>
                <div className='container mt-2 mb-5 ms-2 col-lg-5 col-md-12  text-white  '>
                    <div className='text-center'>
                        <span className='text-warning fs-5 px-1'>Story :</span> {ShowDetails.overview}
                    </div>
                </div>
                <hr className='text-white details-hr' />
            </>}


            <div className='container text-white '>
                <div className='d-flex '>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Seasons :</h2>
                </div>
                <div className='row text-center ms-2 text-white'>
                    {ShowDetails.seasons.map((show) =>
                        <div className='col-lg-3 col-md-4 col-6  my-2  '>
                            <Link href={`/TvShows/Season/${ShowId}/${show.season_number}`}>
                                <div className='d-flex align-items-center flex-column img-content'>
                                    {show.poster_path === null ?
                                        <img src="/download3.jpg" className='w-75 m-2 rounded-2' />
                                        :
                                        <img src={baseURL + show.poster_path} className='w-75 m-2 rounded-2' />
                                    }
                                    <span className='py-2'> {show.name}</span>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {Cast.cast.length === 0 && Cast.crew.length === 0 ? <div className='container  my-3 row d-flex justify-content-center text-white'>
                <hr className='text-white  w-75 text-center mt-3 ' />
                <h3 className='py-4 text-center fst-italic'>No Cast To Show</h3>
            </div> : <>
                <div className='container my-3 row d-flex justify-content-center text-white'>
                    <hr className='text-white  w-75 text-center mt-3 ' />
                    <h2 className='py-4 text-center'>Cast</h2>
                    <div className='col-lg-8 col-10 cast-contain rounded-4 '>
                        <div className='row d-flex align-items-center '>
                            {Cast.cast.length === 0 ? <>
                                {Cast.crew.map((actor) =>
                                    <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column'>
                                        {actor.profile_path === null ?
                                            <img src="/download3.jpg" className=' w-50 rounded-5' /> :
                                            <img src={baseURL + actor.profile_path} className='w-50  rounded-5' />}
                                        <span className='text-center'>{actor.name}</span>
                                        <span className='text-warning text-center'>{actor.job}</span>
                                    </div>
                                )} </> :
                                <>
                                    {Cast.cast.map((actor) =>
                                        <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column'>
                                            {actor.profile_path === null ?
                                                <img src="/download3.jpg" className=' w-50 rounded-5' /> :
                                                <img src={baseURL + actor.profile_path} className='w-50  rounded-5' />}
                                            <span className='text-center'>{actor.name}</span>
                                            <span className='text-warning text-center'>{actor.character}</span>
                                        </div>
                                    )}
                                </>}
                        </div>
                    </div>
                </div>
            </>}

            {Simi.results.length === 0 && Recommend.results.length === 0 ? <div className='container  my-3 row d-flex justify-content-center text-white'>
                <hr className='text-white  w-75 text-center mt-3 ' />
                <h3 className='py-4 text-center fst-italic'>No Similar Shows</h3>
            </div>
                : <>
                    <div className='container  my-3 row d-flex justify-content-center text-white'>
                        <hr className='text-white  w-75 text-center mt-3 ' />
                        <h2 className='py-4 text-center'>Similar Shows</h2>
                        <div className='row col-lg-10 col-12 text-center my-2 recom-contain'>
                            {Recommend.results.length === 0 ? <>
                                {Simi.results.map((show) =>
                                    <div className='col-lg-3 col-md-4 col-6  m-1 px-2'>
                                        <Link href={`/TvShows/AllShows/ShowDetails/${show.id}`}>
                                            <div className='d-flex align-items-center flex-column img-content'>
                                                {show.poster_path === null ?
                                                    <img src="/download3.jpg" className='rounded-2 w-100 m-2 movieCont ' alt='NO POSTER FOUND' /> :
                                                    <img src={baseURL + show.poster_path} className='rounded-2 w-100 m-2 movieCont ' alt='NO POSTER FOUND' />
                                                }
                                                <span> {show.name}</span>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </>
                                : <>
                                    {Recommend.results.map((show) =>
                                        <div className='col-lg-3 col-md-4 col-6  m-1 px-2'>
                                            <Link href={`/TvShows/AllShows/ShowDetails/${show.id}`}>
                                                <div className='d-flex align-items-center flex-column img-content'>
                                                    {show.poster_path === null ?
                                                        <img src="/download3.jpg" className='rounded-2 w-100 m-2 movieCont ' alt='NO POSTER FOUND' /> :
                                                        <img src={baseURL + show.poster_path} className='rounded-2 w-100 m-2 movieCont ' alt='NO POSTER FOUND' />
                                                    }
                                                    <span> {show.name}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    )}
                                </>
                            }
                        </div >
                    </div >
                </>}

        </div>


    </>
}

export default ShowDetails