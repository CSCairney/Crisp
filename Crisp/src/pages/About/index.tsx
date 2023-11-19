import Header from "../../modules/about/components/header/index.tsx";
import Title from "../../modules/about/components/Title/index.tsx";
import OurValues from "../../modules/about/components/OurValues/index.tsx";
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