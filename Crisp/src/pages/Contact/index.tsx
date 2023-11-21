import Footer from "../../modules/common/components/Footer";
import Contacts from "../../modules/contacts/components/index";
import Seo from "../../modules/common/components/Seo";
import "./styles.scss";

const Contact = () => {
    return (
        <>
            <Seo title="Crisp | Contact Us" description="Contact are experienced developers and also send us your feedback!" name="Github: CSCairney" type="website" />
            <div className="contact-page">
                <Contacts />
                <Footer />
            </div>
        </>
    )
}

export default Contact;