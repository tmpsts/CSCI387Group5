import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <div className="flex">
        <Nav />
        <div className="flex flex-col w-full">
          <Search />
          <Products />
        </div>
      </div>
    </>
  );
}

export default App;
