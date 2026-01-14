import { FaCertificate, FaTrophy, FaCode, FaMedal } from 'react-icons/fa'
import SectionTitle from '../shared/SectionTitle'
import AnimatedSection from '../shared/AnimatedSection'
import './Experience.css'

const experience = [
  {
    role: 'Software Development Trainee',
    place: '@QSpiders',
    date: 'Jul 2025',
    points: [
      'Trained in Java, SQL, Data Structures, and OOP concepts',
      'Worked on collections, exception handling, and database queries',
    ],
  },
]

const achievements = [
  {
    title: 'HackerRank Achievement',
    description: '⭐ 5 Stars Badge in Java',
    icon: <FaMedal />,
    emoji: '🏆',
  },
  {
    title: 'Hackathon Participant',
    description: '💻 Active participant in coding competitions',
    icon: <FaCode />,
    emoji: '🚀',
  },
  {
    title: 'Project Competition',
    description: '🎯 Got prize in project competition',
    icon: <FaTrophy />,
    emoji: '🏅',
  },
]

const certifications = [
  'Intro to Cloud — IBM SkillBuild',
  'Java Certification — PrepInsta',
  'SQL Intermediate — HackerRank',
]

const Experience = () => {
  return (
    <div className="experience-page">
      <section className="section" id="experience">
        <SectionTitle>Training & Experience</SectionTitle>
        <AnimatedSection>
          <div className="panel experience-card">
            {experience.map((exp) => (
              <div key={exp.role} className="experience">
                <div className="experience-header">
                  <div>
                    <h3>
                      {exp.role} <span className="muted">{exp.place}</span>
                    </h3>
                  </div>
                  <span className="pill light">{exp.date}</span>
                </div>
                <ul>
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="section" id="achievements">
        <SectionTitle>Achievements</SectionTitle>
        <AnimatedSection>
          <div className="achievements-grid">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="achievement-card">
                <div className="achievement-icon">
                  <span className="achievement-emoji">{achievement.emoji}</span>
                  {achievement.icon}
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="section" id="certifications">
        <SectionTitle>Certifications</SectionTitle>
        <AnimatedSection>
          <div className="grid three">
            {certifications.map((cert) => (
              <div key={cert} className="panel small cert-card">
                <FaCertificate className="cert-icon" />
                {cert}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default Experience
