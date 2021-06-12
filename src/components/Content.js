import React from 'react'

export const Content = props => {
    return (
        <div className="post-content" >
            <li><b>{props.post.attributes.user}</b> - {props.post.attributes.content}</li>
            <br/>
        </div>
    )
}