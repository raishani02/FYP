import axios from "axios"

export const signin = (user, callbackerr, callbacksuccess) =>{
    // console.log('request sent email is'+user.email);
    axios.post('http://localhost:5000/api/user/login', user)
  .then(function (response) {
    // console.log("Signi n response"+response.data.type);
    callbacksuccess(response.data);
  }).catch(function(error){
      callbackerr(error.response.data);
  })
}