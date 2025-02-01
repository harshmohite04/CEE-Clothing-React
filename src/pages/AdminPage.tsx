import { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { itemListAtom } from "../components/atoms/atom";

type Item = {
  name: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  image: string;
};
function AdminPage() {
  const [itemList, setItemList] = useRecoilState(itemListAtom);

  useEffect(() => {
    const apiCall = async () => {
      console.log("YO YO");
      const response = await axios.get(
        "http://localhost:3000/landingPage/items"
      );
      setItemList(response.data.items);
    };
    apiCall();
  }, []);
  return (
    <div className="bg-zinc-900 flex">
      <div className="w-1/2 justify-items-center">
        <div className="create-product-items flex flex-col w-1/2 px-4 py-5">
          <div className="text-white text-2xl font-bold">Create Item</div>
          <input
            name="myInput"
            placeholder="Name"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <input
            name="myInput"
            placeholder="Price"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <input
            name="myInput"
            placeholder="Discount Price"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <input
            name="myInput"
            placeholder="Discount Percent"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <input
            name="myInput"
            placeholder="Image URL"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <div className="bg-white px-4 py-3 rounded-md w-2/5 text-center self-center text-black font-bold cursor-pointer placeholder-white mt-4">
            Save
          </div>
        </div>
        <div className="update-product-items flex flex-col w-1/2 px-4 py-5">
          <div className="text-white text-2xl font-bold">Update Item</div>
          <input
            name="myInput"
            placeholder="Name"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <input
            name="myInput"
            placeholder="Price"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <input
            name="myInput"
            placeholder="Discount Price"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <input
            name="myInput"
            placeholder="Discount Percent"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <input
            name="myInput"
            placeholder="Image URL"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <div className="bg-white px-4 py-3 rounded-md w-2/5 text-center self-center text-black font-bold cursor-pointer placeholder-white mt-4">
            Save
          </div>
        </div>
        <div className="delete-product-items flex flex-col w-1/2 px-4 py-5">
          <div className="text-white text-2xl font-bold">Delete Item</div>
          <input
            name="myInput"
            placeholder="Name"
            className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
          />
          <div className="bg-white px-4 py-3 rounded-md w-2/5 text-center self-center text-black font-bold cursor-pointer placeholder-white mt-4">
            Save
          </div>
        </div>
      </div>
      <div className="place-items-center  w-1/2">
        {itemList && itemList.length > 0 ? (
          itemList.map(({item}:{item:Item}, index) => (
            <div
              key={index}
              className="item flex flex-row justify-between py-2 bg-black mt-10 px-5 rounded-2xl"
            >
              <div className="px-10">
                <span className="text-white">Name: {item.name}</span>
                <br />
                <span className="text-white">Price: {item.price}</span>
                <br />
                <span className="text-white">
                  Discount Price: {item.discountPrice}
                </span>
                <br />
                <span className="text-white">
                  Discount Percent: {item.discountPercent}
                </span>
                <br />
              </div>
              <div className="w-40 ">
                <img src={item.image} alt="" className="rounded-xl " />
              </div>
              {/* "name": "STRIPED TEXTURED SHIRT",
            "rating": 5,
            "price": 4000,
            "discountPrice": 5000,
            "discountPercent": 20,
            "image": "https://static.zara.net/assets/public/a6a8/028c/1db74e1180d9/a9834d87294f/00399300250-e1/00399300250-e1.jpg?ts=1725544097767&w=750", */}
            </div>
          ))
        ) : (
          <p className="text-white">No items available</p>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
