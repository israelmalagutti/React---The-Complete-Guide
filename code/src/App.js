import React from "react";

import { AddUserForm, UserList } from "./components";

function App() {
  return (
    <div>
      <AddUserForm />
      <UserList items={[]} />
    </div>
  );
}

export { App };
