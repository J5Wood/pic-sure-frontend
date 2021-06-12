export function fetchPosts() {
    return dispatch => {
        dispatch({type: 'BEGIN_FETCHING_POSTS'});
        fetch('http://localhost:3001/posts')
        .then(resp => resp.json())
        .then(jsonResp => dispatch({ type: 'ADD_POSTS', payload: jsonResp.data}))
        .catch(error => dispatch({ type: "ERROR", payload: error.message}))
    }
}

export function addNewPost(formState, user) {
    const formData = new FormData();
    formData.append('content', formState.content)
    formData.append('photo', formState.photo)
    formData.append('user', user)
    let configObj = {
        method: 'POST',
        body: formData
    }
    return dispatch => {
        dispatch({type: 'BEGIN_ADDING_POST'})
        fetch('http://localhost:3001/posts', configObj)
        .then(resp => resp.json())
        .then(jsonResp => {
            if (jsonResp.status === 'error') {
                return dispatch({type: "ERROR", payload: jsonResp.message})
            }
            dispatch({type: 'ADD_NEW_POST', payload: jsonResp.data})
        })
        .catch(error => dispatch({ type: "ERROR", payload: error.message}))
    }
}

export function fetchPost(id) {
    return dispatch => {
        dispatch({ type: "BEGIN_FETCHING_POST"})
        fetch(`http://localhost:3001/posts/${id}`)
        .then(resp => resp.json())
        .then(jsonResp => dispatch({ type: 'DISPLAY_POST', payload: jsonResp.data}))
        .catch(error => dispatch({ type: "ERROR", payload: error.message}))
    }
}