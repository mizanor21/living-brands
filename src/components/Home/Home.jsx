import Banner from "../Others/Banner/Banner";
import Elevate from "../Others/Elevate/Elevate";
import IntroVideo from "../Others/IntroVideo/IntroVideo";
import Journey from "../Others/Journey/Journey";
import ServicesCarousel from "../Others/ServicesCarousel/ServicesCarousel";
import Work from "../Others/Work/Work";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <IntroVideo></IntroVideo>
      <Work></Work>
      <Elevate></Elevate>
      {/* <ServicesCarousel></ServicesCarousel> */}
      <Journey></Journey>
    </div>
  );
};

export default Home;
