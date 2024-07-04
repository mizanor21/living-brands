import { Link } from "react-router-dom";
import heroImg from "../../../assets/images/hero-img.png";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="px-3 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className=" mb-6 font-sans font-bold tracking-tight text-[#185C5D] text-4xl sm:leading-none lg:text-6xl">
                Spark Something Real. Live Your Brands with Us.
              </h2>
              <p className="text-base text-[#323232] md:text-lg">
                We ignite emotions, tell captivating stories, create campaigns
                that resonate, and drive real results. Let&apos;s bring your
                brand to life.
              </p>
            </div>
            <div className="mt-5">
              <Link
                to={
                  "https://www.google.com/maps/place/Living+Brands,+House+230+Road+16,+Dhaka+1212/data=!4m2!3m1!1s0x3755c700426d1655:0x8a70d2c34d6aae47?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNS4xMDIYACDXggMqUSw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQkQ%3D&g_st=aw"
                }
                target="_blank"
                className="bg-[#185C5D] hover:bg-[#1d7374] rounded-full px-6 py-2 text-white"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
          <div className="relative">
            <img className=" w-[400px]" src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
