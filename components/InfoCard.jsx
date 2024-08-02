import React from 'react'
import Image from 'next/image'


function InfoCard({member, image, avatarW, avatarH }) {
    return (
        <div className='w-max'>
            <Image
                src={image}
                alt="avatar"
                width={avatarW}
                height={avatarH}
                className='my-10 mx-10'
            />
            <p className='text-xl text-white mx-5'>{member.name}</p>
            <p className='italic text-white mx-5'>{member.position}</p>
        </div>
    )
}

export default InfoCard