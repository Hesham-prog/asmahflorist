import { MapPin, Phone, Mail, Clock, CheckCircle2, Heart, Award, Users } from 'lucide-react'
import { getWhatsAppLinkGeneral, WHATSAPP_NUMBER } from '../data/products'
import './About.css'

const values = [
  { icon: '🌸', title: 'Kesegaran', desc: 'Setiap bunga dipilih langsung dari kebun terbaik untuk memastikan kesegaran maksimal.' },
  { icon: '💎', title: 'Kualitas', desc: 'Standard kualitas tinggi yang tidak pernah kami kompromikan untuk kepuasan Anda.' },
  { icon: '❤️', title: 'Ketulusan', desc: 'Setiap rangkaian dibuat dengan tulus dan penuh perhatian seperti untuk keluarga sendiri.' },
  { icon: '⚡', title: 'Ketepatan', desc: 'Pengiriman tepat waktu karena kami tahu setiap momen itu berharga dan tidak bisa diulang.' },
]

const stats = [
  { num: '500+', label: 'Pelanggan Puas', icon: <Users size={24} /> },
  { num: '5+', label: 'Tahun Pengalaman', icon: <Award size={24} /> },
  { num: '50+', label: 'Jenis Bunga', icon: <Heart size={24} /> },
  { num: '100%', label: 'Bunga Segar', icon: <CheckCircle2 size={24} /> },
]

function About() {
  return (
    <div className="about-page page-wrapper page-wrapper-offset">
      {/* Header */}
      <section className="about-header">
        <div className="about-header-glow" />
        <div className="container about-header-content">
          <span className="badge badge-pink">Tentang Kami</span>
          <h1 className="section-title">Kisah di Balik Setiap Bunga</h1>
          <p className="section-subtitle" style={{ maxWidth: 560, margin: '0 auto' }}>
            Kami bukan sekadar toko bunga. Kami adalah pencerita yang menggunakan bunga 
            sebagai bahasa untuk mengungkapkan perasaan terdalam Anda.
          </p>
        </div>
      </section>

      {/* About Story */}
      <section className="about-story-section">
        <div className="container about-story-grid">
          <div className="about-img-wrapper">
            <img src="/about_store.png" alt="Asmah Florist - Toko Kami" className="about-img" />
          </div>

          <div className="about-story-text">
            <span className="badge badge-pink">Cerita Kami</span>
            <h2 className="about-story-title">Berawal dari Kecintaan terhadap Bunga</h2>
            <p>
              Asmah Florist lahir dari passion yang tulus terhadap keindahan alam, khususnya bunga. 
              Berbekal pengalaman lebih dari 5 tahun, toko bunga ini bermula dari sebuah lapak 
              kecil yang kini terus berkembang melayani pelanggan dengan sepenuh hati.
            </p>
            <p>
              Dengan dedikasi dan cinta yang tulus, perlahan kami tumbuh menjadi salah satu florist 
              terpercaya di kota ini. Kepercayaan ribuan pelanggan adalah motivasi terbesar kami 
              untuk terus berkembang dan menghadirkan yang terbaik.
            </p>
            <p>
              Hari ini, kami bangga melayani berbagai kebutuhan bunga mulai dari pernikahan, 
              wisuda, grand opening, hingga ekspresi sederhana rasa sayang kepada orang-orang 
              tercinta Anda.
            </p>

            <a
              href={getWhatsAppLinkGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              id="about-whatsapp-btn"
              style={{ width: 'fit-content' }}
            >
              💬 Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="about-stat-card glass-card">
                <div className="about-stat-icon">{s.icon}</div>
                <div className="about-stat-num">{s.num}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-pink">Nilai Kami</span>
            <h2 className="section-title">Komitmen yang Kami Pegang</h2>
            <p className="section-subtitle">
              Nilai-nilai ini menjadi fondasi dari setiap rangkaian bunga yang kami buat
            </p>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card glass-card" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Info */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-pink">Temukan Kami</span>
            <h2 className="section-title">Informasi Kontak</h2>
            <p className="section-subtitle">Kami siap melayani Anda dengan senang hati</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card glass-card" id="contact-phone">
              <div className="contact-icon">
                <Phone size={22} />
              </div>
              <div>
                <h4>Telepon / WhatsApp</h4>
                <a
                  href={getWhatsAppLinkGeneral()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 852-8585-2685
                </a>
              </div>
            </div>

            <div className="contact-card glass-card" id="contact-email">
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:asmahflorist@gmail.com">asmahflorist@gmail.com</a>
              </div>
            </div>

            <div className="contact-card glass-card" id="contact-location">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4>Alamat</h4>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>

            <div className="contact-card glass-card" id="contact-hours">
              <div className="contact-icon">
                <Clock size={22} />
              </div>
              <div>
                <h4>Jam Operasional</h4>
                <p>Buka 24 Jam — Siap Melayani</p>
                <p>Pengiriman: JABODETABEK &amp; Bandung</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
