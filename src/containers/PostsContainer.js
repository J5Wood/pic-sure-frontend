import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/PostActions'
import Post from './Post'

class PostsContainer extends Component {

    renderPosts = () => {
            const posts = this.props.posts.map(post => {
                return (
                        <Post key={post.id} post={post}/>
                )
            })
            return posts.reverse()
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div className="post-container">
                {this.renderPosts()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsContainer)