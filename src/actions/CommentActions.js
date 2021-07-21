export function fetchComments(postId) {
    return dispatch => {
        dispatch({type: "FETCHING_COMMENTS"})
        const configObj ={
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
                'PostId': `${postId}`
            }
        }
        fetch('http://localhost:3001/comments', configObj)
        .then(resp => resp.json())
        .then(jsonResp => dispatch({type: "ADD_COMMENTS", payload: jsonResp.data}))
        .catch(error => dispatch({ type: "ERROR", payload: error.message}))
    }
}

export function addNewComment(comment) {
    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(comment)
    }
    return dispatch => {
        dispatch({type: "BEGIN_ADDING_COMMENT"})
        fetch("http://localhost:3001/comments", configObj)
        .then(resp => resp.json())
        .then(jsonResp => {
            if (jsonResp.status === 'error') {
                return dispatch({type: "ERROR", payload: jsonResp.message})
            }
            dispatch({type: "ADD_COMMENT", payload: jsonResp.data})
        })
        .catch(error => dispatch({ type: "ERROR", payload: error.message}))
    }
}

export function deleteComment(commentId) {
    const configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(commentId)
    }
    return dispatch => {
        dispatch({type: "BEGIN_DELETEING_COMMENT"})
        fetch(`http://localhost:3001/comments/${commentId}`, configObj)
        .then(resp => resp.json())
        .then(jsonResp =>{
            dispatch({type: "DELETE_COMMENT", payload: jsonResp})
        })
        .catch(error => dispatch({ type: "ERROR", payload: error.message}))
    }
}