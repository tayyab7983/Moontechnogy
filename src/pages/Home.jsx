import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Process from "../components/Process/process";
import Approach from "../components/Approach/Approach";
 import Responsive from "../components/Responsive/Responsive";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
        <Services />
        <Projects />
        <Process />
        <Responsive />
        
        <Approach />
        <Footer />
        

    </>
  );
}

export default Home;
