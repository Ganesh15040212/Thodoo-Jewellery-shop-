import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Gift, Star, ArrowRight, Shield, Award, Gem, Heart, ShieldCheck } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedCollections from '../components/FeaturedCollections';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { PRODUCTS, GOLD_RATE } from '../data/products';
import '../styles/pages/Home.css';

export default function Home() {
  const [quickView, setQuickView] = useState(null);

  // Filter products for different sections
  const newArrivals = PRODUCTS.filter(p => p.badge === 'New' || p.id === 2 || p.id === 4).slice(0, 4);
  const bestSellers = PRODUCTS.filter(p => p.badge === 'Best Seller' || p.reviews > 150).slice(0, 4);
  const offersList = PRODUCTS.filter(p => p.badge === 'Limited' || p.badge === 'Premium').slice(0, 4);

  return (
    <main className="page-enter">
      <HeroSlider />

      {/* Gold Rate Banner */}
      <div className="gold-rate-banner">
        <div className="gold-rate-static-bar">
          <div className="gold-rate-static-content">
            <div className="gold-rate-label">
              <TrendingUp size={14} />
              <span>Today's Gold Rate</span>
            </div>
            {[['18K', GOLD_RATE['18K']], ['9K', GOLD_RATE['9K']]].map(([k, v]) => (
              <div key={k} className="gold-rate-item">
                <span className="gold-rate-purity">{k}</span>
                <span className="gold-rate-price">₹{v.toLocaleString()}/g</span>
              </div>
            ))}
            <div className={`gold-rate-change ${GOLD_RATE.trend}`}>
              {GOLD_RATE.change} today
            </div>
            <Link to="/catalog?metal=gold" className="gold-rate-cta">
              Shop Gold Earrings <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT THE BRAND SECTION (ABOUT MENU) */}
      <section className="section home-about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="eyebrow">Our Story</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>At Thodoo, we’re not just a brand; we’re a lifestyle.</h2>
              <p className="about-desc">
                Founded with a passion for celebrating cultural diversity and individual expression, Thodoo has become a haven for those seeking a harmonious blend of modern trends and ethnic charm.
              </p>
              <p className="about-desc">
                Our journey began with the aspiration to provide a unique space where customers can explore, appreciate, and embrace the beauty of both contemporary and traditional earrings.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="feature-icon"><Award size={20} /></div>
                  <div>
                    <h4>100% Certified Purity</h4>
                    <p>Every piece is hallmarked with standard 18K/9K BIS certifications.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="feature-icon"><Sparkles size={20} /></div>
                  <div>
                    <h4>Specialized Earring Craft</h4>
                    <p>From studs to traditional jhumkas, explore designs crafted for comfort & luxury.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-gold btn-lg" style={{ marginTop: 'var(--space-md)' }}>
                Learn More About Us <ArrowRight size={14} />
              </Link>
            </div>
            <div className="about-image-wrap">
              <img src="/30.png" alt="Craftsmanship" className="about-image" />
              <div className="about-experience-badge">
                <span className="exp-years">50+</span>
                <span className="exp-text">Years of Trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY TYPE (SHOP BY TYPE MENU) */}
      <CategoryGrid />

      {/* SHOP BY COLLECTION */}
      <FeaturedCollections />

      {/* NEW ARRIVALS SECTION (NEW ARRIVALS MENU) */}
      <section className="section new-arrivals-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">The Latest Creations</span>
            <h2 className="section-title">New Arrivals</h2>
            <div className="gold-line gold-line-center" style={{ marginTop: '12px' }} />
          </div>
          <div className="products-grid">
            {newArrivals.map(p => (
              <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
            ))}
          </div>
          <div className="showcase-cta">
            <Link to="/catalog?sort=newest" className="btn btn-gold btn-lg">
              Shop New Arrivals <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BEST SELLERS SECTION (BEST SELLERS MENU) */}
      <section className="section best-sellers-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Most Loved Designs</span>
            <h2 className="section-title">Best Sellers</h2>
            <div className="gold-line gold-line-center" style={{ marginTop: '12px' }} />
          </div>
          <div className="products-grid">
            {bestSellers.map(p => (
              <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
            ))}
          </div>
          <div className="showcase-cta">
            <Link to="/catalog?sort=popular" className="btn btn-gold btn-lg">
              Shop Best Sellers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OFFERS & BENEFITS SECTION (OFFERS MENU) */}
      <section className="section offers-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Special Value Packages</span>
            <h2 className="section-title">Exclusive Offers & Benefits</h2>
            <div className="gold-line gold-line-center" style={{ marginTop: '12px' }} />
          </div>
          
          <div className="offers-grid-layout">
            <div className="offers-promo-cards">
              <div className="promo-card">
                <div className="promo-badge">Limited Time</div>
                <h3>Zero Making Charges</h3>
                <p>Enjoy 0% making charges on our select daily wear gold studs and comfortable hoops collection this month.</p>
              </div>
              <div className="promo-card">
                <div className="promo-badge">Trust Benefit</div>
                <h3>100% Lifetime Exchange</h3>
                <p>Exchange your 18K or 9K gold earrings at full current gold market value with zero deductions at any of our outlets.</p>
              </div>
            </div>

            <div className="offers-featured-products">
              <h3 className="offers-products-title">Featured Limited Editions</h3>
              <div className="products-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                {offersList.slice(0, 2).map(p => (
                  <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="showcase-cta">
            <Link to="/catalog" className="btn btn-gold btn-lg">
              Explore All Offers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Thodoo Collections */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">The Thodoo Collections Promise</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: Shield, title: 'BIS Hallmarked', desc: 'Every piece certified by Bureau of Indian Standards for guaranteed gold purity.' },
              { icon: Award, title: 'GIA Diamonds', desc: 'All diamonds come with GIA/IGI certification for complete transparency.' },
              { icon: Star, title: '4.9★ Rated', desc: 'Over 5 lakh satisfied customers across India trust Thodoo Collections.' },
              { icon: Gift, title: 'Lifetime Exchange', desc: 'Exchange your earrings at current gold value — no questions asked.' },
              { icon: Sparkles, title: 'Master Craftsmen', desc: 'Handcrafted by skilled artisans with decades of earring-making expertise.' },
              { icon: TrendingUp, title: 'Best Gold Rate', desc: 'Transparent pricing with live gold rates. No hidden charges, ever.' },
            ].map(item => (
              <div key={item.title} className="why-card">
                <div className="why-icon-wrap">
                  <item.icon size={24} />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Customer Stories</span>
            <h2 className="section-title">Words of Love</h2>
            <div className="gold-line gold-line-center" style={{marginTop:'12px'}} />
          </div>
          <div className="testimonials-grid">
            {[
              { name: 'Priya Sharma', location: 'Hyderabad', text: 'Bought my bridal jhumka earrings from Thodoo Collections and they were absolutely breathtaking. The quality and craftsmanship are unmatched. Got so many compliments at my wedding!', rating: 5, occasion: 'Wedding Jhumkas' },
              { name: 'Sneha Reddy', location: 'Bangalore', text: 'The diamond stud earrings I bought are stunning. The hallmarking certificate gave us so much confidence. Will definitely shop again for all my earrings needs.', rating: 5, occasion: 'Diamond Studs' },
              { name: 'Kavitha Iyer', location: 'Chennai', text: 'Virtual try-on feature is a game changer! Tried multiple chandeliers and hoops from home and chose the perfect pair. Delivery was also super fast and beautifully packed.', rating: 5, occasion: 'Gold Hoops' },
            ].map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="#8B5A2B" color="#8B5A2B" />)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-location">{t.location} · {t.occasion}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {quickView && <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />}
    </main>
  );
}
