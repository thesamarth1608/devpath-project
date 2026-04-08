import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import oops1 from '../../assets/Images/tutorial/oops1.gif'
import './tutorialContent.css'
import { oopsComponents } from './oops/oopsComponent';
import ComingSoon from '../../components/ComingSoon/ComingSoon'


const TutContent = () => {
    const dispatch = useDispatch();
    const { courses, currentCourse, currentTopicIndex } = useSelector((state) => state.course);
    const topic = courses[currentCourse][currentTopicIndex];

    const courseMap = {
        oops: oopsComponents,
    }

    const SelectedComponent = courseMap[currentCourse]?.[topic.slug];
    return (
            <div className="contentArea">
      {SelectedComponent ? <SelectedComponent /> : <ComingSoon/>}
    </div>
    )
}

export default TutContent
