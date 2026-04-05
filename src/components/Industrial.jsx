import { motion } from 'framer-motion';
import './Industrial.css';

const Check = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;

const features = [
  '5,000L — 20,000L tanker capacity per delivery',
  '24/7 emergency supply for non-stop factory operations',
  'Customized supply contracts & flexible billing',
  'Dedicated account manager for factory clients',
  'Quality reports & compliance documentation provided',
];

export default function Industrial() {
  return (
    <section className="section" id="industrial">
      <div className="container">
        <div className="industrial-grid">
          <motion.div className="industrial-content" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-label">🏭 G.I.D.C. Industrial Supply</span>
            <h2 className="section-title">Powering Kadi's <span className="hl">Industrial Growth</span></h2>
            <p className="section-subtitle">Dedicated bulk water supply infrastructure built for the demanding needs of G.I.D.C. industrial zone.</p>
            <div className="feature-list">
              {features.map((f, i) => (
                <motion.div className="feature-item" key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                  <div className="check-icon"><Check /></div>
                  <span>{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="industrial-image" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={`${import.meta.env.BASE_URL}assets/images/industrial-plant.png`} alt="Industrial plant" />
            <div className="capacity-badge"><div className="number">20K+</div><div className="label">Litres / Day</div></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
