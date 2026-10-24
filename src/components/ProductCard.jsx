import { useState, useEffect, useRef } from 'react'
import { ShoppingBag, Tag, MessageCircle, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { getWhatsAppLink } from '../data/products'
import './ProductCard.css'

const badgeColorMap = {
  red: { bg: 'rgba(239,68,68,0.15)', color: '#f87171', border: 'rgba(239,68,68,0.3)' },
  green: { bg: 'rgba(34,197,94,0.15)', color: '#4ade80', border: 'rgba(34,197,94,0.3)' },
  purple: { bg: 'rgba(139,92,246,0.15)', color: '#a78bfa', border: 'rgba(139,92,246,0.3)' },
  blue: { bg: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: 'rgba(59,130,246,0.3)' },
  orange: { bg: 'rgba(249,115,22,0.15)', color: '#fb923c', border: 'rgba(249,115,22,0.3)' },
}

function ProductCard({ product, animDelay = 0 }) {
  // Support multiple images array or fallback to single image
  const images = (product.images && product.images.length > 0)
    ? product.images
    : (product.image ? [product.image] : [])

  const [currentIdx, setCurrentIdx] = useState(0)
  const [modalIdx, setModalIdx] = useState(0)
  const [imgErrors, setImgErrors] = useState({})
  const [hovered, setHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [touchStartX, setTouchStartX] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  const badge = badgeColorMap[product.badgeColor] || null
  const hasMultipleImages = images.length > 1

  // Auto-slide effect
  useEffect(() => {
    if (!hasMultipleImages || isPaused || hovered || isModalOpen) return

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [hasMultipleImages, isPaused, hovered, isModalOpen, images.length])

  // Navigation handlers
  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIdx((prev) => (prev + 1) % images.length)
  }

  const handleModalPrev = (e) => {
    e.stopPropagation()
    setModalIdx((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleModalNext = (e) => {
    e.stopPropagation()
    setModalIdx((prev) => (prev + 1) % images.length)
  }

  // Touch swipe support for smartphone
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
    setIsPaused(true)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > 35 && hasMultipleImages) {
      if (diff > 0) {
        // Swipe left -> Next
        setCurrentIdx((prev) => (prev + 1) % images.length)
      } else {
        // Swipe right -> Prev
        setCurrentIdx((prev) => (prev - 1 + images.length) % images.length)
      }
    }
    setTouchStartX(null)
    setTimeout(() => setIsPaused(false), 2000)
  }

  const handleCardClick = () => {
    setModalIdx(currentIdx)
    setIsModalOpen(true)
  }

  const activeImage = images[currentIdx] || ''
  const hasCurrentError = imgErrors[currentIdx]

  return (
    <>
      <div
        className="product-card"
        style={{ animationDelay: `${animDelay}ms` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image & Slider Wrapper */}
        <div
          className="product-img-wrapper"
          onClick={handleCardClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: 'pointer' }}
        >
          {/* Main Image or Placeholder */}
          {!hasCurrentError && activeImage ? (
            <img
              src={activeImage}
              alt={`${product.name} - ${currentIdx + 1}`}
              className="product-img"
              onError={() => setImgErrors((prev) => ({ ...prev, [currentIdx]: true }))}
            />
          ) : (
            <div className="product-img-fallback">
              <div className="placeholder-content">
                <span className="fallback-emoji">🌸</span>
                <span className="placeholder-note">Foto segera tersedia</span>
              </div>
            </div>
          )}

          {/* Badge */}
          {product.badge && badge && (
            <div
              className="product-badge"
              style={{
                background: badge.bg,
                color: badge.color,
                border: `1px solid ${badge.border}`,
              }}
            >
              {product.badge}
            </div>
          )}

          {/* Slider Prev / Next Controls (shown if multiple images) */}
          {hasMultipleImages && (
            <>
              <button
                className="slider-arrow slider-arrow-prev"
                onClick={handlePrev}
                aria-label="Foto Sebelumnya"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="slider-arrow slider-arrow-next"
                onClick={handleNext}
                aria-label="Foto Berikutnya"
              >
                <ChevronRight size={16} />
              </button>

              {/* Slider Dots */}
              <div className="slider-dots" onClick={(e) => e.stopPropagation()}>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`slider-dot ${idx === currentIdx ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentIdx(idx)
                    }}
                    aria-label={`Lihat foto ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Overlay on hover */}
          <div className={`product-overlay ${hovered ? 'visible' : ''}`}>
            <a
              href={getWhatsAppLink(product.name, product.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="overlay-wa-btn"
              id={`product-wa-btn-${product.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <MessageCircle size={18} />
              Tanya Stok
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="product-tags">
              {product.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="product-tag">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="product-name">{product.name}</h3>
          <p className="product-desc">{product.description}</p>

          <div className="product-footer">
            <div className="product-price-block">
              {/* Hanya tampilkan 'Mulai dari' jika kategori Bouquet atau produk memiliki showMulaiDari */}
              {(product.category === 'bouquet' || product.showMulaiDari) && (
                <span className="product-price-label">Mulai dari</span>
              )}
              <span className="product-price">{product.price}</span>
            </div>

            <a
              href={getWhatsAppLink(product.name, product.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="product-order-btn"
              id={`product-order-${product.id}`}
            >
              <ShoppingBag size={15} />
              Pesan
            </a>
          </div>
        </div>
      </div>

      {/* Modal Popup Detail */}
      {isModalOpen && (
        <div className="product-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="product-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Tutup"
            >
              ✕
            </button>

            {/* Modal Image Container with Slider */}
            <div className="product-modal-img-container">
              {!imgErrors[modalIdx] && images[modalIdx] ? (
                <img
                  src={images[modalIdx]}
                  alt={`${product.name} - ${modalIdx + 1}`}
                />
              ) : (
                <div className="product-img-fallback modal-fallback">
                  <div className="placeholder-content">
                    <span className="fallback-emoji">🌸</span>
                    <span className="placeholder-note">Foto segera tersedia</span>
                  </div>
                </div>
              )}

              {/* Modal Slider Controls */}
              {hasMultipleImages && (
                <>
                  <button
                    className="slider-arrow modal-arrow-prev"
                    onClick={handleModalPrev}
                    aria-label="Foto Sebelumnya"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="slider-arrow modal-arrow-next"
                    onClick={handleModalNext}
                    aria-label="Foto Berikutnya"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="slider-dots modal-dots">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`slider-dot ${idx === modalIdx ? 'active' : ''}`}
                        onClick={() => setModalIdx(idx)}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="product-modal-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              
              {product.tags && product.tags.length > 0 && (
                <div className="product-tags" style={{ marginBottom: '16px' }}>
                  {product.tags.map((tag) => (
                    <span key={tag} className="product-tag">
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div style={{ marginTop: 'auto' }}>
                <div className="product-price-block" style={{ marginBottom: '12px' }}>
                  {(product.category === 'bouquet' || product.showMulaiDari) && (
                    <span className="product-price-label">Mulai dari</span>
                  )}
                  <span className="product-modal-price">{product.price}</span>
                </div>
                
                <a
                  href={getWhatsAppLink(product.name, product.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-order-btn modal-order-btn"
                >
                  <MessageCircle size={18} />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductCard
