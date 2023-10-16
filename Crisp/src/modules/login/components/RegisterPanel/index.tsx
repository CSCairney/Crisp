import { useAppSelector } from "../../../../store";
import { authenticationViewMode } from "../../contants/login";
import PanelContainer from "../PanelContainer";
import PanelToggle from "../PanelToggle";
import "./styles.scss";
import { selectLoginViewMode } from "../../store/selectors/login";

const RegisterPanel:React.FC = () => {
    const activePanel = useAppSelector(selectLoginViewMode);
    
    const handleRegister = () => {
        console.log("Submit");
      };

    return (
        <>
      {activePanel === authenticationViewMode.REGISTER ? <PanelContainer panelType={authenticationViewMode.REGISTER} activePanel={activePanel}>
        <div className='register-panel__container'>
          <h1 className='register-panel__title'>Register Panel</h1>
          <form className='register-panel__form' onSubmit={handleRegister}>
            <input type='text' placeholder='Username' className='register-panel__input' />
            <input type='password' placeholder='Password' className='register-panel__input' />
            <button type='submit' className='register-panel__submit'>
              Login
            </button>
          </form>
        </div>
      </PanelContainer> : <PanelToggle type={authenticationViewMode.LOGIN} content="Login Panel" />}
    </>
    )
}

export default RegisterPanel;