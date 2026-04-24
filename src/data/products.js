// data/products.js
// Nomor WhatsApp admin - ganti dengan nomor yang benar
export const WHATSAPP_NUMBER = '6285285852685'

// Pesan default ke WhatsApp
export const getWhatsAppLink = (productName, price) => {
  const message = encodeURIComponent(
    `Halo Asmah Florist! 🌸\n\nSaya tertarik dengan:\n*${productName}*\nHarga: ${price}\n\nApakah masih tersedia? Terima kasih!`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

export const getWhatsAppLinkGeneral = () => {
  const message = encodeURIComponent(
    `Halo Asmah Florist! 🌸\n\nSaya ingin menanyakan tentang produk bunga Anda. Bisa tolong bantu saya?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

// Kategori Produk (4 kategori saja)
export const categories = [
  { id: 'all',      label: 'Semua',           emoji: '🌸' },
  { id: 'papan',   label: 'Papan Bunga',      emoji: '🏵️' },
  { id: 'anggrek', label: 'Bunga Anggrek',    emoji: '🌺' },
  { id: 'bouquet', label: 'Bouquet', emoji: '💐' },
  { id: 'standing', label: 'Standing Flower',  emoji: '🌹' },
]

// Data Produk
export const products = [
  {
    id: 1,
    name: 'Papan Bunga Wedding',
    category: 'papan',
    price: 'Hubungi Kami',
    priceNum: 0,
    image: '/products/papan-wedding-1.jpg',
    description: 'Papan bunga pernikahan mewah dengan dekorasi penuh warna, cocok untuk ucapan selamat Happy Wedding.',
    badge: 'Terlaris',
    badgeColor: 'red',
    tags: ['Pernikahan', 'Wedding', 'Ucapan'],
  },
  {
    id: 2,
    name: 'Papan Bunga Ucapan',
    category: 'papan',
    price: 'Hubungi Kami',
    priceNum: 0,
    image: '/products/papan-ucapan-1.jpg',
    description: 'Papan bunga ucapan selamat untuk grand opening, wisuda, dan berbagai acara spesial lainnya.',
    badge: 'Populer',
    badgeColor: 'blue',
    tags: ['Grand Opening', 'Wisuda', 'Ucapan'],
  },
  {
    id: 3,
    name: 'Papan Bunga Duka Cita',
    category: 'papan',
    price: 'Hubungi Kami',
    priceNum: 0,
    image: '/products/papan-duka-1.jpg',
    description: 'Papan bunga duka cita yang elegan dan bermartabat, tersedia dalam berbagai ukuran.',
    badge: '',
    badgeColor: '',
    tags: ['Duka Cita', 'Elegan', 'Hormat'],
  },
  {
    id: 4,
    name: 'Bunga Anggrek Pot',
    category: 'anggrek',
    price: 'Hubungi Kami',
    priceNum: 0,
    image: '/products/anggrek-pot-1.jpg',
    description: 'Anggrek pot premium pilihan, tahan lama dan cocok untuk dekorasi rumah atau hadiah istimewa.',
    badge: 'Premium',
    badgeColor: 'purple',
    tags: ['Premium', 'Hadiah', 'Dekorasi'],
  },
  {
    id: 5,
    name: 'Bunga Anggrek Bouquet',
    category: 'anggrek',
    price: 'Hubungi Kami',
    priceNum: 0,
    image: '/products/anggrek-bouquet-1.jpg',
    description: 'Rangkaian bunga anggrek segar eksotis, pilihan sempurna untuk hadiah anniversary dan acara formal.',
    badge: 'Baru',
    badgeColor: 'green',
    tags: ['Eksotis', 'Anniversary', 'Formal'],
  },
  {
    id: 6,
    name: 'Rangkaian Bunga Hand Bouquet',
    category: 'bouquet',
    price: 'Hubungi Kami',
    priceNum: 0,
    image: '/products/hand-bouquet-1.jpg',
    description: 'Hand bouquet cantik untuk wisuda, bridesmaid, dan berbagai momen spesial Anda.',
    badge: 'Terlaris',
    badgeColor: 'red',
    tags: ['Wisuda', 'Bridesmaid', 'Spesial'],
  },
  {
    id: 7,
    name: 'Rangkaian Bunga Box',
    category: 'bouquet',
    price: 'Hubungi Kami',
    priceNum: 0,
    image: '/products/flower-box-1.jpg',
    description: 'Bunga dalam kotak premium yang elegan dan modern, cocok untuk hadiah ulang tahun dan anniversary.',
    badge: 'Best Seller',
    badgeColor: 'orange',
    tags: ['Ulang Tahun', 'Anniversary', 'Modern'],
  },
  {
    id: 8,
    name: 'Standing Flower',
    category: 'standing',
    price: 'Hubungi Kami',
    priceNum: 0,
    image: '/products/standing-flower-1.jpg',
    description: 'Standing flower mewah untuk grand opening, peresmian gedung, dan acara-acara besar.',
    badge: 'Populer',
    badgeColor: 'blue',
    tags: ['Grand Opening', 'Peresmian', 'Mewah'],
  },
  {
    id: 9,
    name: 'Standing Flower Double',
    category: 'standing',
    price: 'Hubungi Kami',
    priceNum: 0,
    image: '/products/standing-flower-2.jpg',
    description: 'Standing flower double untuk pasangan, cocok untuk resepsi pernikahan dan acara besar.',
    badge: '',
    badgeColor: '',
    tags: ['Pernikahan', 'Resepsi', 'Double'],
  },
]
