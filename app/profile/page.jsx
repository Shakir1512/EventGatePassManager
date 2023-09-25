"use client";
import React, { useState } from "react";
import "../profile/profile.css";
import Mycard from "./Mycard";
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
              alt=""
            />
          </div>
          <div className="profile-user-settings">
            <h1 className="profile-user-name">Username</h1>
            
          </div>
          <div className="profile-stats">
            <p className="email">xyz@gmail.com</p>
          </div>
          <div className="profile-bio">
           <a href="">
           <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ADD EVENT</button>
           </a>
          </div>
        </div>
        {/* End of profile section */}
      </div>
      {/* End of container */}
    </header>
    <main>
    
      <div className="container">
      
        <div className="gallery">
          <div className="gallery-item" tabIndex={0}>
            <Mycard/>
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
            
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
            
            
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
          
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
           
            
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
           
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
           
           
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
           
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
            
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
            
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
           
          </div>
          <div className="gallery-item" tabIndex={0}>
          <Mycard/>
           
            
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
