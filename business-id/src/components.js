import image from './assets/king-eddie.jpg'
import email from './assets/email-logo.jpg'
import phone from './assets/phone-call.png'
function Display(){
   return(
    <div className="whole">
    <img src={image} alt ="" className="myPhoto"/>
    <Profile/>
    <Contact/>
    <About/>
    <Interest/>
    <Skills/>
    <SoftSkill/>
    </div>
  )
}
function Profile(){
  return (
    <div>
      <h1>Edmund Udeh</h1>
      <h3>Software Engineer</h3>
    </div>
  )
}
function Contact(){
  return(
    <div src="contact">
      <button className="b1"><img className="img1" src = {email} alt="" width = "15px"/>Email</button>
      <button className="b2"><img className="img2" src = {phone} alt ="" width= "10px"/>Phone</button>
    </div>
  )
}
function About(){
  return(
    <div>
    <h1>About</h1>
    <p className="about">
      I'm an entry-level software engineer with a year of hands-on 
      experience gained as a trainee at Semicolon. 
      During my time at Semicolon, I immersed myself in various projects, 
      honing my skills in programming languages and frameworks. 
      The experience provided me with a solid foundation in software development 
      methodologies and best practices. 
      I thrive in collaborative environments and am eager to contribute my 
      expertise to innovative projects.
      With a passion for continuous learning and a commitment to excellence,
      I'm excited to embark on the next phase of my career journey, 
      leveraging my experience at Semicolon to make meaningful contributions in 
      the field of software engineering.
      
    </p>
    </div>
)
}
function Interest(){
  return(
    <div>
       <h1>Interest</h1>
      <p className="interest">
        As a fresh face in the world of software engineering, I'm captivated by the endless adventure that lies ahead. Each day brings new challenges to conquer and innovations to explore. Collaboration is key in this dynamic field, where I find inspiration and support among fellow engineers. Together, we push boundaries and strive for excellence. What drives me most is the chance to make a real difference. Whether it's streamlining processes or tackling societal issues, the potential impact of my work is both exciting and fulfilling. With every line of code I write, I'm propelled by the thrill of discovery and the promise of shaping the future. As I embark on this journey, I'm filled with anticipation, ready to embrace the exciting challenges of software engineering.
        
      </p>
    </div>
  )
}
function Skills(){
  return(

    <div>
      <h2>Programming Languages</h2>

Java
Python
JavaScript

<h2>Web Development</h2>
React
HTML
CSS

<h2>Frameworks/Libraries:</h2>
Spring Boot (Java)

<h2>Databases</h2>
MySQL

<h2>Version Control:</h2>
Git (Version Control)
    
</div>
  )
}
function SoftSkill(){
  return(
    <div>
      <h1>SOFT SKILLS</h1>
        <h3>Communication</h3>
        <h3>Problem-solving</h3>
        <h3>Adaptability</h3>
        <h3>Teamwork</h3>
        <h3>Time management</h3>
        <h3>Attention to detail</h3>
        <h3>Critical thinking</h3>
        <h3>Continuous learning</h3>
        <h3>Empathy</h3>
        <h3>Resilience</h3>

    </div>
  )
}
export default Display