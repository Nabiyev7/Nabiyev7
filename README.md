# Foxico – turistik kompaniya sayti

Toshkentdan Bali, Indoneziya, Tailand, Yaponiya va Islandiyaga guruh turlari sotadigan Foxico kompaniyasining sayti.
[Astro](https://astro.build) da qurilgan, GitHub Pages'da bepul ishlaydi.

Asl dizayn prototipi `prototype/` papkasida saqlangan.

## Sahifalar

| Manzil | Sahifa |
| --- | --- |
| `/` | Bosh sahifa – yo‘nalishlar karuseli |
| `/yonalishlar/` | Barcha turlar |
| `/yonalishlar/bali/` va h.k. | Tur tafsiloti: galereya, dastur, narxga kiradi |
| `/blog/` | Maqolalar |
| `/blog/<maqola>/` | Maqola |
| `/aloqa/` | Aloqa va so‘rov formasi |

## Kompyuterda ishga tushirish

Node.js 22.12 yoki undan yangisi kerak.

```bash
npm install
npm run dev      # http://localhost:4321 da ochiladi, o‘zgarishlar darhol ko‘rinadi
npm run build    # tayyor sayt dist/ papkasiga yig‘iladi
```

## Nimani qayerda o‘zgartirish kerak

| Nima | Fayl |
| --- | --- |
| Telefon, Telegram, ish vaqti, forma, karusel tezligi | `src/data/site.ts` |
| Turlar: nomi, narxi, dasturi, rasmlari | `src/data/destinations.json` |
| Blog maqolalari | `src/data/posts.json` |
| Ranglar, shriftlar, tugmalar | `src/styles/global.css` |
| Sahifalar | `src/pages/` |

Rasmlar Unsplash'dan olinadi: `photo` va `gallery` maydonlarida Unsplash rasm ID si yoziladi
(`https://images.unsplash.com/photo-`**`1537996194471-e657df975ab4`**).

> ⚠️ Telefon raqami, Telegram username, narxlar va blog matnlari hozircha **namuna**. Saytni e’lon qilishdan oldin haqiqiy ma’lumotlarga almashtiring.

## Aloqa formasini ulash

Forma so‘rovlarni qayerga yuborishini `src/data/site.ts` dagi `form` bo‘limida sozlang:

- **Web3Forms** (bepul, so‘rovlar email’ga keladi): [web3forms.com](https://web3forms.com) da email’ingizni yozib kalit oling va uni `accessKey` ga qo‘ying.
- **Formspree**: `endpoint` ga `https://formspree.io/f/XXXX` manzilini yozing, `accessKey` ni bo‘sh qoldiring.

Forma ulanmagan bo‘lsa, mijozga so‘rov matni tayyorlab beriladi va uni Telegram orqali yuborish taklif qilinadi – so‘rov yo‘qolmaydi.

## GitHub Pages'ga chiqarish

1. GitHub'da repozitoriya → **Settings → Pages → Build and deployment → Source: GitHub Actions** ni tanlang.
2. Shundan keyin har bir push’da sayt avtomatik yangilanadi (`.github/workflows/deploy.yml`).
3. Sayt manzili: `https://<username>.github.io/<repozitoriya>/`.
