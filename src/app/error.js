"use client"

import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "Not Found",
}

export default function error() {
    return <>
        <div className='container text-white'>
            <div className='row text-center justify-content-center mt-5 py-5 align-items-center '>
                <h1 className='text-warning '>Sorry, There are no results</h1>
                <h5>We could not find the page you looking for .</h5>
                <h5>Go back To <Link href={`/`}> <span className='px-2 fs-4 fw-bolder'>Home Page</span> </Link> .</h5>
            </div>
        </div>
    </>
}