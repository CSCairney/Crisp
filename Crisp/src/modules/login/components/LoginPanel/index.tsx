import React from "react";
import { authenticationViewMode } from "../../contants/login";
import PanelContainer from "../PanelContainer";
import "./styles.scss";
import PanelToggle from "../PanelToggle";
import { useAppSelector } from "../../../../store";
import { selectLoginViewMode } from "../../store/selectors/login";

const LoginPanel: React.FC = () => {
  const activePanel = useAppSelector(selectLoginViewMode);
  console.log(activePanel);

  const handleSubmit = () => {
    console.log("Submit");
  };
  // Test
  return (
    <>
      {activePanel === "LOGIN" ? (
        <PanelContainer position="left">
          <div className='login-panel__container'>
            <h1 className='login-panel__title'>Login Panel</h1>
            <form className='login-panel__form' onSubmit={handleSubmit}>
              <input type='text' placeholder='Username' className='login-panel__input' />
              <input type='password' placeholder='Password' className='login-panel__input' />
              <button type='submit' className='login-panel__submit'>
                Login
              </button>
            </form>
          </div>
        </PanelContainer>
      ) : (
        <PanelToggle type={authenticationViewMode.LOGIN} content='Login Panel' />
      )}
    </>
  );
};

export default LoginPanel;
