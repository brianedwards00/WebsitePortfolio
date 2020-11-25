import './App.css';
import React from 'react';
import title from './Images/title.jpeg'
class App extends React.Component{
constructor(props) {
super(props)
this.state={
first:''
}
}
render() {
return(
<div style={{position:"absolute",background:"lightBlue", width:"100%",height:"3000px"}}>
  <div style={{height:"75px",background:"white",position:"sticky",top:"0",width:"100%",zIndex:"100"}}>
    
    
    <div className="circle">
      <ul className="inner">
        <li>
            <div className="color">
            </div>
        </li>
        <li>
            <div className="color">
            </div>
        </li>
        <li>
            <div className="color">
            </div>
        </li>
      </ul>
    </div>


    <a style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"15px",
          fontSize:"25px"}}>Future
    </a>
    <a style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"115px",
          fontSize:"25px"}}>Present
    </a>
    <a style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"230px",
          fontSize:"25px"}}>Past
    </a>
    <a style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"315px",
          fontSize:"25px"}}>About
    </a>
  </div>
  <div style={{backgroundImage: `url(${title})`,backgroundPosition:"center", backgroundSize:"cover", position:"absolute",height:"900px", width:"100%"}}>
    <span style={{fontSize:"50px",fontFamily:"melanserif",position:"absolute",outlineStyle:"solid",right:"10%",top:"250px"}}>
      Brian Edwards
    </span>
  </div>
  <div style={{position:"absolute",height:"500px",textAlign:"center",width:"50%",top:"975px",left:"25%"}}>
    <div style={{background:"white",height:"500px"}}>
      <br/>
      <span style={{fontFamily:"acmeregular",color:"#033a61", fontSize:"50px"}}>About
      </span>
      <section></section>
      <p style={{fontFamily:"acmeregular",color:"#033a61", fontSize:"1.5vw",verticalAlign:"middle"}}>
        Perseverant third year Computer Science university student with an exemplary academic performance at 
        California State University of Fullerton. Seeking to increase my expertise level in Python, JavaScript, 
        and/or C++ that will allow me to pursue a career currently in artificial intelligence that will positively 
        affect society. Highly trainable, willing to learn, and having a profound work ethic either working alone 
        or in a team.
      </p>
    </div>
    <div style={{background:"gray",height:"300px"}}>
      <span style={{fontFamily:"acmeregular",color:"white", fontSize:"50px"}}>Past
      </span>
    </div>
    <div style={{background:"black",height:"300px"}}>
      <span style={{fontFamily:"acmeregular",color:"white", fontSize:"50px"}}>Present
      </span>
    </div>
    <div style={{background:"blue",height:"300px"}}>
      <span style={{fontFamily:"acmeregular",color:"white", fontSize:"50px"}}>Future
      </span>
    </div>
    <div style={{background:"red",height:"300px"}}>
      <span style={{fontFamily:"acmeregular",color:"white", fontSize:"50px"}}>Contact Me
      </span>
    </div>
  </div>
</div>
);
}
}
export default App;
