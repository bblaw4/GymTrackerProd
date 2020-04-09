import React from "react";

function User({ userData, remove }) {
  const { id, name } = userData;
  return (
    <div>
      <p>
        Name: {name} <button onClick={() => remove(id)}>Leave</button>
      </p>
    </div>
  );
}

export default User;
