import React from 'react'
import Image from 'next/image'


function InfoCard() {
    return (
        <div className="flex flex-col w-max">
            <img src="" alt="avatar" width={100} height={100} className="bg-gray-500" />
            <p>Alex S.</p>
            <p>Software Developer</p>
        </div>
    )
}

export default InfoCard