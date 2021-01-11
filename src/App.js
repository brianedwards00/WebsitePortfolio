import './App.css';
import React from 'react';
import title from './Images/title.png'
import {AiFillLinkedin, AiFillGithub, AiFillCaretDown} from "react-icons/ai"
import {IoIosOpen} from "react-icons/io"
import {SiGmail} from "react-icons/si"
import anu from './Images/anu.png'
import cat from './Images/cat.jpg'
import cat2 from './Images/cat2.jpg'
import bg from './Images/bg.jpg'
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
return(
<html>
   <body>
      <div style={{position:"absolute",backgroundSize:"100% 100%",backgroundImage: `url(${bg})`, width:"100%",height:"8350px"}}>
      <div style={{height:"75px",background:"white",position:"sticky",top:"0",width:"100%",zIndex:"100", overflowX:"auto", overflowY:"hidden"}}>
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
      <div style={{position:"relative"}}>
         <Link className="header one" style={{fontFamily:"Helvetica",position:"absolute",color:"black",
         cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
         activeClass="active" to="contact" spy={true} smooth={true} duration={1500} >Contact
         <header className="headerline"/>
         </Link>
         <Link className="header two" style={{fontFamily:"Helvetica",position:"absolute",color:"black",
         cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
         activeClass="active" to="reviews" spy={true} smooth={true} duration={1500} >Reviews
         <header className="headerline"/>
         </Link>
         <Link className="header three" style={{fontFamily:"Helvetica",position:"absolute",color:"black",
         cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
         activeClass="active" to="past" spy={true} smooth={true} duration={1500} >Projects
         <header className="headerline"/>
         </Link>
         <Link className="header four" style={{fontFamily:"Helvetica",position:"absolute",color:"black",
         cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
         activeClass="active" to="about" spy={true} smooth={true} duration={1000} >About
         <header className="headerline"/>
         </Link>
      </div>
      </div>
      <div style = {{position:"relative",width:"100%"}}>
         <img name ="bg" className="bg" src= {title} style={{width:"100%",maxWidth:"1920px",maxHeight:"900px",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
         <div style={{position:"absolute",bottom:"15px",right:"10px"}}>
            <b style={{fontFamily:"Helvetica",color:"black",
            fontSize:"25px", letterSpacing: "0.05em"}}>Click
            <Link className="arrow one" style={{position:"relative",top:"30px",color:"black",
            fontSize:"25px", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
            activeClass="active" to="about" spy={true} smooth={true} duration={1500} >
            <AiFillCaretDown size={75}/>
            <header className="headerline"/>
            </Link>
            </b>
         </div>
      </div>
      <div style={{position:"absolute",width:"100%",top:"1500px",height:"1000px"}}>
         <div name="about" className="about" data-aos="fade-right"  data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500" 
            style={{position:"absolute",textAlign:"center",height:"70vh"}}>
            <br/>
            <span style={{fontFamily: "montserrat",color:"white", fontSize:"50px"}}>About
            </span>
            <section/>
            <div style={{height:"50px"}}>
               <p className="aboutText" style={{ overflow:"auto",fontFamily:"opensans",color:"white"}}>
               I am computer programmer currently in my third year of Computer Science at California State
               University, Fullerton. My background includes working on projects from a diverse set of languages. 
               One such example is developing a web application for an internship project that took place at a National Laboratory
               in the summer of 2020.
               <br/><br/> 
               Fueled by my desire to positively impact society, I consider myself ambitious, 
               perseverent, and devoted person to my cause.
               <br/> <br/>
               Displayed from the coding projects I create, I consider myself to be a 
               meticulous, patient, and organized programmer during my practices.
               <br/> <br/> 
               Planning for my future, I aim to finish my university with a bachelor's degree in computer science.
               Whether in books, documentaries, or movies, learning about psychology has always been a side hobby of mine.
               Therefore, I intend to pursue a career that implements both of my passions, such as a UX Designer or a Machine Learning Engineer.
               However, I am not limited to just this as I am flexible to many other subfields in computer science. <br/>
               </p>
               <Link className="arrow two" style={{ position:"relative", top:"-25px",color:"black",fontSize:"25px", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
               activeClass="active" to="past" spy={true} smooth={true} duration={1500} >
               <AiFillCaretDown size={100}/>
               <header className="headerline"/>
               </Link>
            </div>
         </div>
         <div className="cat_div">
            <img className="cat" data-aos="fade-right"  data-aos-anchor-placement="top-bottom" data-aos-offset="-135"
            data-aos-duration="1500"
            style= {{border:"5px solid #033a61",borderRadius:"25px"}} src= {cat}/>
         </div>
      </div>
<div style={{position:"absolute",width:"100%",top:"3000px",height:"1000px"}}>
         <div name="past" className="past" data-aos="fade-right"  data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500" 
            style={{position:"absolute",textAlign:"center",height:"70vh"}}>
            <br/>
            <span className="pastTitle" style={{fontFamily: "montserrat",color:"white", fontSize:"50px"}}>Projects
            <section/>
            </span>
            <div className="pastText">
            <div style={{color:"white"}}>
      <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto"}} className="link one" target="_blank" href="https://github.com/brianedwards00/FlaskAndReact">
      Web Interface for Analyzing Microbiome Datasets <IoIosOpen/> <br/>
      </a>
      <p className="pastBody" style={{fontFamily:"opensans"}}>
      Website application created as a full-stack developer intern at Pacific Northwest National Laboratory<br/>
      <em>React front-end (CSS/HTML/Javascript) with a Flask back-end (Python)</em><br/> <br/> 
      </p>
      </div>
      <div style={{color:"white"}}>
      <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto"}} className="link two" target="_blank" href="https://github.com/brianedwards00/WebsitePortfolio">
      Website Portfolio <IoIosOpen/><br/> 
      </a>
      <p className="pastBody" style={{fontFamily:"opensans"}}>
      Website application that highlights my professional progress <br/>
         <em>Front-end (CSS/HTML/Javascript) app created from React</em><br/> <br/>
      </p>
      </div>
      <div style={{color:"white"}}>
      <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto"}} className="link three" target="_blank"  href="https://github.com/brianedwards00/University-Database">
      University Database <IoIosOpen/><br/> 
      </a>
      <p className="pastBody" style={{fontFamily:"opensans"}}>
      Website application that connects to a mock university database to retrieve values for the user <br/>
         <em>Front-end (HTML) and back-end (PHP/SQL) app that connects to a database from MariaDB</em><br/> <br/>
      </p>
      </div>
      <div style={{color:"white"}}>
      <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto"}} className="link four" target="_blank" href="https://github.com/brianedwards00/Text-Filer-9000">
      Project Text Filer 9000 <IoIosOpen/><br/> 
      </a>
      <p className="pastBody" style={{fontFamily:"opensans"}}>
      Project that revolves around textfiles <br/>
         Some features include creating, saving, loading, and displaying info about different text files <br/>
         <em>C++ command line application</em>

      </p>
      </div>
      <Link className="arrow three" style={{color:"black",
      fontSize:"25px", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
      activeClass="active" to="reviews" spy={true} smooth={true} duration={1500} >
      <AiFillCaretDown size={100}/>
      <header className="headerline"/>
      </Link>
      </div>
         </div>
      </div>
      <div style={{position:"absolute",width:"100%",top:"5250px"}}>
         <div name="reviews" className="reviews" data-aos="fade-right"  data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500" 
            style={{position:"absolute",textAlign:"center",height:"70vh"}}>
            <br/>
            <span  style={{fontFamily: "montserrat",color:"white", fontSize:"50px"}}>Reviews
            <section/>
            </span>
            
   <p  style={{fontFamily:"opensans",color:"white"}}>
   <img style= {{marginLeft:"auto",marginRight:"auto", display:"block"}} src= {anu}/>
   <a style={{textAlign:"center", display:"block", margin:"0 auto"}} className="link five" target="_blank" href="https://www.linkedin.com/in/anubh/">
   Anubhav 
   </a>
   <span className="reviewPlace" style={{fontFamily:"opensans",color:"white",textAlign:"center",display:"block"}}>Software Engineer at Pacific Northwest National Laboratory</span>
   <br/>
   <p className = "reviewText" style={{margin:"0px 50px"}}>
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
   <Link className="arrow four" style={{color:"black", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
   activeClass="active" to="contact" spy={true} smooth={true} duration={1500} >
   <AiFillCaretDown size={100}/>
   <header className="headerline"/>
   </Link>
         </div>
      </div>
      <div name="contact" data-aos="fade-right"  data-aos-anchor-placement="top-bottom"
   data-aos-duration="1500"
   style={{position:"relative",top:"6000px"}}>
   <span style={{textAlign:"center",display:"block",fontFamily: "montserrat", fontSize:"50px",color:"white"}}>Contact
   </span>
   <section/>
   <div style={{textAlign:"center"}}>
      <a style = {{paddingRight:"50px", textDecoration:"none",border:"none",color:"inherit"}} href="https://mail.google.com/mail/?view=cm&fs=1&to=MisterBrianEdwards@gmail.com" target="_blank">
      <span>
         <SiGmail className = "icon" size={70} style={{display:"inline-block"}}/>
      </span>
      </a>
      <a style = {{paddingRight:"50px",textDecoration:"none",border:"none",color:"inherit"}} href="https://linkedin.com/in/brianedwards00" target="_blank">
         <span>
            <AiFillLinkedin className = "icon" size={70} style={{display:"inline-block"}}/>
         </span>
      </a>
      <a style = {{textDecoration:"none",border:"none",color:"inherit"}} href="https://github.com/brianedwards00" target="_blank">
         <span>
            <AiFillGithub className = "icon" size={70} style={{display:"inline-block"}}/>
         </span>
      </a>
      <span className="contactEmail" style={{display:"block",fontFamily:"opensans",color:"white"}}>MisterBrianEdwards@gmail.com</span>
      <div className="cat_divtwo">
            <img className="cattwo" data-aos="fade-right"  data-aos-anchor-placement="top-bottom" data-aos-offset="-135"
            data-aos-duration="1500"
            style= {{border:"5px solid #033a61",borderRadius:"25px"}} src= {cat2}/>
      </div>
   </div>
   <Link data-aos="fade-right"  data-aos-anchor-placement="bottom"
   data-aos-duration="1000"
   className="header five" style={{fontFamily:"Helvetica",position:"absolute",color:"black",
         cursor:"pointer", letterSpacing: "0.05em",right:"100px"}} offset = {-75}
         activeClass="active" to="bg" spy={true} smooth={true} duration={1000} >Top of Page
         <header className="headerline"/>
         </Link>
   </div>
      </div>
   </body>
</html>
);
}
}
export default App;
