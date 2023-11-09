import React, { useContext, useState } from "react";
import "./../App.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { createContext } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import NavigationBar from "./NavigationBar";

export var LoggedInUserMailId = "";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.length > 0) {
        LoggedInUserMailId = createContext(response.data[0].email);
        console.log(LoggedInUserMailId);
        setLoginStatus(response.data.message);
        navigate("/dashboard");
      } else {
        setLoginStatus("Wrong username/password combination!");
      }
    });
  };

  return (
    <>
      <NavigationBar />
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img
                  src="https://www.commercebank.com/-/media/cb/images/about-us/mediakit-logos/2018cbcagreenverticalfdic.png?revision=752b4309-7352-4f8c-8255-5423fc8fb645&modified=20220506163118"
                  style={{ width: "185px" }}
                  alt="logo"
                />
                <h4 className="mt-1 mb-5 pb-1">We are The Commerce Bank.</h4>
              </div>

              <p>Please login to your account</p>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn
                  className="mb-4 w-100 gradient-custom-2"
                  onClick={handleLogin}
                >
                  Sign in
                </MDBBtn>
                <h1>{loginStatus}</h1>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>

                <Link to="/register">
                  {/* Link to the registration page */}
                  <MDBBtn outline className="mx-2" color="danger">
                    Register
                  </MDBBtn>
                </Link>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a Bank.</h4>
                <p className="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Login;
