import "./styles/ForgetModal.css"

function ForgetModal({active}) {

    return (
        <>
        <div className="forget-container">
           <h2 className="reset-text">Reset your password</h2>
           <input type="email" placeholder="Enter your email" required/>
           <button type="submit" className="send-btn">SEND</button>
        <span> We will send you an email to reset your password</span>
        <div className="remember-text"> Remember your password?</div>
        <div className="redirect" onClick={() => active(false)}>Login here</div> 
        </div>
        </>
    )
}

export default ForgetModal;