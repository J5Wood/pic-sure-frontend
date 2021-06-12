import Alert from 'react-bootstrap/Alert'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ErrorHandler extends Component {
    
    renderAlert = () => {
        if (this.props.error.length > 0) {
            return (
                <Alert onClick={this.removeError} show={true} variant="danger">
                    {this.props.error}
                </Alert>
            )
        }
    }

    componentDidUpdate() {
        if (this.props.error.length > 0) {
            setTimeout(this.props.removeError, 4000)
        }
    }

    render() {
        return (
            <div>
                {this.renderAlert()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.errorReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeError: () => dispatch({type: "REMOVE_ERROR"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler)