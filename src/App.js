import React, { useState } from "react";

import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import Status from "./components/Status";
import CurrentUsers from "./components/CurrentUsers";

export default function App() {
  const [users, setUsers] = useState([]);
  // handle user submissions
  const handleUserSubmissions = user => {
    setUsers([...users, user]);
  };

  // allow a user to leave the gym
  const removeUser = id => {
    const removedUsers = users.filter(user => user.id !== id);
    setUsers(removedUsers);
  };

  return (
    <div>
      <Header title="GYM Tracker" />
      <SigninForm handleUsers={handleUserSubmissions} status={users.length} />
      <Status status={users.length} />
      <CurrentUsers currentUsers={users} remove={removeUser} />
    </div>
  );
}
