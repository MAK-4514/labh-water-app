import './Footer.css';

const WA_LINK = 'https://wa.me/917978774514?text=Hello%20LABH%20WATER%2C%20I%20am%20interested%20in%20your%20water%20supply%20services%20in%20Kadi%20GIDC.%20Please%20provide%20more%20details.';

export default function Footer() {
  const scrollTo = (e, id) => { e.preventDefault(); const el = document.querySelector(id); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); };
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-mark" style={{ fontSize: '2.5rem', marginBottom: 8 }}>LW<span className="dot">.</span></div>
            <span className="brand-name-text" style={{ display: 'block', marginBottom: 16 }}>LABH WATER</span>
            <p>Gujarat's trusted mineral water supply partner. Delivering purity to industries and homes across Kadi G.I.D.C. since 2015.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .612.616l4.584-1.454A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.359 0-4.546-.756-6.328-2.038l-.442-.33-3.082.978.995-2.997-.362-.473A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {['home','services','why-us','industrial','pricing','order'].map(id => (
                <li key={id}><a href={`#${id}`} onClick={(e) => scrollTo(e, `#${id}`)}>{id.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>20L Water Jars</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>20L Water Bottles</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Quality Assurance</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Subscription Plans</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>📍 G.I.D.C, Kadi, Mehsana, Gujarat, 382715</li>
              <li>📞 +91 7978774514</li>
              <li>⏰ 24/7 Available</li>
            </ul>
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14653.231!2d72.3319!3d23.2989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a5d23e9c8c3%3A0x1c34f7e54f0a39e3!2sGIDC%2C%20Kadi%2C%20Gujarat%20382715!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="LABH WATER Location"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 LABH WATER. All rights reserved. | Kadi G.I.D.C., Mehsana, Gujarat</p>
          <div className="footer-social">
            <a href="tel:+917978774514" aria-label="Call">📞</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
