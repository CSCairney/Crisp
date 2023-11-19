import Title from "../../modules/about/components/Title";
import Header from "../../modules/about/components/Header";
import "./styles.scss";
import { OurStoryContent } from "../../assets/about/information";
import OurValues from "../../modules/about/components/OurValues";

const About = () => {
    return (
        <div className="about-us">
            <Header />
            <Title title="About Us" alt="About us title" content={OurStoryContent} />
            <OurValues />
        </div>
    )
}

export default About;