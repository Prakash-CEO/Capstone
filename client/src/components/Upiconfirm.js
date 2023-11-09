import React from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import "./Upiconfirm.css";
import NavigationPay from "./NavigationPay";

import { Button, Table } from "react-bootstrap";

const Upiconfirm = () => {
  const location = useLocation();
  const {
    payeename,
    nickname,
    upiid,
    mobilenumber,
    samount,
    address,
    comments,
  } = location.state;

  const handleUpi = () => {
    Axios.post("http://localhost:3001/payment", {
      payeename: payeename,
      nickname: nickname,
      upiid: upiid,
      mobilenumber: mobilenumber,
      samount: samount,
      address: address,
      comments: comments,
    })
      .then((response) => {
        console.log("Payment Successful!");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <>
      <NavigationPay />
      <br></br>
      <br></br>
      <div className="main text-center">
        <h2>Confirm Payment Details</h2>
        <div className="table-container">
          <Table striped bordered hover responsive>
            <tbody>
              <tr>
                <td>Payee Name</td>
                <td>{payeename}</td>
              </tr>
              <tr>
                <td>Nick Name</td>
                <td>{nickname}</td>
              </tr>
              <tr>
                <td>UPI ID</td>
                <td>{upiid}</td>
              </tr>
              <tr>
                <td>Amount</td>
                <td>{samount}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{mobilenumber}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{address}</td>
              </tr>
              <tr>
                <td>Comments</td>
                <td>{comments}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Button variant="success" onClick={handleUpi}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Upiconfirm;
