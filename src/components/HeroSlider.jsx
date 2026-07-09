import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/components/HeroSlider.css';

const SLIDES = [
  {
    id: 1,
    badge: 'New Bridal Earrings 2025',
    title: 'Where Every Earring\nTells a Story',
    subtitle: 'Exquisite gold, diamond & bridal earrings crafted for India\'s most precious moments.',
    cta1: { label: 'Shop Bridal', href: '/catalog/bridal' },
    cta2: { label: 'Explore Diamonds', href: '/catalog/diamond' },
    video: '/Create_a_luxurious_cinematic_j.mp4',
    accent: '#8B5A2B',
    align: 'left',
  },
  {
    id: 2,
    badge: 'Diamond Earrings',
    title: 'Diamonds That\nCapture Eternity',
    subtitle: 'Certified solitaires, cluster dangles & statement studs that define luxury.',
    cta1: { label: 'Shop Diamonds', href: '/catalog/diamond' },
    cta2: { label: 'View All', href: '/catalog' },
    video: '/Create_a_luxurious_jewelry_pro.mp4',
    accent: '#7BA3C8',
    align: 'center',
  },
  {
    id: 3,
    badge: 'Temple Earrings',
    title: 'Heritage Crafted\nWith Devotion',
    subtitle: 'Ancient temple art traditions woven into breathtaking gold earrings.',
    cta1: { label: 'Shop Temple', href: '/catalog/temple' },
    cta2: { label: 'Antique Earrings', href: '/catalog/antique' },
    video: '/Create_a_premium_luxury_jewell.mp4',
    accent: '#8B5A2B',
    align: 'left',
  },
  {
    id: 4,
    badge: '18K & 9K Gold',
    title: 'Exquisite 18K & 9K Gold\nFor Every Occasion',
    subtitle: 'Beautiful gold earrings crafted in premium 18K and 9K gold.',
    cta1: { label: 'Shop Gold Earrings', href: '/catalog?metal=gold' },
    cta2: { label: 'All Earrings', href: '/catalog' },
    video: '/Create_an_ultra_realistic_luxu.mp4',
    accent: '#8B5A2B',
    align: 'center',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const go = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((idx + SLIDES.length) % SLIDES.length);
      setAnimating(false);
    }, 200);
  };

  const next = () => go(current + 1);
  const prev = () => go(current - 1);

  useEffect(() => {
    timerRef.current = setInterval(next, 5500);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section className="hero">
      {/* Background */}
      <div className={`hero-bg ${animating ? 'fading' : ''}`}>
        <video src={slide.video || ""} autoPlay loop muted playsInline />
        <div className="hero-overlay" />
        <div className="hero-grain" />
      </div>

      {/* Floating Particles */}
      <div className="hero-particles">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }} />
        ))}
      </div>

      {/* Content */}
      <div className={`hero-content hero-align-${slide.align} ${animating ? 'hero-exit' : 'hero-enter'}`}>
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          {slide.badge}
        </div>
        <h1 className="hero-title">
          {slide.title.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
        <p className="hero-subtitle">{slide.subtitle}</p>
        <div className="hero-ctas">
          <Link to={slide.cta1.href} className="btn btn-gold btn-lg hero-cta">{slide.cta1.label}</Link>
          <Link to={slide.cta2.href} className="btn btn-outline btn-lg hero-cta">{slide.cta2.label}</Link>
        </div>

        {/* Quick Category Pills */}
        <div className="hero-quick-links">
          {['Studs', 'Jhumkas', 'Hoops', 'Chandeliers'].map(cat => (
            <Link key={cat} to={`/catalog/${cat.toLowerCase()}`} className="hero-quick-pill">{cat}</Link>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button className="hero-arrow hero-arrow-left" onClick={prev} aria-label="Previous">
        <ChevronLeft size={22} />
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next">
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`hero-dot ${i === current ? 'active' : ''}`} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
