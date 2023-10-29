import React, { useState } from "react";
import { authenticationViewMode } from "../../contants/login";
import PanelContainer from "../PanelContainer";
import axios from 'axios';
import "./styles.scss";
import PanelToggle from "../PanelToggle";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectLoginViewMode } from "../../store/selectors/login";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { setUser, setUserJWT } from "../../store/index";

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
    }

    try {
        const response = await axios.post('http://localhost:3000/login', loginInfo);
        dispatch(setUser(response.data.data.user));
        dispatch(setUserJWT(response.data.data.token));
        toast.success('Login successful');
        navigate('/');
    } catch (error) {
        console.error(error);
        toast.error('Failed to Login successful');
    }
  };
  // Test
  return (
    <>
      {activePanel === "LOGIN" ? (
        <PanelContainer position="left">
          <div className='login-panel__container'>
            <h1 className='login-panel__title'>Login Panel</h1>
            <form className='login-panel__form' onSubmit={handleSubmit}>
              <input type='text' placeholder='Username' className='login-panel__input' value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type='password' placeholder='Password' className='login-panel__input' value={password} onChange={(e) => setPassword(e.target.value)} />
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
