import React, { useState } from "react";

import { AddUserForm, UserList } from "./components";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { name: user.name, age: user.age },
    ]);
  };

  return (
    <>
      <AddUserForm onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export { App };
