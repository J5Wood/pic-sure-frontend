import React from 'react'

const renderHeart = props => {
    return (
        <div onClick={() => props.handleLike(props.post)}>
            {String.fromCharCode(9829)} - 3 Likes
            <br/>
            {String.fromCharCode(9825)} - 4 Likes
        </div>
    )
}

export const Content = props => {
    return (
        <div className="post-content" >
            <li><b>{props.post.attributes.user}</b> - {props.post.attributes.content}</li>
            {renderHeart(props)}
            <br/>
        </div>
    )
}