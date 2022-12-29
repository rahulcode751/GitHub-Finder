const githubReducer = (state, action) => {  /// Reducer takes two arguement one is state other is action
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        // case 'GET_USER':
        //     return {
        //         ...state,
        //         user: action.payload,
        //         loading: false,
        //     }
        // case 'GET_REPOS':
        //     return {
        //         ...state,
        //         repos: action.payload,
        //         loading: false,
        //     }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: false,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        default:
            return state
    }
}

export default githubReducer