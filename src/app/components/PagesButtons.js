import Link from 'next/link'
import React from 'react'

export default function PagesButtons({ movies, pageNavLink, show }) {
    return (
        <div className={`d-flex justify-content-center align-items-center ${show}`}>
            <div className='mt-5 mb-3 '>
                {movies.page === movies.total_pages ? null :
                    <Link href={`${pageNavLink}/${movies.page + 1}`}>
                        <button className='btn-sm  btn me-3 rounded-3 btn-danger'><i className="fa-solid fa-angles-left"></i></button>
                    </Link>
                }
                <Link href={`${pageNavLink}/${movies.page + 1}`}>
                    <button className='btn-sm btn  btn-danger mx-1'> {movies.page + 1} </button>
                </Link>
                <button className='btn-sm btn fs-4 btn-danger mx-1'>  {movies.page} </button>
                {movies.page !== 1 ?
                    <Link href={`${pageNavLink}/${movies.page - 1}`}>
                        <button className='btn-sm btn  btn-danger mx-1'> {movies.page - 1} </button>
                    </Link>
                    : null}
                {movies.page === 1 ?
                    <button className='btn-sm btn ms-3 rounded-3 btn-danger' type='button' disabled><i className="fa-solid fa-angles-right"></i></button>
                    : <>
                        <Link href={`${pageNavLink}/${movies.page - 1}`}>
                            <button className='btn-sm btn ms-3 rounded-3 btn-danger'><i className="fa-solid fa-angles-right"></i></button>
                        </Link>
                    </>

                }
            </div>

        </div>
    )
}
