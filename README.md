# Asmah Florist 🌸

Asmah Florist adalah aplikasi website katalog bunga yang modern, elegan, dan responsif. Website ini dirancang khusus untuk memudahkan pelanggan melihat koleksi rangkaian bunga, mengetahui informasi toko, serta melakukan pemesanan langsung melalui WhatsApp.

## 🌟 Fitur Utama

- **Katalog Produk Dinamis:** Menampilkan berbagai macam rangkaian bunga, papan bunga, standing flower, dan bouquet.
- **Filter Kategori:** Memudahkan pelanggan untuk mencari bunga berdasarkan kategori yang spesifik.
- **Hero Slideshow:** Tampilan beranda yang menarik dengan *background image* yang berganti secara otomatis.
- **Image Lightbox (Modal):** Pengunjung dapat mengklik gambar produk di katalog untuk melihat foto dalam ukuran penuh beserta detailnya.
- **Integrasi WhatsApp:** Tombol "Pesan via WhatsApp" dan "Tanya Stok" yang langsung mengarahkan pelanggan ke chat WhatsApp dengan format pesan otomatis.
- **Desain Responsif:** Tampilan yang dioptimalkan untuk perangkat *desktop*, *tablet*, maupun *mobile*.

## 🛠️ Teknologi yang Digunakan

- **[React.js](https://reactjs.org/)** (dengan Vite) - Framework *frontend* utama.
- **Vanilla CSS** - Untuk *styling* dan efek animasi *glassmorphism* yang elegan.
- **[React Router Dom](https://reactrouter.com/)** - Untuk sistem navigasi halaman (Beranda, Katalog, Tentang Kami).
- **[Lucide React](https://lucide.dev/)** - Untuk koleksi ikon SVG yang modern dan ringan.

## 🚀 Cara Menjalankan Project secara Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan website ini di komputer Anda:

1. **Clone Repositori:**
   ```bash
   git clone https://github.com/Hesham-prog/asmahflorist.git
   cd asmahflorist
   ```

2. **Install Dependensi:**
   Pastikan Anda sudah menginstal Node.js, lalu jalankan perintah berikut:
   ```bash
   npm install
   ```

3. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Setelah itu, buka browser Anda dan akses `http://localhost:5173`.

## 📁 Struktur Folder Utama

\`\`\`text
asmahflorist/
├── public/                 # Gambar dummy, logo, dan file publik
├── src/
│   ├── components/         # Komponen UI seperti Navbar, Footer, ProductCard
│   ├── data/               # File products.js untuk daftar produk dan pengaturan kontak
│   ├── pages/              # Halaman utama (Home, Catalog, About)
│   ├── App.jsx             # Pengaturan routing utama
│   └── index.css           # Variabel warna dan styling global
\`\`\`

## 📝 Catatan Penting

- Semua data produk, kategori, dan pengaturan nomor WhatsApp terpusat di dalam file \`src/data/products.js\`.
- Untuk menambahkan foto produk asli, cukup simpan fotonya di dalam folder \`public/products/\` dan update datanya di \`products.js\`.

---
*Dibuat dengan ❤️ untuk Asmah Florist.*
