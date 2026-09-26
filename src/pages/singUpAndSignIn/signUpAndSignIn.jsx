import React from "react";
import './signUpAndSignIn.css';
import SignIn from "../../Component/signIn/signIn";
import SignUp from "../../Component/signUp/sign-up";

const SignUpAndSignIn=()=>(
    <div className="sign-in-and-sign-up">
          <SignIn />  
          <SignUp/>  
    </div>
)
export default SignUpAndSignIn;