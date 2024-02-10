/* eslint-disable react/jsx-key */
"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'


function Search() {

    const params = useParams()
    const pageNum = params.SearchPage
    const [Results, setResults] = useState([])
    const [timer, setTimer] = useState(null);

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmYzZGJkZWM5NmY5MDg1NDEwN2IyM2ZmMTRhMGQ3ZSIsInN1YiI6IjY1ODhjMmI0NGRhM2Q0NjRjYTQxODhkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CLtVHt8DtHtNC_v2wKKAxtJOZMP6GZ-NlE7ed3sk2gY'
        }
    };

    async function getResults(value, pageNum) {
        const newValue = value.split(' ').join('%20')
        await fetch(`https://api.themoviedb.org/3/search/multi?query=${newValue}&page=${pageNum}`, options, {
            next: {
                revalidate: 300
            }
        })
            .then(response => response.json())
            .then(response => setResults(response))
    }

    useEffect(() => {
        getResults(localStorage.getItem('searchValue'), pageNum);

    }, [pageNum])

    const handleChange = (value) => {
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(
            setTimeout(() => {
                getResults(value, 1)
                localStorage.setItem('searchValue', value)
            }, 1500)
        );

    }

    return <>


        <Helmet>
            <title>Search</title>
        </Helmet>

        <div className='container text-white'>
            <div className='col-sm-10 py-2 my-3 text-center content-margain ms-auto'>
                <form className="form-control search-form w-50 m-auto ">
                    <input type="text" onChange={(e) => handleChange(e.target.value)} placeholder="Search for..." className="search-input rounded-0 form-control" />
                    <button type="button" className="btn"><i className="fa-solid fs-6 search-icon fa-magnifying-glass"></i></button>
                </form>
            </div>

            {Results.length === 0 || localStorage.getItem('searchValue') === '' ? null : <>
                <div className='d-flex'>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Search Results </h2>
                    <i className="fa-solid text-danger fs-4 fa-magnifying-glass"></i>
                </div>
                <div className='fs-4 px-3 ms-3 mb-5'>`{localStorage.getItem('searchValue')}`</div>
                <div className='row  text-center my-2'>
                    {Results.total_results === 0 ? <h2 className='fst-italic'>No Results Found </h2> : <>
                        {Results.results?.map((result) =>
                            <div className='col-lg-3 col-md-4 col-6  my-2 px-2'>
                                {result.media_type !== "person" ? <>
                                    {result.media_type === "movie" ? <>
                                        <Link href={`/Movies/AllMovies/MovieDetails/${result.id}`}>
                                            <div className='d-flex align-items-center flex-column img-content'>
                                                {result.poster_path === null ?
                                                    <img src="/download3.jpg" className='w-75 m-2 rounded-2' />
                                                    :
                                                    <img src={imgBaseUrl + result.poster_path} className='rounded-2 w-75 m-2 movieCont ' />
                                                }
                                                <i className="fa-regular fa-circle-play play-ico mt-5 py-5"></i>
                                                <span > <i className="fa-solid fa-film text-danger px-1 fs-5 "></i> {result.title}</span>
                                            </div>
                                        </Link>
                                    </> : <>
                                        <Link href={`/TvShows/AllShows/ShowDetails/${result.id}`}>
                                            <div className='d-flex align-items-center flex-column img-content'>
                                                {result.poster_path === null ?
                                                    <img src="/download3.jpg" className='w-75 m-2 rounded-2' />
                                                    :
                                                    <img src={imgBaseUrl + result.poster_path} className='rounded-2 w-75 m-2 movieCont ' />
                                                }
                                                <i className="fa-regular fa-circle-play play-ico mt-5 py-5"></i>
                                                <span> <i className="fa-solid fa-tv text-warning px-2 fs-5"></i>{result.name}</span>
                                            </div>
                                        </Link>
                                    </>}
                                </> : <div className='d-flex align-items-center flex-column'>
                                    {result.profile_path === null ?
                                        <img src="/download3.jpg" className='w-75 m-2 rounded-2' />
                                        :
                                        <img src={imgBaseUrl + result.profile_path} className='rounded-2 w-75 m-2 movieCont ' />
                                    }
                                    <span> <i className="fa-solid fa-masks-theater text-warning px-2 fs-5"></i>{result.name}</span>
                                </div>}
                            </div>
                        )}
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='mt-5 mb-2'>

                                {Results.page === Results.total_pages ? <button className='btn me-3 rounded-3 btn-danger' type='button' disabled><i className="fa-solid fa-angles-left"></i></button>
                                    : <>
                                        <Link href={`/Search/${Results.page + 1}`}>
                                            <button className=' btn me-3  rounded-3 btn-danger'><i className="fa-solid fa-angles-left"></i></button>
                                        </Link>
                                        <Link href={`/Search/${Results.page + 1}/`}>
                                            <button className='btn  btn-danger mx-1'> {Results.page + 1} </button>
                                        </Link>
                                    </>}
                                <button className='btn fs-4 btn-danger mx-1'>  {Results.page} </button>
                                {Results.page !== 1 ?
                                    <Link href={`/Search/${Results.page - 1}`}>
                                        <button className='btn  btn-danger mx-1'> {Results.page - 1} </button>
                                    </Link>
                                    : null}
                                {Results.page === 1 ?
                                    <button className='btn ms-3 rounded-3 btn-danger' type='button' disabled><i className="fa-solid fa-angles-right"></i></button>
                                    :
                                    <Link href={`/Search/${Results.page - 1}`}>
                                        <button className='btn ms-3 rounded-3 btn-danger'><i className="fa-solid fa-angles-right"></i></button>
                                    </Link>
                                }
                            </div>

                        </div>
                    </>}
                </div>
            </>}

        </div>
    </>
}

export default Search