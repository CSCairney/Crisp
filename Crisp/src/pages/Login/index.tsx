import LoginPanel from "../../modules/login/components/LoginPanel";
import RegisterPanel from "../../modules/login/components/RegisterPanel";
import loginImage from "../../assets/login/login-image.jpeg";
import registerImage from "../../assets/login/register-image.jpg";
import "./styles.scss";
import { useAppSelector } from "../../store";
import { selectLoginViewMode } from "../../modules/login/store/selectors/login";
import { authenticationViewMode } from "../../modules/login/contants/login";

const Login = () => {
  const activePanel = useAppSelector(selectLoginViewMode);

  return (
    <div className='login-container'>
      {activePanel === authenticationViewMode.LOGIN && <img src={loginImage} alt='login-background' className='login-container__background' />}
      {activePanel === authenticationViewMode.REGISTER && <img src={registerImage} alt='register-background' className='login-container__background' />}
      <LoginPanel />
      <RegisterPanel />
    </div>
  );
};

export default Login;
