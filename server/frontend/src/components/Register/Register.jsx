import React, { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const registerUrl = window.location.origin + "/djangoapp/register";
    const res = await fetch(registerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName,
        firstName,
        lastName,
        email,
        password,
      }),
    });
    const json = await res.json();
    if (json.status) {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    }
  };

  return (
    <div className="register_container">
      <form onSubmit={register}>
        <div>
          <label>Username</label>
          <input type="text" name="username" onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div>
          <label>First Name</label>
          <input type="text" name="first_name" onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="last_name" onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="psw" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
