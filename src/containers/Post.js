import React, { Component } from 'react'
import { Photo } from '../components/Photo'
import { Content } from '../components/Content'
import { connect } from 'react-redux'
import {updateLike } from '../actions/PostActions'

class Post extends Component {

    handleLike =  (postId) => {
        this.props.updateLike(postId, this.props.user)
    }

    render() {
        return (
                <div className="post-card">
                    <Photo src={this.props.post.attributes.photo_url}/>
                    <Content handleLike={this.handleLike} post={this.props.post} />
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateLike: (postId, user) => dispatch(updateLike(postId, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)