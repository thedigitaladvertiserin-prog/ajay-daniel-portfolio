import { useState } from 'react'
import photo from "./assets/photo.jpeg"
import './App.css'
// import { TextField } from '@mui/material';
// import resume from "../assets/Resume_Ajay_Daniel.pdf"

function App() {
  const [count, setCount] = useState(0)
  const email = "ajaydaniel.gdk@gmail.com";
  const phoneNumber = "+91 72003 83747";

   const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Ajay_Daniel.pdf"
    link.download = "Ajay_Daniel_resume.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
     <div >
      <div style={{
        backgroundColor: "transparent",
        color:"#000000",
        width: "10%",
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "40px",
        paddingBottom: "20px",
        position: "absolute",
        top: "80px",
        left: "20vw",
      }}>
         <img src={photo} alt="Ajay Daniel" style={{ width: "320px", height: "320px", borderRadius: "50%" }} />
      </div> 
    </div>

     <div >
      <div style={{
        backgroundColor: "#EADDFF",
        color:"#000000",
        width: "10%",
        paddingLeft: "40px",
        paddingRight: "30px",
        borderRadius: "40px",
        paddingBottom: "10px",
        position: "absolute",
        top: "440px",
        left: "23vw",
      }}>
         <p onClick={downloadResume} style={{ cursor: "pointer", color: "blue" , marginLeft: "40px", fontSize: "20px"}}>
          Resume
        </p>
      </div> 
    </div>

     <div >
      <div style={{
        backgroundColor: "#FCF8DD",
        color:"#000000",
        width: "30%",
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "40px",
        paddingBottom: "20px",
        position: "absolute",
        top: "550px",
        left: "15vw",
      }}>
        <h3>Contact</h3>
        <div>
          <a href={`mailto:${email}`}>Email:ajaydaniel.gdk@gmail.com</a>
        </div>
        <div>
          <a href={`tel:${phoneNumber}`} style={{display:"inline-block"}}>Phone: +91 72003 83747</a>
        </div>
        <div>
          Location: Chennai, Tamil Nadu
        </div>
      </div> 
    </div>

     <div >
      <div style={{
        backgroundColor: "#FCF8DD",
        color:"#000000",
        width: "30%",
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "40px",
        position: "absolute",
        top: "20px",
        left: "65vw",
      }}>
        <h3>About</h3>
        <p>I'm a motivated and detail-oriented MBA graduate from SRM University, specializing in Business Analytics with a background in Civil Engineering. I bring a unique mix of data-driven thinking and design creativity through my hands-on experience in UI/UX design, data visualization, and digital tools. Passionate about merging analytics, user experience, and business strategy, I aim to contribute to innovative projects that solve real-world problems.</p>
      </div> 
    </div>


     <div>
      <div style={{
        backgroundColor: "#FFD700",
        color:"#000000",
        width: "520px",
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "40px",
        position: "absolute",
        top: "300px",
        left: "65vw",
      }}>
        <h3>Education</h3>
        <ul>
          <li>SRM University, Chennai - MBA in Business Analytics (2023)</li>
          <li>B.E. – Civil Engineering, Sri Sairam Engineering College (Anna University) (2023) – CGPA: 7.5</li>
          <li>HSC, Shri Anand Jain Vidyalaya (2019) – 59%</li>
          <li>SSLC, Shri Anand Jain Vidyalaya (2017) – 86.9%</li>
        </ul>
      </div>
    </div>



    <div  >
      <div style={{
        backgroundColor: "#FFD700",
        color:"#000000",
        width: "520px",
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "40px",
        position: "absolute",
        top: "550px",
        left: "65vw"
      }}>
        <h3 style={{marginBottom:"0px !important"}}>Skills</h3>
        <h4>Technical Skills</h4>
        <ul>
          <li>Languages: Python, Machine Learning Basics</li>
          <li>Tools: Power BI, MS Excel, Tableau, Figma, Canva, Photoshop</li>
       
        </ul>
        <h4 style={{marginBottom:"0px !important"}}>Soft Skills</h4>
        <ul>
          <li>Analytical Thinking</li>
          <li>Problem Solving</li>
          <li>Communication & Collaboration</li>
          <li>Leadership & Event Management</li>
        </ul>
      </div>
    </div>
    </>
   
  )
}

export default App
