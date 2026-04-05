import { motion } from 'framer-motion';
import './WhyUs.css';

const features = [
  { icon: '💧', title: '7-Stage Purification Process', desc: 'UV + RO + mineral enrichment ensures every drop is safe, balanced, and refreshing.' },
  { icon: '✅', title: 'Mineral-Balanced TDS', desc: 'Optimized Total Dissolved Solids for perfect taste and health benefits.' },
  { icon: '⏱️', title: 'Timely G.I.D.C. Delivery', desc: 'Dedicated fleet ensures on-time delivery to every factory and office in Kadi GIDC zone.' },
  { icon: '🛡️', title: 'BIS & FSSAI Compliant', desc: 'Fully certified operations meeting all Indian government safety and quality standards.' },
];

export default function WhyUs() {
  return (
    <section className="section section-alt" id="why-us">
      <div className="container">
        <div className="why-grid">
          <motion.div className="why-image" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={`${import.meta.env.BASE_URL}assets/images/quality-lab.png`} alt="Quality lab" />
            <div className="image-overlay"><span>🔬 BIS Certified Lab Testing</span></div>
          </motion.div>
          <motion.div className="why-features" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-label">🛡️ Why Choose Us</span>
            <h2 className="section-title">Trusted Purity, <span className="hl">Delivered Daily</span></h2>
            <p className="section-subtitle">LABH WATER is built on reliability, quality, and deep roots in Kadi's industrial community.</p>
            {features.map((f, i) => (
              <motion.div className="why-feature" key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}>
                <div className="why-feature-icon">{f.icon}</div>
                <div><h4>{f.title}</h4><p>{f.desc}</p></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
