import { useAppDispatch, useAppSelector } from "../../../../store";
import axios from 'axios';
import { authenticationViewMode } from "../../contants/login";
import AuthPanelContainer from "../AuthPanelContainer";
import PanelToggle from "../PanelToggle";
import "./styles.scss";
import { selectLoginViewMode } from "../../store/selectors/login";
import { useState } from "react";
import { setUser, setUserJWT, setViewMode } from "../../store";
import { userInfo } from "../../types/users";
import { toast } from "sonner";

const RegisterPanel: React.FC = () => {
  const activePanel = useAppSelector(selectLoginViewMode);
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: userInfo = {
      username: username,
      first_name: firstName,
      last_name: lastName,
      age: age,
      email: email,
      password: password,
      role: "user",
    };
  
    try {
      const response = await axios.post('https://crisp-api-7bc2f4f0a358.herokuapp.com/signup', data);
      dispatch(setUser(response.data.data.user));
      dispatch(setUserJWT(response.data.data.token));
      dispatch(setViewMode(authenticationViewMode.LOGIN));
      toast.success('New user registered');
    } catch (error) {
      console.error(error);
      toast.error('Failed to register new user');
    }
  };


  return (
    <>
      {activePanel === "REGISTER" ? (
        <AuthPanelContainer>
          <div className='register-panel__container'>
            <h1 className='register-panel__title'>Register Panel</h1>
            <form className='register-panel__form' onSubmit={(e) => handleFormSubmit(e)}>
              <input type='text' placeholder='Username' className='register-panel__input' required value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type='text' placeholder='First Name' className='register-panel__input' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input type='text' placeholder='Last Name' className='register-panel__input' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <input type='number' placeholder='Age' className='register-panel__input' required value={age} onChange={(e) => setAge(parseInt(e.target.value, 10))} />
              <input type='email' placeholder='Email' className='register-panel__input' required value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type='password' placeholder='Password' className='register-panel__input' required value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type='submit' className='register-panel__submit'>
                Register
              </button>
            </form>
            <div className='register-panel__login-toggle-mobile'>
            <PanelToggle type={authenticationViewMode.LOGIN} content='Login' isMobile={true}/>
            </div>
          </div>
        </AuthPanelContainer>
      ) : (
        <div className="register-panel__register-toggle">
          <PanelToggle type={authenticationViewMode.REGISTER} content='Register' />
        </div>
      )}
    </>
  );
};

export default RegisterPanel;
