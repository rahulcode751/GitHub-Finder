const githubReducer = (state, action) => {  /// Reducer takes two arguement one is state other is action
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default githubReducer