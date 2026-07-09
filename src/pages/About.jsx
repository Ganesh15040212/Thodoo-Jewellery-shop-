import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Heart } from 'lucide-react';
import '../styles/pages/About.css';

export default function About() {
  return (
    <main className="about-page page-enter">
      {/* Hero Banner */}
      <div className="about-hero" style={{
        backgroundImage: `linear-gradient(rgba(45, 27, 21, 0.75), rgba(45, 27, 21, 0.75)), url('/100.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Since 1975</span>
          <h1 className="about-hero-title">About Thodoo</h1>
          <p className="about-hero-subtitle">Crafting stories of elegance, heritage, and individual expression.</p>
        </div>
      </div>

      {/* Main Story Section */}
      <section className="section about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image-wrap">
              <img src="/34.png" alt="Handcrafted Thodoo Earrings" className="story-image" />
              <div className="story-image-badge">
                <span className="badge-text">Handcrafted with Love</span>
              </div>
            </div>
            
            <div className="story-content">
              <span className="eyebrow">Our Story</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>The Art of Expressing Individuality</h2>
              <p className="story-desc">
                At Thodoo, we’re not just a brand; we’re a lifestyle. Founded with a passion for celebrating cultural diversity and individual expression, Thodoo has become a haven for those seeking a harmonious blend of modern trends and ethnic charm.
              </p>
              <p className="story-desc">
                Our journey began with the aspiration to provide a unique space where customers can explore, appreciate, and embrace the beauty of both contemporary and traditional earrings.
              </p>
              <p className="story-desc">
                We believe that a pair of earrings is more than just an accessory—it is an extension of your personality, a celebration of heritage, and a spark of confidence. That is why we specialize exclusively in earrings, dedicating our artistry to perfecting this single, timeless craft.
              </p>
              <div style={{ marginTop: 'var(--space-xl)' }}>
                <Link to="/catalog" className="btn btn-gold btn-lg">
                  View More Collections <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="section about-values-section" style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Core Principles</span>
            <h2 className="section-title">The Thodoo Values</h2>
            <div className="gold-line gold-line-center" style={{ marginTop: '12px' }} />
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrap">
                <Sparkles size={24} />
              </div>
              <h3>Specialist Focus</h3>
              <p>We dedicate 100% of our design and craftsmanship exclusively to earrings, perfecting every hook, stud, and drop.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon-wrap">
                <Shield size={24} />
              </div>
              <h3>Guaranteed Purity</h3>
              <p>We work exclusively with BIS hallmarked 18K and 9K gold, GIA/IGI diamonds, and natural gemstones.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon-wrap">
                <Heart size={24} />
              </div>
              <h3>Cultural Expression</h3>
              <p>Blending contemporary silhouettes with traditional Indian heritage to celebrate your individual style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Stats */}
      <section className="section about-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">1975</span>
              <span className="stat-label">Year Founded</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">18K & 9K</span>
              <span className="stat-label">BIS Hallmarked Gold</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Earring Specialist</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
