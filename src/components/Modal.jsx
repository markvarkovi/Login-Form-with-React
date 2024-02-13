import "./Modal.css";

function Modal() {
  return (
    <>
      <form>
        <div className="container">
          <h3>Login</h3>
          <div>
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
          <span className="psw">
            <b>Forgot Password?</b>{" "}
          </span>
          <br />
          <br />
          <span> Dont have an account?</span>
          <button className="register">Register</button>
        </div>
      </form>
    </>
  );
}

export default Modal;
