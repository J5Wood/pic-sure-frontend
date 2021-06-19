export function login(credentials) {
    const username = credentials.username
    const password = credentials.password
    const creds = {password, username}
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(creds)
    }
    return dispatch => { 
        dispatch({ type: 'LOGGING_IN'})
        fetch('http://localhost:3001/session', configObj)
        .then(resp => resp.json())
        .then( jsonResp => {
            if (jsonResp.status === 'error') {
                return handleError(jsonResp, dispatch)
            }
            localStorage.setItem("token", jsonResp.data.attributes.token)
            dispatch({type: 'LOGIN_USER', payload: jsonResp.data.attributes})
        })
        .catch(() => dispatch({ type: "ERROR", payload: "Must contain valid username and password"}))
    }
}

export function signup(credentials) {
    const username = credentials.username
    const password = credentials.password
    const creds = {password, username}
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(creds)
    }
    return dispatch => {
        dispatch({type: 'LOGGING_IN'})
        fetch('http://localhost:3001/users', configObj)
        .then(resp => resp.json())
        .then( jsonResp => {
            if (jsonResp.status === 'error') {
                return handleError(jsonResp, dispatch)
            }
            localStorage.setItem("token", jsonResp.data.attributes.token)
            dispatch({type: 'LOGIN_USER', payload: jsonResp.data.attributes})
        })
        .catch(error => dispatch({ type: "ERROR", payload: error.message}))
    }
}

export function fetchLoggedInUser() {
    return dispatch => {
        const token = localStorage.token
        if (token && token !== "null") {
            const configObj ={
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
            return fetch("http://localhost:3001/auto-login", configObj)
            .then(resp => resp.json())
            .then(jsonResp => {
                if (!!jsonResp.data) {
                    dispatch({ type: 'LOGIN_USER', payload: jsonResp.data.attributes})
                }
            })
            .catch(error => dispatch({ type: "ERROR", payload: error.message}))
        }
    }
}

export function logout() {
    localStorage.setItem("token", null)
    return dispatch => {
        dispatch({type: 'LOGOUT'})
    }
}

const handleError = (resp, dispatch) => {
    return dispatch({type: "ERROR", payload: resp.message})
}