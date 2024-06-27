import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./custom.css";

const ServicesCarousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=" services"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {/* Add your actual content here */}
      <div className="hover-container h-[700px] border-r-2 hover:text-white group">
        <div className="text-center h-full flex items-center justify-center p-5">
          <div>
            <h3 className="text-4xl mt-[-100px] ml-10 uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Brand Strategy
            </h3>
            <p className="carousel-p hidden-on-hover text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container h-[700px] border-r-2 hover:text-white group">
        <div className="text-center h-full flex items-center justify-center p-5">
          <div>
            <h3 className="text-4xl mt-[-100px] uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Media Buying Strategy
            </h3>
            <p className="carousel-p hidden-on-hover text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container h-[700px] border-r-2 hover:text-white group">
        <div className="text-center h-full flex items-center justify-center p-5">
          <div>
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Research Solution
            </h3>
            <p className="carousel-p hidden-on-hover text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container h-[700px] border-r-2 hover:text-white group">
        <div className="text-center h-full flex items-center justify-center p-5">
          <div>
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Tech Innovation
            </h3>
            <p className="carousel-p hidden-on-hover text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container h-[700px] border-r-2 hover:text-white group">
        <div className="text-center h-full flex items-center justify-center p-5">
          <div>
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Social Media Solution
            </h3>
            <p className="carousel-p hidden-on-hover text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container h-[700px] border-r-2 hover:text-white group">
        <div className="text-center h-full flex items-center justify-center p-5">
          <div>
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Content Development
            </h3>
            <p className="carousel-p hidden-on-hover text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container h-[700px] border-r-2 hover:text-white group">
        <div className="text-center h-full flex items-center justify-center p-5">
          <div>
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Influencer Partnerships
            </h3>
            <p className="carousel-p hidden-on-hover text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container h-[700px] border-r-2 hover:text-white group">
        <div className="text-center h-full flex items-center justify-center p-5">
          <div>
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Pr Innovations
            </h3>
            <p className="carousel-p hidden-on-hover text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container h-[700px] border-r-2 hover:text-white group">
        <div className="text-center h-full flex items-center justify-center p-5">
          <div>
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Films & Production
            </h3>
            <p className="carousel-p hidden-on-hover text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container h-[700px] border-r-2 hover:text-white group">
        <div className="text-center h-full flex items-center justify-center p-5">
          <div>
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              3d Motion Contents
            </h3>
            <p className="carousel-p hidden-on-hover text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default ServicesCarousel;
