import Article from "./Article";

const NewsAndArticle = () => {
  return (
    <div className="  w-full  ">
      <h1 data-aos="fade-down" className="text-center font-poppins font-[700] md:text-[40px] text-[24px] mb-6 text-[#032A32] ">
        Latest News & Articles
      </h1>
      <div data-aos="fade-up" className="flex  flex-col md:flex-row gap-4 md:gap-10">
        <div className="flex-1 inset-0  md:min-h-[500px]">
          <div className=" flex-1 min-h-[60%] w-full  ">
            <div className="relative h-[100%]   overflow-hidden rounded-xl group cursor-pointer">
              <div className="relative  w-full h-[100%]  ">
                <img
                  src={
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute left-0 right-0 bottom-0 h-3/5 bg-gradient-to-t from-[#032a32] to-transparent transition-all duration-300 group-hover:h-5/5 pointer-events-none"></div>

                <div className=" p-4 bottom-0 w-full  absolute">
                  <div className="flex  items-center p-3 justify-between">
                    <div className=" bottom-0 left-0  z-10">
                      <h3 className="text-white mb-6 text-[24px] font-[700]">
                        Luxury vs. Budget Hotels – Which One is Right for You?
                      </h3>
                      <p className="text-white text-[16px]">18 Mar, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1.3] flex flex-col justify-between gap-4">
          <Article
            title="Top 10 Must-Visit Destinations in Nigeria"
            provider="Travel Insights"
            description="18 Mar, 2025"
            image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Article
            title="Top 10 Must-Visit Destinations in Nigeria"
            provider="Travel Insights"
            description="18 Mar, 2025"
            image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Article
            title="Top 10 Must-Visit Destinations in Nigeria"
            provider="Travel Insights"
            description="18 Mar, 2025"
            image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticle;
