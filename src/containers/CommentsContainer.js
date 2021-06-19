import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/CommentActions'
import { Comment } from '../components/Comment'
import CommentForm from './CommentForm'

class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments(this.props.postId)
    }

    renderComments = () => {
        if (!!this.props.comments[0]) {
            return this.props.comments.map(comment => {
                return (
                <div key={comment.id}>
                    <Comment comment={comment}/>
                    <br/>
                </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <br/>
                {this.renderComments()}

                <CommentForm user={this.props.user} userId={this.props.userId} postId={this.props.postId}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        comments: state.commentReducer.comments,
        user: state.userReducer.user,
        userId: state.userReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: postId => dispatch(fetchComments(postId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)