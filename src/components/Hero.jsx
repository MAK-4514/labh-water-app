import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current && window.scrollY < window.innerHeight) {
        imgRef.current.style.transform = `scale(1.1) translateY(${window.scrollY * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img ref={imgRef} src="/assets/images/hero-bg.png" alt="Premium water" />
      </div>
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div className="hero-badge" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
            <span className="pulse-dot" /> Trusted Since 2015 — Kadi GIDC
          </motion.div>

          <h1 className="hero-title">
            <motion.span className="brand-text" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.6 }}>
              LABH WATER
            </motion.span>
          </h1>

          <p className="hero-description">
            Gujarat's trusted mineral water partner. We deliver 7-stage purified, mineral-balanced water to industries and homes across Kadi G.I.D.C. — on time, every time.
          </p>

          <div className="hero-actions">
            <a href="#order" className="btn btn-primary btn-lg" onClick={(e) => scrollTo(e, '#order')}>
              Order Now <Arrow />
            </a>
            <a href="#services" className="btn btn-secondary btn-lg" onClick={(e) => scrollTo(e, '#services')}>
              <Play /> Explore Services
            </a>
          </div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <StatItem target={500} label="Happy Clients" />
            <StatItem target={10} label="Years Experience" />
            <StatItem target={24} label="Hour Support" />
          </motion.div>
        </motion.div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse" /><span>Scroll</span>
      </div>
    </section>
  );
}

function StatItem({ target, label }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;
        let current = 0;
        const increment = target / 120;
        const tick = () => {
          current += increment;
          if (current < target) { el.textContent = Math.floor(current) + '+'; requestAnimationFrame(tick); }
          else el.textContent = target + '+';
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item">
      <div className="stat-number" ref={ref}>0</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Arrow() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}

function Play() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>;
}
