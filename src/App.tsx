import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
