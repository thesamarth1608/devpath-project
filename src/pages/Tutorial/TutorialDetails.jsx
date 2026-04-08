import "./tutorialDetails.css"
import '../../components/tutorial/tutorialContent.css'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TutSidebar from "../../components/tutorial/TutSidebar";
import TutContent from "../../components/tutorial/TutContent";
import { setCourse } from "../../features/course/courseSlice";
// import '../../assets/oops1.gif'

const TutorialDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourse(slug));
  }, [slug, dispatch]);

  return (
    <div className="tutorialPage">
      <TutSidebar />
      <TutContent />
    </div>
  );
};

export default TutorialDetails;
