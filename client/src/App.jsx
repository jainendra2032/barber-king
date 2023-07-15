import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import LandingScreen from "./screens/LandingScreen";
import BarberScreen from "./screens/BarberScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/barber" element={<BarberScreen />} />
        <Route path="/ls" element={<LandingScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
