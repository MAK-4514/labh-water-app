import { motion } from 'framer-motion';
import './Services.css';

const services = [
  { icon: 'jar', title: '20L Mineral Water Jars', desc: 'Premium packaged drinking water in durable jars with sealed tamper-proof caps. Perfect for offices, homes, and shops.', tag: 'Home & Office' },
  { icon: 'truck', title: '20L Mineral Water Bottles', desc: 'High-quality 20-litre PET bottles filled with 7-stage purified mineral water. Ideal for daily household and commercial use.', tag: 'Daily Use' },
  { icon: 'check', title: '7-Stage RO Purification', desc: 'Advanced multi-stage purification guarantees TDS-balanced, mineral-enriched water meeting all BIS standards.', tag: 'Certified Quality' },
  { icon: 'clock', title: '24/7 On-Demand Delivery', desc: 'Round-the-clock availability with rapid dispatch. Same-day delivery across Kadi and surrounding areas.', tag: 'Always Available' },
  { icon: 'shield', title: 'Quality Assurance', desc: 'Regular lab testing, ISO-process compliance, and transparent quality reports for every batch.', tag: 'Lab Tested' },
  { icon: 'users', title: 'Subscription Plans', desc: 'Save more with weekly & monthly subscription plans. Priority delivery and flexible scheduling.', tag: 'Save More' },
];

const icons = {
  jar: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 21a3 3 0 0 1 0-6h13a3 3 0 0 1 0 6z"/><path d="M12 15V3"/><path d="m8 7 4-4 4 4"/></svg>,
  truck: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  check: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>,
  clock: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  shield: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  users: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] } }),
};

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-label">💧 Our Services</span>
          <h2 className="section-title">Water Solutions for <span className="hl">Every Need</span></h2>
          <p className="section-subtitle">From 20-litre jars for homes to bulk tanker supply for factories — LABH WATER delivers purity at scale.</p>
        </motion.div>
        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div className="service-card" key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={cardVariants} whileHover={{ y: -8, borderColor: 'rgba(6,182,212,0.3)' }}>
              <div className="service-icon">{icons[s.icon]}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-tag">→ {s.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
