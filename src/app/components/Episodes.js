import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { imgBaseUrl } from '../utils'

export default function Episodes({ SeasonDetails, ShowId, EpisodeDetails }) {
    return <>

        {SeasonDetails.episodes.length === 0 ? <>
            <div className='container '>
                <div className='d-flex my-2'>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Season <span className='text-warning'>{SeasonDetails.season_number}</span> Episodes :</h2>
                    <h3 className=' fst-italic ms-4 mt-3'> No Episodes To Show</h3>
                </div>
            </div>
        </> : <>
            <div className='container row justify-content-center   '>
                <div className='d-flex my-4'>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> {SeasonDetails.name} Episodes :</h2>
                </div>

                {/* check if episodes are too many so i wrap'em */}
                {SeasonDetails.episodes.length > 25 ? <>
                    <div className='col-lg-8 col-10 cast-contain rounded-4 cast-contain'>
                        <div className='row d-flex align-items-center'>
                            {SeasonDetails.episodes.map((episode) =>
                                <div className='col-lg-3 col-md-4 col-6 my-2' key={episode.episode_number}>
                                    <Link href={`/TvShows/Season/${ShowId}/${SeasonDetails.season_number}/${episode.episode_number}`}>
                                        <div className='d-flex align-items-center flex-column img-content'>

                                            {/* mark selected episode */}
                                            {episode.episode_number === EpisodeDetails?.episode_number ? <>
                                                {episode.still_path === null ?
                                                    // <Image src="/download4.jpg" className='w-100 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                                    <img src="/download4.jpg" className='w-100 m2 rounded-2' alt='poster' />
                                                    :
                                                    <img src={imgBaseUrl + episode.still_path} className='w-100 m2 rounded-2' alt='poster' />
                                                    // <Image src={imgBaseUrl + episode.still_path} className='w-100 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                                }
                                                <span className='text-warning fs-6 fw-bolder' > Episode  {episode.episode_number} </span>
                                            </> : <>
                                                {episode.still_path === null ?
                                                    // <Image src="/download4.jpg" className='w-75 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                                    <img src="/download4.jpg" className='w-100 m2 rounded-2' alt='poster' />
                                                    :
                                                    <img src={imgBaseUrl + episode.still_path} className='w-100 m2 rounded-2' alt='poster' />
                                                    // <Image src={imgBaseUrl + episode.still_path} className='w-75 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                                }
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
                    <div className='row align-items-center text-center ms-2'>
                        {SeasonDetails.episodes.map((episode) =>
                            <div className=' col-md-3 col-sm-4 col-6  my-2' key={episode.episode_number}>
                                <Link href={`/TvShows/Season/${ShowId}/${SeasonDetails.season_number}/${episode.episode_number}`}>
                                    <div className='d-flex align-items-center flex-column img-content'>

                                        {/* mark selected episode */}
                                        {episode.episode_number === EpisodeDetails?.episode_number ? <>
                                            {episode.still_path === null ?
                                                // <Image src="/download4.jpg" className='w-100 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                                <img src="/download4.jpg" className='w-100 m2 rounded-2' alt='poster' />
                                                :
                                                <img src={imgBaseUrl + episode.still_path} className='w-100 m2 rounded-2' alt='poster' />
                                                // <Image src={imgBaseUrl + episode.still_path} className='w-100 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                            }
                                            <span className='text-warning fs-6 fw-bolder' > Episode  {episode.episode_number} </span>
                                        </> : <>
                                            {episode.still_path === null ?
                                                // <Image src="/download4.jpg" className='w-75 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                                <img src="/download4.jpg" className='w-100 m2 rounded-2' alt='poster' />
                                                :
                                                <img src={imgBaseUrl + episode.still_path} className='w-100 m2 rounded-2' alt='poster' />
                                                // <Image src={imgBaseUrl + episode.still_path} className='w-75 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
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
        </>}
    </>
}
