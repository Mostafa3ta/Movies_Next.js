import Link from 'next/link'
import React from 'react'

export const metadata = {
    title : "Not Found",
}

function NotFound() {
    return <>
        <div className='container text-white'>
            <div className='row text-center justify-content-center mt-5 py-5 align-items-center '>
                <h1 className='text-warning '>There Was A Problem</h1>
                <h5>We could not find the page you looking for .</h5>
                <h5>Go back To <Link href={`/`}> <span className='text-warning fs-4 fst-bold'>Home Page</span> </Link> .</h5>

            </div>

        </div>
    </>
}

export default NotFound