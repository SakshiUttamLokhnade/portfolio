import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import SectionTitle from '../shared/SectionTitle'
import AnimatedSection from '../shared/AnimatedSection'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="section" id="contact">
        <SectionTitle>Get In Touch</SectionTitle>
        <AnimatedSection>
          <div className="contact-content">
            <div className="contact-card">
              <h3>Let&apos;s Connect</h3>
              <p className="contact-description">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
              <div className="contact-info">
                <a href="mailto:sakshi.lokhande429@gmail.com" className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">sakshi.lokhande429@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+917276821437" className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 7276821437</span>
                  </div>
                </a>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/sakshi-lokhandel" target="_blank" rel="noreferrer" className="social-button">
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a href="https://github.com/SakshiUttamLokhnade" target="_blank" rel="noreferrer" className="social-button">
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default Contact
