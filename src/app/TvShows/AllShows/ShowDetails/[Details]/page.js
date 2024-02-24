/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { fetchShowCast, fetchShowDetails, fetchShowRecommend, fetchShowSimilar, imgBaseUrl } from '../../../../utils';
import Image from 'next/image';
import { CastDetails, Seasons, Similar } from '../../../../components';

export const metadata = {
    title: "Tv Show Details",
}

async function ShowDetails({ params }) {
    const ShowId = params.Details

    const ShowDetails = await fetchShowDetails(ShowId)

    const Cast = await fetchShowCast(ShowId)

    const Recommend = await fetchShowRecommend(ShowId)

    const Simi = await fetchShowSimilar(ShowId)

    return <>

        <div className='container text-white'>

            {/* Show Details */}
            <div className='row  my-2 text-center align-items-center'>
                <div className='col-lg-5 col-md-12  ' >
                    {ShowDetails.poster_path === null ?
                        // <Image src="/download3.jpg" className='w-75 m-2 mt-5 rounded-2 h-auto' alt='poster' width={0} height={0} sizes='100vw' />
                        <img src="/download3.jpg" className='w-75 m-2 mt-5 rounded-2' alt='poster'/>
                        :
                        <img src={imgBaseUrl + ShowDetails.poster_path} className='w-75 m-2 mt-5 rounded-2' alt='poster'/>
                        // <Image src={imgBaseUrl + ShowDetails.poster_path} className='w-75 m-2 mt-5 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                    }

                </div>
                <div className='py-2 col-lg-6 col-md-12  movie-Content'>
                    <h2 className='title fw-bolder text-center text-warning py-2 mb-1'> {ShowDetails.name}</h2>
                    <hr className=' details-hr' />

                    <div className='px-1' ><h5> <i className="fa-solid fa-tv text-warning  me-1"></i> Tv Series</h5> </div>
                    <hr className=' details-hr' />

                    <div className='d-flex flex-wrap'><span className='text-warning px-1'>Geners : </span><span>{ShowDetails.genres?.map((gener) =>
                        <span className='px-2'>{gener.name}</span>)}</span></div>
                    <hr className=' details-hr' />

                    <div><span className='text-warning px-1'>Rate :</span>
                        {ShowDetails.vote_average === 0 ? <span className=''> Not Rated</span> : <>
                            <span className=' '> imdb  {ShowDetails.vote_average.toString(10).split('').splice(0, 3).join('')}/10 </span> <i className="fa-solid text-warning px-1 mt-1 fs-6 fa-star"></i>
                        </>}
                    </div>
                    <hr className=' details-hr ' />


                    <div><span className='text-warning px-1'>Status :</span> {ShowDetails.status}</div>
                    <hr className=' details-hr' />

                    <div><span className='text-warning px-1'>Language :</span>
                        {ShowDetails.spoken_languages.map((lang) => <span className='px-1'>
                            {lang.name}</span>)}
                        <span className='px-1'> {ShowDetails.original_language}</span></div>
                    <hr className='details-hr' />

                    <div><span className='text-warning px-1'>Country :</span>
                        {ShowDetails.production_countries.map((country) => <span className='px-1'>
                            {country.name}</span>)}</div>
                    <hr className=' details-hr' />


                    <div><span className='text-warning px-1'>Seasons :</span>
                        {ShowDetails.number_of_seasons === 0 ? <span className=' px-2'>Unknown</span> : <>
                            <span className=' px-2'>{ShowDetails.number_of_seasons}</span>
                        </>}
                    </div>
                    <hr className=' details-hr' />

                    <div><span className='text-warning  px-1'>Episodes :</span>
                        {ShowDetails.number_of_episodes === 0 ? <span className=' px-2'>Unknown</span> : <>
                            <span className=' px-2'>{ShowDetails.number_of_episodes}</span>
                        </>}
                    </div>
                    <hr className=' details-hr' />

                    <div><span className='text-warning  px-1'>First Air Date :</span>
                        {ShowDetails.first_air_date === "" ? <span>Unknown</span> :
                            <span className='fs-6 px-2'>{ShowDetails.first_air_date}</span>
                        }
                    </div>
                    <div><span className='text-warning px-1'>Last Air Date :</span>
                        {ShowDetails.last_air_date === null ? <span>TBD</span> :
                            <span className='fs-6 px-2'>{ShowDetails.last_air_date}</span>
                        }
                    </div>
                    <hr className=' details-hr' />
                </div>
            </div>
            {ShowDetails.overview === "" ? null : <>
                <div className='container mt-2 mb-5 ms-2 col-lg-5 col-md-12  '>
                    <div className='text-center'>
                        <span className='text-warning  px-1'>Story :</span> {ShowDetails.overview}
                    </div>
                </div>
                <hr className='details-hr' />
            </>}

            {/* Show Seasons */}
            <div className='container '>
                <div className='d-flex '>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Seasons :</h2>
                </div>
                <div className='row text-center ms-2'>
                    <Seasons ShowDetails={ShowDetails} ShowId={ShowId} />
                </div>
            </div>

            {/* cast */}
            <div className='container  my-3 row d-flex justify-content-center'>
                {Cast.cast.length === 0 && Cast.crew.length === 0 ? <>
                    <hr className='w-75  mt-3' />
                    <h3 className='py-4 text-center fst-italic'>No Cast To Show</h3>
                </> : <>
                    <hr className=' w-75 mt-3 ' />
                    <h2 className='py-4 text-center'>Cast</h2>
                    <div className='col-lg-8 col-10 cast-contain rounded-4 '>
                        <div className='row d-flex align-items-center '>
                            <CastDetails Cast={Cast} castType={Cast.cast} />
                        </div>
                    </div>
                </>}
                <hr className='w-75 mt-5 ' />
            </div>

            {/*Similar Shows */}
            <div className='container  my-3 row d-flex justify-content-center'>
                {Simi.results.length === 0 && Recommend.results.length === 0 ?
                    <h3 className='py-4 text-center fst-italic'>No Similar Shows</h3>
                    : <>
                        <h2 className='py-4 text-center'>Similar Shows</h2>
                        <div className='row col-lg-10 col-12 text-center my-2 recom-contain'>
                            <Similar Recommend={Recommend} Simi={Simi} detailsLink={`/TvShows/AllShows/ShowDetails`}/>
                        </div >
                    </>}
            </div >

        </div>


    </>
}

export default ShowDetails