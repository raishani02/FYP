import axios from "axios"

export const getStudents = (course_name,course_section,errorr,success) =>{
    const token = localStorage.getItem('AuthToken');
    const id = localStorage.getItem('userId');
    const type = localStorage.getItem('type');

    axios.get('http://localhost:5000/api/courses/students/get-students', {
        params: {
            course_name:course_name,
            section:course_section,
            token: token,
            user_id:id,
            user_type:type
        }
      })
  .then(function (res) {
    // console.log("Response"+res.data[0].c_name)
    success(res)
  }).catch(function(err){
    errorr(err);
  })
}

export const getSubmissions = (course_name,course_section,assess_id,errorr,success) =>{
  const token = localStorage.getItem('AuthToken');
  const id = localStorage.getItem('userId');
  const type = localStorage.getItem('type');
  console.log("assessment id is"+assess_id);

  axios.get('http://localhost:5000/api/courses/students/get-submissions', {
      params: {
          course_name:course_name,
          section:course_section,
          token: token,
          user_id:id,
          user_type:type,
          assessment_id:assess_id
      }
    })
.then(function (res) {
  // console.log("Response"+res.data[0].c_name)
  success(res)
}).catch(function(err){
  errorr(err);
})
}