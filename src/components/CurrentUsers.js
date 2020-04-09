import React from "react";
import User from "./User";

export default function CurrentUsers({ currentUsers, remove }) {
  return (
    <div>
      <h3>Current Users</h3>
      {currentUsers.map(user => (
        <User key={user.id} userData={user} remove={remove} />
      ))}
    </div>
  );
}
