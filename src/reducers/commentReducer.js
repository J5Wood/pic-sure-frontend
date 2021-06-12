export default function commentReducer(
    state = {
        comments: [],
        loading: false
    }, action
) {
    switch (action.type) {

        case "FETCHING_COMMENTS":
            return {
                ...state,
                loading: true
            }

        case "ADD_COMMENTS":
            return {
                comments: action.payload,
                loading: false
            }

        case "BEGIN_ADDING_COMMENT":
            return {
                ...state,
                loading: true
            }

        case "ADD_COMMENT":
            return {
                ...state,
                comments: [...state.comments, action.payload],
                loading: false
            }

        default:
            return state

    }
}