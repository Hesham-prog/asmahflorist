import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories, getWhatsAppLinkGeneral } from '../data/products'
import './Catalog.css'

function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(searchParams.get('cat') || 'all')
  const [sortBy, setSortBy] = useState('default')
  const [showFilters, setShowFilters] = useState(false)

  // Sync category from URL param
  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId)
    if (catId === 'all') {
      searchParams.delete('cat')
    } else {
      searchParams.set('cat', catId)
    }
    setSearchParams(searchParams)
  }

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    // Sort
    if (sortBy === 'price-asc') result.sort((a, b) => a.priceNum - b.priceNum)
    if (sortBy === 'price-desc') result.sort((a, b) => b.priceNum - a.priceNum)

    return result
  }, [activeCategory, searchQuery, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setActiveCategory('all')
    setSortBy('default')
    setSearchParams({})
  }

  const hasFilters = searchQuery || activeCategory !== 'all' || sortBy !== 'default'

  return (
  <div className="catalog-page page-wrapper page-wrapper-offset">
      {/* Page Header */}
      <section className="catalog-header">
        <div className="catalog-header-bg" />
        <div className="container">
          <div className="catalog-header-content">
            <span className="badge badge-pink">Koleksi Kami</span>
            <h1 className="section-title">Katalog Bunga</h1>
            <p className="section-subtitle">
              Temukan rangkaian bunga sempurna untuk setiap momen spesial Anda
            </p>
          </div>
        </div>
      </section>

      <div className="container catalog-body">
        {/* Search & Filter Bar */}
        <div className="filter-bar glass-card">
          {/* Search Input */}
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Cari bunga, bouquet, papan bunga..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              id="catalog-search"
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Sort & Filter Toggle */}
          <div className="filter-controls">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
              id="catalog-sort"
            >
              <option value="default">Urutkan: Default</option>
              <option value="price-asc">Harga: Terendah</option>
              <option value="price-desc">Harga: Tertinggi</option>
            </select>

            {hasFilters && (
              <button className="clear-filter-btn" onClick={clearFilters} id="clear-filters-btn">
                <X size={14} />
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-scroll-wrapper">
          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
                id={`cat-btn-${cat.id}`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
                {activeCategory === cat.id && (
                  <span className="cat-count">
                    {cat.id === 'all'
                      ? products.length
                      : products.filter((p) => p.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="results-info">
          <span className="results-count">
            {filteredProducts.length} produk ditemukan
          </span>
          {hasFilters && (
            <button className="clear-filter-text" onClick={clearFilters}>
              Hapus semua filter
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="catalog-grid">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} animDelay={i * 60} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-emoji">🔍</div>
            <h3 className="empty-title">Produk tidak ditemukan</h3>
            <p className="empty-desc">
              Coba kata kunci lain atau hubungi kami untuk produk yang Anda cari.
            </p>
            <div className="empty-actions">
              <button className="btn-secondary" onClick={clearFilters}>
                Reset Filter
              </button>
              <a
                href={getWhatsAppLinkGeneral()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                id="empty-wa-btn"
              >
                💬 Tanya Admin
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Custom Order Banner */}
      <section className="custom-order-section">
        <div className="container">
          <div className="custom-order-card glass-card">
            <div className="custom-order-icon">
              <img src="/logo.png" alt="Asmah Florist Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
            </div>
            <div className="custom-order-info">
              <h3>Ingin Bunga Custom?</h3>
              <p>Kami siap membuat rangkaian bunga sesuai tema, warna, dan budget Anda!</p>
            </div>
            <a
              href={getWhatsAppLinkGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              id="custom-order-btn"
            >
              💬 Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catalog
