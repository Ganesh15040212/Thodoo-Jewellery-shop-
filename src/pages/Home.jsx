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
import social1 from '../assets/1.png';
import social2 from '../assets/2.png';
import social3 from '../assets/3.png';
import social4 from '../assets/4.png';
import social5 from '../assets/5.png';
import social6 from '../assets/6.png';

export default function Home() {
  const [quickView, setQuickView] = useState(null);

  // Filter products for different sections
  const newArrivals = PRODUCTS.filter(p => p.badge === 'New' || p.id === 2 || p.id === 4).slice(0, 4);
  const bestSellers = PRODUCTS.filter(p => p.badge === 'Best Seller' || p.reviews > 150).slice(0, 4);
  const offersList = PRODUCTS.filter(p => p.badge === 'Limited' || p.badge === 'Premium').slice(0, 4);

  const socialItems = [
    { img: social1, likes: '1.2K', comments: '45' },
    { img: social2, likes: '2.4K', comments: '112' },
    { img: social3, likes: '980', comments: '32' },
    { img: social4, likes: '1.8K', comments: '94' },
    { img: social5, likes: '3.1K', comments: '156' },
    { img: social6, likes: '1.5K', comments: '88' },
  ];
  const socialMarqueeItems = [...socialItems, ...socialItems, ...socialItems];

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
            <a href="#" className="gold-rate-cta" onClick={(e) => {
              e.preventDefault();
              document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
              Shop Gold Earrings <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
      {/* ABOUT THE BRAND SECTION (ABOUT MENU) */}
      <section id="about" className="section home-about-section">
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
              <a href="#" className="btn btn-gold btn-lg" style={{ marginTop: 'var(--space-md)' }} onClick={(e) => {
                e.preventDefault();
                document.getElementById('earring-types')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                Learn More About Us <ArrowRight size={14} />
              </a>
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
      <section id="new-arrivals" className="section new-arrivals-section">
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
            <a href="#" className="btn btn-gold btn-lg" onClick={(e) => {
              e.preventDefault();
              document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
              Shop New Arrivals <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* BEST SELLERS SECTION (BEST SELLERS MENU) */}
      <section id="best-sellers" className="section best-sellers-section">
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
            <a href="#" className="btn btn-gold btn-lg" onClick={(e) => {
              e.preventDefault();
              document.getElementById('best-sellers')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
              Shop Best Sellers <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* OFFERS & BENEFITS SECTION (OFFERS MENU) */}
      <section id="offers" className="section offers-section">
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
              <div className="offers-featured-grid">
                {offersList.slice(0, 2).map(p => (
                  <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="showcase-cta">
            <a href="#" className="btn btn-gold btn-lg" onClick={(e) => {
              e.preventDefault();
              document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
              Explore All Offers <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Thodoo Collections */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">The Thodoo Collections Promise</h2>
            <div className="gold-line gold-line-center" style={{ marginTop: '12px' }} />
          </div>
        </div>

        {/* Full-width Marquee Section */}
        <div className="why-marquee-container">
          <div className="why-marquee-track">
            {[
              ...[
                { icon: Shield, title: 'BIS Hallmarked', desc: 'Every piece certified by Bureau of Indian Standards for guaranteed gold purity.' },
                { icon: Award, title: 'GIA Diamonds', desc: 'All diamonds come with GIA/IGI certification for complete transparency.' },
                { icon: Star, title: '4.9★ Rated', desc: 'Over 5 lakh satisfied customers across India trust Thodoo Collections.' },
                { icon: Gift, title: 'Lifetime Exchange', desc: 'Exchange your earrings at current gold value — no questions asked.' },
                { icon: Sparkles, title: 'Master Craftsmen', desc: 'Handcrafted by skilled artisans with decades of earring-making expertise.' },
                { icon: TrendingUp, title: 'Best Gold Rate', desc: 'Transparent pricing with live gold rates. No hidden charges, ever.' },
              ],
              ...[
                { icon: Shield, title: 'BIS Hallmarked', desc: 'Every piece certified by Bureau of Indian Standards for guaranteed gold purity.' },
                { icon: Award, title: 'GIA Diamonds', desc: 'All diamonds come with GIA/IGI certification for complete transparency.' },
                { icon: Star, title: '4.9★ Rated', desc: 'Over 5 lakh satisfied customers across India trust Thodoo Collections.' },
                { icon: Gift, title: 'Lifetime Exchange', desc: 'Exchange your earrings at current gold value — no questions asked.' },
                { icon: Sparkles, title: 'Master Craftsmen', desc: 'Handcrafted by skilled artisans with decades of earring-making expertise.' },
                { icon: TrendingUp, title: 'Best Gold Rate', desc: 'Transparent pricing with live gold rates. No hidden charges, ever.' },
              ],
              ...[
                { icon: Shield, title: 'BIS Hallmarked', desc: 'Every piece certified by Bureau of Indian Standards for guaranteed gold purity.' },
                { icon: Award, title: 'GIA Diamonds', desc: 'All diamonds come with GIA/IGI certification for complete transparency.' },
                { icon: Star, title: '4.9★ Rated', desc: 'Over 5 lakh satisfied customers across India trust Thodoo Collections.' },
                { icon: Gift, title: 'Lifetime Exchange', desc: 'Exchange your earrings at current gold value — no questions asked.' },
                { icon: Sparkles, title: 'Master Craftsmen', desc: 'Handcrafted by skilled artisans with decades of earring-making expertise.' },
                { icon: TrendingUp, title: 'Best Gold Rate', desc: 'Transparent pricing with live gold rates. No hidden charges, ever.' },
              ]
            ].map((item, idx) => (
              <div key={idx} className="why-card">
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

      {/* Social Gallery Section */}
      <section className="section social-gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Social Gallery
            </span>
            <h2 className="section-title">As Seen On You</h2>
            <p style={{ marginTop: '8px', color: 'var(--charcoal-light)', fontSize: '0.9rem' }}>
              Tag <span style={{ color: 'var(--gold)', fontWeight: '600' }}>@kriyaalaya_jewellery</span> to share your timeless wedding and lifestyle moments.
            </p>
            <div className="gold-line gold-line-center" style={{ marginTop: '12px' }} />
          </div>
        </div>

        {/* Full-width Marquee Section (Left to Right) */}
        <div className="social-marquee-container">
          <div className="social-marquee-track">
            {socialMarqueeItems.map((item, idx) => (
              <a key={idx} href="" target="_blank" rel="noopener noreferrer" className="social-marquee-card">
                <div className="social-card-img-wrap">
                  <img src={item.img} alt={`Social Moment ${idx + 1}`} className="social-gallery-img" loading="lazy" />
                  <div className="social-gallery-overlay">
                    <svg className="social-hover-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <div className="social-stats">
                      <span className="social-stat-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                        {item.likes}
                      </span>
                      <span className="social-stat-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                        {item.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
              Follow Our Journey
            </a>
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
