import React from 'react'
import Image from 'next/image'

function Loading() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Image src="/dalle.png" width={100} height={100} alt="logo" />
        </div>
    )
}

export default Loading