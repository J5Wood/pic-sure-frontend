import React from 'react'

export const Comment = props => {
    return (
        <div>
            <li><b>{props.comment.attributes.user}</b> - {props.comment.attributes.content}</li>
        </div>
    )
}