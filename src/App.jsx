import "./App.css";
import Brand from "./components/Brand/Brand";
import HeroSection from "./components/HeroSection.jsx/HeroSection";
import Navbar from "./components/Navber/Navbar";
import PricingTable from "./components/PriceTable/PriceTable";
import Services from "./components/Services/Services";
import WeAre from "./components/WeAre/WeAre";

function App() {
  return (
    <div className="bg- h-screen">
      <Navbar />
      <HeroSection />
      <Brand />
      <WeAre/>
      <Services/>
      <PricingTable/>
    </div>
  );
}

export default App;
