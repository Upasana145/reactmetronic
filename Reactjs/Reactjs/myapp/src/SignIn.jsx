import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../src/assets/media/logos/logo-1.svg";
import g from "../src/assets/media/svg/brand-logos/google-icon.svg";
import h from "../src/assets/media/svg/brand-logos/facebook-4.svg";
import i from "../src/assets/media/svg/brand-logos/apple-black.svg";

// "assets/media/svg/brand-logos/apple-black.svg"

import Validation from "./LoginValidation";
import axios from "axios";

// C:\Users\Datacore\Desktop\Reactjs\Reactjs\myapp\src\assets
function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);

    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        // console.log(res.status,'response data========');
        if (res.data.Status === "Success") {
          navigate("/dashboard");
        } else {
          alert("error");
        }

        // if(res.status === "Success"){
        //  navigate('/');
        // }
        // else{
        //  alert("Error");
        // }
      })
      // .catch((err) => console.log(err));

      .then((err) => console.log(err));
  };
  console.log(values, "================");
  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div
          className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
          style={{
            backgroundImage: "url(assets/media/illustrations/sketchy-1/14.png)",
          }}
        >
          <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <a href="../../demo1/dist/index.html" className="mb-12">
              <img alt="Logo" src={logo} className="h-40px" />
            </a>
            <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              <form
                onSubmit={handleSubmit}
                className="form w-100"
                noValidate="novalidate"
                id="kt_sign_in_form"
                data-kt-redirect-url="../../demo1/dist/index.html"
                action="#"
              >
                <div className="text-center mb-10">
                  <h1 className="text-dark mb-3">Sign In to Metronic</h1>
                  <div className="text-gray-400 fw-bold fs-4">
                    New Here?
                    <Link to="/signup" className="link-primary fw-bolder">
                      Create an Account
                    </Link>
                  </div>
                </div>
                <div className="fv-row mb-10">
                  <label className="form-label fs-6 fw-bolder text-dark">
                    Email
                  </label>
                  <input
                    onChange={handleInput}
                    value={values.email}
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    name="email"
                    autoComplete="off"
                  />
                  {error.email && (
                    <span className="text-danger">{error.email}</span>
                  )}
                </div>
                <div className="fv-row mb-10">
                  <div className="d-flex flex-stack mb-2">
                    <label className="form-label fw-bolder text-dark fs-6 mb-0">
                      Password
                    </label>
                    <Link
                      to="forget-password"
                      // className="link-primary fs-6 fw-bolder"
                    >
                      .
                    </Link>
                  </div>
                  <input
                    onChange={handleInput}
                    value={values.password}
                    className="form-control form-control-lg form-control-solid"
                    type="password"
                    name="password"
                    autoComplete="off"
                  />
                  {error.password && (
                    <span className="text-danger"> {error.password} </span>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    className="btn btn-lg btn-primary w-100 mb-5"
                  >
                    <span className="indicator-label">Continue</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                  <div className="text-center text-muted text-uppercase fw-bolder mb-5">
                    or
                  </div>
                  <a
                    href="#"
                    className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
                  >
                    <img alt="Logo" src={g} className="h-20px me-3" />
                    Continue with Google
                  </a>
                  <a
                    href="#"
                    className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
                  >
                    <img alt="Logo" src={h} className="h-20px me-3" />
                    Continue with Facebook
                  </a>
                  <a
                    href="#"
                    className="btn btn-flex flex-center btn-light btn-lg w-100"
                  >
                    <img alt="Logo" src={i} className="h-20px me-3" />
                    Continue with Apple
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-center flex-column-auto p-10">
            <div className="d-flex align-items-center fw-bold fs-6">
              <a
                href="https://keenthemes.com"
                className="text-muted text-hover-primary px-2"
              >
                About
              </a>
              <a
                href="mailto:support@keenthemes.com"
                className="text-muted text-hover-primary px-2"
              >
                Contact
              </a>
              <a
                href="https://1.envato.market/EA4JP"
                className="text-muted text-hover-primary px-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin;
