import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { imgBaseUrl } from '../utils'

export default function Seasons({ ShowDetails, ShowId }) {
    return <>

        {ShowDetails.seasons.map((show) =>
            <div className='col-lg-3 col-md-4 col-6  my-2 ' key={show.name}>
                <Link href={`/TvShows/Season/${ShowId}/${show.season_number}`}>
                    <div className='d-flex align-items-center  flex-column img-content'>
                        {show.name === ShowDetails.name ? <>
                            {show.poster_path === null ?
                                <Image src="/download3.jpg" className='w-100 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                :
                                <Image src={imgBaseUrl + show.poster_path} className='w-100 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                            }
                            <span className='text-warning py-2 fw-bolder' > {show.name} </span>
                        </> : <>
                            {show.poster_path === null ?
                                <Image src="/download3.jpg" className='w-100 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                :
                                <Image src={imgBaseUrl + show.poster_path} className='w-100 m2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                            }
                            <div className='d-flex '>
                                <span className=' py-2'>{show.name}</span>
                            </div>
                        </>}
                    </div>
                </Link>
            </div>
        )}
    </>
}