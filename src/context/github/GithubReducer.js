const githubReducer = (state, action) => {  /// Reducer takes two arguement one is state other is action
    switch (action.type) {
        case 'GER_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default githubReducer