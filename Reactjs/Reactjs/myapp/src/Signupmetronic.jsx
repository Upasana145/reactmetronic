import React, { useState } from "react";
import logo from "../src/assets/media/logos/logo-1.svg";
import g from "../src/assets/media/svg/brand-logos/google-icon.svg";

import { Link, useNavigate } from "react-router-dom";
import Validation from "./Signupvalidation";
import axios from "axios";

// C:\Users\Datacore\Desktop\Reactjs\Reactjs\myapp\src\assets
function Signup() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (
      err.firstname === "" &&
      err.lastname === "" &&
      err.email === "" &&
      err.password === ""
    ) {
      axios
        .post("http://localhost:8081/signup", values)

        .then((res) => {
          console.log(res.data.Status, "heeeeeeyyy");
          if (res.data.Status === "Success") {
            navigate("/");
          } else {
            alert("Error");
          }
        })

        .then((err) => console.log(err));
      //   {
      //     navigate('/');
      //   }
      //    )
      //  .catch(err => console.log(err));
    }
  };

  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Authentication - Sign-up */}
        <div
          className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
          style={{
            backgroundImage: "url(assets/media/illustrations/sketchy-1/14.png",
          }}
        >
          {/*begin::Content*/}
          <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            {/*begin::Logo*/}
            <a href="../../demo1/dist/index.html" className="mb-12">
              <img alt="Logo" src={logo} className="h-40px" />
            </a>
            {/*end::Logo*/}
            {/*begin::Wrapper*/}
            <div className="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              {/*begin::Form*/}
              <form
                onSubmit={handleSubmit}
                className="form w-100"
                noValidate="novalidate"
                id="kt_sign_up_form"
              >
                {/*begin::Heading*/}
                <div className="mb-10 text-center">
                  {/*begin::Title*/}
                  <h1 className="text-dark mb-3">Create an Account</h1>
                  {/*end::Title*/}
                  {/*begin::Link*/}
                  <div className="text-gray-400 fw-bold fs-4">
                    Already have an account?
                    <Link to="/" className="link-primary fw-bolder">
                      Sign in here
                    </Link>
                  </div>
                  {/*end::Link*/}
                </div>
                {/*end::Heading*/}
                {/*begin::Action*/}
                <button
                  type="button"
                  className="btn btn-light-primary fw-bolder w-100 mb-10"
                >
                  <img alt="Logo" src={g} className="h-20px me-3" />
                  Sign in with Google
                </button>
                {/*end::Action*/}
                {/*begin::Separator*/}
                <div className="d-flex align-items-center mb-10">
                  <div className="border-bottom border-gray-300 mw-50 w-100" />
                  <span className="fw-bold text-gray-400 fs-7 mx-2">OR</span>
                  <div className="border-bottom border-gray-300 mw-50 w-100" />
                </div>
                {/*end::Separator*/}
                {/*begin::Input group*/}
                <div className="row fv-row mb-7">
                  {/*begin::Col*/}
                  <div className="col-xl-6">
                    <label className="form-label fw-bolder text-dark fs-6">
                      First Name
                    </label>
                    <input
                      onChange={handleInput}
                      className="form-control form-control-lg form-control-solid"
                      type="text"
                      placeholder=""
                      name="firstname"
                      autoComplete="off"
                    />
                    {error.firstname && (
                      <span className="text-danger">{error.firstname}</span>
                    )}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-6">
                    <label className="form-label fw-bolder text-dark fs-6">
                      Last Name
                    </label>
                    <input
                      onChange={handleInput}
                      className="form-control form-control-lg form-control-solid"
                      type="text"
                      placeholder=""
                      name="lastname"
                      autoComplete="off"
                    />
                    {error.lastname && (
                      <span className="text-danger">{error.lastname}</span>
                    )}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="fv-row mb-7">
                  <label className="form-label fw-bolder text-dark fs-6">
                    Email
                  </label>
                  <input
                    onChange={handleInput}
                    className="form-control form-control-lg form-control-solid"
                    type="email"
                    placeholder=""
                    name="email"
                    autoComplete="off"
                  />
                  {error.email && (
                    <span className="text-danger">{error.email}</span>
                  )}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="mb-10 fv-row" data-kt-password-meter="true">
                  {/*begin::Wrapper*/}
                  <div className="mb-1">
                    {/*begin::Label*/}
                    <label className="form-label fw-bolder text-dark fs-6">
                      Password
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input wrapper*/}
                    <div className="position-relative mb-3">
                      <input
                        onChange={handleInput}
                        className="form-control form-control-lg form-control-solid"
                        type="password"
                        placeholder=""
                        name="password"
                        autoComplete="off"
                      />
                      <span
                        className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                        data-kt-password-meter-control="visibility"
                      >
                        <i className="bi bi-eye-slash fs-2" />
                        <i className="bi bi-eye fs-2 d-none" />
                      </span>
                      {error.password && (
                        <span className="text-danger">{error.password}</span>
                      )}
                    </div>
                    {/*end::Input wrapper*/}
                    {/*begin::Meter*/}
                    {/* <div
                      className="d-flex align-items-center mb-3"
                      data-kt-password-meter-control="highlight"
                    >
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px" />
                    </div> */}
                    {/*end::Meter*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Hint*/}
                  <div className="text-muted">
                    Use 8 or more characters with a mix of letters, numbers
                    &amp; symbols.
                  </div>
                  {/*end::Hint*/}
                </div>
                {/*end::Input group=*/}
                {/*begin::Input group*/}
                {/* <div className="fv-row mb-5">
            <label className="form-label fw-bolder text-dark fs-6">
              Confirm Password
            </label>
            <input
             onChange={handleInput} 
              className="form-control form-control-lg form-control-solid"
              type="password"
              placeholder=""
              name="confirmpassword"
              autoComplete="off"
            />
            {error.confirmpassword && <span className="text-danger">{error.confirmpassword}</span>}

          </div> */}
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="fv-row mb-10">
                  <label className="form-check form-check-custom form-check-solid form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="toc"
                      defaultValue={1}
                    />
                    <span className="form-check-label fw-bold text-gray-700 fs-6">
                      I Agree
                      <a href="#" className="ms-1 link-primary">
                        Terms and conditions
                      </a>
                      .
                    </span>
                  </label>
                </div>
                {/*end::Input group*/}
                {/*begin::Actions*/}

                <a className="text-center">
                  <button
                    style={{ marginLeft: "196px" }}
                    type="submit"
                    id="kt_sign_up_submit"
                    className="btn btn-lg btn-primary"
                  >
                    <span className="indicator-label">Submit</span>

                    {/* <span className="indicator-progress">
                Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2" />
              </span> */}
                  </button>
                </a>

                {/*end::Actions*/}
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Content*/}
          {/*begin::Footer*/}
          <div className="d-flex flex-center flex-column-auto p-10">
            {/*begin::Links*/}
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
            {/*end::Links*/}
          </div>
          {/*end::Footer*/}
        </div>
        {/*end::Authentication - Sign-up*/}
      </div>
    </>
  );
}
export default Signup;
