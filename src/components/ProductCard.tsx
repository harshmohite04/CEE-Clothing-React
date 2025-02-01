import { useState } from "react";

function ProductCard() {
  const images = [
    "https://static.zara.net/assets/public/ae62/2268/db8246cf9006/3976c70fad11/01538418800-e1/01538418800-e1.jpg?ts=1733819685299&w=750",
    "https://static.zara.net/assets/public/b712/cd96/141b493bb530/e70a1b8e268d/01538418800-e2/01538418800-e2.jpg?ts=1733819686404&w=750",
    "https://static.zara.net/assets/public/9c7b/59da/2dd04a63a691/5cea9a9c8317/01538418800-a1/01538418800-a1.jpg?ts=1733918892416&w=750",
  ];

  const [currentImg, setCurrentImg] = useState(images[0]);
  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className="px-2">
      <div className="">
        <img
          src={currentImg}
          className="rounded-lg w-5/6 justify-self-center"
          alt=""
        />

        <div className="flex flex-row justify-around mt-5">
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
        <div className="font-black text-3xl mt-5">WESTERN DENIM SHIRT</div>
        <div className="flex font-bold text-3xl">
          <div className="mx-3 pr-2 ">$256</div>
          <div className="text-zinc-400 line-through">$300</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
