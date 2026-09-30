// Foxico sayt sozlamalari. Kontakt va forma ma'lumotlarini shu yerda o'zgartiring.
export const SITE = {
  name: 'Foxico',
  description:
    'Foxico – Toshkentdan Bali, Indoneziya, Tailand, Yaponiya va Islandiyaga guruh turlari. O‘zbek tilidagi gid, aviachipta va mehmonxona narxga kiradi.',

  // TODO: haqiqiy ma'lumotlarga almashtiring (hozirgilari namuna).
  phone: '+998 71 200 00 00',
  telegram: 'foxico_travel',
  hours: 'Du – Sh, 9:00 – 19:00',

  // Aloqa formasi qayerga yuborilishi.
  // 1) Web3Forms (bepul, so'rovlar email'ga keladi): https://web3forms.com dan kalit oling
  //    va uni accessKey ga yozing. endpoint o'zgarmaydi.
  // 2) Formspree: endpoint ga https://formspree.io/f/XXXX manzilini yozing, accessKey bo'sh qoladi.
  // Ikkalasi ham bo'sh bo'lsa, forma mijozga so'rovni Telegram orqali yuborishni taklif qiladi.
  form: {
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: '',
  },

  carousel: {
    autoplay: true,
    intervalSec: 6,
  },
} as const;

export const formConfigured = Boolean(SITE.form.accessKey) || !SITE.form.endpoint.includes('web3forms');
