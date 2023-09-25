"use client";
import React, { useState } from "react";
import "../profile/profile.css";
import Mycard from "./Mycard";
import "./button.scss";
// import Navbar from "@/Components/Navbar"

const ProfilePage = () => {
  // const [isActive, setIsActive] = useState(false);

  // function handleClick() {
  //   setIsActive(!isActive);
  // }
  return (
    <>
      {/* <Navbar/> */}
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                alt="" width={"50%"}
              />
            </div>
            <div className="profile-user-settings" style={{ align: "center" }}>
              <h1 className="profile-user-name">Username</h1>
              <br/>
              <p className="email">xyz@gmail.com</p>
            </div>
            <div className="profile-stats">
              
            </div>
            <div className="profile-bio">
             
            <div className="AddEvent" style={{marginTop:"4rem"}}>
            <a href="" className="button" >
              
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="60"  fill="currentColor" class="bi bi-plus" viewBox="0 0 32 16">
  <path d="M9 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
                ADD EVENT
              </a>
            </div>
              
            </div>
          </div>
          <p
            className="divide"
            style={{
              borderStyle: "revert-layer",
              borderWidth: 2,
              borderRadius: 1,
              marginBottom: "3rem",
            }}
          >
            {" "}
          </p>
          {/* End of profile section */}
        </div>
        {/* End of container */}
      </header>
      <main>
        <div className="container">
          <div className="gallery">
            <div className="gallery-item" style={{ backgroundColor: "black" }}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
            <div className="gallery-item" tabIndex={0}>
              <Mycard />
            </div>
          </div>
          {/* End of gallery */}
          <div className="loader" />
        </div>
        {/* End of container */}
      </main>
    </>
  );
};

export default ProfilePage;
