import React from "react";
import Button from "react-bootstrap/Button";
import { Link, NavLink, Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { LoggedInUserMailId } from "./Login";
import Confirmation from "./Confirmation";
import { useNavigate } from "react-router-dom";
import NavigationPay from "./NavigationPay";
import "./OpenAccountStyles.css";
const OpenAccount = () => {
  const navigate = useNavigate();
  const [legalName, setLegalName] = useState("");
  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [citizenshipStatus, setCitizenStatus] = useState("");
  const [countryOfResidence, setCountryOfResidence] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [initialAmount, setInitialAmount] = useState("");
  const [benificiaryName, setBenificiaryName] = useState("");
  const [benificiaeySSN, setBenificiarySSN] = useState("");
  const [legalNameError, setLegalNameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [ssnError, setSsnError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [citizenshipStatusError, setCitizenshipStatusError] = useState("");
  const [countryOfResidenceError, setCountryOfResidenceError] = useState("");
  const [employmentStatusError, setEmploymentStatusError] = useState("");
  const [annualIncomeError, setAnnualIncomeError] = useState("");
  const [initialAmountError, setInitialAmountError] = useState("");
  const [benificiaryNameError, setBenificiaryNameError] = useState("");
  const [benificiarySSNError, setBenificiarySSNError] = useState("");

  const handleSubmit = () => {
    if (!legalName) {
      setLegalNameError("Legal Name is required");
      return;
    } else {
      setLegalNameError("");
    }
    if (!dob) {
      setDobError("Date of Birth is required");
      return;
    }

    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!dateRegex.test(dob)) {
      setDobError("Please enter a valid Date of Birth (MM/DD/YYYY)");
      return;
    }

    setDobError("");
    if (!ssn) {
      setSsnError("Social Security Number is required");
      return;
    }

    const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    if (!ssnRegex.test(ssn)) {
      setSsnError("Please enter a valid Social Security Number (XXX-XX-XXXX)");
      return;
    }

    if (!email) {
      setEmailError("Email is Required");
      return;
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");

    setSsnError("");
    if (!address) {
      setAddressError("Address is required");
      return;
    }

    setAddressError("");
    if (!citizenshipStatus) {
      setCitizenshipStatusError("Citizenship Status is required");
      return;
    }
    if (!countryOfResidence) {
      setCountryOfResidenceError("Country of Residence is required");
      return;
    }

    setCitizenshipStatusError("");
    setCountryOfResidenceError("");

    if (!employmentStatus) {
      setEmploymentStatusError("Employment Status is required");
      return;
    }
    if (!annualIncome) {
      setAnnualIncomeError("Annual Income is required");
      return;
    }

    setEmploymentStatusError("");
    setAnnualIncomeError("");
    if (!initialAmount) {
      setInitialAmountError("Initial Amount Deposit is required");
      return;
    }
    if (!benificiaryName) {
      setBenificiaryNameError("Benificiary Name is required");
      return;
    }

    // Clear error messages if fields are filled
    setInitialAmountError("");
    setBenificiaryNameError("");
    if (!benificiaeySSN) {
      setBenificiarySSNError("Benificiary SSN is required");
      return;
    }

    // Clear the error message if the field is filled
    setBenificiarySSNError("");

    navigate("/confirmation", {
      state: {
        legalName,
        dob,
        email,
        ssn,
        address,
        citizenshipStatus,
        countryOfResidence,
        employmentStatus,
        annualIncome,
        initialAmount,
        benificiaryName,
        benificiaeySSN,
      },
    });
  };

  return (
    <>
      <NavigationPay />
      <div className="main">
        <div class="content-container">
          <h2>Fill Your Details!</h2>
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Full legal Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setLegalName(e.target.value);
                setLegalNameError("");
              }}
            />
          </InputGroup>
          {legalNameError && (
            <div className="error-message">{legalNameError}</div>
          )}
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Date of Birth (MM/DD/YYYY):
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setDob(e.target.value);
                setDobError("");
              }}
            />
          </InputGroup>
          {dobError && <div className="error-message">{dobError}</div>}
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Social Security Number
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setSsn(e.target.value);
                setSsnError("");
              }}
            />
          </InputGroup>
          {ssnError && <div className="error-message">{ssnError}</div>}
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Email
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
          </InputGroup>
          {emailError && <div className="error-message">{emailError}</div>}
          <br></br>
          <InputGroup>
            <InputGroup.Text>Address</InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              onChange={(e) => {
                setAddress(e.target.value);
                setAddressError("");
              }}
            />
          </InputGroup>
          {addressError && <div className="error-message">{addressError}</div>}
          <br></br>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Citizenship Status
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setCitizenStatus(e.target.value);
                setCitizenshipStatusError("");
              }}
            />
          </InputGroup>
          {citizenshipStatusError && (
            <div className="error-message">{citizenshipStatusError}</div>
          )}
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Country of Residence
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setCountryOfResidence(e.target.value);
                setCountryOfResidenceError("");
              }}
            />
          </InputGroup>
          {countryOfResidenceError && (
            <div className="error-message">{countryOfResidenceError}</div>
          )}
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Employment Status
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setEmploymentStatus(e.target.value);
                setEmploymentStatusError("");
              }}
            />
          </InputGroup>
          {employmentStatusError && (
            <div className="error-message">{employmentStatusError}</div>
          )}
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Annual Income
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setAnnualIncome(e.target.value);
                setAnnualIncomeError("");
              }}
            />
          </InputGroup>
          {annualIncomeError && (
            <div className="error-message">{annualIncomeError}</div>
          )}
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Initial Amount Deposit
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setInitialAmount(e.target.value);
                setInitialAmountError("");
              }}
            />
          </InputGroup>
          {initialAmountError && (
            <div className="error-message">{initialAmountError}</div>
          )}
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Benificiary Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setBenificiaryName(e.target.value);
                setBenificiaryNameError("");
              }}
            />
          </InputGroup>
          {benificiaryNameError && (
            <div className="error-message">{benificiaryNameError}</div>
          )}
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Benificiary SSN
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setBenificiarySSN(e.target.value);
                setBenificiarySSNError("");
              }}
            />
          </InputGroup>
          {benificiarySSNError && (
            <div className="error-message">{benificiarySSNError}</div>
          )}
          <div className="button-container">
            <div className="back-button">
              <Link to="/dashboard">
                <Button variant="success">Back</Button>
              </Link>
            </div>
            <Button
              onClick={handleSubmit}
              className="submit-button"
              variant="success"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenAccount;
