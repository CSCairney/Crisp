import React, { useState } from "react";
import { authenticationViewMode } from "../../contants/login";
import AuthPanelContainer from "../AuthPanelContainer";
import axios from 'axios';
import "./styles.scss";
import PanelToggle from "../PanelToggle";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectLoginViewMode } from "../../store/selectors/login";
import { useNavigate } from "react-router";
import { userInfo } from "../../types/users";
import { loginUser } from "../../store/actions/login";
import { toast } from "sonner";
import { panelTypes } from "../../../common/constants/menu";
import { setPanelOpenStatus } from "../../../common/store";

const LoginPanel: React.FC = () => {
  const activePanel = useAppSelector(selectLoginViewMode);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const loginInfo = {
      username: username,
      password: password,
    };
    const response = await axios.post("https://crisp-api-7bc2f4f0a358.herokuapp.com/login", loginInfo);
    const user: userInfo = response.data.data.user;
    const token = response.data.data.token;
    dispatch(loginUser(user, token));
    navigate("/");
    dispatch(setPanelOpenStatus(panelTypes.Selection))
    toast.success('Login successful');
  };
  // Test
  return (
    <>
      {activePanel === "LOGIN" ? (
        <AuthPanelContainer>
          <div className='login-panel__container'>
            <h1 className='login-panel__title'>Login Panel</h1>
            <form className='login-panel__form' onSubmit={handleSubmit}>
              <input type='text' placeholder='Username' className='login-panel__input' value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type='password' placeholder='Password' className='login-panel__input' value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type='submit' className='login-panel__submit box-shadow'>
                Login
              </button>
            </form>
            <div className="login-panel__login-toggle-mobile">
            <PanelToggle type={authenticationViewMode.REGISTER} content='Register' isMobile={true} />
            </div>
          </div>
        </AuthPanelContainer>
      ) : (
        <div className="login-panel__login-toggle">
          <PanelToggle type={authenticationViewMode.LOGIN} content='Login' />
        </div>
      )}
    </>
  );
};

export default LoginPanel;
