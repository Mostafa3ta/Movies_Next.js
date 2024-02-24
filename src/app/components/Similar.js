import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { imgBaseUrl } from '../utils'

export default function Similar({ Recommend, Simi, detailsLink }) {
    return <>
        {Recommend.results.length === 0 ? <>
            {Simi?.results.map((show) =>
                <div className='col-lg-3 col-md-4 col-6 m-1 px-2' key={show.id}>
                    <Link href={`${detailsLink}/${show.id}`}>
                        <div className='d-flex align-items-center flex-column img-content'>
                            {show.poster_path === null ?
                                // <Image src="/download3.jpg" className='rounded-2 w-100 movieCont h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                <img src="/download3.jpg" className='rounded-2 w-100 movieCont' alt='poster' />
                                :
                                <img src={imgBaseUrl + show.poster_path} className='w-100 rounded-2 movieCont' alt='poster' />
                                // <Image src={imgBaseUrl + show.poster_path} className='rounded-2 w-100 movieCont h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                            }
                            <span> {show.name ? show.name : show.title}</span>
                        </div>
                    </Link>
                </div>
            )}
        </> : <>
            {Recommend.results.map((show) =>
                <div className='col-lg-3 col-md-4 col-6 m-1 px-2' key={show.id}>
                    <Link href={`${detailsLink}/${show.id}`}>
                        <div className='d-flex align-items-center flex-column img-content'>
                            {show.poster_path === null ?
                                // <Image src="/download3.jpg" className='rounded-2 w-100 movieCont h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                <img src="/download3.jpg" className='rounded-2 w-100 movieCont' alt='poster' />
                                :
                                <img src={imgBaseUrl + show.poster_path} className='w-100 rounded-2 movieCont' alt='poster' />
                                // <Image src={imgBaseUrl + show.poster_path} className='w-100 rounded-2 movieCont h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                            }
                            <span> {show.name ? show.name : show.title}</span>
                        </div>
                    </Link>
                </div>
            )}
        </>
        }
    </>
}
