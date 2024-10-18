import Nav from "./Components/Landing/Nav";
import Search from "./Components/Landing/Search";
import Products from "./Components/Landing/Products";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<Login />} />
        <Route
          exact
          path="/landing"
          element={
            <div className="flex">
              <Nav />
              <div className="flex flex-col w-full">
                <Search />
                <Products />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
