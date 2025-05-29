import NavFb from "../assets/Nav-FB.svg";
import NavX from "../assets/Nav-x.svg";
import NavLinkedin from "../assets/Nav-Linkedin.svg";
import NavInsta from "../assets/Nav-Insta.svg";
import NavMail from "../assets/Nav-mail.svg";
import Logo from "../assets/logo.svg";
import Phone from "../assets/Phone.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const linkClass =
    "relative w-fit text-[16px]  text-gray-800 hover:text-yellow-500 transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="w-full ">
      <div className="w-full border-b bg-white py-2">
        <div className="container py-2  px-[6%] mx-auto flex items-center justify-between">
          <footer className="bg-white mx-auto w-full border-t">
            <div className="  py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex text-[16px] flex-col gap-5">
                <Link to="/" className="flex items-center gap-2">
                  <img
                    src={Logo}
                    alt="Every Travell Logo"
                    className=" object-contain"
                  />
                </Link>{" "}
                <p className="text-[16px] text-gray-600 mb-4">
                  Seamless travel, effortless bookings
                  <br />
                  Find the best hotels, car rentals, and
                  <br />
                  airport pickups
                </p>
                <div className="flex gap-2 mb-4 text-gray-600">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <img src={NavFb} alt="" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <img src={NavX} alt="" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <img src={NavLinkedin} alt="" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <img src={NavInsta} alt="" />
                  </a>
                </div>
                <p className="text-[16px] flex items-center gap-2 mb-1">
                  <img src={NavMail} alt="" />
                  info@everytravell.com
                </p>
                <p className="text-[16px] flex items-center gap-2">
                  <img src={Phone} alt="" />
                  +234 8012345678
                </p>
              </div>

              <div data-aos="fade-up">
                <h4 className="text-[16px] mb-3 text-[#5D6465]">EXPLORE</h4>
                <ul className="space-y-2">
                  {[
                    "Lagos",
                    "Abuja",
                    "Calabar",
                    "Kano",
                    "Abia",
                    "Enugu",
                    "Oyo",
                    "Ogun",
                  ].map((city) => (
                    <li className="mt-5" key={city}>
                      <a href="#" className={linkClass}>
                        {city}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-aos="fade-up">
                <h4 className="text-[16px] mb-3 text-[#5D6465]">SERVICES</h4>
                <ul className="space-y-2">
                  {[
                    "Hotel",
                    "Car Rental",
                    "Airport Pickup",
                    "Corporate Travel",
                  ].map((service) => (
                    <li className="mt-5" key={service}>
                      <a href="#" className={linkClass}>
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-aos="fade-up">
                <h4 className="text-[16px] mb-3 text-[#5D6465]">COMPANY</h4>
                <ul className="space-y-2">
                  {[
                    "About Us",
                    "FAQ",
                    "List your property",
                    "Register with Us",
                    "Contact",
                    "Privacy Policy",
                    "Terms of Service",
                  ].map((item) => (
                    <li className="mt-5" key={item}>
                      <a href="#" className={linkClass}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="text-center text-[14px] text-gray-500 border-t py-4"
            >
              copyright © 2025 EveryTravell Nigeria, All Rights Reserved.
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
