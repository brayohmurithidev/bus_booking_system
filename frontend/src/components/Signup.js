import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Signup = ({ handleClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [idNo, setIdNo] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fullName !== "" ||
      email !== "" ||
      phone !== "" ||
      username !== "" ||
      password !== "" ||
      idNo !== ""
    ) {
      console.log(fullName, email, idNo, phone, username, password);
    }
  };
  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <Typography variant="h6" color="textSecondary">
          SIGNUP FORM
        </Typography>
        <TextField
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          sx={{ margin: "8px", width: "400px" }}
          label="Full name"
          variant="filled"
          required
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          sx={{ margin: "8px", width: "400px" }}
          label="Email"
          variant="filled"
          type="email"
          required
        />
        <TextField
          onChange={(e) => setIdNo(e.target.value)}
          value={idNo}
          sx={{ margin: "8px", width: "400px" }}
          label="Id No/ Passport"
          variant="filled"
          required
        />
        <TextField
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          sx={{ margin: "8px", width: "400px" }}
          label="Phone Number"
          variant="filled"
          required
        />
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          sx={{ margin: "8px", width: "400px" }}
          label="Username"
          variant="filled"
          required
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          sx={{ margin: "8px", width: "400px" }}
          label="Password"
          variant="filled"
          type="password"
          required
        />
        <div>
          <Button
            sx={{ margin: "16px" }}
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{ margin: "16px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            SignUp
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
