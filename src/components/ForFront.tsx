import Image1 from "../assets/Group 18.svg";
import Image2 from "../assets/Group 17.svg";
import Image3 from "../assets/Group 19.svg";

function ForFront() {
  return (
    <div style={{ backgroundColor: "#f2f0f1" }} className="py-5 ">
      <div className="md:flex">
        <div className="px-3 md:py-10 ">
          <div className="font-black text-4xl md:text-6xl leading-8 font-serif ">
            FIND CLOTHES
          </div>
          <div className="font-black text-4xl md:text-6xl leading-8 font-serif">
            THAT MATCHES
          </div>
          <div className="font-black text-4xl md:text-6xl leading-8 font-serif">
            YOUR STYLE
          </div>

          <div className="text-black text-opacity-60 py-2 md:w-2/3">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </div>

          <div className="bg-black text-white text-center py-4 my-2 rounded-full text-xl md:w-1/4">
            Shop Now
          </div>
          <div className="md:flex md:items-center md:mt-10 ">
            <div className="flex justify-center pt-2 md:pt-0">
              <div className="border-r-2 border-gray-300 px-5">
                <div className="font-bold text-4xl md:text-6xl">200+</div>
                <div className="text-black text-opacity-60 text-sm md:text-lg">
                  International Brands
                </div>
              </div>
              <div className="px-3 md:border-r-2 md:border-gray-300 md:mr-5 md:pl-5">
                <div className=" font-bold text-4xl md:text-6xl ">2,000+</div>
                <div className="text-black text-opacity-60 text-sm md:text-lg">
                  High-Quality Products
                </div>
              </div>
            </div>
            <div className="text-center mt-5 md:mt-0">
              <div className="font-bold text-4xl md:text-6xl">30,000+</div>
              <div className="text-black text-opacity-60 text-sm md:text-lg md:text-left">Happy Customers</div>
            </div>
          </div>
        </div>
        <div className="justify-items-center md:w-2/5">
          <img src={Image1} alt="Logo" className="w-full h-full" />
        </div>
      </div>
      <div className="bg-black py-1">
        <img src={Image2} alt="Logo" className="md:hidden w-full bg-red" />
        <img src={Image3} alt="Logo" className="hidden md:block w-full bg-red" />
      </div>
    </div>
  );
}

export default ForFront;
