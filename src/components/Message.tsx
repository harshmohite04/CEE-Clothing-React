import { useState } from "react";

function Message() {
  const messageArray = [
    {
      firstName: "Sarah",
      lastname: "Mahanotrah",
      msg: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      verfied: true,
      rating: 5,
    },
    {
      firstName: "John",
      lastname: "Doe",
      msg: "Amazing quality and quick delivery! Shop.co has become my go-to for online shopping.",
      verfied: true,
      rating: 5,
    },
    {
      firstName: "Emily",
      lastname: "Smith",
      msg: "The customer service is outstanding. They helped me pick the perfect outfit.",
      verfied: true,
      rating: 4,
    },
    {
      firstName: "Michael",
      lastname: "Brown",
      msg: "Great variety of products. I always find what I need.",
      verfied: true,
      rating: 5,
    },
    {
      firstName: "Sophia",
      lastname: "Johnson",
      msg: "The discounts and offers are unbeatable. Highly recommend!",
      verfied: true,
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // if (currentIndex < messageArray.length - 1) {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1 + messageArray.length) % messageArray.length
    );
    // }
  };

  const handlePrev = () => {
    // if (currentIndex > 0) {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + messageArray.length) % messageArray.length
    );
    // }
  };
  return (
    <div className="px-5 mt-12">
      <div className="flex">
        <div className="font-black text-5xl  w-5/6">OUR HAPPY CUSTOMERS</div>
        <div className="flex items-end w-1/6 justify-around">
          <button
            className=""
            onClick={handlePrev}
            // disabled={currentIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-7"
            >
              <path
                fill-rule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            className=""
            onClick={handleNext}
            // disabled={currentIndex === messageArray.length - 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex py-5 overflow-x-auto">
        <div className="border-black border-opacity-10 border-2 rounded-2xl px-5 py-5">
          {renderRating(messageArray[currentIndex].rating)}
          <div className="flex items-center font-bold text-2xl">
            {messageArray[currentIndex].firstName}{" "}
            {messageArray[currentIndex].lastname[0]}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4 mx-1"
            >
              <path
                fillRule="evenodd"
                d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-opacity-60 text-black">
            {messageArray[currentIndex].msg}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
const renderRating = (rating:any) => {
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
  