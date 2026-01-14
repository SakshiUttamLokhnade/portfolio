import { Link } from 'react-router-dom'
import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import AnimatedSection from '../shared/AnimatedSection'
import './Home.css'

const Home = () => {
  const handleDownloadResume = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Sakshi_Uttam_Lokhande_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="home-page">
      <header className="hero" id="home">
        <AnimatedSection>
          <div className="hero-content">
            <div className="hero-image-wrapper">
              <img 
                src="/profile-photo.jpg" 
                alt="Sakshi Uttam Lokhande" 
                className="hero-photo"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="hero-photo-placeholder" style={{ display: 'none' }}>
                <span>SL</span>
              </div>
            </div>
            <h1 className="hero-greeting">
              Hello, I am <span className="highlight">Sakshi Uttam Lokhande</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="lede">
              Currently pursuing bachelors in CSE engineering, looking for opportunities to apply my programming and problem solving skills in software development projects.
            </p>
            <div className="action-buttons">
              <Link to="/contact" className="button primary">
                Get in Touch
              </Link>
              <button className="button secondary" onClick={handleDownloadResume}>
                <FaDownload />
                Download Resume
              </button>
            </div>
            <div className="social-icons">
              <a 
                href="https://www.linkedin.com/in/sakshi-lokhandel" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:sakshi.lokhande429@gmail.com" 
                className="social-icon email"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </header>
    </div>
  )
}

export default Home
