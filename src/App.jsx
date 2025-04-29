import "./App.css";
import Blog from "./components/Blog/Blog";
import Brand from "./components/Brand/Brand";
import Footer from "./components/Footer/Footer";
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
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
