import { createContext, useState, useReducer } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {

    /// WE DONT NEED THIS BCZ WE ARE USING USE REDUCER
    // const [users, setUsers] = useState([]);  
    // const [loading, setLoading] = useState(true);

    const initialState = {
        users: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)  /// This takes two arguement one is Reducer and other is state. the array containe state an dispatch ,this dispatch dispatches an action to reducer

    /// Get initial user (testing purposes)
    const fetchUsers = async () => {

        setLoading();

        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        const data = await response.json();

        // setUsers(data);
        // setLoading(false);
        // console.log(data);

        dispatch({
            type: 'GET_USERS',
            payload: data,
        })
    };

    /// Set Loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value={{
        /// WHEN WE ONLY USE CONTEXT
        // users,
        // loading,
        // fetchUsers,

        /// WHEN WE ARE USING REDUCER
        users: state.users,
        loading: state.loading,
        fetchUsers,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext