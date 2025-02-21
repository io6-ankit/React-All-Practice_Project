import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Header/navbar";
import Footer from "./components/Footer/footer";
import OfferCard from "./components/Cards/Champion-cards";

function App() {
  return (
    <>
      <Navbar />
      <OfferCard />
      <Footer />
    </>
  );
}

export default App;
