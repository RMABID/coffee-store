import { Link } from "react-router-dom";
import logo from "../assets/more/logo1.png";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="bg-footer-img  bg-cover bg-center bg-no-repeat">
        <div className="w-10/12 mx-auto font-rancho-font py-12 space-y-5 md:flex justify-between ">
          <div>
            <img className="w-20" src={logo} alt="" />
            <div>
              <h2 className="text-4xl font-medium text-[#331A15] my-5">
                Espresso Emporium
              </h2>
              <p className="font-raleway-font">
                Always ready to be your friend. Come & Contact with us to share
                your <br /> memorable moments, to share with your best
                companion.
              </p>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <Link className="text-2xl">
                <FaFacebook />
              </Link>
              <Link className="text-2xl">
                <FaTwitter />
              </Link>
              <Link className="text-2xl">
                <IoLogoInstagram />
              </Link>
              <Link className="text-2xl">
                <FaLinkedin />
              </Link>
            </div>
            <div>
              <h2 className="text-4xl my-5 font-medium text-[#331A15]">
                Get in Touch
              </h2>
              <ul className="flex flex-col gap-2 mt-4 ">
                <li className="flex items-center gap-3">
                  <FaPhoneAlt /> <span>+88 01533 333 333</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdEmail /> <span>info@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdLocationPin />{" "}
                  <span>72, Wall street, King Road, Dhaka</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-5/12">
            <h2 className="text-4xl mb-4 font-medium text-[#331A15]">
              Connect with Us
            </h2>
            <form className="flex flex-col gap-4">
              <input
                className="p-3 rounded-xl"
                type="text"
                name=""
                id=""
                placeholder="Name"
              />

              <input
                className="p-3 rounded-xl"
                type="text"
                name=""
                id=""
                placeholder="Email"
              />
              <textarea
                className="p-3 rounded-xl"
                rows={4}
                name=""
                id=""
                placeholder="Message"
              ></textarea>
              <button className="btn w-36 rounded-full bg-transparent border-2 border-black text-black">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-footer-end-img bg-center bg-cover bg-no-repeat">
        <p className="text-lg font-rancho-font py-2 font-medium text-[#FFFFFF] text-center">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
