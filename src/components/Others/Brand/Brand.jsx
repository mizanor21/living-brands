import "./Brand.css";
import brand1 from "../../../assets/images/l-1.png";
import brand2 from "../../../assets/images/l-2.png";
import brand3 from "../../../assets/images/l-3.png";
import brand5 from "../../../assets/images/l-5.png";
import brand6 from "../../../assets/images/l-6.png";
import brand7 from "../../../assets/images/l-7.png";
import brand8 from "../../../assets/images/l-8.png";
import brand10 from "../../../assets/images/l-10.png";
import brand12 from "../../../assets/images/l-12.png";
import brand13 from "../../../assets/images/l-13.png";
import brand14 from "../../../assets/images/l-14.png";
import brand17 from "../../../assets/images/l-17.png";
import brand18 from "../../../assets/images/l-18.png";

const Brand = () => {
  return (
    <div className="my-20 lg:container lg:mx-auto">
      <h3 className="text-center mb-10 text-4xl font-medium text-[#185C5D]">
        Our Beloved Brands
      </h3>
      <div className="carousel-wrapper">
        <div className="carousel-container gap-5">
          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand1}
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand2}
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand3}
              alt="Drink"
            />
          </div>

          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand5}
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand6}
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand7}
              alt="Drink"
            />
          </div>

          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand10}
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand12}
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand8}
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand13}
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand14}
              alt="Drink"
            />
          </div>

          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand17}
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              className="saturate-0 h-20 hover:saturate-100"
              src={brand18}
              alt="Drink"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
