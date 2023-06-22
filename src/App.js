import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./components/News";
import Slider from "./components/Slider";
// import Swiper from "swiper";

function App() {
  return (
    <>
      <Navbar />
      {/* <Slider /> */}
      <News />
      <Footer />
    </>
  );
}

export default App;
