import Banner from "../Others/Banner/Banner";
import IntroVideo from "../Others/IntroVideo/IntroVideo";
import ServicesCarousel from "../Others/ServicesCarousel/ServicesCarousel";
import Work from "../Others/Work/Work";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <IntroVideo></IntroVideo>
      <Work></Work>
      <ServicesCarousel></ServicesCarousel>
    </div>
  );
};

export default Home;
