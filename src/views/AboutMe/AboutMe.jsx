import "./AboutMe.css";
import headshot from '../../assets/headshot.png'; 
import Footer from '../components/Footer/Footer';

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
      <img src={headshot} alt="aboutme"/>  
      <div>
        <h1>About Me</h1>
        <p>
        {/* Hello there! My name is Amara Ceresi, and I am currently immersed in the enriching and challenging experience of studying Full Stack Development at Vanderbilt University's Boot Camp. With a strong foundation in front-end and back-end technologies, I'm passionate about using code to create user-friendly and responsive web applications.         */}
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default AboutMe;
