import "./Modal.css";
import { useState } from "react";
import ForgetModal from "./ForgetModal"

function Modal() {

const [isForget, setIsForget] = useState(false)
 
    function handleForget() {
        setIsForget(true)
    }



  return (
    <>{isForget ? <ForgetModal/> : (<form>
        <div className="container">
          <h3>Login</h3>
          <div>
          <div className="separator-line"></div>
            <label>
              <b>Username</b>
            </label>
            <br />
            <input type="text" placeholder="Enter Username" name="uname" required />
            <br />
            <br />

            <label>
              <b>Password</b>
            </label>
            <br />
            <input type="password" placeholder="Enter Password" name="psw" required />
          </div>

          <br />
          <br />
          <button type="submit">Login</button>
          <span className="psw" onClick={handleForget}>
            <b>Forgot Password?</b>
          </span>
          <div className="separator-line2"></div>
          <br />
          <span> Dont have an account?</span>
          <button className="register">Register</button>
        </div>
      </form>)}
    </>
  );
}

export default Modal;
