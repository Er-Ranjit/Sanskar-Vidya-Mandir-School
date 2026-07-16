import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Statistics from "../components/home/Statistics";
import PrincipalMessage from "../components/home/PrincipalMessage";
import LatestNotices from "../components/home/LatestNotices";
import Facilities from "../components/home/Facilities";
import Academics from "../components/home/Academics";
import HomeGallery from "../components/home/HomeGallery";

const Home = () => {
  return (
    <>
  <div className="pt-18">
    <Hero />
  </div>

  <AboutSection />
  <WhyChooseUs />
  <Statistics />
  <PrincipalMessage />
  <LatestNotices />
  <Facilities />
  <Academics />
    </>
  );
};

export default Home;