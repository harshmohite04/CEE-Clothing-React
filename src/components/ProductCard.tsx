import { useState } from "react";
import { useRecoilState } from "recoil";
import { countCounterAtom } from "./atoms/atom";
import { Star } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importing icons

function ProductCard() {
  const images = [
    "https://static.zara.net/assets/public/ae62/2268/db8246cf9006/3976c70fad11/01538418800-e1/01538418800-e1.jpg?ts=1733819685299&w=750",
    "https://static.zara.net/assets/public/b712/cd96/141b493bb530/e70a1b8e268d/01538418800-e2/01538418800-e2.jpg?ts=1733819686404&w=750",
    "https://static.zara.net/assets/public/9c7b/59da/2dd04a63a691/5cea9a9c8317/01538418800-a1/01538418800-a1.jpg?ts=1733918892416&w=750",
  ];

  const reviews = [
    {
      name: "Samantha D.",
      verified: true,
      rating: 5,
      review:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable...",
      date: "August 14, 2023",
    },
    {
      name: "Alex M.",
      verified: true,
      rating: 5,
      review:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch...",
      date: "August 15, 2023",
    },
    {
      name: "Ethan R.",
      verified: true,
      rating: 4,
      review:
        "Good quality, but the fit was a little smaller than expected. Still, the material is great!",
      date: "August 16, 2023",
    },
  ];

  const faqs = [
    {
      question: "How are your items priced?",
      answer:
        "We have a straightforward pricing policy that is generally determined by labor work involved and purity of fabric above all other factors. Followed by import cost, as our products are made in India.",
    },
    {
      question: "What is unique about IFX clothes?",
      answer:
        "Nearly all of the items in our in-house collection is ENTIRELY handmade using the finest authentic fabrics and materials. Our purchased items are carefully handpicked by the owners, Savi and Ishita, and come from reputable designers across India.We also practice a clean safe family-oriented environment for our staff and incredible design team.",
    },
    {
      question: "Is this everything you have?",
      answer:
        "Not at all. It's a very tiny piece of the cake of what we carry out of our retail shop. But we are adding new and exciting products all the time...stay tuned!",
    },
  ];
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [count, setCount] = useRecoilState(countCounterAtom);
  const [activeTab, setActiveTab] = useState("Rating & Reviews");
  const updateCount = (amount: number) =>
    setCount((prev) => Math.max(1, prev + amount));
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
  };
  return (
    <div className="px-2 md:px-20 flex flex-col md:flex-row select-none">
      {/* Left Sidebar for Image Selection (Desktop) */}
      <div className="hidden md:flex flex-col items-center w-1/12 mt-5 space-y-3">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`rounded-lg w-11/12 cursor-pointer ${
              selectedImg === img ? "border-2 border-black" : ""
            }`}
            alt="Product Thumbnail"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>

      {/* Main Image Display */}
      <div className="md:w-2/5 justify-items-center md:justify-items-start ">
        <img
          src={selectedImg}
          className="rounded-lg w-5/6 md:w-3/4 "
          alt="Product"
        />
      </div>

      {/* Mobile Image Selection (Hidden on Desktop) */}
      <div className="flex md:hidden justify-around mt-5 space-x-3 ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`rounded-lg w-1/4 cursor-pointer ${
              selectedImg === img ? "border-2 border-black" : ""
            }`}
            alt="Product Thumbnail"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>

      {/* Product Details */}
      <div className="px-2 ">
        <h2 className="font-black text-3xl mt-5">WESTERN DENIM SHIRT</h2>
        <div className="flex items-center text-3xl font-bold mt-2">
          <span className="pr-2">$260</span>
          <span className="text-zinc-400 line-through">$300</span>
          <span className="text-lg font-semibold bg-red-200 text-red-400 px-2 rounded-full ml-3">
            -40%
          </span>
        </div>

        <p className="py-2 opacity-60">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft
          and breathable fabric, it offers superior comfort and style.
        </p>

        <hr />

        {/* Color Selection */}
        <div className="py-2">
          <p className="opacity-60">Select Colors</p>
          <div className="flex space-x-4 mt-2">
            {["bg-yellow-800", "bg-green-950", "bg-purple-500"].map(
              (color, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full ${color}`}
                />
              )
            )}
          </div>
        </div>

        <hr />

        {/* Size Selection */}
        <div className="py-2">
          <p className="opacity-60">Choose Size</p>
          <div className="flex justify-between mt-2">
            {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <hr />

        {/* Quantity Selector & Add to Cart */}
        <div className="flex items-center space-x-5 py-5">
          <div className="flex items-center justify-between w-1/4 bg-gray-200 rounded-full px-2 py-1">
            <button
              className="text-xl font-bold"
              onClick={() => updateCount(-1)}
            >
              -
            </button>
            <span className="text-xl">{count}</span>
            <button
              className="text-xl font-bold"
              onClick={() => updateCount(1)}
            >
              +
            </button>
          </div>

          <button className="w-5/6 text-center text-white bg-black rounded-full py-2">
            Add to Cart
          </button>
        </div>

        <div className="w-full max-w-2xl mx-auto p-4">
          {/* Tabs */}
          <div className="flex border-b border-gray-300 overflow-x-auto whitespace-nowrap">
            {["Product Details", "Rating & Reviews", "FAQs"].map(
              (tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-base font-medium ${
                    activeTab === tab
                      ? "border-b-2 border-black text-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Review Section */}
          {activeTab === "Rating & Reviews" && (
            <div className="mt-5">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  All Reviews ({reviews.length})
                </h2>
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  Write a Review
                </button>
              </div>

              {/* Review Cards */}
              <div className="mt-4 space-y-4">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg shadow-sm bg-white"
                  >
                    {/* User Info */}
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold">{review.name}</h3>
                      {review.verified && (
                        <span className="text-green-600">✔</span>
                      )}
                    </div>

                    {/* Star Rating */}
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < review.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm mt-2 text-gray-600">
                      {review.review}
                    </p>

                    {/* Date */}
                    <p className="text-xs text-gray-400 mt-1">
                      Posted on {review.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Product Details" && (
            <div className="">
              <div className="mt-4 opacity-60">Brown | 6103/400/700</div>
              <div className="my-3 opacity-60">
                Model height: 188 cm | Size: L
              </div>
              <div className="opacity-60">
                Relaxed fit shirt made from cotton fabric with a creased effect
                finish. Featuring a grandad collar, long sleeves with buttoned
                cuffs and a button-up front.
              </div>
              <div className="my-3 opacity-60">COMPOSITION, CARE & ORIGIN </div>
              <div className="my-3 opacity-60">
                CHECK IN-STORE AVAILABILITY{" "}
              </div>
              <div className="my-3 opacity-60">
                SHIPPING, EXCHANGES AND RETURNS
              </div>
            </div>
          )}

          {activeTab === "FAQs" && (
            <div>
            {faqs.map((item, index) => (
              <div key={index} className="border-b py-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="font-medium">{item.question}</div>
                  {openIndex === index ? (
                    <ChevronUp className="opacity-60" />
                  ) : (
                    <ChevronDown className="opacity-60" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="mt-2 text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
