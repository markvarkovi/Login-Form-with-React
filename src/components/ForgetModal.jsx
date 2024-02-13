import "./ForgetModel.css"

function ForgetModal() {
    return (
        <>
        <div className="forget-container">
           <h2 className="reset-text">Reset your password</h2>
           <input placeholder="Enter your email"/>
           <button>SEND</button>
        <span> We will send you an email to reset your password</span>
        <div> Remember your password?</div>
        <div>Login here</div> 
        </div>
        </>
    )
}

export default ForgetModal;