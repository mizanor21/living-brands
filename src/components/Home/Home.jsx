import Banner from "../Others/Banner/Banner";
import Elevate from "../Others/Elevate/Elevate";
import IntroVideo from "../Others/IntroVideo/IntroVideo";
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
    </div>
  );
};

export default Home;
