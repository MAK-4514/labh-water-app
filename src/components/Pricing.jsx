import { motion } from 'framer-motion';
import './Pricing.css';

const Chk = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;

export default function Pricing() {
  const scrollTo = (e, id) => { e.preventDefault(); const el = document.querySelector(id); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); };
  return (
    <section className="section" id="pricing">
      <div className="container">
        <motion.div className="section-header" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <span className="section-label">💰 Pricing</span>
          <h2 className="section-title">Transparent <span className="hl">Pricing Plans</span></h2>
          <p className="section-subtitle">Simple, honest pricing with no hidden charges. Volume discounts available for industrial clients.</p>
        </motion.div>
        <div className="price-cards">
          <motion.div className="price-card" initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} whileHover={{ y:-6 }}>
            <h3>20L Mineral Water Jar</h3>
            <div className="price">₹30 <small>/ 20L Jar</small></div>
            <ul className="features"><li><Chk /> 7-Stage RO Purified</li><li><Chk /> Sealed Tamper-Proof Cap</li><li><Chk /> Free Delivery in Kadi</li><li><Chk /> Subscription Discounts</li></ul>
            <a href="#order" className="btn btn-secondary" style={{ width:'100%' }} onClick={(e) => scrollTo(e, '#order')}>Order Jars</a>
          </motion.div>
          <motion.div className="price-card popular" initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.15, duration:0.5 }} whileHover={{ y:-6 }}>
            <h3>20L Mineral Water Bottle</h3>
            <div className="price">₹25 <small>/ 20L Bottle</small></div>
            <ul className="features"><li><Chk /> 7-Stage RO Purified</li><li><Chk /> Premium PET Bottle</li><li><Chk /> Free Delivery in Kadi</li><li><Chk /> Bulk Order Discounts</li></ul>
            <a href="#order" className="btn btn-primary" style={{ width:'100%' }} onClick={(e) => scrollTo(e, '#order')}>Order Bottles</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
