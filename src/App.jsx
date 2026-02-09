import Header from './components/Header';
import Hero from './components/Hero';
import Method from './components/Method';
import Services from './components/Services';
import Metrics from './components/Metrics';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
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

export default App;
