import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Cover from "./Components/Parallax";
import "./globals.css";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#fdb21a] to-[#fd7351] bg-opacity-30">
      <Navbar />
      <Cover/>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
