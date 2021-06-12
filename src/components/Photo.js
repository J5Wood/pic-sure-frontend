import React from 'react'
import Image from 'react-bootstrap/Image'

export const Photo = props => {
    return (
        <div className='image'>
            <Image src={props.src} fluid rounded/>
        </div>
    )
}