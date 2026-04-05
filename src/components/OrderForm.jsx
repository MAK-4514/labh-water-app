import { useState } from 'react';
import { motion } from 'framer-motion';
import './OrderForm.css';

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', supply: '', quantity: '', frequency: 'one-time', address: '', notes: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const labels = { jar: '20L Mineral Water Jar', bottle: '20L Mineral Water Bottle' };
    const msg = `🚰 *New Order — LABH WATER*\n\n👤 *Name:* ${form.name}\n📞 *Phone:* ${form.phone}\n📦 *Supply:* ${labels[form.supply] || form.supply}\n🔢 *Quantity:* ${form.quantity}\n🔄 *Frequency:* ${form.frequency}\n📍 *Address:* ${form.address}\n📝 *Notes:* ${form.notes || 'None'}\n\n---\nSent from LABH WATER website`;
    window.open(`https://wa.me/917978774514?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', supply: '', quantity: '', frequency: 'one-time', address: '', notes: '' }); }, 3000);
  };

  return (
    <section className="section" id="order">
      <div className="container">
        <div className="order-wrapper">
          <motion.div className="order-info" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-label">📋 Place Your Order</span>
            <h2 className="section-title">Order Water <span className="hl">In Minutes</span></h2>
            <p className="section-subtitle">Fill out the form and our team will confirm your delivery schedule instantly via WhatsApp or call.</p>
            <div className="info-card"><div className="info-icon">⏱️</div><div><h4>Quick Response</h4><p>We respond within 15 minutes during business hours.</p></div></div>
            <div className="info-card"><div className="info-icon">🚛</div><div><h4>Same-Day Delivery</h4><p>Orders before 2 PM get delivered the same day in Kadi.</p></div></div>
            <div className="info-card"><div className="info-icon">📞</div><div><h4>Call Anytime</h4><p>Reach us at <strong>7978774514</strong> — 24/7 support.</p></div></div>
          </motion.div>
          <motion.div className="order-form-container" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 className="form-title">Request a Delivery</h3>
            <p className="form-sub">Fill the details below and we'll get back to you instantly.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label>Full Name</label><input name="name" className="form-control" placeholder="Your full name" value={form.name} onChange={handleChange} required /></div>
                <div className="form-group"><label>Phone Number</label><input name="phone" type="tel" className="form-control" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required /></div>
              </div>
              <div className="form-group"><label>Supply Type</label>
                <select name="supply" className="form-control" value={form.supply} onChange={handleChange} required>
                  <option value="">Select supply type</option>
                  <option value="jar">20L Mineral Water Jar</option>
                  <option value="bottle">20L Mineral Water Bottle</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Quantity</label><input name="quantity" type="number" className="form-control" placeholder="e.g. 10" min="1" value={form.quantity} onChange={handleChange} required /></div>
                <div className="form-group"><label>Frequency</label>
                  <select name="frequency" className="form-control" value={form.frequency} onChange={handleChange}>
                    <option value="one-time">One-Time</option><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
              <div className="form-group"><label>Delivery Address</label><input name="address" className="form-control" placeholder="Factory / Office / Home address" value={form.address} onChange={handleChange} required /></div>
              <div className="form-group"><label>Special Instructions</label><textarea name="notes" className="form-control" rows="3" placeholder="Any specific requirements..." value={form.notes} onChange={handleChange} /></div>
              <motion.button type="submit" className={`btn btn-primary btn-submit ${submitted ? 'submitted' : ''}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {submitted ? '✓ Order Sent!' : 'Submit Order →'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
