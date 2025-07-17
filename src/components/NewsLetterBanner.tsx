import NewsLetterSvg from "../assets/Subscribe.svg";
import { TypingText } from "./TypingText";
const NewsletterBanner = () => {
  return (
    <div
      data-aos="fade-right"
      className="flex md:flex-row flex-col md:h-[400px] mt-16 relative justify-between bg-[#E6F0F1] md:p-8 p-4 rounded-xl w-full  mx-auto "
    >
      {/* Left content */}
      <div className="flex-1 space-y-4">
        <p className="text-yellow-500 text-[16px] ">
          <TypingText words={["Subscribe to our newsletter"]} speed />
        </p>
        <h2 className="font-poppins font-[700] text-[24px] md:text-[40px] text-[#032A32]">
          Don’t Miss a Thing
        </h2>
        <p className="text-gray-700  w-[96%] text-[16px] md:text-[18px]">
          Get exclusive travel deals, hotel discounts, and insider tips straight
          to your inbox. Subscribe now and never miss out on the best travel
          offers!
        </p>

        {/* Email input and button */}
        <form className="flex items-center bg-none border rounded-full border-[#B4B8B8] md:p-2 p-1 overflow-hidden md:w-[96%]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-4 py-2 placeholder:text-[18px] outline-none bg-transparent text-[18px] text-gray-700"
          />
          <button
            type="submit"
            className="bg-[#076476] hover:text-[#076476] hover:bg-[#FFC215] text-white text-[16px] font-[700] px-6 py-2 rounded-full transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Right image */}
      <div className="flex-[0.8] md:relative ">
        <img
          src={NewsLetterSvg}
          alt="Newsletter"
          className="w-full md:absolute mt-10 md:mt-0 -bottom-16 h-auto"
        />
      </div>
    </div>
  );
};

export default NewsletterBanner;
