import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { fetchLoggedInUser } from '../actions/UserActions'

class Welcome extends Component {

    
    componentDidMount() {
    this.props.fetchLoggedInUser()
    }

    renderLoginForm = () => {
        return (
            <div className="d-flex flex-fill justify-content-center">
                <div className="login-signup-form">
                <LoginForm />
                </div>
                <div className="d-inline-flex align-items-center">
                - OR -
                </div> 
                <div className="login-signup-form">
                <SignupForm />
                </div>
            </div>
        )
    }

    render() {
        if (!!this.props.currentUser) {
            return <Redirect to="/home"/>
        }
        return (
            <div>
                {this.renderLoginForm()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchLoggedInUser: () => dispatch(fetchLoggedInUser())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);