<<<<<<< HEAD
import TravelsDetailCard from "./components/TravelsDetailCard"
import {BrowserRouter, Route, Routes} from "react-router-dom"
// import HomePage from "./pages/HomePage"
=======
// importo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo il Layout
import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
>>>>>>> 86bbce0c933724af7c40a7ebfff8cda6d5ba2044

function App() {

  return (
<<<<<<< HEAD
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>

      <Route path="/" element={<HomePage />}/>

      <Route path="/travel" element={<TravelsDetailCard />} />
      
      </Route>

    </Routes>
    </BrowserRouter>

=======
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
>>>>>>> 86bbce0c933724af7c40a7ebfff8cda6d5ba2044
  )
}

export default App
