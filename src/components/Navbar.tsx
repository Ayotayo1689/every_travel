import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import NavFb from "../assets/Nav-FB.svg";
import NavX from "../assets/Nav-x.svg";
import NavLinkedin from "../assets/Nav-Linkedin.svg";
import NavInsta from "../assets/Nav-Insta.svg";
import NavMail from "../assets/Nav-mail.svg";
import NavUk from "../assets/Uk.svg";

import Logo from "../assets/logo.svg";
import AuthModal from "./AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "@/store/features/modalSlice";
import { RootState } from "@/store/store";

interface NavbarProps {
  isLoggedIn?: boolean;
  ShowLogo?: boolean;
  userName?: string;
}

export default function Navbar({
  isLoggedIn = false,
  ShowLogo = false,
  userName = "Jane",
}: NavbarProps) {
  const dispatch = useDispatch();

  const [currency] = useState("NGN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { isModalOpen, modalType } = useSelector(
    (state: RootState) => state.modal
  );

  const closeModalFunc = () => {
    dispatch(closeModal());
  };

  const linkClass =
    "relative w-fit text-[16px] text-gray-800 hover:text-yellow-500 transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full";
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full border-b bg-white py-2">
        <div className="container py-2 px-[6%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[16px] text-gray-600">Follow On:</span>
            <div className="flex mr-3 items-center gap-3">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <img src={NavFb || "/placeholder.svg"} alt="" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <img src={NavX || "/placeholder.svg"} alt="" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <img src={NavLinkedin || "/placeholder.svg"} alt="" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <img src={NavInsta || "/placeholder.svg"} alt="" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <div className="mx-auto border-l-2 pl-4 flex items-center gap-2 md:mx-0">
              <img src={NavMail || "/placeholder.svg"} alt="" />{" "}
              <a
                href="mailto:info@everytravel.com"
                className="text-[16px] text-gray-600 hover:text-gray-900"
              >
                info@everytravel.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex mr-6 items-center gap-2">
              <span className="text-[16px] text-[#424748] font-[700]">
                {currency}
              </span>
              <img
                src={NavUk || "/placeholder.svg"}
                alt="UK Flag"
                className="rounded"
              />
            </div>

            <Link
              to="/list-property"
              className="text-[16px] font-[700] text-teal-700 hover:text-teal-800"
            >
              List your property
            </Link>

            {isLoggedIn ? (
              <div className="relative">
                <button
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-700 text-white">
                    J
                  </div>
                  <span>Hi, {userName}</span>
                  <ChevronDown size={16} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Bookings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <hr className="my-1" />
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  className="rounded-full border text-[16px] border-[#076476] bg-[#E6F0F1] px-5 py-2.5 text-[#076476] hover:bg-[#fff9e8] hover:text-[#ffce44] hover:border-[#ffce44] font-[700]"
                  onClick={() => dispatch(openModal({ type: "login" }))}
                >
                  Login
                </button>
                <button
                  className="rounded-full font-[700] text-[16px] bg-[#076476] px-5 py-2.5 text-white hover:text-[#076476] hover:bg-[#ffce44]"
                  onClick={() => dispatch(openModal({ type: "signup" }))}
                >
                  Create Account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {!ShowLogo && (
        <div className="w-full ssticky top-4 bg-[#EFF0F0] ">
          <div className="container py-2 px-[6%] mx-auto flex items-center justify-between ">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={Logo || "/placeholder.svg"}
                alt="Every Travell Logo"
                className="h-full w-full object-contain"
              />
            </Link>

            <nav className="hidden text-[16px] gap-8 md:flex">
              <ul className="flex items-center gap-8">
                <li>
                  <Link to="/hotels" className={linkClass}>
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link to="/airport-rides" className={linkClass}>
                    Airport Rides
                  </Link>
                </li>
                <li>
                  <Link to="/car-hire" className={linkClass}>
                    Car Hire
                  </Link>
                </li>
                <li>
                  <Link to="/corporate-travel" className={linkClass}>
                    Corporate Travel
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={linkClass}>
                    Contact
                  </Link>
                </li>
              </ul>
              <button className="rounded-full bg-white p-2 shadow-sm hover:bg-gray-50">
                <Search className="h-5 w-5 text-gray-700" />
                <span className="sr-only">Search</span>
              </button>
            </nav>
          </div>
        </div>
      )}

      <AuthModal
        isOpen={isModalOpen}
        onClose={closeModalFunc}
        modalType={modalType}
      />
    </div>
  );
}
