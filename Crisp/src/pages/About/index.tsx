import Header from "../../modules/about/components/header/index.tsx";
import Title from "../../modules/about/components/Title/index.tsx";
import OurValues from "../../modules/about/components/OurValues/index.tsx";
import { OurStoryContent } from "../../assets/about/information";
import "./styles.scss";
import Footer from "../../modules/common/components/Footer/index.tsx";

const About = () => {
    return (
        <div className="about-us">
            <Header />
            <Title title="About Us" alt="About us title" content={OurStoryContent} />
            <OurValues />
            <Footer />
        </div>
    )
}

export default About;