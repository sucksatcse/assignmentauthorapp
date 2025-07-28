
import React from "react";
import { Link } from "react-router-dom";

const AuthorProfile = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <img
        src="https://via.placeholder.com/150"
        alt="Author"
        style={{ borderRadius: "50%" }}
      />
      <h2>Hello, i am id 36</h2>
      <p>Please leave a react and a comment.</p>
      <Link to="/">→ Author 36 Profile</Link>
    </div>
  );
};

export default AuthorProfile;
