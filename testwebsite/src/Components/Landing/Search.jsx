function Search() {
  return (
    <>
      <div className="w-full h-16 p-2">
        <div className="h-full w-full p-2">
          <div className="border border-gray h-full w-full flex justify-center items-center">
            <form className="flex gap-2 items-center">
              Search
              <input
                type="text"
                id="search"
                name="search"
                className="bg-white rounded-md px-1 text-black"
              ></input>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;