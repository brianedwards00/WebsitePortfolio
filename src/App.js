import './App.css';
import React from 'react';
import title from './Images/title.png'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import anu from './Images/anu.png'
import {Link, animateScroll as scroll} from "react-scroll"
class App extends React.Component{
constructor(props) {
super(props)
this.state={
first:''
}
}
render() {
return(
<div style={{position:"absolute",background:"black", width:"100%",height:"4100px"}}>
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


    <a style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"25px",
          fontSize:"25px"}}>Contact Me
    </a>
    <a style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"175px",
          fontSize:"25px"}}>Reviews
    </a>
    <a style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"300px",
          fontSize:"25px"}}>Past
    </a>
    <a style={{fontFamily:"acmeregular",position:"absolute",color:"black",top:"20px",right:"375px",
          fontSize:"25px"}}>About
    </a>
  </div>
  
  <div style={{backgroundImage: `url(${title})`,backgroundPosition:"center", backgroundSize:"cover", position:"absolute",height:"900px", width:"100%"}}>
  </div>
  
  <div style={{position:"absolute",height:"500px",width:"50%",top:"975px",left:"25%"}}>
    <br/>
    <div style={{border:"5px solid #033a61",background:"#00250b",textAlign:"center",height:"60vh",borderRadius:"25px"}}>
      <br/>
      <span style={{color:"rgb(158, 158, 9)", fontSize:"50px"}}>About
      </span>
      <section></section>
      <p style={{height:"45vh",fontFamily:"opensans",color:"rgb(158, 158, 9)", fontSize:"20px",overflow:"auto"}}>
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
    <div style={{border:"5px solid #033a61",background:"#00250b",height:"1600px",position:"relative",borderRadius:"25px"}}>
      <span style={{display:"block",fontFamily:"opensans",textAlign:"center",color:"rgb(158, 158, 9)", fontSize:"50px"}}>Past
      </span>
      <section></section>
      <div style={{height:"30vh",fontFamily:"opensans",color:"rgb(158, 158, 9)", fontSize:"40px",left:"0",overflow:"hidden"}}>
        <a style={{textAlign:"center", display:"block", margin:"0 auto", width:"300px",fontSize:"35px"}} className="link" target="_blank" href="https://github.com/brianedwards00/WebsitePortfolio">
          Website Portfolio
        </a>
        <p style={{fontSize:"20px",textAlign:"center",}}>
          Website application that highlights my professional progress <br/><br/>
          <em>Front-end (CSS/HTML/Javascript) app created from React</em>
          </p>
      </div>
      
      <div style={{height:"35vh",fontFamily:"opensans",color:"rgb(158, 158, 9)", fontSize:"40px",left:"0",overflow:"hidden"}}>
        <a style={{textAlign:"center", display:"block", margin:"0 auto", width:"345px",fontSize:"35px"}} className="link" target="_blank" href="https://github.com/brianedwards00/University-Database">
          University Database <br/>
        </a>
        <p style={{fontSize:"20px",textAlign:"center"}}>
        Website application that connects to a mock university database to retrieve values for the user <br/><br/>
        <em>Front-end (HTML) and back-end (PHP/SQL) app that connects to a database from MariaDB</em>
          </p>
      </div>
     
      <div style={{height:"50vh",fontFamily:"opensans",color:"rgb(158, 158, 9)", fontSize:"40px",left:"0",overflow:"hidden"}}>
        <a style={{textAlign:"center", display:"block", margin:"0 auto", width:"450px",fontSize:"35px"}} className="link" target="_blank" href="https://github.com/brianedwards00/FlaskAndReact">
          Web Interface for Analyzing Microbiome Datasets <br/> 
        </a>
        <p style={{fontSize:"20px", textAlign:"center"}}>
          Website application created from scratch as a full-stack developer intern at the Pacific Northwest National Laboratory <br/>
          This was my first professional learning experience to web development, as I took part to increase biologists'
          productivity to study microbiome data at the lab <br/><br/>
          <em>React front-end (CSS/HTML/Javascript) with a Flask back-end (Python)</em>
          </p>
      </div>
      
      <div style={{height:"45vh",fontFamily:"opensans",color:"rgb(158, 158, 9)", fontSize:"40px",left:"0",overflow:"hidden"}}>
        <a style={{textAlign:"center", display:"block", margin:"0 auto", width:"375px",fontSize:"35px"}} className="link" target="_blank" href="https://github.com/brianedwards00/Text-Filer-9000">
          Project Text Filer 9000 <br/> 
        </a>
        <p style={{fontSize:"20px",textAlign:"center"}}>
          Project that revolves around textfiles <br/>
          Some features include creating, saving, loading, and displaying info about different text files <br/> <br/>
          <em>C++ command line application</em>
          </p>
      </div>

    </div>
    <br/>
    <div style={{border:"5px solid #033a61",overflow:"auto",background:"#00250b",height:"550px",borderRadius:"25px"}}>
      <span style={{fontFamily:"opensans", fontSize:"50px",textAlign:"center",display:"block",color:"rgb(158, 158, 9)"}}>Reviews
      <section></section>
      </span>
      <img style= {{marginLeft:"auto",marginRight:"auto", display:"block"}} src= {anu}/>
      <a style={{textAlign:"center", display:"block", margin:"0 auto", width:"130px",fontSize:"35px"}} className="link" target="_blank" href="https://www.linkedin.com/in/anubh/">
          Anubhav 
        </a>
        <span style={{fontSize:"15px", fontFamily:"opensans",color:"rgb(158, 158, 9)",textAlign:"center",display:"block"}}>Software Engineer at Pacific Northwest National Laboratory</span>
        <br/>
      <p style={{fontSize:"20px", fontFamily:"opensans",color:"rgb(158, 158, 9)",width:"90%",margin:"auto"}}>
        "Brian did a great job of grasping different 
      software tools, programming languages in a short amount of time and successfully 
      built a Web Interface for Analyzing Microbiome Datasets. I'm impressed with his efforts.
      <br/><br/>Overall, He takes ownership of his work at hand and delivers on time.
       He is very driven to learn new technologies no matter how steep the 
       learning curve could be. His persistence towards solving coding problems/software
        bugs or rolling out new features is appreciated and this makes him a dependable
         programmer(teammate)."</p>
    </div>

    <br/>
    <div style={{border:"5px solid #033a61",background:"#00250b",height:"150px",borderRadius:"25px",position:"relative"}}>
      <span style={{textAlign:"center",display:"block",fontFamily:"opensans", fontSize:"50px",color:"rgb(158, 158, 9)"}}>Contact Me
      </span>
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
);
}
}
export default App;
