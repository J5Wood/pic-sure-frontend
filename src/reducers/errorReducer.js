export default function errorReducer(
    state = {
        error: []
    }, action
) {
    switch (action.type) {
        case 'ERROR':
            return {
                error: action.payload
            }

        case 'REMOVE_ERROR':
            return {
                error: []
            }

        default:
            return state
    }
}