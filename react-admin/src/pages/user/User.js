import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTittleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <Avatar
              className="userShowAvatar"
              src="https://th.bing.com/th/id/R.cae019d2e6169b56e6690a1c99e74f67?rik=Yvi4nyebeqOPSw&pid=ImgRaw&r=0"
            />

            <div className="userShowTopTittle">
              <span className="userShowUsername">Brian Becker</span>
              <span className="userShowUserTittle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTittle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annack99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTittle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+254706134387</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">bm.mutwiri@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">469 Chogoria</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="anaback99"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="Brian Becker"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="bm.mutwiri@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone Number</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="+254706134387"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="469 Chogoria"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://th.bing.com/th/id/R.cae019d2e6169b56e6690a1c99e74f67?rik=Yvi4nyebeqOPSw&pid=ImgRaw&r=0"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input style={{ display: "none" }} type="file" id="file" />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
