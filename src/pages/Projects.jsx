import { FaGithub } from 'react-icons/fa'
import SectionTitle from '../shared/SectionTitle'
import AnimatedSection from '../shared/AnimatedSection'
import './Projects.css'

const projects = [
  {
    name: 'SKN CODEMATE',
    stack: 'React.js, Node.js, SQL',
    githubLink: 'https://github.com/SakshiUttamLokhnade/Coding_Platform',
    points: [
      'Developed a full-stack coding platform supporting multiple user roles',
      'Implemented secure authentication, problem management, and leaderboard features',
      'Designed responsive UI and followed SDLC practices',
    ],
  },
  {
    name: 'Assured Contract Farming System',
    stack: 'Web Application',
    githubLink: 'https://github.com/SakshiUttamLokhnade/AgroSync',
    points: [
      'Built a role-based platform connecting farmers and contractors',
      'Implemented secure data handling, automated notifications, and contract tracking',
      'Ensured transparency using geo-tagged image uploads',
    ],
  },
  {
    name: 'House Price Prediction using ML',
    stack: 'Python, Machine Learning',
    githubLink: 'https://github.com/SakshiUttamLokhnade/HOuse_price_prdeiction',
    points: [
      'Developed a machine learning model to predict house prices based on various features',
      'Implemented data preprocessing, feature engineering, and model training',
      'Used regression algorithms to achieve accurate price predictions',
    ],
  },
]

const Projects = () => {
  return (
    <div className="projects-page">
      <section className="section" id="projects">
        <SectionTitle>Projects</SectionTitle>
        <AnimatedSection>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={project.name} className="panel project-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="pill">{project.stack}</span>
                </div>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-link"
                  >
                    <FaGithub />
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default Projects
