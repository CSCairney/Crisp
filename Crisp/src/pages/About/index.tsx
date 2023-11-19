import { OurStoryContent } from "../../assets/about/information";
import Header from "../../modules/about/components/Header";
import OurValues from "../../modules/about/components/OurValues";
import Title from "../../modules/about/components/Title";

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