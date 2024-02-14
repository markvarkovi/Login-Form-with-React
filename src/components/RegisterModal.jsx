import "./styles/RegisterModal.css"

function RegisterModal({active}) {
    return (
        <>
        <div className="register-container">
        <h1>Registration</h1>
        <div className="separator-line3"></div>
            <form className="reg-form">
            <label className="label-email"><b>Email</b></label>
           <input className="email-input" placeholder="Enter your email" type="email"/>
           <label className="label-username"><b>Username</b></label>
           <input className="username-input"placeholder="Enter your username"/>
           <label className="label-password"><b>Password</b></label>
           <input className="password-input"placeholder="Enter your password" type="password"/>
           <div className="separator-line4"></div>
           <button type="submit" className="reg-btn">Register</button>
            </form>
        <div className="remember-text"> Already have an account?</div>
        <div className="redirect" onClick={() => active(false)}>Login here</div> 
        </div>
        </>
    )
}

export default RegisterModal