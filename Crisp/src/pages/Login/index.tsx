import LoginPanel from "../../modules/login/components/LoginPanel";
import RegisterPanel from "../../modules/login/components/RegisterPanel";
import "./styles.scss";

const Login = () => {
    return (
        <div className="login-container">
            <LoginPanel />
            <RegisterPanel />
        </div>
    )
}

export default Login;