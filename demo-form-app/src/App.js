import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const onAddUserHandler = (userName, userAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: userAge, id: Math.random().toString() }];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
