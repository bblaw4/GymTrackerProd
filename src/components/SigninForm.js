import React, { useState } from "react";
import { v4 as uid } from "uuid";

export default function SigninForm({ handleUsers, status }) {
  // state
  const [name, setName] = useState("");
  // handle Form data
  const handleSubmit = e => {
    e.preventDefault();
    // create a user object to store their information
    const user = { id: uid(), name };
    // prevent null/undefined names
    if (!name) {
      return;
    } else {
      // send data
      handleUsers(user);
      setName("");
    }
  };
  return (
    <div>
      {status === 10 ? null : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Please enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <button>Sign In</button>
          </div>
        </form>
      )}
    </div>
  );
}
