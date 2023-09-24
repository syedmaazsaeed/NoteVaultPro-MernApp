import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password

  const handleSubmit = async (e) => {
    // If we are not use this page relod so use this.
    e.preventDefault();
    // use Array Destructing
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      // auth token save to the local storage
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Account Created Successfully", "success");

      // use history hook : redirect
      navigate("/");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-2">
      <h2 className="my-2">Create an account to use NoteVaultPro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="showPasswordCheckbox"
            onClick={() => setShowPassword(!showPassword)}
            disabled={credentials.cpassword.length === 0} // Disable when confirm password is empty
          />
          <label className="form-check-label" htmlFor="showPasswordCheckbox">
            Show Password
          </label>
        </div>
        <button
  type="submit"
  className="btn btn-water-movement"
  style={{
    backgroundColor: "#434343",
    color: "#fff",
  }}
>
  Submit
</button>

      </form>
    </div>
  );
};

export default Signup;
