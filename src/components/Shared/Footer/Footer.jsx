import { CiLocationOn } from "react-icons/ci";
import logo from "../../../assets/images/footer-logo.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaRegCopyright,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#185C5D] ">
      <footer className="footer text-base-content p-10 items-center justify-center">
        <img className="max-h-[230px] max-w-[900px]" src={logo} alt="" />
      </footer>
      <footer className="footer block lg:flex lg:justify-between border-base-300 border-b px-10 py-4 text-white justify-center">
        <div className="flex justify-center items-center gap-3 text-3xl">
          <Link
            to="https://www.facebook.com/Livingbrands.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://www.instagram.com/livingbrands.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            to="https://www.youtube.com/@livingbrands862"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </Link>
          <Link
            to="https://www.linkedin.com/company/livingbrandsbyhabson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
        </div>
        <div className="mt-5">
          <span className="flex items-center gap-2">
            <CiLocationOn className="text-3xl" />{" "}
            <p>
              Hosue: 230, New D.O.H.S Lake Road, Lane-16, Mohakhali, Dhaka-1206.
            </p>
          </span>
          <div className=" flex items-center justify-end gap-2">
            <FaRegCopyright className="text-xl" />
            <p>Living Brands All Rights Reserved</p>
          </div>
        </div>
      </footer>
      <div className="flex justify-center text-white py-5">
        <small>
          © 2024 Design & Dveloped By{" "}
          <a
            to="https://www.goinnovior.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#83bf24]"
          >
            Goinnovior Limited
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
<p></p>;
