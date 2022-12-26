/** @format */
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    // <div>
    //   {/* <h1 className='text-6xl'>Welcome</h1> */}
    //   {UserResults}
    // </div>
    <>
      <UserSearch />
      {/* SEARCH COMPONENT */}
      <UserResults />
    </>
  );
}

export default Home;
