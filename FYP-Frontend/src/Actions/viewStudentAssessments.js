import axios from "axios"

export const Viewstudentassessments = (data,errorr,success) =>{
    const token = localStorage.getItem('AuthToken');
   const user_id = localStorage.getItem('userId');
   const user_type = localStorage.getItem('type');
    console.log("i am in course " + data.course_name + "with type : "+data.type);
    // type = localStorage.getItem('type');

    axios.get('http://localhost:5000/api/courses/studentassessments/viewstudentassessment', {
        params: {
          token: token,
          student_id:user_id,
          type:data.type,
          course_name: data.course_name,
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
