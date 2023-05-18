/** @format */
import { useEffect, useState, useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetchUsers();
  //   }, []); // the argument array is array of dependencies

  //   const fetchUsers = async () => {
  //     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
  //       headers: {
  //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //       },
  //     });
  //     const data = await response.json();

  //     setUsers(data);
  //     setLoading(false);
  //     // console.log(data);
  //   };
  const { users, loading, fetchUsers } = useContext(GithubContext);
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
