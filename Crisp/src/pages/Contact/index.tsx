import Footer from "../../modules/common/components/Footer";
import Contacts from "../../modules/contacts/components/index";
import "./styles.scss";

const Contact = () => {
    return (
        <div className="contact-page">
            <Contacts />
            <Footer />
        </div>
    )
}

export default Contact;