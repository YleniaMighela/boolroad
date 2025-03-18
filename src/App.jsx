import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import TravelsDetailPage from "./pages/TravelsDetailPage";
import travelData from "./data/DB";

function App() {
  const [travels, setTravels] = useState(travelData);

  function handleAddTravel(newTravel) {
    setTravels((prevTravels) => [...prevTravels, newTravel]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage travels={travels} />} />
          <Route path="/travel/:id" element={<TravelsDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;