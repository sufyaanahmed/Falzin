import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Method from './components/Method';
import Services from './components/Services';
import Metrics from './components/Metrics';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import { ScrollToTop } from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Method />
        <Services />
        <Metrics />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expertise" element={<Expertise />} />
      </Routes>
    </Router>
  );
}

export default App;
