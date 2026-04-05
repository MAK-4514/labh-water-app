import { motion } from 'framer-motion';
import './Testimonials.css';

const reviews = [
  { quote: "LABH WATER has been our factory's sole water partner for 5 years. Never missed a delivery. Truly reliable.", name: 'Rajesh Patel', role: 'Factory Manager, Kadi GIDC', initials: 'RP' },
  { quote: "Best mineral water quality in Mehsana district. Our employees and family all drink LABH WATER.", name: 'Amit Shah', role: 'Business Owner, Kadi', initials: 'AS' },
  { quote: "Switched our entire housing society to LABH WATER. The taste and purity are unmatched.", name: 'Meena Desai', role: 'Society Secretary, Mehsana', initials: 'MD' },
];

const Star = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div className="section-header" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <span className="section-label">⭐ Testimonials</span>
          <h2 className="section-title">What Our <span className="hl">Clients Say</span></h2>
          <p className="section-subtitle">Trusted by 500+ businesses and families across Gujarat.</p>
        </motion.div>
        <div className="trust-grid">
          {reviews.map((r, i) => (
            <motion.div className="trust-card" key={i} initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.12, duration:0.5 }} whileHover={{ y:-4 }}>
              <div className="stars">{[...Array(5)].map((_, j) => <Star key={j} />)}</div>
              <blockquote>"{r.quote}"</blockquote>
              <div className="reviewer">
                <div className="reviewer-avatar">{r.initials}</div>
                <div className="reviewer-info"><div className="name">{r.name}</div><div className="role">{r.role}</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
