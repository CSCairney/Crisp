import { useAppDispatch, useAppSelector } from "../../../../store";
import { authenticationViewMode } from "../../contants/login";
import PanelContainer from "../PanelContainer";
import PanelToggle from "../PanelToggle";
import "./styles.scss";
import { selectLoginViewMode } from "../../store/selectors/login";
import { useId, useState } from "react";
import { setUser } from "../../store";
import { accessLevel } from "../../contants/users";
import { userInfo } from "../../types/users";
import { toast } from "sonner";

const RegisterPanel: React.FC = () => {
  const activePanel = useAppSelector(selectLoginViewMode);
  const dispatch = useAppDispatch();

  // Form data
  // TODO - Hash password / updated storage method
  const [id] = useId();
  const currentDate = new Date();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: userInfo = {
      id: id,
      username: username,
      email: email,
      password: password,
      role: accessLevel.Basic,
      status: "",
      created_at: currentDate.toISOString(),
      updated_at: currentDate.toISOString(),
      contactInfo: {
          mobile: mobile
      },
    };

    try {
      dispatch(setUser(data));
      toast.success("New user registered")
    } catch (error) {
      console.log(error);
      toast.error("Failed to register new user")
    }
  };

  return (
    <>
      {activePanel === "REGISTER" ? (
        <PanelContainer position='right'>
          <div className='register-panel__container'>
            <h1 className='register-panel__title'>Register Panel</h1>
            <form className='register-panel__form' onSubmit={(e) => handleFormSubmit(e)}>
              <input type='text' placeholder='Username' className='register-panel__input' required value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type='email' placeholder='Email' className='register-panel__input' required value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type='password' placeholder='Password' className='register-panel__input' required value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type='text' placeholder='Mobile Number' className='register-panel__input' required value={mobile} onChange={(e) => setMobile(e.target.value)} />
              <button type='submit' className='register-panel__submit'>
                Register
              </button>
            </form>
          </div>
        </PanelContainer>
      ) : (
        <PanelToggle type={authenticationViewMode.REGISTER} content='Register Panel' />
      )}
    </>
  );
};

export default RegisterPanel;
