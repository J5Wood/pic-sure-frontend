import React from 'react'

const renderHeart = props => {
    if (props.post.attributes.likes.includes(props.userId)) {
        return (
            <b>
                {String.fromCharCode(9829)} - {props.post.attributes.likes.length} Likes
            </b>
        )
    } else {
        return (
            <b>
                {String.fromCharCode(9825)} - {props.post.attributes.likes.length} Likes
            </b>
        )
    }
}

export const Content = props => {
    return (
        <div className="post-content" >
            <br/>
            <li><b>{props.post.attributes.user}</b> - {props.post.attributes.content}</li>
            <br/>
            <div className="likes" onClick={() => props.handleLike(props.post.id)}>
                {renderHeart(props)}
            </div>
        </div>
    )
}