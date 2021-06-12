import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewPost } from '../actions/PostActions'
import Button from 'react-bootstrap/Button'

class PostForm extends Component {

    state = {
        content: '',
        photo: null
      }
    
    handleFile = e => {
        this.setState({
            ...this.state, photo: e.target.files[0]
        })
    }

    handleContent = e => {
        this.setState({
            ...this.state, content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.content === '' || this.state.photo === null) {
            this.props.error("Must provide a file and a title")
        } else {
            this.props.addNewPost(this.state, this.props.user)
            this.setState({
                content: '',
                photo: null
            })
            this.props.closeForm()
        }
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <br/>
                <input onChange={this.handleFile} id="file-input" type="file" name="photo" accept="image/*" />
                <br/>
                <br/>
                {"Title: "}
                <input type='text' value={this.state.content} onChange={this.handleContent}/>
                <br/>
                <br/>
                <Button className="danger-button margin-right" onClick={this.props.closeForm}>X</Button>
                <input className="form-button" type='submit'></input>
            </form>
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
        addNewPost: (post, user) => dispatch(addNewPost(post, user)),
        error: error => dispatch({type: 'ERROR', payload: error})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
