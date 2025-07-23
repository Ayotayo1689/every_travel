import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface OfferProps {
  id: number;
  icon: React.ReactNode;
  provider: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export const OfferCard = ({ offer }: { offer: OfferProps }) => {
  return (
    <div
    data-aos="fade-up" 
      className={`relative overflow-hidden rounded-2xl border   transition-all duration-300 group ${offer.color} h-[200px] md:h-[250px]`}
    >
      <div className="flex h-full relative">
        <div className="w-[90%] z-10    -top-[8vh] right-[42%] border-6 group-hover:border-yellow-100 group-hover:bg-white duration-300 ease-out aspect-square absolute rounded-full bg-[#E6F0F1] border-white">
          <div className=" p-4  z-10  w-[50%] rounded-full aspect-square "></div>
        </div>

        <div className=" w-[55%] p-4 flex flex-col group-hover:justify-center  duration-300 ease-out z-10 ">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              {offer.icon}
              <span className="text-[12px] font-[400] text-teal-800">
                {offer.provider}
              </span>
            </div>
            <h3 className="text-[16px] md:text-[21px] font-poppins font-[600] text-gray-900 mb-4 leading-tight">
              {offer.title}
            </h3>
            <p className="text-[10.5px] text-gray-700">{offer.description}</p>
          </div>

          <Button className="mt-4 md:rounded-2xl bg-white text-teal-700 hover:text-[#FFC215] hover:bg-yellow-100 hover:border-[#FFC215] border border-teal-700 w-fit transform translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-600 transition-all duration-300 ease-out">
            Book Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="absolute top-0  right-0 w-[55%] h-full overflow-hidden">
          <div className="h-full w-full relative">
            <img
              src={offer.image || "/placeholder.svg"}
              alt={offer.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
