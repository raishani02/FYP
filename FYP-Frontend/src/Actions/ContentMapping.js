import axios from "axios"

export const GetContent = (course_name,course_section,errorr,success) =>{
    const token = localStorage.getItem('AuthToken');
    const user_id = localStorage.getItem('userId');
    const user_type = localStorage.getItem('type');
    console.log("i am "+ course_section);
    console.log("i am 2"+ course_name);

    // type = localStorage.getItem('type');

    axios.get('http://localhost:5000/api/courses/content/get-weekly-breakdown',  {
        params: {
          token: token,
          user_id:user_id,
          section:course_section,
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

export const addContent = (data,errorr,success) =>{
    data.token = localStorage.getItem('AuthToken');
    data.user_id = localStorage.getItem('userId');

    axios.post('http://localhost:5000/api/courses/content/add-weekly-breakdown', data)
  .then(function (res) {
    // console.log("Response"+res.0].c_name)
    success(res);
  }).catch(function(err){
    errorr(err);
  })
}

export const EditContent = (data,errorr,success) =>{
    data.token = localStorage.getItem('AuthToken');
    // data.user_id = localStorage.getItem('userId');

    axios.patch('http://localhost:5000/api/courses/content/update-weekly-breakdown', data)
  .then(function (res) {
    // console.log("Response"+res.0].c_name)
    success(res);
  }).catch(function(err){
    errorr(err);
  })
}




export const DeleteContent = (data,errorr, success) => {

 
    data.token = localStorage.getItem('AuthToken');
    // const data = {
    //   email_id:localStorage.getItem('email'),
    //   token: token
    // };

    axios.delete("http://localhost:5000/api/courses/content/delete-weekly-breakdown", {
            params: {
                token: data.token,
                _id: data._id,
            }
        })
        .then(function(res) {
            console.log('++ response')
            success(res);
        }).catch(function(err) {
            console.log('-- response')
            errorr(err);
        })
}