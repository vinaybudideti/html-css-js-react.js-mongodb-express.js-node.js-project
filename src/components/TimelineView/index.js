// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimelineItems = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard courseItems={eachItem} key={eachItem.id} />
    }
    return <ProjectTimelineCard projectItems={eachItem} key={eachItem.id} />
  }
  return (
    <div className="timelineitems-page">
      <h1 className="heading-one">
        MY JOURNEY OF <span className="heading-two">CCBP 4.0</span>
      </h1>
      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: '#0967d2',
          secondary: '#ffffff',
          cardBgColor: '#ffffff',
          titleColor: '#0967d2',
          titleColorActive: '#2b237c',
        }}
      >
        {timelineItemsList.map(renderTimelineItems)}
      </Chrono>
    </div>
  )
}

export default TimelineView
