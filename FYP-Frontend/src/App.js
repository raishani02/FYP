import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import NavBar from "./Navbar/NavBar";
import TeacherHome from "./Teacher Components/TeacherHome";
import TeacherCourses from "./Teacher Components/TeacherCourses";
import TeacherLeaderBoard from "./Teacher Components/TeacherLeaderBoard";
import TeacherStudentProgress from "./Teacher Components/TeacherStudentProgress";
import TeacherWeeklyBreakdown from "./Teacher Components/TeacherWeeklyBreakdown";
// import Home from "./Teacher Components/Home";
import StudentCourses from "./Student Components/StudentCourses";
import StudentHome from "./Student Components/StudentHome";
import StudentLeaderBoard from "./Student Components/StudentLeaderBoard";
import StudentProgress from "./Student Components/StudentProgress";
import StudentWeeklyBreakdown from "./Student Components/StudentWeeklyBreakdown";
import CourseDetails from "./Teacher Components/CourseDetails";
import StudentCourseDetails from "./Student Components/StudentCourseDetails";
import firebase from "./Firebase/firebase";
import RecommendedMaterial from "./Student Components/RecommendedMaterial";
import { Assessment } from "@mui/icons-material";
import Assessments from "./Teacher Components/Assessments";
import UploadAssessments from "./Teacher Components/UploadAssessments"
import StudentAssessments from "./Student Components/StudentAssessments";
import StuUploadAssessments from "./Student Components/StuUploadAssessments";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/teacher-home" element={<TeacherHome />} />
            <Route path="/teacher-courses" element={<TeacherCourses />} />
            <Route path="/teacher-course-details" element={<CourseDetails />} />
            <Route path="/student-course-details" element={<StudentCourseDetails />} />
            <Route
              path="/teacher-leader-board"
              element={<TeacherLeaderBoard />}
            />
            <Route
              path="/teacher-student-progress"
              element={<TeacherStudentProgress />}
            />
            <Route
              path="/teacher-weekly-breakdown"
              element={<TeacherWeeklyBreakdown />}
            />
            <Route path="/student-home" element={<StudentHome />} />
            <Route path="/student-courses" element={<StudentCourses />} />
            <Route
              path="/student-leader-board"
              element={<StudentLeaderBoard />}
            />
            <Route path="/student-progress" element={<StudentProgress />} />
            <Route
              path="/student-weekly-breakdown"
              element={<StudentWeeklyBreakdown />}
            />
            <Route
              path="/recommended-material"
              element={<RecommendedMaterial />}
            />
            <Route
              path="/teacher-assessments"
              element={<Assessments />}
            />
            <Route
              path="/student-assessments"
              element={<StudentAssessments />}
            />
            <Route
              path="/teacher-upload-assessments"
              element={<UploadAssessments />}
            />
             <Route
              path="/student-upload-assessments"
              element={<StuUploadAssessments />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


// export default function App() {
//   const firebaseApp = firebase.apps[0];
//   return (
//     <div>
//       <h1>React  Firebase</h1>
//       <h2>By @farazamiruddin</h2>
//       <code>
//         <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
//       </code>
//     </div>
//   );
// }
