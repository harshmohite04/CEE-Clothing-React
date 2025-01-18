import { useRecoilValue, useSetRecoilState } from "recoil";
import { upperLayerAtom } from "./atoms/atom";

function UpperLayer() {
  const setCross = useSetRecoilState(upperLayerAtom);
  const cross = useRecoilValue(upperLayerAtom);

  return (
    cross ? (
      <div  style={{backgroundColor:"#000000"}} className="flex select-none justify-center px-2 py-2 w-full">
     
        <div className="color-white text-white text-xs sm:text-lg">
          Sign up and get 20% off to your first order.
        </div>

        <div className="font-bold text-white border-b-2 mr-4 text-xs sm:text-lg cursor-pointer"> Sign Up Now</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 cursor-pointer"
          color="#ffffff"
          onClick={() => {
            setCross((val) => !val); // Toggles the state of upperLayerAtom
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    ):null
  );
}

export default UpperLayer;
