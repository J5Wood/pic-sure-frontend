import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/UserActions';

class LoginForm extends Component {

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
        this.props.login(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Login!</h3>
                <label htmlFor='loginUsername'>Username: </label>
                <input type='text' id='loginUsername' name='username' value={this.state.username} onChange={this.handleChange}/>
                <br/>
                <label htmlFor='loginPassword'>Password: </label>
                <input type='password' id="loginPassword" name='password' value={this.state.password} onChange={this.handleChange}/>
                <br/>
                <input className="form-button" type='submit'/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: credentials => dispatch(login(credentials))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)