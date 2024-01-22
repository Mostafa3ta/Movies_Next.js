/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: "Tv Show Season",
}

async function SeasonDetails({ params }) {

    const ShowId = params.Seasons
    const seasonNum = params.SeasonDetails

    const baseURL = 'https://image.tmdb.org/t/p/w500';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmYzZGJkZWM5NmY5MDg1NDEwN2IyM2ZmMTRhMGQ3ZSIsInN1YiI6IjY1ODhjMmI0NGRhM2Q0NjRjYTQxODhkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CLtVHt8DtHtNC_v2wKKAxtJOZMP6GZ-NlE7ed3sk2gY'
        }
    };

    const response0 = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}`, options, {
        next: {
            revalidate: 300
        }
    })
    const ShowName = await response0.json()

    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}`, options, {
        next: {
            revalidate: 300
        }
    })
    const ShowDetails = await response.json()

    const response1 = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}/credits`, options, {
        next: {
            revalidate: 300
        }
    })
    const Cast = await response1.json()

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
                    <h2 className='title fw-bolder text-center text-warning py-2 mb-1'> {ShowName.name} </h2>
                    <hr className='text-white details-hr ' />

                    <div className='px-1'><h5> <i className="fa-solid fa-tv text-warning fs-5 me-1"></i> Tv Series</h5> </div>
                    <hr className='text-white details-hr ' />

                    <h5 className='title fw-bolder px-1 text-warning py-2'> {ShowDetails.name} </h5>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Rate :</span>
                        {ShowDetails.vote_average === 0 ? <span className='fs-5'> Not Rated</span> : <>
                            <span className='fs-5 '> imdb  {ShowDetails.vote_average.toString(10).split('').splice(0, 3).join('')}/10 </span> <i className="fa-solid text-warning px-1 mt-1 fs-6 fa-star"></i>
                        </>}
                    </div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Episodes :</span>
                        {ShowDetails.episodes.length === 0 ?
                            <span className='fst-italic fs-5 px-2'>Not Puplished Yet</span>
                            :
                            <span className='fs-5 px-2'>{ShowDetails.episodes.length}</span>
                        }
                    </div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning fs-5 px-1'>Air Date :</span>
                        {ShowDetails.air_date === null ? <span className='fst-italic fs-5 px-2'>Unknown</span> :
                            <span className='fs-5 px-2'>{ShowDetails.air_date}</span>
                        }
                    </div>

                </div>
            </div>


            <hr className='text-white details-hr' />

            {ShowDetails.episodes.length === 0 ? <>
                <div className='container text-white '>
                    <div className='d-flex my-2'>
                        <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Season <span className='text-warning'>{ShowDetails.season_number}</span> Episodes :</h2>
                        <h3 className=' fst-italic ms-4 mt-3'> No Episodes To Show</h3>
                    </div>
                </div>
            </> : <>
                <div className='container row  justify-content-center text-white text-white '>
                    <div className='d-flex my-4'>
                        <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> {ShowDetails.name} Episodes :</h2>
                    </div>
                    {ShowDetails.episodes.length > 25 ? <>
                        <div className='col-lg-8 col-10 cast-contain rounded-4 cast-contain'>
                            <div className='row d-flex align-items-center'>
                                {ShowDetails.episodes.map((episode) =>
                                    <div className='col-lg-3 col-md-4 col-6  my-2  '>
                                        <Link href={`/TvShows/Season/${ShowId}/${ShowDetails.season_number}/${episode.episode_number}`}>
                                            <div className='d-flex align-items-center flex-column img-content'>
                                                {episode.still_path === null ?
                                                    <img src="/download4.jpg" className='w-75 m-2 rounded-2' />
                                                    :
                                                    <img src={baseURL + episode.still_path} className='w-75 m-2 rounded-2' />
                                                }
                                                <span >Episode  {episode.episode_number}</span>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </> : <>
                        <div className='row align-items-center text-center ms-2 text-white'>
                            {ShowDetails.episodes.map((episode) =>
                                <div className=' col-md-3 col-sm-4 col-6  my-2  '>
                                    <Link href={`/TvShows/Season/${ShowId}/${ShowDetails.season_number}/${episode.episode_number}`}>
                                        <div className='d-flex align-items-center flex-column img-content'>
                                            {episode.still_path === null ?
                                                <img src="/download4.jpg" className='w-75 m-2 rounded-2' />
                                                :
                                                <img src={baseURL + episode.still_path} className='w-75 m-2 rounded-2' />
                                            }
                                            <span >Episode  {episode.episode_number}</span>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </>}
                </div>
            </>}

            {Cast.cast.length === 0 && Cast.crew.length === 0 ? null : <>
                <div className='container my-3 row d-flex justify-content-center text-center text-white'>
                    <hr className='text-white  w-75 text-center mt-3 ' />
                    <h2 className='py-4 text-center'>Cast  &  Crew</h2>
                    <div className='col-lg-8 col-10 cast-contain rounded-4 '>
                        <div className='row '>
                            {Cast.cast.length === 0 ? <>
                                {Cast.crew.map((actor) =>
                                    <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column'>
                                        {actor.profile_path === null ?
                                            <img src="/download3.jpg" className=' w-50 rounded-5' /> :
                                            <img src={baseURL + actor.profile_path} className='w-50  rounded-5' />}
                                        <span>{actor.name}</span>
                                        <span className='text-warning'>{actor.job}</span>
                                    </div>
                                )} </> :
                                <>
                                    {Cast.cast.map((actor) =>
                                        <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column'>
                                            {actor.profile_path === null ?
                                                <img src="/download3.jpg" className=' w-50 rounded-5' /> :
                                                <img src={baseURL + actor.profile_path} className='w-50  rounded-5' />}
                                            <span>{actor.name}</span>
                                            <span className='text-warning'>{actor.character}</span>
                                        </div>
                                    )}
                                </>}
                        </div>
                    </div>
                </div>
            </>}

            <div className='container mt-3 mb-5 row d-flex justify-content-center text-white '>
                <hr className='text-white  w-75 text-center mt-3 ' />
                <div className='d-flex my-4'>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> All Seasons :</h2>
                </div>
                <div className='row text-center col-lg-10 col-12 text-white recom-contain'>
                    {ShowName.seasons.map((show) =>
                        <div className='col-lg-3 col-md-4 col-6  my-2  '>
                            <Link href={`/TvShows/Season/${ShowId}/${show.season_number}`}>
                                <div className='d-flex align-items-center  flex-column img-content'>
                                    {show.name === ShowDetails.name ? <>
                                        {show.poster_path === null ?
                                            <img src="/download3.jpg" className='w-100 m-2 rounded-2' />
                                            :
                                            <img src={baseURL + show.poster_path} className='w-100 m-2 rounded-2' />
                                        }
                                        <span className='text-warning fs-5 fw-bolder' >{`>`} {show.name} {`<`}</span>
                                    </> : <>
                                        {show.poster_path === null ?
                                            <img src="/download3.jpg" className='w-100 m-2 rounded-2' />
                                            :
                                            <img src={baseURL + show.poster_path} className='w-100 m-2 rounded-2' />
                                        }
                                        <div className='d-flex '>
                                            <span className=' py-2'>{show.name}</span>
                                        </div>
                                    </>}
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

        </div >
    </>
}

export default SeasonDetails