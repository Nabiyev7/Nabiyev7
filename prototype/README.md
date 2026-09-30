# Foxico – turistik kompaniya sayti (prototip)

## Fayllar
- `foxico.html` – bitta mustaqil fayl. Brauzerda to‘g‘ridan-to‘g‘ri ochiladi (rasmlar Unsplash'dan internet orqali yuklanadi).
- `source/Foxico Home.dc.html` – asl manba kodi (dizayn, matnlar, ma'lumotlar, logika). `support.js` bilan birga ochiladi.

## Claude Code / Antigravity uchun ko‘rsatma
Bu HTML prototipni haqiqiy saytga aylantiring (masalan Next.js + Tailwind yoki Astro):
- Dizayn, ranglar, shriftlar va animatsiyalarni aynan saqlang.
- Shriftlar: Bebas Neue (sarlavhalar), Inter (matn). Aksent rang: #FF7A30. Fon: #071d21.
- Ma'lumotlar (DEST, INFO, POSTS) manba faylidagi `<script>` ichida – ularni alohida JSON/CMS ga chiqaring.
- Sahifalar: Bosh sahifa (karusel), Yo‘nalishlar, Yo‘nalish tafsiloti (galereya, dastur, narxga kiradi), Blog, Maqola, Aloqa.
- Aloqa formasi: ism, telefon (+998), yo‘nalish, sayohatchilar soni, qulay vaqt, izoh. Hozir faqat front-endda – backend/Telegram botga ulash kerak.
- Karusel: har 6 soniyada avtomatik, hover'da to‘xtaydi, ← → klaviatura, mobil'da swipe.

Narxlar, telefon, Telegram va blog matnlari – namuna; haqiqiy ma'lumotlarga almashtiring.
