import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Counters.css';

const counters = [
  { target: 500, label: 'Clients Served' },
  { target: 15000, label: 'Jars Delivered Monthly' },
  { target: 98, label: '% Client Retention' },
  { target: 10, label: 'Years of Trust' },
];

function CounterItem({ target, label }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;
        let current = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const tick = () => {
          current += increment;
          if (current < target) { el.textContent = Math.floor(current).toLocaleString() + '+'; requestAnimationFrame(tick); }
          else el.textContent = target.toLocaleString() + '+';
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);
  return (
    <motion.div className="counter-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <div className="counter-value" ref={ref}>0</div>
      <div className="counter-label">{label}</div>
    </motion.div>
  );
}

export default function Counters() {
  return (
    <div className="counter-section">
      <div className="container">
        <div className="counter-grid">
          {counters.map((c, i) => <CounterItem key={i} {...c} />)}
        </div>
      </div>
    </div>
  );
}
