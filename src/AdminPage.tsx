import { useEffect } from "react";
import axios from "axios";
function AdminPage() {
  useEffect(() => {
    const apiCall = async () => {
      const dsa = await axios.get("localhost:3000/landingPage/items");
      console.log(dsa);
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
      <div className=""></div>
    </div>
  );
}

export default AdminPage;
