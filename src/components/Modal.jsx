import "./styles/Modal.css";
import { useState } from "react";
import ForgetModal from "./ForgetModal";
import RegisterModal from "./RegisterModal";

function Modal() {
  const [isForget, setIsForget] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  function handleForget(bool) {
    setIsForget(bool);
  }

  function handleRegister(bool) {
    setIsRegister(bool)
  }

  
  return (
    <>
      {isForget ? (
        <ForgetModal active={(bool) => handleForget(bool)} />
      ) : isRegister ? (<RegisterModal active={(bool) => handleRegister(bool)}/>) : (
        <form>
          <div className="container">
            <h3>Login</h3>
            <div>
              <div className="separator-line"></div>
              <label className="username-label">
                <b>Username</b>
              </label>
              <br />
              <input type="text" placeholder="Enter Username" name="uname" required />
              <br />
              <br />

              <label className="password-label">
                <b>Password</b>
              </label>
              <br />
              <input type="password" placeholder="Enter Password" name="psw" required />
            </div>

            <br />
            <br />
            <button type="submit">Login</button>
            <span className="psw" onClick={() => handleForget(true)}>
              <b>Forgot Password?</b>
            </span>
            <div className="separator-line2"></div>
            <br />
            <span className="reg-text"> Dont have an account?</span>
            <button className="register" onClick={() => handleRegister(true)}>Register</button>
          </div>
        </form>
      )}
    </>
  );

  
}

export default Modal;
