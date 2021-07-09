import React from 'react'
import Image from 'react-bootstrap/Image'

export const Photo = props => {
    return (
        <div >
            <Image className="image" src={props.src} fluid rounded/>
        </div>
    )
}