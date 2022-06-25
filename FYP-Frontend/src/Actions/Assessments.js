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