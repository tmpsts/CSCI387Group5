import Product from "./Product";

function Products() {
  return (
    <>
      <div className="h-full w-full p-2 text-black dark:text-white">
        <div className="h-full w-full p-4 flex flex-col gap-2">
          <div className="shadow-md rounded-xl bg-[#f9f9f9] dark:bg-[#404040] h-40 w-full flex">
            <div className="w-56 h-full p-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqd5AybZ_74DKHZPyYarwPj7zC9csAiwQ-A&s"
                className="rounded-md w-full h-full"
              />
            </div>
            <div className="w-full h-full p-2">
              <div className="w-full h-full flex flex-col justify-evenly p-2">
                <h1 className="font-bold text-3xl">Bloxy Cola</h1>
                <p>mmmmmmmm</p>
                <button className="bg-green-500 h-8 w-20 rounded-md hover:bg-slate-200">
                  BUY
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-xl bg-[#f9f9f9] dark:bg-[#404040] h-40 w-full"></div>
          <div className="shadow-md rounded-xl bg-[#f9f9f9] dark:bg-[#404040] h-40 w-full"></div>
        </div>
      </div>
    </>
  );
}

export default Products;
