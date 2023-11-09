import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import Axios from "axios";
import NavigationBar from "./NavigationBar";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [amount, setAmount] = useState(1000);
  const [error, setError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // New state variable

  const isEmailValid = (email) => {
    // Corrected regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isFullNameValid = (fullName) => {
    // Regular expression for full name validation
    const fullNamePattern = /^[A-Za-z\s]+$/;
    return fullNamePattern.test(fullName);
  };

  const isPhoneNoValid = (phoneNo) => {
    // Regular expression for phone number validation
    const phoneNoPattern = /^\d{10}$/; // Assuming a 10-digit phone number
    return phoneNoPattern.test(phoneNo);
  };

  const isPasswordValid = (password) => {
    // Regular expression for password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordPattern.test(password);
  };

  const addEmployee = () => {
    if (!fullName || !email || !phoneNo || !password || !confirmPassword) {
      setError("Please fill in all the fields.");
      return;
    }

    if (!isEmailValid(email)) {
      setError("Invalid email address.");
      return;
    }

    if (!isFullNameValid(fullName)) {
      setError("Invalid full name.");
      return;
    }

    if (!isPhoneNoValid(phoneNo)) {
      setError("Invalid phone number.");
      return;
    }

    if (!isPasswordValid(password)) {
      setError(
        "Password should be at least 8 characters with one capital letter and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    Axios.post("http://localhost:3001/create", {
      fullName: fullName,
      email: email,
      phoneNo: phoneNo,
      password: password,
      amount: amount,
    })
      .then(() => {
        setRegistrationSuccess(true); // Registration is successful
        setError(""); // Clear any previous error messages
      })
      .catch((error) => {
        setError("An error occurred while registering. Please try again.");
        setRegistrationSuccess(false);
      });
  };

  return (
    <>
      <NavigationBar />
      <div className="App">
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

                {registrationSuccess ? (
                  <div className="alert alert-success text-center" role="alert">
                    Successfully Registered!
                  </div>
                ) : (
                  <>
                    <p>Please fill your details to Register Account</p>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Full Name"
                      id="form1"
                      type="text"
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email address"
                      id="form2"
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Phone Number"
                      id="form3"
                      type="text"
                      onChange={(e) => {
                        setPhoneNo(e.target.value);
                      }}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form4"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Confirm Password"
                      id="form5"
                      type="password"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />

                    <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                      <MDBBtn
                        outline
                        className="mx-2"
                        color="danger"
                        onClick={addEmployee}
                      >
                        Register
                      </MDBBtn>
                      <Link to="/login">
                        <MDBBtn outline className="mx-2" color="primary">
                          Login Page
                        </MDBBtn>
                      </Link>
                    </div>
                  </>
                )}

                {error && (
                  <div className="alert alert-danger text-center" role="alert">
                    {error}
                  </div>
                )}
              </div>
            </MDBCol>
            <MDBCol col="6" className="mb-5">
              <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">We are more than just a Bank</h4>
                  <p className="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default App;
