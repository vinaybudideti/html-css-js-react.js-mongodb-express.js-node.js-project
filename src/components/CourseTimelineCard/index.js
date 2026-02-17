// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseItems} = props
  const {courseTitle, description, duration, tagsList} = courseItems
  return (
    <div className="course-card">
      <div className="course-header">
        <h1 className="course-card-heading">{courseTitle}</h1>
        <div className="course-timeline">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration-text">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachTag => (
          <li className="tag-item" key={eachTag.id}>
            <p className="tag-text">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
