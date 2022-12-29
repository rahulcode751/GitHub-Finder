/** @format */
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState([]);

  // const { users, searchUsers, clearUsers } = useContext(GithubContext);
  // const { alert, setAlert } = useContext(AlertContext);

  // const handleChange = (e) => setText(e.target.value);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (text === "") {
  //     // alert("Please enter something");
  //     setAlert("Please enter something", "error");
  //   } else {
  //     // @todo - search users
  //     searchUsers(text);
  //     setText("");
  //   }
  // };
  const { users, dispatch } = useContext(GithubContext);
  const { alert, setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      // alert("Please enter something");
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };

  return (
    <div className='grid content-center grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                style={{
                  backgroundColor: "#3D4451",
                  color: "white",
                }}
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          {/* Before GithubActions.js */}
          {/* <button className='btn btn-ghost btn-lg' onClick={clearUsers}>
            Clear
          </button> */}
          {/* After GithubActions.js */}
          <button
            className='btn btn-ghost btn-lg'
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
          >
            Clear
          </button>
        </div>
      )}
      {/* <div>
        <button className='btn btn-ghost btn-lg'>Clear</button>
      </div> */}
    </div>
  );
}

export default UserSearch;
