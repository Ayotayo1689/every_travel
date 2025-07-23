import Container from "@/components/Container";

import ContactImg from "../assets/contactImg.jpg";

import ContactSection from "@/components/ContactComp";
import NewsletterBanner from "@/components/NewsLetterBanner";

const Contact = () => {
  return (
    <div>
      <div
       data-aos="fade-up" 
        className="relative min-h-[50dvh] w-full flex flex-col md:items-center justify-center pb-8"
        style={{
          backgroundImage: `url('${ContactImg}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          // backgr
        }}
      >
        <div className="absolute inset-0 bg-[#032A3266]" />

        <div className="relative z-50 md:text-center px-4 md:mx-auto mb-8">
          <h1 className="text-[40px]   md:text-[60px]  flex  md:justify-center md:items-center gap-3 font-[700] font-poppins text-white">
            Contact Us — <br className="block md:hidden" /> We’re Here to{" "}
            <br className="block md:hidden" /> Help!
          </h1>
        </div>
      </div>

      <div className="w-full">
        <Container>
          <ContactSection />
        </Container>
        <Container>
          <NewsletterBanner />
        </Container>
      </div>
    </div>
  );
};

export default Contact;
