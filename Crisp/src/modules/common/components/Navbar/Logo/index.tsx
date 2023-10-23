import { Link } from "react-router-dom"
import { MainRoutes } from "../../../../../routes"
import logo from "../../../../../assets/logo-transparent-color.webp"
import "./styles.scss"

const Logo = () => {
    return (
        <Link to={MainRoutes.HOME}>
          <img className='logo__image' src={logo} alt="Crisp Logo"/>
        </Link>
    )
} 

export default Logo;