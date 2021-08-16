import Login  from "./components/Login";
import "./App.css";
import SignUp from './components/SignUp';
import React, { useEffect, useState } from 'react';
import Trivia from './components/Trivia';


function App() {

  const [success, setSuccess] = useState(false);
  const [logInState, setLogInState] = useState(false);
  const [signUpState, setSignUpState] = useState(false);
  const switchToLogin = () => {
    setLogInState(true);
    setSignUpState(false);
  }

  const switchToSignup = () => {
    setLogInState(false);
    setSignUpState(true);
  }

  useEffect(() => {
    finalPlay();
  });
  
  const logOut = () => {
    localStorage.clear();
    setSuccess(false);
    setLogInState(false);
    window.location.reload();
  
  }
  
  const finalPlay = () => {
    var user = localStorage.getItem("user");
    if(user){
      return(
        <div>
          <h1 className="header">{localStorage.getItem("name") !== null ? "Welcome" + localStorage.getItem("name") : ""}</h1>
          <button className="submitBtn" onClick={logOut}>Log Out</button>
          <Trivia/>

        </div>
      )
    }
    else{
      if((!logInState) && (!signUpState)){
        return(
              <div>
                <button onClick={switchToLogin} className="submitBtn">Login</button>
                <button onClick={switchToSignup} className="submitBtn">Sign Up</button>
              </div>
        )
      }
      if(logInState){
        
        return(
          <div>
            <Login success={success} logState={logInState} />
          </div>
        )
        
      }
      if(signUpState){
        return(
          <div>
            <SignUp/>
          </div>
        )
      }
    }
  }
  return (
    <div className="App">
        <div className="maindiv">
          <h1 className="header">Welcome To Our Trivia!</h1>
          <h2 className="nameHeader" >{localStorage.getItem("name") !== null ? "Welcome " + localStorage.getItem("name") : ""}</h2>
          {localStorage.getItem("user") ? <div> <button className="submitBtn" onClick={logOut}>Log Out</button> <Trivia/> </div> : finalPlay()} 
        </div>
    </div>
    
  );
}

export default App;
