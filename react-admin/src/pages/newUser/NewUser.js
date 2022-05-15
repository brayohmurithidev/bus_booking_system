import { Man } from "@mui/icons-material";
import React from "react";
import "./newuser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="brayohdephaz" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Brian Murithi" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="brayohdephaz@mail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="newUserItem">
          <label>Phone Number</label>
          <input type="text" placeholder="+1 26382 829" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="469 Chogoria" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" id="male" value="male" name="gender" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" value="female" name="gender" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" value="other" name="gender" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>

          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
