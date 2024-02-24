/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { fetchSeasonCast, fetchSeasonDetails, fetchShowDetails, imgBaseUrl } from '../../../../utils';
import Image from 'next/image';
import { CastDetails, Episodes, Seasons } from '../../../../components';

export const metadata = {
    title: "Tv Show Season",
}

async function SeasonDetails({ params }) {

    const ShowId = params.Seasons
    const seasonNum = params.SeasonDetails

    const ShowDetails = await fetchShowDetails(ShowId)

    const SeasonDetails = await fetchSeasonDetails(ShowId, seasonNum)

    const Cast = await fetchSeasonCast(ShowId, seasonNum)

    return <>

        <div className='container text-white '>

            {/* details */}
            <div className='row  my-2 text-center align-items-center'>
                <div className='col-lg-5 col-md-12  ' >
                    {SeasonDetails.poster_path === null ?
                        // <Image src="/download3.jpg" className='w-75 m-2 mt-5 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                        <img src="/download3.jpg" className='w-75 m-2 mt-5 rounded-2' alt='poster'/>
                        :
                        <img src={imgBaseUrl + SeasonDetails.poster_path} className='w-75 m-2 mt-5 rounded-2' alt='poster'/>
                        // <Image src={imgBaseUrl + SeasonDetails.poster_path} className='w-75 m-2 mt-5 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                    }

                </div>
                <div className='py-2 col-lg-6 col-md-12  movie-Content'>
                    <h2 className='title fw-bolder text-center text-warning py-2 mb-1'> {ShowDetails.name} </h2>
                    <hr className=' details-hr ' />

                    <div className='px-1'><h5> <i className="fa-solid fa-tv text-warning  me-1"></i> Tv Series</h5> </div>
                    <hr className=' details-hr ' />

                    <h5 className='title fw-bolder px-1 text-warning py-2'> {SeasonDetails.name} </h5>
                    <hr className=' details-hr ' />

                    <div><span className='text-warning  px-1'>Rate :</span>
                        {SeasonDetails.vote_average === 0 ? <span className=''> Not Rated</span> : <>
                            <span> imdb  {SeasonDetails.vote_average.toString(10).split('').splice(0, 3).join('')}/10 </span> <i className="fa-solid text-warning px-1 mt-1 fs-6 fa-star"></i>
                        </>}
                    </div>
                    <hr className=' details-hr ' />

                    <div><span className='text-warning  px-1'>Episodes :</span>
                        {SeasonDetails.episodes.length === 0 ?
                            <span className='fst-italic  px-2'>Not Puplished Yet</span>
                            :
                            <span className=' px-2'>{SeasonDetails.episodes.length}</span>
                        }
                    </div>
                    <hr className=' details-hr ' />

                    <div><span className='text-warning  px-1'>Air Date :</span>
                        {SeasonDetails.air_date === null ? <span className='fst-italic  px-2'>Unknown</span> :
                            <span className=' px-2'>{SeasonDetails.air_date}</span>
                        }
                    </div>

                </div>
            </div>
            <hr className=' details-hr' />

            {/* Season Episodes */}
            <Episodes SeasonDetails={SeasonDetails} ShowId={ShowId} />


            {/* season cast */}
            {Cast.cast.length === 0 && Cast.crew.length === 0 ? null : <>
                <div className=' my-3 row d-flex justify-content-center text-center '>
                    <hr className=' w-75 text-center mt-3 ' />
                    <h2 className='py-4 text-center'>Cast & Crew</h2>
                    <div className='col-lg-8 col-10 cast-contain rounded-4 '>
                        <div className='row '>
                            <CastDetails Cast={Cast} castType={Cast.cast} />
                        </div>
                    </div>
                </div>
            </>}


            {/* All Seasons */}
            <div className='container mt-3 mb-5 row d-flex justify-content-center  '>
                <hr className='  w-75 text-center mt-3 ' />
                <div className='d-flex my-4'>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> All Seasons :</h2>
                </div>
                <div className='row text-center col-lg-10 col-12  recom-contain'>
                    <Seasons ShowDetails={ShowDetails} ShowId={ShowId} />
                </div>
            </div>

        </div >
    </>
}

export default SeasonDetails