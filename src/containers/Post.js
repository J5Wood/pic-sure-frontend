import React, { Component } from 'react'
import { Photo } from '../components/Photo'
import { Content } from '../components/Content'
import { connect } from 'react-redux'
import {updateLike } from '../actions/PostActions'
import { NavLink } from 'react-router-dom'

class Post extends Component {

    handleLike =  (postId) => {
        this.props.updateLike(postId, this.props.userId)
    }

    render() {
        return (
                <div className="post-card">
                    <NavLink to={"/posts/" + this.props.post.id} exact>
                        <Photo src={this.props.post.attributes.photo_url}/>
                    </NavLink>
                    <Content handleLike={this.handleLike} post={this.props.post} user={this.props.user} userId={this.props.userId}/>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        userId: state.userReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateLike: (postId, userId) => dispatch(updateLike(postId, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)