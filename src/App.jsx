import { useState, useEffect } from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Counters from './components/Counters';
import WhyUs from './components/WhyUs';
import Industrial from './components/Industrial';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className={`preloader ${!loading ? 'hidden' : ''}`}>
        <div style={{ textAlign: 'center' }}>
          <div className="preloader-logo">LW<span className="dot">.</span></div>
          <div className="preloader-bar" />
        </div>
      </div>

      {/* Main Site */}
      <Navbar />
      <Hero />
      <Services />
      <Counters />
      <WhyUs />
      <Industrial />
      <Pricing />
      <Testimonials />
      <OrderForm />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
