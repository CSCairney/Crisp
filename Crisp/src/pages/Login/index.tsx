import LoginPanel from "../../modules/login/components/LoginPanel";
import RegisterPanel from "../../modules/login/components/RegisterPanel";
import Seo from "../../modules/common/components/Seo";
import "./styles.scss";
import { useAppSelector } from "../../store";
import { selectLoginViewMode } from "../../modules/login/store/selectors/login";
import { authenticationViewMode } from "../../modules/login/contants/login";

const Login = () => {
  const activePanel = useAppSelector(selectLoginViewMode);

  return (
    <>
      <Seo title="Crisp | Login" description="Login or register to access map data!" name="Github: CSCairney" type="website" />
      <div className='login-container'>
        {activePanel === authenticationViewMode.LOGIN && <div className='login-container__background--left' />}
        {activePanel === authenticationViewMode.REGISTER && <div className='login-container__background--right' />}
        <LoginPanel />
        <RegisterPanel />
      </div>
    </>
  );
};

export default Login;
