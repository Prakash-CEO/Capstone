const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Datta@1503",
  database: "employeeSystem",
});

app.post("/create", (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const phoneNo = req.body.phoneNo;
  const password = req.body.password;
  const amount = req.body.amount;

  db.query(
    "INSERT INTO register (fullname,email,phone,password,amount) VALUES (?, ?, ?, ?, ?)",
    [fullName, email, phoneNo, password, amount],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * from register WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    }
  );
});
app.post("/openaccount", (req, res) => {
  const legalName = req.body.legalName;
  const dob = req.body.dob;
  const email = req.body.email;
  const ssn = req.body.ssn;
  const address = req.body.address;
  const citizenshipStatus = req.body.citizenshipStatus;
  const countryOfResidence = req.body.countryOfResidence;
  const employmentStatus = req.body.employmentStatus;
  const annualIncome = req.body.annualIncome;
  const initialAmount = req.body.initialAmount;
  const benificiaryName = req.body.benificiaryName;
  const benificiaeySSN = req.body.benificiaeySSN;

  db.query(
    "INSERT INTO accounts_table (legalName,dob,email,ssn,address,citizenshipStatus,countryOfResidence,employmentStatus,annualIncome,intialAmount,beneficiaryName,benificiaeySSN) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
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
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.post("/upi", (req, res) => {
  const nickname = req.body.nickname;
  const payeename = req.body.payeename;
  const upiid = req.body.upiid;
  const cupiid = req.body.cupiid;
  const mobilenumber = req.body.mobilenumber;
  const samount = req.body.samount;
  const address = req.body.address;
  const comments = req.body.comments;

  db.query(
    "INSERT INTO upi (nickname,payeename,upiid,cupiid,amount,mobilenumber,address,comments) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nickname,
      payeename,
      upiid,
      cupiid,
      samount,
      mobilenumber,
      address,
      comments,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/upi", (req, res) => {
  const nickname = req.body.nickname;
  const payeename = req.body.payeename;
  const upiid = req.body.upiid;
  const mobilenumber = req.body.mobilenumber;
  const samount = req.body.samount;
  const address = req.body.address;
  const comments = req.body.comments;

  db.query(
    "INSERT INTO payment (nickname,payeename,upiid,amount,mobilenumber,address,comments) VALUES(?, ?, ?, ?, ?, ?, ?)",
    [nickname, payeename, upiid, samount, mobilenumber, address, comments],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Yay, your server is running on port 3001");
});
