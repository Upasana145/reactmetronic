import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

function ForgetPassword() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const [error, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8081/forget-password", values)
        .then((res) => {
          if (res.data.Status === "Success") {
            Navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Forget Password</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {error.email && <span className="text-danger">{error.email}</span>}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Send</strong>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
