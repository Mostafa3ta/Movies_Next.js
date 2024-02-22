import Image from 'next/image'
import React from 'react'
import { imgBaseUrl } from '../utils'

export default function CastDetails({ Cast , castType}) {
    return <>

        {castType.length === 0 ? <>
            {Cast.crew.map((actor) =>
                <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column' key={actor.name}>
                    {actor.profile_path === null ?
                        <Image src="/download3.jpg" className='w-50 rounded-5 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                        :
                        <Image src={imgBaseUrl + actor.profile_path} className='w-50 rounded-5 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                    }
                    <span>{actor.name}</span>
                    <span className='text-warning'>{actor.job}</span>
                </div>
            )} </> :
            <>
                {castType.map((actor) =>
                    <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column' key={actor.name}>
                        {actor.profile_path === null ?
                            <Image src="/download3.jpg" className='w-50 rounded-5 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                            :
                            <Image src={imgBaseUrl + actor.profile_path} className='w-50 rounded-5 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                        }
                        <span>{actor.name}</span>
                        <span className='text-warning'>{actor.character}</span>
                    </div>
                )}
            </>}
    </>
}
