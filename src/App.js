import { Navbar } from "./Components/Navbar/Navbar";
import { Bookings } from "./Pages/Bookings";
import Landingpage from "./Pages/Landingpage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
