import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/UserActions';

class SignupForm extends Component {

    state ={
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signup(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Signup!</h3>
                <label htmlFor='signupUsername'>Username: </label>
                <input type='text' id='signupUsername' name='username' value={this.state.username} onChange={this.handleChange}/>
                <br/>
                <label htmlFor='signupPassword'>Password: </label>
                <input type='password' id="signupPassword" name='password' value={this.state.password} onChange={this.handleChange}/>
                <br/>
                <input className="form-button" type='submit'/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: credentials => dispatch(signup(credentials))
    }
}

export default connect(null, mapDispatchToProps)(SignupForm)