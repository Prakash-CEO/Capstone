import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <div className="dashboard-container">
              <h3>Send Money</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <Link to="/transactions">
                <Button variant="success">Make a Payment</Button>
                {""}
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-container">
              <h3>Open a Savings Account</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/openaccount">
                <Button variant="success">Open Account</Button>
                {""}
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-container">
              <h3>Use UPI for payments</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/upi">
                <Button variant="success">UPI Payment</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Col md={8}>
            <div className="dashboard-container">
              <h3>Payment History</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <Link to="/transactions">
                <Button variant="success">View Transactions</Button>
                {""}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
