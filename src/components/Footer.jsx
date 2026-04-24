import { Link } from 'react-router-dom'
import { Flower2, Phone, Mail, MapPin, Heart } from 'lucide-react'
import { getWhatsAppLinkGeneral, WHATSAPP_NUMBER } from '../data/products'
import './Footer.css'

// Instagram SVG icon (inline since lucide-react version may not have it)
const InstagramIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Flower2 size={20} />
              </div>
              <div>
                <span className="footer-logo-name">Asmah Florist</span>
                <span className="footer-logo-tagline">Flower Specialist</span>
              </div>
            </div>
            <p className="footer-desc">
              Toko bunga pilihan yang menghadirkan rangkaian bunga segar berkualitas tinggi
              untuk setiap momen spesial Anda.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/asmahflorist/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                id="footer-instagram"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={getWhatsAppLinkGeneral()}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn whatsapp"
                id="footer-whatsapp"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigasi</h4>
            <ul className="footer-links">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/catalog">Katalog Bunga</Link></li>
              <li><Link to="/about">Tentang Kami</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-col">
            <h4 className="footer-col-title">Kategori</h4>
            <ul className="footer-links">
              <li><Link to="/catalog?cat=papan">🏵️ Papan Bunga</Link></li>
              <li><Link to="/catalog?cat=anggrek">🌺 Bunga Anggrek</Link></li>
              <li><Link to="/catalog?cat=bouquet">💐 Bouquet</Link></li>
              <li><Link to="/catalog?cat=standing">🌹 Standing Flower</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Kontak</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={16} />
                <a
                  href={getWhatsAppLinkGeneral()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 852-8585-2685
                </a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:asmahflorist@gmail.com">asmahflorist@gmail.com</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
            <div className="footer-hours">
              <span className="hours-badge">⏰ Jam Buka</span>
              <p>Buka 24 Jam — Siap Melayani</p>
              <p>Pengiriman: JABODETABEK &amp; Bandung</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} <strong>Asmah Florist</strong>. Semua hak dilindungi.
          </p>
          <p className="made-with">
            Made with reactjs
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
