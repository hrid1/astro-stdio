import "./App.css";
import Brand from "./components/Brand/Brand";
import HeroSection from "./components/HeroSection.jsx/HeroSection";
import Navbar from "./components/Navber/Navbar";
import WeAre from "./components/WeAre/WeAre";

function App() {
  return (
    <div className="bg- h-screen">
      <Navbar />
      <HeroSection />
      <Brand />
      <WeAre/>
    </div>
  );
}

export default App;
