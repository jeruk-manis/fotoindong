import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";
import Services from "./components/Services.jsx";
import HowToOrder from "./components/HowToOrder.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <HowToOrder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}