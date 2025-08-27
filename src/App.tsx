import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Investments from "./pages/Investments";
import PropertyContextProvider from "./context/PropertyContextProvider";
import Property from "./pages/Property";

function App() {
  return (
    <>
      <PropertyContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/property/:id" element={<Property />} />
          </Routes>
        </BrowserRouter>
      </PropertyContextProvider>
    </>
  );
}

export default App;
