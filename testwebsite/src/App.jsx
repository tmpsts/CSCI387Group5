import Landing from "./Components/Landing";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<Login />} />
        <Route exact path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
