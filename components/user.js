import React from "react";

function User({user}) {
  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </>
  );
}

export default User;
