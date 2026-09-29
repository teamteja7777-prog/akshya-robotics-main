import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Features />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
