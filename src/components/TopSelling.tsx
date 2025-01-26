import { useRecoilState } from "recoil";
import { itemListAtom } from "./atoms/atom";
import { useEffect } from "react";
import axios from "axios";

type Item = {
  image: string;
  name: string;
  rating: number;
  price: number;
  discountPrice: number;
  discountPercent: number;
};

function TopSelling() {
  const [itemList, setItemList] = useRecoilState(itemListAtom);

  useEffect(() => {
    const apiCall = async () => {
      console.log("YO YO");
      const response = await axios.get(
        "http://localhost:3000/landingPage/items"
      );
      setItemList(response.data.items);
      // console.log(response.data.items);
    };
    apiCall();

    console.log(itemList);
  }, []);

  return (
    <div className="">
      <div className="font-black py-5 px-3 text-4xl w-full text-center">
        TOP SELLING
      </div>
      <div className="flex w-full overflow-x-scroll   pl-4 no-scrollbar">
        {/* Deploy Backend and change the Arr */}
        {itemList.map(({ item }: { item: Item }, index) => (
          <div className="flex-shrink-0 w-3/5 md:w-1/4 px-1 mx-1 " key={index}>
            <img src={item.image} alt="" className="rounded-xl " />
            <div className="font-bold text-base md:text-2xl">{item.name}</div>
            <div className="flex items-center">
              {renderRating(item.rating)}
              <div className="pl-2">{item.rating}/5</div>
            </div>

            <div className="flex items-center">
              <div className="text-lg md:text-2xl pr-2 font-bold">
                Rs {item.price}
              </div>
              <div className="text-lg md:text-2xl px-2 line-through opacity-40 font-bold">
                Rs {item.discountPrice}
              </div>
              <div className="text-sm px-3 md:text-base bg-red-500 bg-opacity-10 rounded-full py-1 text-red-500">
                -{item.discountPercent}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:text-xl py-2 px-8 md:px-20 mt-10 text-center border-black border-2  justify-self-center rounded-full">
        View All
      </div>
    </div>
  );
}

const renderRating = (rating: any) => {
  return (
    <div className="flex">
      {Array.from({ length: rating }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ))}
    </div>
  );
};

export default TopSelling;
