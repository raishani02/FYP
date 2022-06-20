import React, {useState} from "react";
import { Router, useNavigate } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import "./Login.css";
import { signin } from "../Actions/signin";


 const Login = () => {
  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  let user = (
    {
      email: "",
      password: "",
    }
  );

  // User Login info
  const database = [
    {
      username: "ishaq",
      password: "1234"
    },
    {
      username: "minahil",
      password: "1234"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    empty: "Fields are required"
  };

// Generate JSX code for error message
const renderErrorMessage = (name) =>
name === errorMessages.name && (
  <div className="error">{errorMessages.message}</div>
);

function handleChanges (emal,pass) {
  console.log(emal,pass);
  user.email=emal;
  user.password = pass;
  
};


  const handleSubmit = (event) => {

    // Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    // console.log(uname);
    handleChanges(uname.value,pass.value);
   
    // Find user login info
    // const userData = signin((user) => user.username === uname.value);
    // console.log("email in login"+user.email);
    signin(
      user,
      (error) => {
        // setInprocessing(false);
        setErrorMessages({ 
        name: "pass",
        message: error 

      });
       console.log("error"+error);

      },
      (success) => {
        // console.log("success is"+success.type);
        // setIsSubmitted(true); 
        console.log("success type is"+success.type); 
        if (success.type === "Teacher" ) {
          navigate("/teacher-home");
        }
        if (success.type === "Student") {
          navigate("/student-home");
        }  
        localStorage.setItem('AuthToken', success.token);
        localStorage.setItem('User_name', success.name);
        localStorage.setItem('type',success.type);
        localStorage.setItem('userId',success.user_id);

        // console.log(" success" + success);

        // sleep(500).then(()=>{
        //   history.push("/");
        // })
        //history.push("/homepage");
      }
    );
      // if (userData.username === " " || userData.password === " ") {
      //   setErrorMessages({ name: "empty", message: errors.empty });
      //   return;
      // }

    // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);  
    //     if (userData.username === "ishaq" ) {
    //       navigate("/teacher-home");
    //     }
    //     if (userData.username === "minahil") {
    //       navigate("/student-home");
    //     }     
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  
  const loginForm = (
    
  <div className="form" >
  <form onSubmit={handleSubmit}>

      <input
       className="input" 
       type="text" 
       placeholder="Username" 
       name="uname" required
        />
      {renderErrorMessage("uname")}
       <br></br>
      <input 
      className="input" 
      type="password" 
      placeholder="Password" 
      name="pass" required 
      />
      {renderErrorMessage("pass")}
   
      <button class = "button" onClick={handleSubmit} >
        Login 
      </button>
    
  </form>
</div>
     
  );

  
  

  return (
    <div className="app">
      <div className="login-form">
      <img src="/images/logo.jpeg" alt="Logo" />   
        <div className="title">Welcome Back!</div>
        <h2> Please Login with your Bestucation account</h2>
        {isSubmitted ? <Router><div>  <NavBar /> User is successfully logged in</div></Router>: loginForm }
       </div>
     </div>
 );
}

export default Login;


