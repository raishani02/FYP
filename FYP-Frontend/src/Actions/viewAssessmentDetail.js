import axios from "axios"

export const Viewassessments = (data,errorr,success) =>{
    const token = localStorage.getItem('AuthToken');
   const user_id = localStorage.getItem('userId');
   const user_type = localStorage.getItem('type');
    console.log("i am in "+ data.section + "  of course" + data.course_name);
    // type = localStorage.getItem('type');

    axios.get('http://localhost:5000/api/courses/assessments/viewassessment', {
        params: {
          token: token,
          teacher_id:user_id,
          type:data.type,
          course_name: data.course_name,
          section: data.section,
          assessment_name: data.assessment_name,
          user_type: user_type, 

        }
    })
  .then(function (res) {
    // console.log("Response"+res.data[0].c_name)
    success(res);
  }).catch(function(err){
    errorr(err);
  })
}