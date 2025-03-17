import TravelsDetailCard from "./components/TravelsDetailCard"
import {BrowserRouter, Route, Routes} from "react-router-dom"
// import HomePage from "./pages/HomePage"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>

      <Route path="/" element={<HomePage />}/>

      <Route path="/travel" element={<TravelsDetailCard />} />
      
      </Route>

    </Routes>
    </BrowserRouter>

  )
}

export default App
