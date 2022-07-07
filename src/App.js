import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Thecnology from "./pages/Thecnology";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Technology/Capsule' element={<Thecnology System={'Capsule'}/>} />
        <Route path='/Technology/Spaceport' element={<Thecnology System={'Spaceport'}/>} />
        <Route path='/Technology/Vehicle' element={<Thecnology System={'Vehicle'}/>} />
        <Route path='/Technology' element={<Thecnology System={'Capsule'}/>} />
        <Route path='/Destination/Europa' element={<Destination System={'Europa'}/>} />
        <Route path='/Destination/Mars' element={<Destination System={'Mars'}/>} />
        <Route path='/Destination/Moon' element={<Destination System={'Moon'}/>} />
        <Route path='/Destination/Titan' element={<Destination System={'Titan'}/>} />
        <Route path='/Destination' element={<Destination System={'Moon'}/>} />
        <Route path='/Crew/Commander' element={<Crew System={'Commander'}/>} />
        <Route path='/Crew/Engineer' element={<Crew System={'Engineer'}/>} />
        <Route path='/Crew/Pilot' element={<Crew System={'Pilot'}/>} />
        <Route path='/Crew/Specialist' element={<Crew System={'Specialist'}/>} />
        <Route path='/Crew' element={<Crew System={'Commander'}/>} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
