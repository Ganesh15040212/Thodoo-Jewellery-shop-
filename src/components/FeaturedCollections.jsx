import { Link } from 'react-router-dom';
import { COLLECTIONS } from '../data/categories';
import { useMarqueeDrag } from '../hooks/useMarqueeDrag';
import '../styles/components/FeaturedCollections.css';

export default function FeaturedCollections() {
  // Duplicate collections multiple times to create a seamless, infinite loop marquee
  const marqueeItems = [...COLLECTIONS, ...COLLECTIONS, ...COLLECTIONS];
  const { containerRef, dragProps } = useMarqueeDrag();

  return (
    <section className="section featured-section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="featured-header">
          <div>
            <span className="eyebrow">Curated for You</span>
            <h2 className="section-title">Featured Earring Collections</h2>
            <div className="gold-line gold-line-center" style={{ marginTop: '12px' }} />
          </div>
        </div>
      </div>
      
      {/* Full-width Marquee Section — drag to scroll horizontally */}
      <div ref={containerRef} className="featured-marquee-container" {...dragProps}>
        <div className="featured-marquee-track">
          {marqueeItems.map((col, idx) => (
            <div
              key={`${col.id}-${idx}`}
              to={`/catalog/${col.id}`}
              className="featured-marquee-card"
            >
              <div className="collection-img-wrap">
                <img src={col.image} alt={col.label} className="collection-img" loading="lazy" />
                <div className="collection-overlay" />
                <div className="collection-card-glow" />
                
                {/* Floating bubble elements */}
                <div className="collection-bubbles">
                  <span className="bubble b1"></span>
                  <span className="bubble b2"></span>
                  <span className="bubble b3"></span>
                  <span className="bubble b4"></span>
                  <span className="bubble b5"></span>
                </div>
              </div>
              <div className="collection-content">
                <h3 className="collection-name">{col.label}</h3>
                <span className="collection-cta">
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
