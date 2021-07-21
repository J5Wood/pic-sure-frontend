import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Button } from 'react-bootstrap'
import { fetchComments, deleteComment } from '../actions/CommentActions'
import { Comment } from '../components/Comment'
import CommentForm from './CommentForm'

class CommentsContainer extends Component {

    state={
        renderDeleteConfirmation: null
    }

    renderDeleteButton = commentId => {

        return ( 
            <div>
                <Button onClick={() => this.handleDeleteClick(commentId)} className="delete-comment-button" variant="danger" size="sm">X</Button>
                {this.renderConfirmation(commentId)}
            </div>
        )
    }

    renderConfirmation = commentId => {
        if (this.state.renderDeleteConfirmation === commentId) {
            return (
                <h5>
                    <Badge variant='light'>Are you sure?</Badge><Button onClick={() => this.handleDeleteConfirmation(commentId)} size='sm' variant='danger'>Yes</Button>
                </h5>
            )
        }
    }

    handleDeleteClick = commentId => {
        this.setState({
            renderDeleteConfirmation: !!this.state.renderDeleteConfirmation ? null : commentId
        })
    }

    handleDeleteConfirmation = commentId => {
        this.props.deleteComment(commentId)
        this.handleDeleteClick(null)
    }

    componentDidMount() {
        this.props.fetchComments(this.props.postId)
    }

    renderComments = () => {
        if (!!this.props.comments[0]) {
            return this.props.comments.map(comment => {
                return (
                <div key={comment.id}>
                    {this.props.user === comment.attributes.user ? this.renderDeleteButton(comment.id) : null}
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
        fetchComments: postId => dispatch(fetchComments(postId)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)