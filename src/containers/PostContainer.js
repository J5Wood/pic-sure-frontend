import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/PostActions'
import Post from './Post'
import CommentsContainer from './CommentsContainer'
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom'

class PostContainer extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.url.split("/")[2])
    }

    renderPost = () => {
        if (!!this.props.post.id && this.props.post.id === this.props.match.url.split("/")[2]) {
            return (
                <div className="post-container">
                    <Post key={this.props.post.id} post={this.props.post}/>
                    <CommentsContainer postId={this.props.post.id} />
                </div>
            )
        }
    }

    render() {
        if (!this.props.currentUser) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <br/>
                <NavLink
                    to="/home"
                ><h3 className="back-button">BACK</h3>
                </NavLink>
                <br/>
                {this.renderPost()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.postReducer.post,
        currentUser: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)