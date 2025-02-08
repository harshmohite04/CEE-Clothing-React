import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchQueryAtom } from "./atoms/atom";
import { Link } from "react-router-dom";
function Header() {
  const setSearch = useSetRecoilState(searchQueryAtom);
  const search = useRecoilValue(searchQueryAtom);

  const items = [
    {
      name: "Product1",
      photo:
        "https://static.zara.net/assets/public/3c26/8a5b/052846bc9785/18c0495921d2/04174842800-p/04174842800-p.jpg?ts=1733931782632&w=563",
      price: "Rs 3499",
    },
    {
      name: "Product2",
      photo:
        "https://static.zara.net/assets/public/ecf7/0d7b/232f44d8b8ee/7451a9bb4cce/05644081500-e1/05644081500-e1.jpg?ts=1731670237134&w=563",
      price: "Rs 4499",
    },
    {
      name: "Product3",
      photo:
        "https://static.zara.net/assets/public/bd26/60c0/70d049a4bc2d/df7cba1ba7b7/03332310712-e1/03332310712-e1.jpg?ts=1727185921481&w=563",
      price: "Rs 3899",
    },
    {
      name: "Product4",
      photo:
        "https://static.zara.net/assets/public/dc71/0bd2/6be14632ba4c/e91779c7333b/04393350800-a1/04393350800-a1.jpg?ts=1734366389017&w=563",
      price: "Rs 3492",
    },
    {
      name: "Product5",
      photo:
        "https://static.zara.net/assets/public/eae0/9be1/de1041e0b7c7/9121f3b4dfe8/07446307427-e1/07446307427-e1.jpg?ts=1726995650850&w=563",
      price: "Rs 5499",
    },
    {
      name: "Product6",
      photo:
        "https://static.zara.net/assets/public/7eab/2f6f/a7d34327b664/90526bb8732b/05758675707-e1/05758675707-e1.jpg?ts=1727000174081&w=563",
      price: "Rs 2499",
    },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex bg-white py-3 border-b-2">
      <div className="flex w-3/4 items-center">
        <div className="block lg:hidden px-4 lg:px-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>

        <div className="text-2xl font-black sm:px-5 sm:text-4xl">CEE.SHOP</div>
        <div className="hidden lg:flex w-1/2 justify-around">
          <Link to="/productPage">
            <div className="flex">
              <div className="">Shop</div>
              <div className="justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <div className="">On Sale</div>
          <div className="">New Arrivals</div>
          <div className="">Brands</div>
        </div>
      </div>

      {/* search box */}
      <div
        style={{ backgroundColor: "#f2f0f1" }}
        className="hidden sm:flex  sm:w-5/12 sm:rounded-full sm:py-2 sm:px-5 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          style={{ backgroundColor: "#f2f0f1"}}
          className="border-none px-2 outline-none"
          placeholder="Search for products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <div
            className="absolute mt-10 z-11 w-2/6 rounded-lg px-5 py-1"
            style={{
              maxHeight: "600px", // Set the max height you want for the scrollable box
              overflowY: "auto", // Enable vertical scrolling
              backgroundColor: "#e3dce0",
            }}
          >
            <div className="flex mt-2 border-b hover:bg-gray-200 cursor-pointer">
              no Items Found
            </div>
          </div>
        )}
        {search && filteredItems.length > 0 && (
          <div
            className="absolute mt-10 z-10 w-2/6 rounded-lg px-5 py-1"
            style={{
              maxHeight: "600px", // Set the max height you want for the scrollable box
              overflowY: "auto", // Enable vertical scrolling
              backgroundColor: "#e3dce0",
            }}
          >
            {filteredItems.map((item, index) => (
              <div
                className="flex mt-2 border-b hover:bg-gray-200 rounded-l-full cursor-pointer"
                key={index}
              >
                <div className="w-1/4 ">
                  <img
                    src={item.photo}
                    className="max-w-28 rounded-2xl"
                    alt=""
                  />
                </div>
                <div className=" content-center w-3/4 px-5">
                  <div className="">{item.name}</div>
                  <div className="">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex w-1/4 justify-around items-center sm:w-1/12 ">
        <div className="block sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div className="flex px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <Link to="/adminPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
