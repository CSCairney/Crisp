import Header from "../../modules/about/components/Header";
import Title from "../../modules/about/components/Title";
import OurValues from "../../modules/about/components/OurValues";
import { OurStoryContent } from "../../assets/about/information";
import "./styles.scss";

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