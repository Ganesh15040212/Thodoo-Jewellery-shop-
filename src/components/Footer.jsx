import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Award, RefreshCcw, Truck, Lock, HeadphonesIcon } from 'lucide-react';
import '../styles/components/Footer.css';
import logoImg from '../assets/images/logo.png';

const footerLinks = {
  'Shop': [
    { label: 'Jhumka Collection', href: '#' },
    { label: 'Stud Earrings', href: '#' },
    { label: 'Hoop Earrings', href: '#' },
    { label: 'Chandelier Earrings', href: '#' },
    { label: 'Diamond Earrings', href: '#' },
    { label: 'Gold Earrings', href: '#' },
  ],
  'Customer Care': [
    { label: 'Track Order', href: '#' },
    { label: 'Return Policy', href: '#' },
    { label: 'Exchange Policy', href: '#' },
    { label: 'Buyback Policy', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  'Company': [
    { label: 'About Thodoo Collections', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* Trust Badges */}
      <div className="footer-trust">
        <div className="container">
          <div className="trust-grid">
            {[
              { icon: <ShieldCheck size={24} />, label: 'BIS Hallmarked', desc: 'All gold certified by BIS' },
              { icon: <Award size={24} />, label: 'GIA Certified', desc: 'Authentic diamond grading' },
              { icon: <RefreshCcw size={24} />, label: '30-Day Returns', desc: 'Easy hassle-free returns' },
              { icon: <Truck size={24} />, label: 'Free Shipping', desc: 'On orders above ₹10,000' },
              { icon: <Lock size={24} />, label: 'Secure Payments', desc: '256-bit SSL encryption' },
              { icon: <HeadphonesIcon size={24} />, label: '24/7 Support', desc: 'Always here to help you' },
            ].map(item => (
              <div key={item.label} className="trust-item">
                <span className="trust-icon">{item.icon}</span>
                <div>
                  <h4 className="trust-label">{item.label}</h4>
                  <p className="trust-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <p to="/" className="footer-logo" style={{ textDecoration: 'none' }}>
                <img src={logoImg} alt="Thodoo" className="footer-logo-img" />
              </p>
              <p className="footer-about">
                India's most trusted premium earring brand, crafting exquisite gold, diamond,
                and bridal earrings since 1975. Over 5 lakh happy customers across India.
              </p>
              <div className="footer-contact-items">
                <a href="#" className="footer-contact-item">
                  <Phone size={14} /> +91 93854 11051
                </a>
                <a href="#" className="footer-contact-item">
                  <Mail size={14} /> thodoo.co@gmail.com
                </a>
                <span className="footer-contact-item" style={{ alignItems: 'flex-start' }}>
                  <MapPin size={14} style={{ marginTop: '4px', flexShrink: 0 }} />
                  <span style={{ lineHeight: 1.4 }}>
                    No.5, Jaya Complex, Thadagam Main Rd,<br />PMR Nagar, TVS Nagar, Coimbatore, Tamil Nadu 641025
                  </span>
                </span>
              </div>
              <div className="footer-socials">
                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                    label: 'Instagram',
                    href: '#'
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    ),
                    label: 'Facebook',
                    href: '#'
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    ),
                    label: 'Youtube',
                    href: '#'
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    ),
                    label: 'Twitter',
                    href: '#'
                  }
                ].map(({ icon, label, href }) => (
                  <a key={label} href={href} className="social-btn" aria-label={label}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="footer-col">
                <h4 className="footer-col-title">{section}</h4>
                <ul className="footer-links">
                  {links.map(link => (
                    <li key={link.label}>
                      <p to={link} className="footer-link">
                        <ArrowRight size={12} /> {link.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="footer-col">
              <h4 className="footer-col-title">Stay Updated</h4>
              <p className="footer-newsletter-desc">
                Subscribe for exclusive offers, new arrivals & earring care tips.
              </p>
              <form className="footer-newsletter" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Your email address" className="footer-email-input" />
                <button type="submit" className="footer-email-btn">
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-copyright">
              <p>© 2026 Thodoo Collections. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <p to="/privacy" className="footer-bottom-link">Privacy Policy</p>
              <p to="/terms" className="footer-bottom-link">Terms of Service</p>
              <p to="/sitemap" className="footer-bottom-link">Sitemap</p>
            </div>
            <div className="footer-payment-icons">
              {['UPI', 'Visa', 'MC', 'Paytm', 'GPay'].map(p => (
                <span key={p} className="payment-icon">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
