import React from "react";

export default function Status({ status }) {
  return (
    <div>
      <h3>Status</h3>
      {status === 10 ? (
        "unfortunately, the gym is at maximum capacity. Please wait until someone leaves."
      ) : status === 0 ? (
        <p>There are no patrons in the gym</p>
      ) : (
        <p>There is/are {status} patron(s) in the gym.</p>
      )}
    </div>
  );
}
