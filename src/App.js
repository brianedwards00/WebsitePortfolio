import './App.css';
import React from 'react';
import title from './Images/title.png'
import {AiFillLinkedin, AiFillGithub, AiFillCaretDown} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import {FaLongArrowAltRight} from "react-icons/fa"
import anu from './Images/anu.png'
import cat from './Images/cat.jpg'
import building from './Images/building.jpg'
import orleans from './Images/orleans.jpg'
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
      <div style={{position:"absolute",backgroundSize:"100% 100%",backgroundImage: `url(${bg})`, width:"100%",height:"9600px"}}>
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
         <Link className="header one" style={{fontFamily:"acmeregular",position:"absolute",color:"black",
         cursor:"pointer", letterSpacing: "0.05em"}} offset = {-125}
         activeClass="active" to="contact" spy={true} smooth={true} duration={1500} >Contact
         <header className="headerline"/>
         </Link>
         <Link className="header two" style={{fontFamily:"acmeregular",position:"absolute",color:"black",
         cursor:"pointer", letterSpacing: "0.05em"}} offset = {-200}
         activeClass="active" to="reviews" spy={true} smooth={true} duration={1500} >Reviews
         <header className="headerline"/>
         </Link>
         <Link className="header three" style={{fontFamily:"acmeregular",position:"absolute",color:"black",
         cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
         activeClass="active" to="past" spy={true} smooth={true} duration={1500} >Projects
         <header className="headerline"/>
         </Link>
         <Link className="header four" style={{fontFamily:"acmeregular",position:"absolute",color:"black",
         cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
         activeClass="active" to="about" spy={true} smooth={true} duration={1000} >About
         <header className="headerline"/>
         </Link>
      </div>
      </div>
      <div style = {{position:"relative",width:"100%"}}>
         <img name ="bg" className="bg" src= {title} style={{width:"100%",maxWidth:"1920px",maxHeight:"900px",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
         <div style={{position:"absolute",bottom:"15px",right:"10px"}}>
            <b style={{fontFamily:"acmeregular",color:"black",
            fontSize:"25px", letterSpacing: "0.05em"}}>Click
            <Link className="arrow one" style={{position:"relative",top:"30px",fontFamily:"acmeregular",color:"black",
            fontSize:"25px", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-75}
            activeClass="active" to="about" spy={true} smooth={true} duration={1500} >
            <AiFillCaretDown size={75}/>
            <header className="headerline"/>
            </Link>
            </b>
         </div>
      </div>
      <div style={{position:"absolute",width:"100%",top:"2000px",height:"1000px"}}>
         <div name="about" className="about" data-aos="fade-right"  data-aos-anchor-placement="top-center"
            data-aos-duration="1000" 
            style={{position:"absolute",textAlign:"center",height:"70vh"}}>
            <br/>
            <span style={{fontFamily: "montserrat",color:"rgb(158, 158, 9)", fontSize:"50px"}}>About
            </span>
            <section/>
            <div style={{height:"50px"}}>
               <p className="aboutText" style={{ overflow:"auto",fontFamily:"opensans",color:"rgb(158, 158, 9)"}}>
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
               Therefore, I intend to pursue a career that implements both of my passions, such as a UX Designer or a Machine Learner Engineer.
               However, I am not limited to just this as I am flexible to many other subfields in computer science. <br/>
               </p>
               <Link className="arrow two" style={{ position:"relative", top:"-25px",
               fontFamily:"acmeregular",color:"black",fontSize:"25px", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-200}
               activeClass="active" to="past" spy={true} smooth={true} duration={1500} >
               <AiFillCaretDown size={100}/>
               <header className="headerline"/>
               </Link>
            </div>
         </div>
         <div className="cat_div">
            <img className="cat" data-aos="fade-right"  data-aos-anchor-placement="top-center" data-aos-offset="-135"
            data-aos-duration="1000"
            style= {{border:"5px solid #033a61",borderRadius:"25px"}} src= {cat}/>
         </div>
      </div>
<div style={{position:"absolute",width:"100%",top:"4000px",height:"1000px"}}>
         <div name="past" className="past" data-aos="fade-right"  data-aos-anchor-placement="top-center"
            data-aos-duration="1000" 
            style={{position:"absolute",textAlign:"center",height:"70vh"}}>
            <br/>
            <span className="pastTitle" style={{fontFamily: "montserrat",color:"rgb(158, 158, 9)", fontSize:"50px"}}>Projects
            <section/>
            </span>
            <div className="pastText">
            <div style={{color:"rgb(158, 158, 9)"}}>
      <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto"}} className="link one" target="_blank" href="https://github.com/brianedwards00/FlaskAndReact">
      Web Interface for Analyzing Microbiome Datasets <br/> 
      </a>
      <p className="pastBody" style={{fontFamily:"opensans"}}>
      Website application created from scratch as a full-stack developer intern at the Pacific Northwest National Laboratory<br/> <br/> 
      <em>React front-end (CSS/HTML/Javascript) with a Flask back-end (Python)</em><br/> <br/> 
      </p>
      </div>
      <div style={{color:"rgb(158, 158, 9)"}}>
      <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto"}} className="link two" target="_blank" href="https://github.com/brianedwards00/WebsitePortfolio">
      Website Portfolio <br/> 
      </a>
      <p className="pastBody" style={{fontFamily:"opensans"}}>
      Website application that highlights my professional progress <br/><br/>
         <em>Front-end (CSS/HTML/Javascript) app created from React</em><br/> <br/>
      </p>
      </div>
      <div style={{color:"rgb(158, 158, 9)"}}>
      <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto"}} className="link three" target="_blank"  href="https://github.com/brianedwards00/University-Database">
      University Database <br/> 
      </a>
      <p className="pastBody" style={{fontFamily:"opensans"}}>
      Website application that connects to a mock university database to retrieve values for the user <br/><br/>
         <em>Front-end (HTML) and back-end (PHP/SQL) app that connects to a database from MariaDB</em><br/> <br/>
      </p>
      </div>
      <div style={{color:"rgb(158, 158, 9)"}}>
      <a style={{textAlign:"center", fontFamily:"josefin",display:"block", margin:"0 auto"}} className="link four" target="_blank" href="https://github.com/brianedwards00/Text-Filer-9000">
      Project Text Filer 9000 <br/> 
      </a>
      <p className="pastBody" style={{fontFamily:"opensans"}}>
      Project that revolves around textfiles <br/>
         Some features include creating, saving, loading, and displaying info about different text files <br/> <br/>
         <em>C++ command line application</em>

      </p>
      </div>
      <Link className="arrow three" style={{fontFamily:"acmeregular",color:"black",
      fontSize:"25px", cursor:"pointer", letterSpacing: "0.05em"}} offset = {-200}
      activeClass="active" to="reviews" spy={true} smooth={true} duration={1500} >
      <AiFillCaretDown size={100}/>
      <header className="headerline"/>
      </Link>
      </div>
         </div>
         { /*
         <div className="sunglasses_div">
            <img className="sunglasses" data-aos="fade-right"  data-aos-anchor-placement="top-center" data-aos-offset="-135"
            data-aos-duration="1000"
            style= {{border:"5px solid #033a61",borderRadius:"25px"}} src= {sunglasses}/>
         </div>
         */
}
      </div>

      </div>
      {/*TODO: ADD TOP OF PAGE*/}
   </body>
</html>
);
}
}
export default App;
