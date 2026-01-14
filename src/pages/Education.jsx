import { FaGraduationCap } from 'react-icons/fa'
import SectionTitle from '../shared/SectionTitle'
import AnimatedSection from '../shared/AnimatedSection'
import './Education.css'

const education = [
  { title: 'B.Tech — Computer Science & Engineering', place: 'SKNSCOE, Pandharpur', meta: 'CGPA: 9.61', year: '2022 – 2026' },
  { title: 'HSC', place: 'Sangola Vidyamandir Jr. College', meta: '75.67%', year: '2022' },
  { title: 'SSC', place: 'Sangola Vidyamandir Prashala', meta: '95.40%', year: '2020' },
]

const Education = () => {
  return (
    <div className="education-page">
      <section className="section" id="education">
        <SectionTitle>Education</SectionTitle>
        <AnimatedSection>
          <div className="timeline">
            {education.map((item, idx) => (
              <div key={item.title} className="timeline-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="muted">{item.place}</p>
                    <p className="muted">{item.meta}</p>
                  </div>
                </div>
                <div className="timeline-year">{item.year}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default Education
