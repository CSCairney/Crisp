import Title from "../../modules/about/components/Title/index.tsx";
import OurValues from "../../modules/about/components/OurValues/index.tsx";
import { OurStoryContent } from "../../assets/about/information";
import "./styles.scss";
import Footer from "../../modules/common/components/Footer/index.tsx";
import Seo from "../../modules/common/components/Seo/index.tsx";
import Evolution from "../../modules/about/components/Evolution/index.tsx";
import { evolutionContent } from "../../assets/about/information";
import Testimonals from "../../modules/about/components/Testimonals/index.tsx";
import { testimonialsInformation } from "../../assets/about/testimonials.ts";
import AboutHeader from "../../modules/about/components/AboutHeader/index.tsx";

const About = () => {
  return (
    <>
      <Seo
        title="Crisp | About Us"
        description="Learn about our history and future goals!"
        name="Github: CSCairney"
        type="website"
      />
      <div className="about-us">
        <AboutHeader />
        <Title
          title="About Us"
          alt="About us title"
          content={OurStoryContent}
        />
        <OurValues />
        <Evolution
          title={evolutionContent.title}
          alt={evolutionContent.alt}
          content={evolutionContent.content}
        />
        <Testimonals testimonials={testimonialsInformation} />
        <Footer />
      </div>
    </>
  );
};

export default About;
