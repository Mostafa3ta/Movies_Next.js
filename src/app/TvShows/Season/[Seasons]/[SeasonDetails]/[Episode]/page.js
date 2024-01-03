/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title : "Tv Show Episode",
}

async function EpisodeDetails({ params }) {

    const ShowId = params.Seasons
    const seasonNum = params.SeasonDetails
    const episodeNum = params.Episode

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
    const ShowDetails = await response0.json()

    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}/episode/${episodeNum}`, options, {
        next: {
            revalidate: 300
        }
    })
    const EpisodeDetails = await response.json()

    const response2 = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}`, options, {
        next: {
            revalidate: 300
        }
    })
    const SeasonDetails = await response2.json()

    const response1 = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}/episode/${episodeNum}/credits`, options, {
        next: {
            revalidate: 300
        }
    })
    const Cast = await response1.json()

    return <>

        <div className='container text-white  '>
            <div className='row  my-2 text-center '>
                <div className='col-lg-5 px-3 col-md-12 my-4 ' >
                    <h3 className='title fw-bolder text-center text-warning px-2 mt-2 mb-1'> {EpisodeDetails.name} </h3>
                    {EpisodeDetails.still_path === null ?
                        <img src="/download4.jpg" className='w-100 m-2 mt-5 rounded-2' />
                        :
                        <img src={baseURL + EpisodeDetails.still_path} className='w-100  mt-5 rounded-2' />
                    }
                </div>
                <div className='py-2 mt-5 col-lg-6 col-md-12  movie-Content'>
                    <div className='px-3'><h5> <i className="fa-solid fa-tv text-warning fs-5 me-1"></i> Tv Series</h5> </div>
                    <hr className='text-white details-hr ' />

                    <div className='d-flex px-3 flex-nowrap'>
                        <span className='text-warning fs-5 px-1'>Tv Show :</span>
                        <h5 className='title fw-bolder  px-2 mt-1 '> {ShowDetails.name}</h5>
                    </div>
                    <hr className='text-white details-hr ' />

                    <h5 className='title fw-bolder px-3 text-warning py-2 mb-1'> {SeasonDetails.name} </h5>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning px-3 fs-5 '>Episode Number:</span>
                        <span className='fs-5 '>{EpisodeDetails.episode_number}</span>
                    </div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning px-3 fs-5 px-1'>RunTime :</span>
                        {EpisodeDetails.runtime === 0 ? <span className='fst-italic'>Unknown</span> : <>
                            <span className='fs-5 '>{EpisodeDetails.runtime}</span>
                            <span className='text-danger'> mins </span>
                        </>}
                    </div>
                    <hr className='text-white details-hr ' />

                    <div><span className='text-warning px-3 fs-5 px-1'>Air Date :</span>
                        {EpisodeDetails.air_date === "" ? <span className='fst-italic'>Unknown</span> :
                            <span className='fs-5 '>{EpisodeDetails.air_date}</span>
                        }
                    </div>
                    <hr className='text-white details-hr ' />
                </div>
            </div>

            <div className='container mt-2 mb-5 ms-2 col-lg-5 col-md-12  text-white  '>
                <div className='text-center'>
                    <span className='text-warning fs-5 px-1'>Story :</span> {EpisodeDetails.overview}
                </div>
            </div>
            <hr className='text-white details-hr' />
        </div >

        <div className='container row d-flex justify-content-center text-white '>
            <div className='d-flex my-4'>
                <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> {SeasonDetails.name} Episodes :</h2>
            </div>
            {SeasonDetails.episodes.length > 25 ? <>
                <div className='col-lg-8 col-10 cast-contain rounded-4 cast-contain'>
                    <div className='row d-flex align-items-center'>
                        {SeasonDetails.episodes.map((episode) =>
                            <div className='col-lg-3 col-md-4 col-6 my-2  '>
                                <Link href={`/TvShows/Season/${ShowId}/${SeasonDetails.season_number}/${episode.episode_number}`}>
                                    <div className='d-flex align-items-center flex-column img-content'>
                                        {episode.episode_number === EpisodeDetails.episode_number ? <>
                                            {episode.still_path === null ?
                                                <img src="/download4.jpg" className='w-100 m-2 rounded-2' />
                                                :
                                                <img src={baseURL + episode.still_path} className='w-100 m-2 rounded-2' />}
                                            <span className='text-warning fs-6 fw-bolder' >{`>`} Episode  {episode.episode_number} {`<`}</span>
                                        </> : <>{episode.still_path === null ?
                                            <img src="/download4.jpg" className='w-75 m-2 rounded-2' />
                                            :
                                            <img src={baseURL + episode.still_path} className='w-75 m-2 rounded-2' />}
                                            <span >Episode  {episode.episode_number}</span>
                                        </>
                                        }
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </> : <>
                <div className='row align-items-center text-center ms-2 text-white'>

                    {SeasonDetails.episodes.map((episode) =>
                        <div className=' col-md-3 col-sm-4 col-6  my-2  '>
                            <Link href={`/TvShows/Season/${ShowId}/${SeasonDetails.season_number}/${episode.episode_number}`}>
                                <div className='d-flex align-items-center flex-column img-content'>
                                    {episode.episode_number === EpisodeDetails.episode_number ? <>
                                        {episode.still_path === null ?
                                            <img src="/download4.jpg" className='w-100 m-2 rounded-2' />
                                            :
                                            <img src={baseURL + episode.still_path} className='w-100 m-2 rounded-2' />
                                        }
                                        <span className='text-warning fs-6 fw-bolder' >{`>`} Episode  {episode.episode_number} {`<`}</span>
                                    </> : <>
                                        {episode.still_path === null ?
                                            <img src="/download4.jpg" className='w-75 m-2 rounded-2' />
                                            :
                                            <img src={baseURL + episode.still_path} className='w-75 m-2 rounded-2' />
                                        }
                                        <span >Episode  {episode.episode_number}</span>
                                    </>
                                    }
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </>}
        </div>


        {Cast.guest_stars.length === 0 && Cast.crew.length === 0 ? null : <>
            <div className='container my-3 row d-flex justify-content-center text-white'>
                <hr className='text-white  w-75 text-center mt-3 ' />
                <h2 className='py-4 text-center'>Cast</h2>
                <div className='col-lg-8 col-10 cast-contain rounded-4 '>
                    <div className='row '>
                        {Cast.guest_stars.length !== 0 ? <>
                            {Cast.guest_stars.map((actor) =>
                                <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column'>
                                    {actor.profile_path === null ?
                                        <img src="/download3.jpg" className=' w-50 rounded-5' /> :
                                        <img src={baseURL + actor.profile_path} className='w-50  rounded-5' />}
                                    <span>{actor.name}</span>
                                    <span className='text-warning text-center'>{actor.character}</span>
                                </div>
                            )} </> :
                            <>
                                {Cast.crew.map((actor) =>
                                    <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column'>
                                        {actor.profile_path === null ?
                                            <img src="/download3.jpg" className=' w-50 rounded-5' /> :
                                            <img src={baseURL + actor.profile_path} className='w-50  rounded-5' />}
                                        <span>{actor.name}</span>
                                        <span className='text-warning'>{actor.job}</span>
                                    </div>
                                )}
                            </>}
                    </div>
                </div>
            </div>
        </>}

        <div className='container mt-3 mb-5 row d-flex justify-content-center text-white '>
            <div className='d-flex justify-content-center'>
                <hr className='text-white  w-75  text-center mt-3 ' />
            </div>
            <div className='d-flex my-4'>
                <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> All Seasons :</h2>
            </div>
            <div className='row text-center col-lg-10 col-12 text-white recom-contain'>
                {ShowDetails.seasons.map((show) =>
                    <div className='col-lg-3 col-md-4 col-6  my-2  '>
                        <Link href={`/TvShows/Season/${ShowId}/${show.season_number}`}>
                            <div className='d-flex align-items-center flex-column img-content'>
                                {show.name === SeasonDetails.name ?
                                    <>{show.poster_path === null ?
                                        <img src="/download3.jpg" className='w-100 m-2 rounded-2' />
                                        :
                                        <img src={baseURL + show.poster_path} className='w-100 m-2 rounded-2' />
                                    }
                                        <span className='text-warning fs-5 fw-bolder' >{`>`} Season <span>{show.season_number}</span> {`<`}</span>
                                    </>
                                    : <>{show.poster_path === null ?
                                        <img src="/download3.jpg" className='w-100 m-2 rounded-2' />
                                        :
                                        <img src={baseURL + show.poster_path} className='w-100 m-2 rounded-2' />
                                    }
                                        <div className='d-flex '>
                                            <span className=' py-2'>{show.name}</span>
                                        </div>
                                    </>
                                }
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    </>
}

export default EpisodeDetails