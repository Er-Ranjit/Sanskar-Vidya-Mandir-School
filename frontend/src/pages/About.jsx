import AboutHero from "../components/about/AboutHero";
import SchoolStory from "../components/about/SchoolStory";
import MissionVision from "../components/about/MissionVision";
import PrincipalSection from "../components/about/PrincipalSection";
import Statistics from "../components/home/Statistics";
import WhyChooseUs from "../components/home/WhyChooseUs";

const About = () => {
  return (
    <>
      <AboutHero />
      <SchoolStory />
      <MissionVision />
      <PrincipalSection />
      <Statistics />
      <WhyChooseUs />
    </>
  );
};

export default About;