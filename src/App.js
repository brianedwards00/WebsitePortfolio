import './App.css';
import React from 'react';
import title from './Images/title.png'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import anu from './Images/anu.png'
import {Link, animateScroll as scroll} from "react-scroll"
import AOS from "aos";
import 'aos/dist/aos.css'
AOS.init();
class App extends React.Component{
constructor(props) {
super(props)
this.state={
first:''
}

}
render() {
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  });
return(
<body>
<div style={{position:"absolute",background:"black", width:"100%",height:"8400px"}}>
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
    <Link className="header" style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"50px",
          fontSize:"25px", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-200}
     activeClass="active" to="contact" spy={true} smooth={true} duration={1500} >Contact Me
     <header className="headerline"/>
     </Link>
     
    <Link className="header" onMouseOver={this.changeToBackground} onMouseOut = {this.changeFromBackground} style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"220px",
          fontSize:"25px", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-200}
     activeClass="active" to="reviews" spy={true} smooth={true} duration={1500} >Reviews
     <header className="headerline"/></Link>
    <Link className="header" onMouseOver={this.changeToBackground} onMouseOut = {this.changeFromBackground} style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"350px",
          fontSize:"25px", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-200}
     activeClass="active" to="past" spy={true} smooth={true} duration={1500} >Projects
     <header className="headerline"/></Link>
    <Link className="header" onMouseOver={this.changeToBackground} onMouseOut = {this.changeFromBackground} style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"475px",
          fontSize:"25px", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-200}
     activeClass="active" to="about" spy={true} smooth={true} duration={1000} >About
     <header className="headerline"/></Link>
  </div>
  
  <div style={{backgroundImage: `url(${title})`,backgroundPosition:"center", backgroundSize:"cover", position:"absolute",height:"900px", width:"100%"}}>
  </div>
  
  <div style={{position:"absolute",height:"500px",width:"50%",top:"975px",left:"25%"}}>
    <br/>
    

    <div name="about" data-aos="fade-right"  data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
    style={{position:"relative", top:"500px",border:"5px solid #033a61",background:"#00250b",textAlign:"center",height:"60vh",borderRadius:"25px"}}>
      <br/>
      <span style={{fontFamily: "montserrat",color:"rgb(158, 158, 9)", fontSize:"50px"}}>About
      </span>
      <section/>
      <p className="aboutText" style={{overflow:"auto",height:"45vh",fontFamily:"opensans",color:"rgb(158, 158, 9)", fontSize:"20px",marginLeft:"50px",marginRight:"50px"}}>
    
      I am computer programmer currently in my third year of Computer Science at California State
        Univeristy - Fullerton. My background includes working on projects from a diverse set of languages
        as well as developing a web application for an internship project that took place at a National Laboratory
        in the summer of 2020.
        <br/><br/> 
        Fueled by my desire to positively impact society, I consider myself an ambitious, perseverent, and devoted person
        to my cause.
        <br/>
        Displayed from the coding projects I create, I consider myself to be a meticulous, patient, and organized programmer
        during my practices.
        <br/> <br/> 
        Planning for my future, I aim to finish my university with a bachelor's degree in computer science.
        Whether in books, documentaries, or movies, learning about psychology has always been a side hobby of mine.
        Therefore, I intend to pursue a career that implements both of my passions, such as a UX Designer or a Machine Learner Engineer.
        However, I am not limited to just this as I am flexible to many other subfields in computer science.
      </p>
    </div>
    
    <br/>
    <div name = "past" data-aos="fade-left"  data-aos-anchor-placement="top-center"
    data-aos-duration="1000" 
    style={{top:"1500px",border:"5px solid #033a61",background:"#00250b",height:"1450px",position:"relative",borderRadius:"25px"}}>
      <span style={{fontFamily: "montserrat",display:"block",textAlign:"center",color:"rgb(158, 158, 9)", fontSize:"50px"}}>Projects
      </span>
      <section/>
      <div style={{height:"45vh",color:"rgb(158, 158, 9)", fontSize:"40px",left:"0",overflow:"hidden"}}>
        <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto", width:"450px",fontSize:"35px"}} className="link" target="_blank" href="https://github.com/brianedwards00/FlaskAndReact">
          Web Interface for Analyzing Microbiome Datasets <br/> 
        </a>
        <p style={{fontSize:"20px", fontFamily:"opensans",textAlign:"center",marginLeft:"50px",marginRight:"50px"}}>
          Website application created from scratch as a full-stack developer intern at the Pacific Northwest National Laboratory <br/>
          This was my first professional learning experience to web development, as I took part to increase biologists'
          productivity to study microbiome data at the lab <br/><br/>
          <em>React front-end (CSS/HTML/Javascript) with a Flask back-end (Python)</em>
          </p>
      </div>

      <div style={{height:"30vh",color:"rgb(158, 158, 9)", fontSize:"40px",left:"0",overflow:"hidden"}}>
        <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto", width:"240px",fontSize:"35px"}} className="link" target="_blank" href="https://github.com/brianedwards00/WebsitePortfolio">
          Website Portfolio
        </a>
        <p style={{fontSize:"20px",fontFamily:"opensans",textAlign:"center",marginLeft:"50px",marginRight:"50px"}}>
          Website application that highlights my professional progress <br/><br/>
          <em>Front-end (CSS/HTML/Javascript) app created from React</em>
          </p>
      </div>
      
      <div style={{height:"35vh",color:"rgb(158, 158, 9)", fontSize:"40px",left:"0",overflow:"hidden"}}>
        <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto", width:"280px",fontSize:"35px"}} className="link" target="_blank" href="https://github.com/brianedwards00/University-Database">
          University Database <br/>
        </a>
        <p style={{fontSize:"20px",fontFamily:"opensans",textAlign:"center",marginLeft:"50px",marginRight:"50px"}}>
        Website application that connects to a mock university database to retrieve values for the user <br/><br/>
        <em>Front-end (HTML) and back-end (PHP/SQL) app that connects to a database from MariaDB</em>
          </p>
      </div>
      
      <div style={{height:"45vh",color:"rgb(158, 158, 9)", fontSize:"40px",left:"0",overflow:"hidden"}}>
        <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto", width:"340px",fontSize:"35px"}} className="link" target="_blank" href="https://github.com/brianedwards00/Text-Filer-9000">
          Project Text Filer 9000 <br/> 
        </a>
        <p style={{fontSize:"20px",fontFamily:"opensans",textAlign:"center",marginLeft:"50px",marginRight:"50px"}}>
          Project that revolves around textfiles <br/>
          Some features include creating, saving, loading, and displaying info about different text files <br/> <br/>
          <em>C++ command line application</em>
          </p>
      </div>

    </div>
    <br/>
    <div name="reviews" data-aos="fade-right"  data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
    style={{position:"relative",top:"2700px",border:"5px solid #033a61",background:"#00250b",textAlign:"center",height:"60vh",borderRadius:"25px"}}>
      <br/>
      <span style={{fontFamily: "montserrat",color:"rgb(158, 158, 9)", fontSize:"50px"}}>Reviews
      </span>
      <section/>
      <p className="reviewsText" style={{overflow:"auto",height:"45vh",fontFamily:"opensans",color:"rgb(158, 158, 9)", fontSize:"20px"}}>
      <img style= {{marginLeft:"auto",marginRight:"auto", display:"block"}} src= {anu}/>
      <a style={{textAlign:"center", display:"block", margin:"0 auto", width:"130px",fontSize:"35px"}} className="link" target="_blank" href="https://www.linkedin.com/in/anubh/">
          Anubhav 
        </a>
        <span style={{fontSize:"15px", fontFamily:"opensans",color:"rgb(158, 158, 9)",textAlign:"center",display:"block"}}>Software Engineer at Pacific Northwest National Laboratory</span>
        <br/>
        <p style={{textAlign:"center",margin:"0px 50px"}}>
        "Brian did a great job of grasping different 
      software tools, programming languages in a short amount of time and successfully 
      built a Web Interface for Analyzing Microbiome Datasets. I'm impressed with his efforts.
      <br/><br/>Overall, He takes ownership of his work at hand and delivers on time.
       He is very driven to learn new technologies no matter how steep the 
       learning curve could be. His persistence towards solving coding problems/software
        bugs or rolling out new features is appreciated and this makes him a dependable
         programmer(teammate)."
         </p>
      </p>
    </div>

    <br/>
    <div name="contact" data-aos="fade-left"  data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
    style={{border:"5px solid #033a61",background:"#00250b",height:"180px",borderRadius:"25px",position:"relative",top:"4000px"}}>
      <span style={{textAlign:"center",display:"block",fontFamily: "montserrat", fontSize:"50px",color:"rgb(158, 158, 9)"}}>Contact Me
      </span>
      <section/>
      <div style={{textAlign:"center"}}>
      <a style = {{paddingRight:"50px", textDecoration:"none",border:"none",color:"inherit"}} href="https://mail.google.com/mail/?view=cm&fs=1&to=brian.adrian.edwards@gmail.com" target="_blank">
        <span><SiGmail size={50} style={{display:"inline-block"}}/>
        </span>
        </a>

        <a style = {{paddingRight:"50px",textDecoration:"none",border:"none",color:"inherit"}} href="https://github.com/brianedwards00" target="_blank">
        <span><AiFillLinkedin size={50} style={{display:"inline-block"}}/>
        </span>
        </a>

        <a style = {{textDecoration:"none",border:"none",color:"inherit"}} href="https://github.com/brianedwards00" target="_blank">
        <span><AiFillGithub size={50} style={{display:"inline-block"}}/>
        </span>
        </a>

        <span style={{display:"block",fontFamily:"opensans", fontSize:"15px",color:"rgb(158, 158, 9)"}}>brian.adrian.edwards@gmail.com</span>
        
        </div>
      
    </div>
  </div>
</div>
</body>
);
}
}
export default App;
