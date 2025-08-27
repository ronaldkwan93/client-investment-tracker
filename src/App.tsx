import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Investments from "./pages/Investments";
import PropertyContextProvider from "./context/PropertyContextProvider";

function App() {
  return (
    <>
      <PropertyContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/investments" element={<Investments />} />
          </Routes>
        </BrowserRouter>
      </PropertyContextProvider>
    </>
  );
}

export default App;
