import React from "react";
import { Link } from "react-router-dom";
import banner from '../profile-pic/banner.PNG'; // Make sure the path and filename are correct

const AuthorProfile = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <img
        src={banner}
        alt="Banner"
        style={{
          width: "300px",
          maxWidth: "90%",
          height: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          marginBottom: "20px"
        }}
      />
      <h2>Hello, I am ID 36</h2>
      <p>Please leave a react and a comment.</p>
      <Link to="/">→ Author 36 Profile</Link>
    </div>
  );
};

export default AuthorProfile;
