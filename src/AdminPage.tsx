import { useEffect } from "react";
import axios from "axios";
import { RecoilRoot, useRecoilState } from "recoil";
import { itemListAtom } from "./components/atoms/atom";
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
      <div className="parent bg-zinc-900 h-screen flex  ">
        <div className="w-1/2">
          <div className="create-product-items flex flex-col w-1/2 px-4 py-5">
            <div className="text-white text-2xl font-bold">Create Item</div>
            <input
              name="myInput"
              placeholder="Name"
              className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
            />
            <input
              name="myInput"
              placeholder="URL"
              className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
            />
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
              placeholder="URL"
              className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
            />
          </div>
          <div className="delete-product-items flex flex-col w-1/2 px-4 py-5">
            <div className="text-white text-2xl font-bold">Delete Item</div>
            <input
              name="myInput"
              placeholder="Name"
              className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
            />
            <input
              name="myInput"
              placeholder="URL"
              className="px-4 py-4 rounded-md bg-zinc-800 text-white placeholder-white mt-4"
            />
          </div>
        </div>
        <div className="">
        {itemList && itemList.length > 0 ? (
            itemList.map((item, index) => (
              <div key={index} className="item flex justify-between py-2">
                <span className="text-white">{item.name}</span>
                <span className="text-white">{item.price}</span>
                <span className="text-white">{item.category}</span>
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
