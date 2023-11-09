import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import UpiConfirm from "./Upiconfirm";
import NavigationBar from "./NavigationBar";
import upilogo from "./../assests/payment0125.png";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import Upiconfirm from "./Upiconfirm";
import NavigationPay from "./NavigationPay";

const Upi = () => {
  const navigate = useNavigate();
  const [payeename, setPayeeName] = useState("");
  const [upiid, setUpiId] = useState("");
  const [nickname, setNickname] = useState("");
  const [samount, setAmount] = useState(0);
  const [cupiid, setCUpiId] = useState("");
  const [mobilenumber, setMobileNumber] = useState(0);
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState(null);
  const textLength = comments.length;

  const App = () => {
    Axios.post("http://localhost:3001/upi", {
      nickname: nickname,
      payeename: payeename,
      upiid: upiid,
      cupiid: cupiid,
      samount: samount,
      mobilenumber: mobilenumber,
      address: address,
      comments: comments,
    }).then((response) => {
      console.log(response);
      if (cupiid === upiid) {
        // Perform your action here if upiid and cupiid are the same
        console.log("UPI IDs are the same!");
        Axios.post("http://localhost:3001/storeData", {
          nickname: nickname,
          payeename: payeename,
          upiid: upiid,
          samount: samount,
          mobilenumber: mobilenumber,
          address: address,
          comments: comments,
        })
          .then((serverResponse) => {
            console.log("Data stored on the server:", serverResponse);
            // Add additional logic here if needed
          })
          .catch((error) => {
            console.error("Error storing data on the server:", error);
            // Handle the error appropriately
          });
      } else {
        setError("UPI IDs are different.Please check your upiid again");
      }
    });
  };

  const handleUpi = () => {
    <Upiconfirm payeename={payeename} />;
    navigate("/upiconfirm", {
      state: {
        payeename,
        nickname,
        upiid,
        mobilenumber,
        samount,
        address,
        comments,
      },
    });
  };

  return (
    <>
      <NavigationPay />
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
                  <h4 className="mt-1 mb-5 pb-1">UPI PAYMENT</h4>
                </div>
                <MDBInput
                  wrapperClass="mb-6"
                  label="Nick Name"
                  id="form1"
                  type="text"
                  onChange={(e) => {
                    setNickname(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-6"
                  label="Payee Name"
                  id="form2"
                  type="text"
                  onChange={(e) => {
                    setPayeeName(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-6"
                  label="UpI ID"
                  id="form3"
                  type="text"
                  onChange={(e) => {
                    setUpiId(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-6"
                  label="CUpI ID"
                  id="form4"
                  type="text"
                  onChange={(e) => {
                    setCUpiId(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-6"
                  label="Amount"
                  id="form5"
                  type="text"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-6"
                  label="Mobile Number"
                  id="form6"
                  type="Text"
                  onChange={(e) => {
                    setMobileNumber(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-6"
                  label="Address"
                  id="form7"
                  type="text"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-6"
                  label="Comments"
                  id="form8"
                  type="text"
                  onChange={(e) => {
                    setComments(e.target.value);
                  }}
                />

                <span>{200 - textLength}/200</span>
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <MDBBtn outline className="mx-2" color="danger" onClick={App}>
                    Add
                  </MDBBtn>
                  <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                    <MDBBtn
                      outline
                      className="mx-2"
                      color="primary"
                      onClick={handleUpi}
                    >
                      Confirm Payment
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </MDBCol>
            {error && <div className="error-message">{error}</div>}
            <MDBCol col="6" className="mb-5">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img
                  src={upilogo}
                  style={{ height: "385px", width: "485px" }}
                  alt="logo"
                />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Upi;
