import { authenticationViewMode } from "../../contants/login";
import PanelContainer from "../PanelContainer";
import "./styles.scss";

const LoginPanel = () => {

    const handleSubmit = () => {
        console.log("Submit");
    }
    return (
        <PanelContainer activeStatus={authenticationViewMode.LOGIN}>
            <div className="login-panel__container">
                <h1 className="login-panel__title">Login Panel</h1>
                <form className="login-panel__form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" className="login-panel__input" />
                    <input type="password" placeholder="Password" className="login-panel__input" />
                    <button type="submit" className="login-panel__submit">Login</button>
                </form>
            </div>
        </PanelContainer>
    )
}

export default LoginPanel;