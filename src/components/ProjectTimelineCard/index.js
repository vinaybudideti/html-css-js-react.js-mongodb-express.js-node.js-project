// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectItems} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} =
    projectItems
  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-header">
        <h1 className="project-card-heading">{projectTitle}</h1>
        <div className="project-timeline">
          <AiFillCalendar className="calendar-icon" />
          <p className="project-duration-text">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a
        href={projectUrl}
        className="visit-link"
        rel="noreferrer"
        target="_blank"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
