import React from "react";
import "./Mycard.css";
const Mycard = () => {
  return (
    <>
  
      <div className="card" style={{ width: "18rem",backgroundColor:"white" }}>
        
        
        <div className="card-body" >
          <h5 className="card-title" style={{color:"BLACK"}}>EVENT NAME</h5>
          <br></br>
          </div>
          <div >
          <span >
          <img src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" class="card-img-top" alt="..."/>
          
          </span>
          <span style={{width:"50px"}}>
          <span className="card-text" style={{color:"GrayText"}}>
            Name
          </span>
          <b><span style={{backgroundColor:"blue", marginLeft:"1rem",borderRadius:"3px",}}>Creator</span>
          </b>
          </span>
          
          <br></br>
          <h4 style={{color:"black"}}>xyz@gmail.com</h4>
          <br></br>
          <p style={{color:"black",fontFamily:"cursive"}}>Total number of Registration : 50 </p>
          <br></br>
          <a href="#" className="btn btn-primary" style={{color:"ActiveBorder",backgroundColor:"ButtonHighlight"}}>
            View Details
          </a>
        </div>
      </div>
     
      
    </>
  );
};

export default Mycard;
