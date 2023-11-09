import React from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationPay from "./NavigationPay";

const Confirmation = () => {
  const location = useLocation();
  const {
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
  } = location.state;

  const handleSubmit = () => {
    Axios.post("http://localhost:3001/openaccount", {
      legalName: legalName,
      dob: dob,
      email: email,
      ssn: ssn,
      address: address,
      citizenshipStatus: citizenshipStatus,
      countryOfResidence: countryOfResidence,
      employmentStatus: employmentStatus,
      annualIncome: annualIncome,
      initialAmount: initialAmount,
      benificiaryName: benificiaryName,
      benificiaeySSN: benificiaeySSN,
    })
      .then((response) => {
        console.log("Success!");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <>
      <NavigationPay />
      <div className="main">
        <br></br>
        <h2>
          Are the below Details correct? If yes please click on submit if not go
          back and edit your application.
        </h2>
        <br></br>
        <Table striped bordered hover responsive>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{legalName}</td>
            </tr>
            <tr>
              <td>DOB</td>
              <td>{dob}</td>
            </tr>
            <tr>
              <td>SSN</td>
              <td>{ssn}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>Citizenship Status</td>
              <td>{citizenshipStatus}</td>
            </tr>
            <tr>
              <td>Country of Residence</td>
              <td>{countryOfResidence}</td>
            </tr>
            <tr>
              <td>Employment Status</td>
              <td>{employmentStatus}</td>
            </tr>
            <tr>
              <td>Annual Income</td>
              <td>{annualIncome}</td>
            </tr>
            <tr>
              <td>Initial Amount Deposit</td>
              <td>{initialAmount}</td>
            </tr>
            <tr>
              <td>Benificiary Name</td>
              <td>{benificiaryName}</td>
            </tr>
            <tr>
              <td>Benificiary SSN</td>
              <td>{benificiaeySSN}</td>
            </tr>
          </tbody>
        </Table>
        <div className="button-container">
          <div className="back-button">
            <Link to="/openaccount">
              <Button variant="success">Back</Button>
            </Link>
          </div>
          <div className="back-button">
            <Link to="/dashboard">
              <Button variant="success">Submit</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
