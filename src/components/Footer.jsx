import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div>
        <p className="muted">Let&apos;s build together.</p>
        <h3>Sakshi Uttam Lokhande</h3>
      </div>
      <div className="footer-links">
        <a href="mailto:sakshi.lokhande429@gmail.com">
          <FaEnvelope />
          Email
        </a>
        <a href="tel:+917276821437">
          <FaPhone />
          Phone
        </a>
        <a href="https://www.linkedin.com/in/sakshi-lokhandel" target="_blank" rel="noreferrer">
          <FaLinkedin />
          LinkedIn
        </a>
        <a href="https://github.com/SakshiUttamLokhnade" target="_blank" rel="noreferrer">
          <FaGithub />
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
