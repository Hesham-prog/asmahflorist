import { useState } from 'react'
import { ShoppingBag, Tag, Star, MessageCircle } from 'lucide-react'
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
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const badge = badgeColorMap[product.badgeColor] || null

  return (
    <>
      <div
        className="product-card"
        style={{ animationDelay: `${animDelay}ms` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="product-img-wrapper" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
          {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="product-img-fallback">
            <span className="fallback-emoji">🌸</span>
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
            <span className="product-price-label">Mulai dari</span>
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
      
      {/* Modal */}
      {isModalOpen && (
        <div className="product-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="product-modal-content" onClick={e => e.stopPropagation()}>
            <button className="product-modal-close" onClick={() => setIsModalOpen(false)}>✕</button>
            <div className="product-modal-img-container">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-modal-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div style={{marginTop: 'auto'}}>
                <span className="product-modal-price">{product.price}</span>
                <a 
                  href={getWhatsAppLink(product.name, product.price)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="product-order-btn" 
                  style={{marginTop: '16px', display: 'inline-flex', width: 'fit-content'}}
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
