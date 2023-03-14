import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from "react-loading";

function UserContainer() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(userData);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p> username : {user.username}</p>
              <p> email : {user.email}</p>
              <p> phone : {user.phone}</p>
              <p> website : {user.website}</p>
              <p>--------------------------------</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserContainer;
