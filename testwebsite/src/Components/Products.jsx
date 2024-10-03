function Products() {
  return (
    <>
      <div className="bg-red-200 h-full w-full p-2">
        <div className="bg-blue-200 h-full w-full p-4 flex flex-col gap-2">
          <div className="bg-green-200 h-40 w-full flex">
            <div className="bg-red-200 w-56 h-full p-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqd5AybZ_74DKHZPyYarwPj7zC9csAiwQ-A&s" />
            </div>
            <div className="bg-red-300 w-full h-full p-2">
              <div className="bg-blue-200 w-full h-full flex flex-col justify-evenly p-2">
                <h1 className="text-black font-bold text-3xl">Bloxy Cola</h1>
                <p>mmmmmmmm</p>
                <button className="bg-white h-8 w-20 rounded-md hover:bg-slate-200">
                  BUY
                </button>
              </div>
            </div>
          </div>
          <div className="bg-green-200 h-40 w-full"></div>
          <div className="bg-green-200 h-40 w-full"></div>
        </div>
      </div>
    </>
  );
}

export default Products;
