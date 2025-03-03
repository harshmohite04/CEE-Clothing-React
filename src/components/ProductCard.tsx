import { useState } from "react";
import { useRecoilState } from "recoil";
import { countCounterAtom } from "./atoms/atom";
function ProductCard() {
  const images = [
    "https://static.zara.net/assets/public/ae62/2268/db8246cf9006/3976c70fad11/01538418800-e1/01538418800-e1.jpg?ts=1733819685299&w=750",
    "https://static.zara.net/assets/public/b712/cd96/141b493bb530/e70a1b8e268d/01538418800-e2/01538418800-e2.jpg?ts=1733819686404&w=750",
    "https://static.zara.net/assets/public/9c7b/59da/2dd04a63a691/5cea9a9c8317/01538418800-a1/01538418800-a1.jpg?ts=1733918892416&w=750",
  ];

  const [currentImg, setCurrentImg] = useState(images[0]);
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [count, setCount] = useRecoilState(countCounterAtom);
  return (
    <div className="px-2 md:flex flex-row md:px-20 select-none">
      <div className="hidden flex-col justify-around mt-5 md:flex  md:items-center md:w-1/12">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`rounded-lg w-1/4 justify-self-center cursor-pointer md:w-11/12 ${
              selectedImg === img ? "border-2 border-black" : ""
            }`}
            alt=""
            onClick={() => {
              setCurrentImg(img);
              setSelectedImg(img);
            }}
          />
        ))}
      </div>
      <div className=" md:w-2/5">
        <img
          src={currentImg}
          className="rounded-lg w-5/6 justify-self-center md:w-3/4 "
          alt=""
        />
      </div>

      <div className="flex flex-row justify-around mt-5 md:hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`rounded-lg w-1/4 justify-self-center cursor-pointer ${
              selectedImg === img ? "border-2 border-black" : ""
            }`}
            alt=""
            onClick={() => {
              setCurrentImg(img);
              setSelectedImg(img);
            }}
          />
        ))}
      </div>
      <div className="px-2">
        <div className="font-black text-3xl mt-5">WESTERN DENIM SHIRT</div>
        <div className="flex font-bold text-3xl">
          <div className="mx-3 pr-2 ">$260</div>
          <div className="text-zinc-400 line-through">$300</div>
          <div className="text-lg font-semibold bg-red-200 self-center px-2 rounded-full mx-3 text-red-400">
            -40%
          </div>
        </div>
        <div className="py-2 opacity-60">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </div>
        <hr />
        <div className="py-2">
          <div className="opacity-60">Select Colors</div>
          <div className="flex flex-row  w-2/5 justify-around  ">
            <div className="bg-yellow-800 w-10 h-10 rounded-full"></div>
            <div className="bg-green-950 w-10 h-10  rounded-full"></div>
            <div className="bg-purple-500 w-10 h-10 rounded-full"></div>
          </div>
        </div>
        <hr />
        <div className="py-2">
          <div className="opacity-60">Choose Size</div>
          <div className="flex flex-row justify-around  ">
            <div
              className=" rounded-full px-4 py-2"
              style={{ backgroundColor: "#F0F0F0" }}
            >
              Small
            </div>
            <div
              className=" rounded-full px-4 py-2"
              style={{ backgroundColor: "#F0F0F0" }}
            >
              Medium
            </div>
            <div
              className=" rounded-full px-4 py-2"
              style={{ backgroundColor: "#F0F0F0" }}
            >
              Large
            </div>
            <div
              className=" rounded-full px-4 py-2"
              style={{ backgroundColor: "#F0F0F0" }}
            >
              X-Large
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-row py-5">
          <div
            className="flex flex-row w-1/4 justify-around py-1 rounded-full px-2"
            style={{ backgroundColor: "#F0F0F0" }}
          >
            <div
              className="text-xl font-bold"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </div>
            <div className="text-xl ">{count}</div>
            <div
              className="text-xl font-bold"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </div>
          </div>
          <div className="text-center w-5/6 text-white bg-black mx-7 rounded-full py-1">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
