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
          
          
          

   <div className="propic">
   <img src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" class="card-img-top" alt="..."/>
   <h1 style={{position:"relative",top:"10px",color:"black",marginTop:"-4rem"}}>
   <span style={{width:"50px",position:"absolute",marginLeft:"-3rem"}}>
          <span className="card-text" style={{color:"GrayText"}}>
            Name
          </span>
          <b><span style={{backgroundColor:"blue", marginLeft:"1rem",borderRadius:"3px",color:"whitesmoke"}}>Creator</span>
          </b>
          </span>
          <br/>
          <h4 style={{color:"black",paddingTop:"0.1rem",marginLeft:"1.5rem",paddingBottom:"1rem"}}>xyz@gmail.com</h4>
          </h1>
   </div>
          
          {/* <span style={{width:"50px",position:"absolute"}}>
          <span className="card-text" style={{color:"GrayText"}}>
            Name
          </span>
          <b><span style={{backgroundColor:"blue", marginLeft:"1rem",borderRadius:"3px",}}>Creator</span>
          </b>
          </span> */}
          
          
          
         
          <p style={{color:"black",fontFamily:"cursive",paddingTop:"1rem"}}>Total number of Registration : 50 </p>
          
          <a href="#" className="btn btn-primary" style={{color:"ActiveBorder",backgroundColor:"ButtonHighlight",marginLeft:"-8rem"}}>
            View Details
          </a>
        </div>
      </div>
     
      
    </>
  );
};

export default Mycard;
