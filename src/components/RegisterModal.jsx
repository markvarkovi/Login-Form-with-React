import { useState } from "react";
import "./styles/RegisterModal.css";

function RegisterModal({ active }) {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      {isRegistered ? (
        <div className="registered-box">
            <div className="border-line"></div>
          <h1 className="suc-reg-text">Your account has been successfully registered!</h1>
          <h4 className="suc-reg-email-text">We have sent a <em>verification link to your email</em>, please click on the link to finish the registration</h4>
          <button className="suc-reg-redirect" onClick={() => active(false)}>Back to login page</button>
        </div>
      ) : (
        <div className="register-container">
          <h1>Registration</h1>
          <div className="separator-line3"></div>
          <form className="reg-form">
            <label className="label-email">
              <b>Email</b>
            </label>
            <input className="email-input" placeholder="Enter your email" type="email" />
            <label className="label-username">
              <b>Username</b>
            </label>
            <input className="username-input" placeholder="Enter your username" />
            <label className="label-password">
              <b>Password</b>
            </label>
            <input className="password-input" placeholder="Enter your password" type="password" />
            <div className="separator-line4"></div>
            <button onClick={() => setIsRegistered(true)} className="reg-btn">
              Register
            </button>
          </form>
          <div className="remember-text"> Already have an account?</div>
          <div className="redirect" onClick={() => active(false)}>
            Login here
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterModal;
