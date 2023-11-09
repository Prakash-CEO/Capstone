import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assests/commercebank.png";

function NavigationPay() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              alt="Your Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/upi">UpIPay</Nav.Link>
            <Nav.Link href="/openaccount">NewAccount</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            <Nav.Link href="/commercesplit">SplitPay</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavigationPay;
