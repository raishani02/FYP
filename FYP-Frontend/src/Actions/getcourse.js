import axios from "axios"

export const getcourses = (errorr,success) =>{
    const token = localStorage.getItem('AuthToken');
    const id = localStorage.getItem('userId');
    const type = localStorage.getItem('type');

    axios.get('http://localhost:5000/api/courses/mycourses', {
        params: {
          token: token,
          user_id:id,
          type:type
        }
      })
  .then(function (res) {
    // console.log("Response"+res.data[0].c_name)
    success(res)
  }).catch(function(err){
    errorr(err);
  })
}