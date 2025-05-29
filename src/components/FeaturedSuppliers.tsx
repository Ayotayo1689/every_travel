import Suppliers from "../assets/Suppliers.svg";
const FeaturedSuppliers = () => {
  const suppliers = [
    {
      name: "Enterprise",
      logo: "/placeholder.svg?height=50&width=150",
      alt: "Enterprise logo",
    },
    {
      name: "Hertz",
      logo: "/placeholder.svg?height=50&width=150",
      alt: "Hertz logo",
    },
    {
      name: "Budget",
      logo: "/placeholder.svg?height=50&width=150",
      alt: "Budget logo",
    },
    {
      name: "Thrifty",
      logo: "/placeholder.svg?height=50&width=150",
      alt: "Thrifty logo",
    },
    {
      name: "Avis",
      logo: "/placeholder.svg?height=50&width=150",
      alt: "Avis logo",
    },
    {
      name: "Alamo",
      logo: "/placeholder.svg?height=50&width=150",
      alt: "Alamo logo",
    },
    {
      name: "National",
      logo: "/placeholder.svg?height=50&width=150",
      alt: "National logo",
    },
    {
      name: "Dollar",
      logo: "/placeholder.svg?height=50&width=150",
      alt: "Dollar logo",
    },
    {
      name: "Sixt",
      logo: "/placeholder.svg?height=50&width=150",
      alt: "Sixt logo",
    },
  ];

  return (
    <section data-aos="fade-left" className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-[700] font-poppins text-[#032A32] mb-2">
            Our Featured Car Rental Suppliers
          </h2>
          <p className="text-gray-600 text-[18px]">
            We compare car hire prices from car rental suppliers nationwide
          </p>
        </div>

        <div className="flex  flex-wrap justify-center items-center gap-8 md:gap-12">
          <img src={Suppliers } className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSuppliers;
