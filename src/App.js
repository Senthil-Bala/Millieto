import "./App.css"
import About from "./Components/About/About";
import Header from "./Components/Headers/Header";
import Hero from "./Components/HeroSection/Hero";
import Reciepes from "./Components/Reciepes/Reciepes";
import ReceipeSlicks from "./Components/Reciepes/ReceipesSlicks"
import Banner from "./Components/BannerImage/Banner";
import Farmer from "./Components/Farmer/Farmer";
import Faq from "./Components/Faq/Faq"
import Footer from "./Components/Footers/Footer";
import Register from "./Components/Register/Register";
function App() {
  return (
    <>
    {/* <h1 className="text-center">hello</h1> */}
     <Header/>
     
     <Hero/>
     <div className="container">
      {/* <Register/> */}
     <About/>
     <Reciepes/>
     <ReceipeSlicks/>
     <Banner/>
     <Farmer/>
     <Faq />
    </div>
    <Footer/>
    </>
  );
}

export default App;
