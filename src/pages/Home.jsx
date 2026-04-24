import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Truck, Shield, Star, ChevronRight } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, getWhatsAppLinkGeneral } from '../data/products'
import './Home.css'

// Tampilkan hanya 6 produk unggulan di halaman utama
const featuredProducts = products.slice(0, 6)

const features = [
  {
    icon: '🌸',
    title: 'Bunga Segar Pilihan',
    desc: 'Setiap rangkaian dibuat dari bunga segar pilihan yang dipanen langsung dari kebun terbaik.',
  },
  {
    icon: '🚚',
    title: 'Pengiriman Cepat',
    desc: 'Layanan pengiriman cepat ke JABODETABEK dan Bandung agar bunga tiba dalam kondisi terbaik.',
  },
  {
    icon: '✨',
    title: 'Desain Custom',
    desc: 'Kami siap membantu membuat rangkaian bunga sesuai tema dan keinginan Anda.',
  },
  {
    icon: '💎',
    title: 'Kualitas Premium',
    desc: 'Setiap produk melewati quality control ketat untuk memastikan kepuasan Anda.',
  },
]

const testimonials = [
  {
    name: 'Siti Rahayu',
    text: 'Bunga untuk pernikahan saya luar biasa indah! Timnya sangat profesional dan bunganya fresh banget.',
    rating: 5,
    occasion: '💍 Pernikahan',
  },
  {
    name: 'Budi Santoso',
    text: 'Pesan papan bunga untuk grand opening, sangat bagus dan pengiriman tepat waktu. Highly recommended!',
    rating: 5,
    occasion: '🏪 Grand Opening',
  },
  {
    name: 'Dewi Lestari',
    text: 'Bouquet untuk wisuda teman saya cantik sekali, teman saya sangat senang. Terima kasih Asmah Florist!',
    rating: 5,
    occasion: '🎓 Wisuda',
  },
]

function StarRating({ rating }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? '#f59e0b' : 'none'}
          color={i < rating ? '#f59e0b' : '#4b5563'}
        />
      ))}
    </div>
  )
}

const heroImages = [
  '/hero_banner.png',
  '/product_bouquet.png',
  '/about_store.png'
]

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="home-page">
      {/* ====== HERO SECTION ====== */}
      <section className="hero-section">
        <div className="hero-bg">
          {heroImages.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`Asmah Florist Hero ${idx + 1}`} 
              className={`hero-bg-img ${idx === currentSlide ? 'active' : ''}`} 
            />
          ))}
          <div className="hero-bg-overlay" />
        </div>

        <div className="container hero-content">
          <h1 className="hero-title animate-fade-up" style={{ animationDelay: '100ms' }}>
            Flower Specialist
          </h1>

          <p className="hero-desc animate-fade-up" style={{ animationDelay: '200ms' }}>
            Dari bunga pernikahan hingga papan bunga grand opening — kami hadirkan
            keindahan bunga segar berkualitas tinggi yang akan membuat momen Anda tak terlupakan.
          </p>

          <div className="hero-actions animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Link to="/catalog" className="btn-primary" id="hero-catalog-btn">
              Lihat Katalog
              <ArrowRight size={18} />
            </Link>
            <a
              href={getWhatsAppLinkGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-stats"
              style={{ textDecoration: 'none', padding: '10px 24px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(44, 51, 40, 0.75)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.background = 'rgba(44, 51, 40, 0.55)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f5f0e6' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" style={{ color: '#25d366' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '0.65rem', color: 'rgba(245, 240, 230, 0.7)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Pesan Cepat</span>
                  <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: '700', letterSpacing: '0.5px' }}>Chat WhatsApp</span>
                </div>
              </div>
            </a>

            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/asmahflorist/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-stats"
              style={{ textDecoration: 'none', padding: '10px 24px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(44, 51, 40, 0.75)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.background = 'rgba(44, 51, 40, 0.55)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f5f0e6' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#d4a090" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '0.65rem', color: 'rgba(245, 240, 230, 0.7)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Kunjungi Instagram Kami</span>
                  <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: '700', letterSpacing: '0.5px' }}>@asmahflorist</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* ====== FEATURES SECTION ====== */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-pink">Mengapa Kami?</span>
            <h2 className="section-title">Keunggulan Asmah Florist</h2>
            <p className="section-subtitle">
              Kami berkomitmen menghadirkan pengalaman berbelanja bunga terbaik untuk Anda
            </p>
          </div>

          <div className="features-grid">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="feature-card glass-card"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="feature-icon">{feat.icon}</div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURED PRODUCTS ====== */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-pink">Produk Pilihan</span>
            <h2 className="section-title">Koleksi Unggulan</h2>
            <p className="section-subtitle">
              Temukan rangkaian bunga terbaik kami yang paling diminati pelanggan
            </p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} animDelay={i * 80} />
            ))}
          </div>

          <div className="view-all-wrapper">
            <Link to="/catalog" className="btn-primary" id="view-all-catalog-btn">
              Lihat Semua Produk
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS SECTION ====== */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-pink">Testimoni</span>
            <h2 className="section-title">Kata Pelanggan Kami</h2>
            <p className="section-subtitle">Kepuasan pelanggan adalah prioritas utama kami</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card glass-card" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="testimonial-top">
                  <StarRating rating={t.rating} />
                  <span className="testimonial-occasion">{t.occasion}</span>
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <span className="author-name">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow" />
            <div className="cta-emoji">🌸</div>
            <h2 className="cta-title">Siap Memesan Bunga Impian Anda?</h2>
            <p className="cta-desc">
              Hubungi kami sekarang via WhatsApp untuk konsultasi gratis dan pemesanan langsung.
              Tim kami siap membantu membuat momen Anda menjadi lebih istimewa!
            </p>
            <div className="cta-actions">
              <a
                href={getWhatsAppLinkGeneral()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                id="cta-whatsapp-btn"
              >
                💬 Chat WhatsApp Sekarang
              </a>
              <Link to="/catalog" className="btn-secondary" id="cta-catalog-btn">
                Lihat Katalog Dulu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
