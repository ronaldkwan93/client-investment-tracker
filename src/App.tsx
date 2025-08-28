import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Investments from "./pages/Investments";
import PropertyContextProvider from "./context/PropertyContextProvider";
import Property from "./pages/Property";
import CreateInvestment from "./pages/CreateInvestment";

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
            <Route path="/create-new" element={<CreateInvestment />} />
          </Routes>
        </BrowserRouter>
      </PropertyContextProvider>
    </>
  );
}

export default App;
