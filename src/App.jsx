// App.jsx

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import TravelsDetailPage from "./pages/TravelsDetailPage";
import travelData from "./data/DB";
import FormViaggio from "./components/FormViaggio";

function App() {
  const [travels, setTravels] = useState(travelData);

  function handleAddTravel(newTravel) {
    setTravels((prevTravels) => [
      ...prevTravels,
      { ...newTravel, persone: [] }
    ]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage travels={travels} />} />
          <Route path="/travel/:id" element={<TravelsDetailPage onAddTravel={handleAddTravel} travels={travels} />} />
          <Route path="/travel/create" element={<FormViaggio onAddTravel={handleAddTravel} travels={travels} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;