import "./styles/ForgetModel.css"

function ForgetModal({active}) {

    return (
        <>
        <div className="forget-container">
           <h2 className="reset-text">Reset your password</h2>
           <input placeholder="Enter your email"/>
           <button className="send-btn">SEND</button>
        <span> We will send you an email to reset your password</span>
        <div className="remember-text"> Remember your password?</div>
        <div className="redirect" onClick={() => active(true)}>Login here</div> 
        </div>
        </>
    )
}

export default ForgetModal;