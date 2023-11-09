import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./HeroImg.css";
import flyer from "./../assests/flyer.jpeg";
import logo from "./../assests/commercebank.png";

const HeroImg = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="hero-container">
            <div className="flyer">
              {" "}
              <img src={flyer}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <div className="banking-container">
            <h2>Banking Services</h2>
            <p>
              Sed quis justo in libero congue cursus. Vivamus at pulvinar justo.
              Nulla eu aliquam mi. Aenean tincidunt, purus eget vulputate
              aliquet, metus elit viverra ex, ut auctor nisl libero non odio.
              Nam quis condimentum ante. Fusce efficitur orci eu metus
              scelerisque, at tempus odio ultrices. Proin consectetur, purus ac
              bibendum hendrerit, quam sapien scelerisque justo, at lacinia eros
              purus eget arcu. Integer accumsan justo ac facilisis facilisis. In
              hendrerit, dolor eget fringilla scelerisque, augue lectus
              tincidunt libero, id lacinia arcu justo vel sapien. Nunc in justo
              id libero pharetra eleifend. Nulla ullamcorper eget felis ut
              consequat. Aenean euismod massa non elit viverra, eget ultrices
              metus dictum.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="savings-container">
            <h2>Savings Accounts</h2>
            <p>
              Sed quis justo in libero congue cursus. Vivamus at pulvinar justo.
              Nulla eu aliquam mi. Aenean tincidunt, purus eget vulputate
              aliquet, metus elit viverra ex, ut auctor nisl libero non odio.
              Nam quis condimentum ante. Fusce efficitur orci eu metus
              scelerisque, at tempus odio ultrices. Proin consectetur, purus ac
              bibendum hendrerit, quam sapien scelerisque justo, at lacinia eros
              purus eget arcu. Integer accumsan justo ac facilisis facilisis. In
              hendrerit, dolor eget fringilla scelerisque, augue lectus
              tincidunt libero, id lacinia arcu justo vel sapien. Nunc in justo
              id libero pharetra eleifend. Nulla ullamcorper eget felis ut
              consequat. Aenean euismod massa non elit viverra, eget ultrices
              metus dictum.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="loans-container">
            <h2>Loans & Mortgages</h2>
            <p>
              Sed quis justo in libero congue cursus. Vivamus at pulvinar justo.
              Nulla eu aliquam mi. Aenean tincidunt, purus eget vulputate
              aliquet, metus elit viverra ex, ut auctor nisl libero non odio.
              Nam quis condimentum ante. Fusce efficitur orci eu metus
              scelerisque, at tempus odio ultrices. Proin consectetur, purus ac
              bibendum hendrerit, quam sapien scelerisque justo, at lacinia eros
              purus eget arcu. Integer accumsan justo ac facilisis facilisis. In
              hendrerit, dolor eget fringilla scelerisque, augue lectus
              tincidunt libero, id lacinia arcu justo vel sapien. Nunc in justo
              id libero pharetra eleifend. Nulla ullamcorper eget felis ut
              consequat. Aenean euismod massa non elit viverra, eget ultrices
              metus dictum.
            </p>
          </div>
        </div>
      </div>
      <div> </div>
    </div>
  );
};

export default HeroImg;
