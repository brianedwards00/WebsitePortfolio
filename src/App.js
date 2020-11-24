import './App.css';
import React from 'react';
import house from './Images/house.jpg'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      first:''
    }
  }


  render() {
    return(
      <body style={{position:"absolute",background:"lightBlue", width:"100%",height:"1500px"}}>
      <div style={{height:"75px",background:"#001a08",position:"sticky",top:"0",width:"100%",zIndex:"100"}}>
        <span style={{fontFamily:"acmeregular",position:"absolute",color:"white",top:"20px",paddingRight:"15px",right:"0",
        fontSize:"25px"}}>Future</span>

        <span style={{fontFamily:"acmeregular",position:"absolute",color:"white",top:"20px",paddingRight:"115px",right:"0",
        fontSize:"25px"}}>Present</span>

        <span style={{fontFamily:"acmeregular",position:"absolute",color:"white",top:"20px",paddingRight:"230px",right:"0",
        fontSize:"25px"}}>Past</span>

        <span style={{fontFamily:"acmeregular",position:"absolute",color:"white",top:"20px",paddingRight:"315px",right:"0",
        fontSize:"25px"}}>About</span>
      </div>

      <div style={{position:"absolute",height:"500px", width:"100%",background:"white",top:"75px"}}>
        <span style={{fontSize:"50px",fontFamily:"melanserif",position:"absolute",outlineStyle:"solid",right:"10%",top:"250px"}}>Brian Edwards</span>
        <img src={house} alt = "house" style={{width:"500px"}}/>
      </div>

      <div style={{position:"absolute",outlineStyle:"solid",height:"500px",width:"85%",background:"green", right:"0",top:"575px"}}>
      <br/>
        <span style={{fontFamily:"acmeregular",color:"white", paddingLeft:"42.5%", fontSize:"50px"}}>About</span>
        <span style={{fontFamily:"acmeregular",color:"white", paddingLeft:"42.5%", fontSize:"50px"}}>Past</span>
        <br/>
        <span style={{fontFamily:"acmeregular",color:"white", paddingLeft:"42.5%", fontSize:"50px"}}>Present</span>
        <br/>
        <span style={{fontFamily:"acmeregular",color:"white", paddingLeft:"42.5%", fontSize:"50px"}}>Future</span>
        <br/>
        <span style={{fontFamily:"acmeregular",color:"white", paddingLeft:"42.5%", fontSize:"50px"}}>Contact Me</span>
        
      </div>
      <div style={{position:"absolute",outlineStyle:"solid",height:"500px",background:"blue",width:"15%",top:"575px"}}></div>
    </body>
    );
  }
  
}

export default App;
