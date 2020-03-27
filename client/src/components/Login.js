import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        console.log("Login Response", res);
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/bubble-page");
        setCredentials({ username: "", password: "" });
      })
      .catch(err => {
        console.log("Login Error", err);
      });
  };
  
  return (
    <div>
      <form onSubmit={login}>
        <label>
          Username
          <input
            required
            id="username"
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label>
          Password
          <input
            required
            id="password"
            name="password"
            type="text"
            value={credentials.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <button type="submit" onClick={login}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;