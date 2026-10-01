# Site 1

Yangi sayt uchun boshlang'ich joy: statik HTML/CSS/JS, build qilish shart emas,
GitHub Pages'da bepul ishlaydi.

## Fayllar

| Fayl | Nima uchun |
| --- | --- |
| `index.html` | Sahifa matni va bo'limlari |
| `styles.css` | Ranglar, shriftlar, joylashuv (ranglar eng yuqoridagi `:root` da) |
| `script.js` | Mobil menyu va footer'dagi yil |
| `favicon.svg` | Brauzer yorliq belgisi |
| `.nojekyll` | GitHub Pages fayllarni o'zi qayta ishlamasin |
| `.github/workflows/deploy.yml` | Har push'da Pages'ga chiqarish (faqat alohida repoda ishlaydi) |

## Ko'rish

Faylni brauzerda ochish yetarli, yoki mahalliy server:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Alohida repozitoriyaga ko'chirish

Hozir bu papka `Nabiyev7/Nabiyev7` ichida turadi. Alohida sayt bo'lishi uchun:

1. GitHub'da yangi repo yarating: <https://github.com/new> → nomi `site1`, **Public**,
   README/`.gitignore` **qo'shmang**.
2. Kompyuterda shu papkadan:

   ```bash
   git init -b main
   git add .
   git commit -m "Site 1 boshlang'ich sayt"
   git remote add origin https://github.com/Nabiyev7/site1.git
   git push -u origin main
   ```

3. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Sayt manzili: <https://nabiyev7.github.io/site1/>

## Keyingi qadamlar

- `index.html` dagi sarlavha, matn va kartalarni o'zingizning loyihangizga moslang.
- `styles.css` dagi `--accent` rangini brendingizga almashtiring.
- Yangi sahifa kerak bo'lsa, `index.html` nusxasini olib (`haqida.html` kabi) menyuga havola qo'shing.
