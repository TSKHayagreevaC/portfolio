import TSKHayagreevac from './TSKHayagreevaC.png';
import "./App.css";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <main className="min-h-full text-gray-300 bg-gray-100 body-font">
      {/* <img src={TSKHayagreevac} alt="TSKHayagreevaC" /> */}
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
