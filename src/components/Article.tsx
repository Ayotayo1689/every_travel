import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleProps {
  title?: string;
  provider?: string;
  description?: string;
  image?: string;
}

const Article = ({
  title = "Article Title",
  description = "Article description goes here with some details about the content.",
  image = "/placeholder.svg?height=400&width=600",
}: ArticleProps) => {
  return (
    <div className="group  md:h-[170px] w-full   duration-300">
      <div className="flex  md:h-full w-full">
        {/* Image section - left side */}
        <div className=" w-[40%] h-[130px] md:h-full md:w-[30%]  rounded-2xl relative overflow-clip">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className=" md:aspect-video  object-center  md:h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content section - right side */}
        <div className="w-[60%] md:w-[70%]  py-3 px-2 md:px-6 flex flex-col md:justify-center">
          <div>
            <h3 className="md:text-[20px] text-[16px] font-poppins font-[600] text-[#1D1F1F] mb-2 ">
              {title}
            </h3>
            <p className="text-[14px] mt-4 text-[#5D6465]">{description}</p>
          </div>

          <Button className="mt-4 hidden md:flex p-0 md:rounded-2xl bg-white text-teal-700 hover:text-[#FFC215] hover:bg-[#fff]   w-fit transform translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
            Read Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Article;
