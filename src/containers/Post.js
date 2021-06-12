import React, { Component } from 'react'
import { Photo } from '../components/Photo'
import { Content } from '../components/Content'

export default class Post extends Component {

    render() {
        return (
                <div className="post-card">
                    <Photo src={this.props.post.attributes.photo_url}/>
                    <Content post={this.props.post} />
                </div>
        )
    }
}