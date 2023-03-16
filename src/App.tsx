import React, { useState } from "react";
import "./App.css";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";
import { User } from "./utils/interfaces";

function App() {
  const [userList, setUserList] = useState<User[]>([]);

  const onAddUser = (user: User) => {
    setUserList([...userList, user]);
    console.log("oi");
  };

  return (
    <>
      <UserForm onAddUser={onAddUser} />
      <UserList userList={userList} />
    </>
  );
}

export default App;
