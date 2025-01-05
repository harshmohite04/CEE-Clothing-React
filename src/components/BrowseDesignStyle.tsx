function BrowseDesignStyle() {
  return (
    <div className="md:px-10 mt-20 px-5 ">
      <div className="px-5 py-10 rounded-3xl" style={{ backgroundColor: "#F0F0F0" }}>
        <div className="text-center font-black text-5xl">
          BROWSE BY DRESS STYLE
        </div>
        <div className="">
          <div className="md:flex ">
            <div
              className="md:w-4/6 md:mr-10  h-full w-full rounded-3xl pb-44 pt-5 pl-5 text-6xl font-medium mt-8"
              style={{
                backgroundImage: `url("https://www.ukmodels.co.uk/wp-content/uploads/2019/06/shutterstock_496231708-min-2.jpg")`,
              }}
            >
              Casual
            </div>
            <div
              className="md:w-2/6 h-full w-full rounded-3xl pb-44 pt-5 pl-5 text-6xl  font-medium mt-8"
              style={{
                backgroundImage: `url("https://i.pinimg.com/474x/09/23/04/09230458c7f52813403e6d106f3f6d41.jpg")`,
              }}
            >
              Gym
            </div>
          </div>
          <div className="md:flex">
            <div
              className="md:w-2/6 md:mr-10 h-full w-full rounded-3xl pb-44 pt-5 pl-5 text-6xl  font-medium mt-8"
              style={{
                backgroundImage: `url("https://img.tatacliq.com/images/i20//437Wx649H/MP000000024251354_437Wx649H_202410291613104.jpeg")`,
              }}
            >
              Party
            </div>
            <div
              className="md:w-4/6  h-full w-full rounded-3xl pb-44 pt-5 pl-5 text-6xl  font-medium mt-8"
              style={{
                backgroundImage: `url("https://i.pinimg.com/564x/3b/bd/85/3bbd857cfd0ac166a081b2a0ad38b217.jpg")`,
              }}
            >
              Formal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseDesignStyle;
