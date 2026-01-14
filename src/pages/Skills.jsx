import { FaCode, FaTools } from 'react-icons/fa'
import SectionTitle from '../shared/SectionTitle'
import TagList from '../shared/TagList'
import AnimatedSection from '../shared/AnimatedSection'
import './Skills.css'

const skills = {
  programming: ['Java', 'Python', 'JavaScript', 'SQL'],
  web: ['HTML5', 'CSS3', 'React.js', 'REST APIs'],
  backend: ['Node.js', 'Express.js', 'MySQL', 'DBMS'],
  core: ['OOPs', 'Data Structures', 'SDLC'],
  tools: ['Git', 'GitHub', 'VS Code'],
  soft: ['Problem Solving', 'Communication', 'Team Collaboration'],
}

const Skills = () => {
  return (
    <div className="skills-page">
      <section className="section" id="skills">
        <SectionTitle>Technical Skills</SectionTitle>
        <AnimatedSection>
          <div className="grid two">
            <div className="panel skill-panel">
              <div className="panel-icon">
                <FaCode />
              </div>
              <h3>Programming</h3>
              <TagList items={skills.programming} />
              <h3>Web</h3>
              <TagList items={skills.web} />
              <h3>Backend & DB</h3>
              <TagList items={skills.backend} />
            </div>
            <div className="panel skill-panel">
              <div className="panel-icon">
                <FaTools />
              </div>
              <h3>Core</h3>
              <TagList items={skills.core} />
              <h3>Tools</h3>
              <TagList items={skills.tools} />
              <h3>Soft Skills</h3>
              <TagList items={skills.soft} />
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default Skills
