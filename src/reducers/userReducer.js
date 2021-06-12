export default function userReducer(
    state = {
        user: null,
        loading: false
    }, action
) {
    switch (action.type) {

        case 'LOGGING_IN':
            return {
                ...state, loading: true
            }

        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload.username,
                loading: false
            }

        case 'LOGOUT':
            return {
                ...state,
                user: null,
                loading: false
            }

            default:
                return state
    }
}
