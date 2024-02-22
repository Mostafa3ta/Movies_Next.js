/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { fetchEpisodeCast, fetchEpisodeDetails, fetchSeasonDetails, fetchShowDetails, imgBaseUrl } from '../../../../../utils';
import Image from 'next/image';
import { CastDetails, Episodes, Seasons } from '../../../../../components';

export const metadata = {
    title: "Tv Show Episode",
}

async function EpisodeDetails({ params }) {

    const ShowId = params.Seasons
    const seasonNum = params.SeasonDetails
    const episodeNum = params.Episode

    const ShowDetails = await fetchShowDetails(ShowId)

    const EpisodeDetails = await fetchEpisodeDetails(ShowId, seasonNum, episodeNum)

    const SeasonDetails = await fetchSeasonDetails(ShowId, seasonNum)

    const Cast = await fetchEpisodeCast(ShowId, seasonNum, episodeNum)

    return <>

        <div className='container text-white '>

            {/* details */}
            <div className='row  my-2 text-center '>
                <div className='col-lg-6 px-3 col-md-12 my-4 ' >
                    <h3 className='title fw-bolder text-center text-warning px-2 mt-2 mb-1'>{EpisodeDetails.name}</h3>
                    {EpisodeDetails.still_path === null ?
                        <Image src="/download4.jpg" className='w-100 mt-5 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                        :
                        <Image src={imgBaseUrl + EpisodeDetails.still_path} className='w-100 mt-5 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                    }
                </div>
                <div className='py-2 mt-5 col-lg-5 col-md-12  movie-Content'>
                    <div className='px-3'><h5> <i className="fa-solid fa-tv text-warning  me-1"></i> Tv Series</h5> </div>
                    <hr className=' details-hr ' />

                    <div className='d-flex px-3 flex-nowrap'>
                        <span className='text-warning  px-1'>Tv Show :</span>
                        <h5 className='title   px-2  '> {ShowDetails.name}</h5>
                    </div>
                    <hr className=' details-hr ' />

                    <h5 className='title fw-bolder px-3 text-warning py-2 mb-1'> {SeasonDetails.name} </h5>
                    <hr className=' details-hr ' />

                    <div><span className='text-warning px-3  '>Episode Number :</span>
                        <span>{EpisodeDetails.episode_number}</span>
                    </div>
                    <hr className=' details-hr ' />


                    <div><span className='text-warning  px-3'>Rate :</span>
                        {SeasonDetails.vote_average === 0 ? <span className=''> Not Rated</span> : <>
                            <span> imdb  {SeasonDetails.vote_average.toString(10).split('').splice(0, 3).join('')}/10 </span> <i className="fa-solid text-warning px-1 mt-1 fs-6 fa-star"></i>
                        </>}
                    </div>
                    <hr className=' details-hr ' />

                    <div><span className='text-warning px-3'>RunTime :</span>
                        {EpisodeDetails.runtime === 0 || EpisodeDetails.runtime === null ? <span className='fst-italic '>Unknown</span> : <>
                            <span>{EpisodeDetails.runtime}</span>
                            <span className='text-danger'> mins </span>
                        </>}
                    </div>
                    <hr className=' details-hr ' />

                    <div><span className='text-warning px-3'>Air Date :</span>
                        {EpisodeDetails.air_date === "" || EpisodeDetails.air_date === null ? <span className='fst-italic'>Unknown</span> :
                            <span>{EpisodeDetails.air_date}</span>
                        }
                    </div>
                    <hr className='details-hr' />
                </div>
            </div>
            {EpisodeDetails.overview === '' ? null : <>
                <div className='container mt-2 mb-5 ms-2 col-lg-6 col-md-12    '>
                    <div className='text-center'>
                        <span className='text-warning  px-1'>Story :</span> {EpisodeDetails.overview}
                    </div>
                </div>
            </>}
            <hr className=' details-hr' />


            {/* episodes */}
            <Episodes SeasonDetails={SeasonDetails} ShowId={ShowId} EpisodeDetails={EpisodeDetails} />


            {/* cast */}
            {Cast.guest_stars.length === 0 && Cast.crew.length === 0 ? null : <>
                <div className='container my-3 row d-flex justify-content-center '>
                    <hr className='  w-75 text-center mt-3 ' />
                    <h2 className='py-4 text-center'>Cast</h2>
                    <div className='col-lg-8 col-10 cast-contain rounded-4 '>
                        <div className='row '>
                            <CastDetails Cast={Cast} castType={Cast.guest_stars} />
                        </div>
                    </div>
                </div>
            </>}


            {/* seasons */}
            <div className='container mt-3 mb-5 row d-flex justify-content-center  '>
                <div className='d-flex justify-content-center'>
                    <hr className='  w-75  text-center mt-3 ' />
                </div>
                <div className='d-flex my-4'>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> All Seasons :</h2>
                </div>

                <div className='row text-center col-lg-10 col-12 recom-contain'>
                    <Seasons ShowDetails={ShowDetails} ShowId={ShowId} />
                </div>
            </div>

        </div >
    </>
}

export default EpisodeDetails