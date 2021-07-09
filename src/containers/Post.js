import React, { Component } from 'react'
import { Photo } from '../components/Photo'
import { Content } from '../components/Content'
import { connect } from 'react-redux'
import {updateLike, deletePost } from '../actions/PostActions'
import { NavLink, Redirect } from 'react-router-dom'
import { Button, Badge } from 'react-bootstrap'

class Post extends Component {

    state = {
        renderDeleteVerification: false,
        postDeleted: false
    }

    handleLike =  (postId) => {
        this.props.updateLike(postId, this.props.userId)
    }

    handleDeleteClick = () => {
        this.setState({
            renderDeleteVerification: !this.state.renderDeleteVerification
        })
    }

    handleDeleteConfirmation = () => {
        const postObj = {
            id: this.props.post.id,
            user_id: this.props.userId
        }
        this.props.deletePost(postObj)
        if (parseInt(window.document.location.pathname.split("/")[2]) > 0) {
            this.setState({
                postDeleted: true
            })
        }
    }

    renderDeleteButton = () => {
        if (this.props.user === this.props.post.attributes.user) {
            return (
            <Button onClick={this.handleDeleteClick} className="delete-post-button" variant="danger" size="sm">X</Button>
            )
        }
    }

    renderDeleteVerification = () => {
        if (this.state.renderDeleteVerification === true) {
            return (
                <h4>
                    <Badge variant='light'>Are you sure?</Badge><Button onClick={this.handleDeleteConfirmation} size='sm' variant='danger'>Yes</Button>
                </h4>
            )
        }
    }

    render() {
        if (this.state.postDeleted === true) {
            return (
                <h4>
                    <Redirect to="/home"/>
                </h4>
            )
        }
        return (
                <div className="post-card">
                    <NavLink to={"/posts/" + this.props.post.id} exact>
                        <Photo src={this.props.post.attributes.photo_url}/>
                    </NavLink>
                    <Content handleLike={this.handleLike} post={this.props.post} user={this.props.user} userId={this.props.userId}/>
                    {this.renderDeleteButton()}
                    {this.renderDeleteVerification()}
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
        updateLike: (postId, userId) => dispatch(updateLike(postId, userId)),
        deletePost: (postId, userId) => dispatch(deletePost(postId, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)