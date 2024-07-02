/* eslint-disable react/no-unknown-property */
import img1 from "../../../assets/images/w-3.webp";
import img2 from "../../../assets/images/w-2.webp";
import img3 from "../../../assets/images/w-1.webp";
import { Link } from "react-router-dom";
import "./Work.css";
import { FaPlayCircle } from "react-icons/fa";

const Work = () => {
  return (
    <div className="my-14 mx-3 lg:container lg:mx-auto lg:max-w-[1200px]">
      <h2 className="text-4xl text-center text-[#0A5C5B] font-semibold mb-10">
        Our Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          data-aos="fade-up"
          className="card card-compact w-full min-h-[200px] bg-[#F1F1F1] rounded-xl"
        >
          <Link
            to={"https://www.youtube.com/watch?v=s5hEEFpzHN0"}
            target="_blank"
            className="relative"
          >
            <img
              className="min-h-[200px] rounded-t-xl"
              src={img1}
              alt="image not found"
            />
            <div className="custom-play-button">
              <div className="play-icon tooltip" data-tip="Play">
                <FaPlayCircle className="text-4xl text-white " />
              </div>
            </div>
          </Link>
          <div className="card-body">
            <p>
              Brother Printers: From Drafts to Dreams Empowering Young Creators
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="card card-compact w-full min-h-[200px] bg-[#F1F1F1] rounded-xl"
        >
          <Link
            to={"https://www.youtube.com/watch?v=wR7wehW-kLo"}
            target="_blank"
            className="relative"
          >
            <img
              className="min-h-[200px] rounded-t-xl"
              src={img2}
              alt="image not found"
            />
            <div className="custom-play-button">
              <div className="play-icon tooltip" data-tip="Play">
                <FaPlayCircle className="text-4xl text-white" />
              </div>
            </div>
          </Link>
          <div className="card-body">
            <p>
              Brother Printers: From Drafts to Dreams Empowering Young Creators
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="card card-compact w-full min-h-[200px] bg-[#F1F1F1] rounded-xl"
        >
          <Link
            to={"https://www.youtube.com/watch?v=2JSDeDEnTaw"}
            target="_blank"
            className="relative"
          >
            <img
              className="min-h-[200px] rounded-t-xl"
              src={img3}
              alt="image not found"
            />
            <div className="custom-play-button">
              <div className="play-icon tooltip" data-tip="Play">
                <FaPlayCircle className="text-4xl text-white" />
              </div>
            </div>
          </Link>
          <div className="card-body">
            <p>
              Brother Printers: From Drafts to Dreams Empowering Young Creators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
