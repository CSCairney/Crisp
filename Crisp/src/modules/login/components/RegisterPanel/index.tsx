import { authenticationViewMode } from "../../contants/login";
import PanelContainer from "../PanelContainer";
import "./styles.scss";

const RegisterPanel = () => {
    return (
        <PanelContainer activeStatus={authenticationViewMode.REGISTER}>
            <h1>Register Panel</h1>
        </PanelContainer>
    )
}

export default RegisterPanel;