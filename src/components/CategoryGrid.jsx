import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { useMarqueeDrag } from '../hooks/useMarqueeDrag';
import '../styles/components/CategoryGrid.css';

export default function CategoryGrid() {
  // Duplicate categories multiple times to create a seamless, infinite loop marquee
  const marqueeItems = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES];
  const { containerRef, dragProps } = useMarqueeDrag();

  return (
    <section id="earring-types" className="section category-section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Shop by Category</span>
          <h2 className="section-title">Explore Earring Types</h2>
          <div className="gold-line gold-line-center" style={{ marginTop: '12px' }} />
        </div>
      </div>
      
      {/* Full-width Marquee Section — drag to scroll horizontally */}
      <div ref={containerRef} className="category-marquee-container" {...dragProps}>
        <div className="category-marquee-track">
          {marqueeItems.map((cat, idx) => (
            <div
              key={`${cat.id}-${idx}`}
              to={`/catalog/${cat.id}`}
              className="category-marquee-card"
            >
              <div className="category-card-img-wrap">
                <img src={cat.image} alt={cat.label} className="category-card-img" loading="lazy" />
                <div className="category-card-overlay"></div>
                <div className="category-card-glow" />
                
                {/* Floating bubble elements */}
                <div className="category-bubbles">
                  <span className="bubble b1"></span>
                  <span className="bubble b2"></span>
                  <span className="bubble b3"></span>
                  <span className="bubble b4"></span>
                  <span className="bubble b5"></span>
                </div>
              </div>
              <div className="category-card-content">
                <h3 className="category-card-title">{cat.label}</h3>
                <span className="category-card-link">
                  Explore <span className="arrow-move">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
