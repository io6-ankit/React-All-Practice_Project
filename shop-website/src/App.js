import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Header/navbar";
import Footer from "./components/Footer/footer";
import OfferCard from "./components/Cards/Champion-cards";
import { Box } from "@mui/material";
import Image1 from "./assets/image/image-1.webp";
import Image2 from "./assets/image/image-2.webp";
import Image3 from "./assets/image/image-3.webp";
import Image4 from "./assets/image/image-4.webp";
import Image5 from "./assets/image/image-5.webp";
import Image6 from "./assets/image/image-6.webp";
import Image7 from "./assets/image/image-7.webp";
import Image8 from "./assets/image/image-8.webp";
import Image9 from "./assets/image/image-9.webp";
import Image10 from "./assets/image/image-10.webp";
import Image11 from "./assets/image/image-11.webp";
import Image12 from "./assets/image/image-12.webp";
import SuperHeading from "./components/Cards/Super-Dhamaka-Heading";
import Champion from "./components/Cards/champion-categories-heading";
import Banner from "./components/Cards/banner";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Box className="main">
        <Champion />
        <Box className="offerCard">
          <a href="#">
            <OfferCard img={Image1} />
          </a>
          <OfferCard img={Image2} />
          <OfferCard img={Image3} />
          <OfferCard img={Image4} />
          <OfferCard img={Image5} />
          <OfferCard img={Image6} />
          <OfferCard img={Image7} />
          <OfferCard img={Image8} />
          <OfferCard img={Image9} />
          <OfferCard img={Image10} />
          <OfferCard img={Image11} />
          <OfferCard img={Image12} />
        </Box>
        <SuperHeading />
        <Footer />
      </Box>
    </>
  );
}

export default App;
