import './App.css';
import React from 'react';
import title from './Images/title.png'
import pnnl from './Images/pnnl.jpg'
import textfiler from './Images/textfiler.jpg'
import portfolio from './Images/portfolio.png'
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
  </div>
  <div style={{position:"absolute",height:"500px",width:"50%",top:"975px",left:"25%"}}>
    <div style={{background:"white",textAlign:"center",height:"60vh"}}>
      <br/>
      <span style={{fontFamily:"acmeregular",color:"#033a61", fontSize:"50px"}}>About
      </span>
      <section></section>
      <p style={{height:"45vh",fontFamily:"acmeregular",color:"#033a61", fontSize:"25px",overflow:"auto"}}>
        Perseverant third year Computer Science university student with an exemplary academic performance at 
        California State University of Fullerton. Seeking to increase my expertise level in Python, JavaScript, 
        and/or C++ that will allow me to pursue a career currently in artificial intelligence that will positively 
        affect society. Highly trainable, willing to learn, and having a profound work ethic either working alone 
        or in a team.
      </p>
    </div>

    <div style={{background:"gray",height:"2000px",position:"relative"}}>
      <span style={{display:"block",fontFamily:"acmeregular",textAlign:"center",color:"white", fontSize:"50px"}}>Past
      </span>
      <section></section>
      <div style={{height:"45vh",fontFamily:"acmeregular",color:"#033a61", fontSize:"25px",left:"0",overflow:"hidden"}}>
        <div style={{width:"520px",height:"370px",float:"left"}}>
          <img style={{width:"510px",height:"370px", float:"left"}} src={portfolio} alt="PNNL"/>
        </div>
        <a className="link" target="_blank" href="https://github.com/brianedwards00/WebsitePortfolio">
          Website Portfolio <br/> <br/>
        </a>
        <span>
          Website Portfolio that highlights my achievments. <br/>
          React front-end(JavaScript)
          </span>
      </div>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <div style={{height:"45vh",fontFamily:"acmeregular",color:"#033a61", fontSize:"25px",left:"0",overflow:"hidden"}}>
        <div style={{width:"460px",height:"370px",float:"left"}}>
          <img style={{width:"450px",height:"370px", float:"left"}} src={pnnl} alt="PNNL"/>
        </div>
        <a className="link" target="_blank" href="https://github.com/brianedwards00/FlaskAndReact">
          Web Interface for Analyzing Microbiome Datasets <br/> <br/>
        </a>
        <span>
          Web Interface project done from scratch as an full-stack developer intern at the Pacific Northwest National Laboratory. <br/>
          This was my first professional learning experience to web development, which I enjoyed greatly.
          Flask back-end (Python) running a React front-end (Javascript)
          </span>
      </div>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <div style={{height:"45vh",fontFamily:"acmeregular",color:"#033a61", fontSize:"25px",left:"0",overflow:"hidden"}}>
        <div style={{width:"460px",height:"370px",float:"left"}}>
          <img style={{width:"450px",height:"370px", float:"left"}} src={textfiler} alt="PNNL"/>
        </div>
        <a className="link" target="_blank" href="https://github.com/brianedwards00/Text-Filer-9000">
          Project Text Filer 9000 <br/> <br/>
        </a>
        <span>
          C++ project that revolves around textfiles. <br/>
          Some features include creating, saving, loading, and displaying info about different text files.
          </span>
      </div>

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
