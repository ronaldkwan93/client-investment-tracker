import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Investments from "./pages/Investments";
import PropertyContextProvider from "./context/PropertyContextProvider";
// @ts-expect-error Property is used as a runtime route component.
import Property from "./pages/Property";
import CreateInvestment from "./pages/CreateInvestment";
import CopilotWidget from "./components/Copilot/CopilotWidget";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <PropertyContextProvider>
        <BrowserRouter>
          <NavBar onOpenChat={() => setIsChatOpen(true)} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/property/:id" element={<Property />} />
            <Route path="/create-new" element={<CreateInvestment />} />
          </Routes>
          <CopilotWidget isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
        </BrowserRouter>
      </PropertyContextProvider>
    </>
  );
}

export default App;
