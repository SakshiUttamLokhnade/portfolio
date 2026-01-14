import AnimatedSection from '../shared/AnimatedSection'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="section" id="about">
        <AnimatedSection>
          <div className="about-content">
            <h1 className="about-title">
              About <span className="highlight">Me</span>
            </h1>
            <div className="about-text">
              <p>
                Hello, I am Sakshi Uttam Lokhande, a Computer Science and Engineering student pursuing 
                B.Tech at SKNSCOE, Pandharpur with a CGPA of 9.61. I am passionate about full-stack 
                development with experience in React.js, Node.js, MySQL, Java, Python, and JavaScript.
              </p>
              <p>
                I trained as a Software Development Trainee at QSpiders, enhancing my skills in Java, SQL, 
                Data Structures, and OOP. I enjoy solving problems and building innovative solutions, always 
                eager to learn and apply my programming skills in meaningful projects.
              </p>
              <p>
                Currently seeking opportunities to contribute to enterprise-level solutions while growing as 
                a developer. I believe in writing clean, maintainable code following best practices.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default About
