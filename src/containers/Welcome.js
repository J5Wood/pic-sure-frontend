import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { fetchLoggedInUser } from '../actions/UserActions'

class Welcome extends Component {
    
    state = {
        loginSignupToggle: true
    }

    handleLoginToggle = () => {
        this.setState({
            loginSignupToggle: !this.state.loginSignupToggle
        })
    }

    
    componentDidMount() {
    this.props.fetchLoggedInUser()
    }

    renderLoginForm = () => {
        if(this.state.loginSignupToggle){
            return (
                <div className="login-signup-form">
                    <br/>
                    <LoginForm />
                    <br/>
                    <br/>
                    <button className="form-button" onClick={this.handleLoginToggle}>Don't Have an Account? Sign Up Here!</button>
                </div>
            )
        } else {
            return (
                <div className="login-signup-form">
                    <br/>
                    <SignupForm />
                    <br/>
                    <br/>
                    <button className="form-button" onClick={this.handleLoginToggle}>Aready a User? Sign in Here!</button>
                </div>
            )
        }
    }

    render() {
        if (!!this.props.user) {
            return <Redirect to="/home"/>
        }
        return (
            <div className="login-div">
                {this.renderLoginForm()}
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
      fetchLoggedInUser: () => dispatch(fetchLoggedInUser())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);