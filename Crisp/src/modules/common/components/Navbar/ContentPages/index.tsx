import { Link } from "react-router-dom";
import { MainRoutes, SubRoutes } from "../../../../../routes";
import "./styles.scss";

const ContentPages: React.FC = () => {
    return (
        <div className='content-pages__links-container'>
              <Link to={MainRoutes.HOME} className='content-pages__link' >Home</Link>
              <Link to={SubRoutes.CONTACT} className='content-pages__link' >{SubRoutes.CONTACT}</Link>
              <Link to={SubRoutes.ABOUT} className='content-pages__link' >{SubRoutes.ABOUT}</Link>
              <Link to={SubRoutes.BLOG} className='content-pages__link' >{SubRoutes.BLOG}</Link>
        </div>
    )
}

export default ContentPages;