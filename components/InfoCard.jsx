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
                className='mb-3'
            />
            <p className='text-xl text-white'>{member.name}</p>
            <p className='italic text-white'>{member.position}</p>
        </div>
    )
}

export default InfoCard