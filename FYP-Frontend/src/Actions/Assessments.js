import axios from "axios"

export const Uploadassessments = (data,errorr,success) =>{
    data.token = localStorage.getItem('AuthToken');
    data.user_id = localStorage.getItem('userId');
    console.log("i am "+ data.section);
    // type = localStorage.getItem('type');

    axios.post('http://localhost:5000/api/courses/assessment/uploadassessment', data)
  .then(function (res) {
    // console.log("Response"+res.data[0].c_name)
    success(res);
  }).catch(function(err){
    errorr(err);
  })
}

export const Getassessments = ( course_name,course_section,errorr,success) =>{
  const token = localStorage.getItem('AuthToken');
  const user_id = localStorage.getItem('userId');
  const user_type = localStorage.getItem('type');
  console.log("i am "+ user_type);
  // type = localStorage.getItem('type');

  axios.get('http://localhost:5000/api/courses/assessment/get-all-assessments',  {
        params: {
          token: token,
          user_id:user_id,
          course_section:course_section,
          course_name: course_name,
          user_type:user_type
        }})
  .then(function (res) {
    // console.log("Response"+res.0].c_name)
    success(res);
  }).catch(function(err){
    errorr(err);
  })
}