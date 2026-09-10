# OptiosLab — Yayın ve Güncelleme Rehberi

Site statik HTML'dir. Kaynak `src/` altındadır; `main` dalına yapılan her push'ta
GitHub Actions siteyi derler ve GitHub Pages'e yayınlar. Derlenmiş HTML repoda tutulmaz.

## Yapı

```
src/
  data.mjs      → tüm içerik (metinler, çözümler, sektörler, ekip, SSS, süreç, yönlendirmeler)
  layout.mjs    → head, nav, footer, CTA, ürün ekranı taklitleri
  pages.mjs     → sayfa şablonları
  build.mjs     → derleyici
  assets/       → css, js, fontlar, görseller
.github/workflows/deploy.yml → otomatik derleme + yayın
CNAME           → özel alan adı (optioslab.com)
dist/           → yerel derleme çıktısı (git'e girmez)
```

## İçerik güncelleme (ortaklar için)

Bilgisayara hiçbir şey kurmadan, GitHub web arayüzünden:

1. https://github.com/Time-e/optioslab-site/blob/main/src/data.mjs adresini aç.
2. Sağ üstteki kalem (Edit) simgesine tıkla.
3. Metni düzenle. Tırnak işaretlerini ve virgülleri bozmamaya dikkat et.
4. **Commit changes** → kısa bir açıklama yaz → `main` dalına commit et.
5. **Actions** sekmesinde "Deploy site" çalışması yeşile dönünce site güncellenmiştir (1–2 dk).

Derleme kırmızıya dönerse büyük ihtimalle `data.mjs` içinde eksik tırnak/virgül vardır;
Actions çıktısındaki hata satırı yerini gösterir.

## Yerel önizleme (isteğe bağlı, Node 18+)

```bash
git clone https://github.com/Time-e/optioslab-site.git
cd optioslab-site
node src/build.mjs dist
cd dist && python3 -m http.server 8787   # http://127.0.0.1:8787/
```

Değişiklikleri commit edip `git push origin main` ile gönder; yayın otomatik olur.

## GitHub Pages ayarları

- Repo: `Time-e/optioslab-site`, Settings → Pages
- Source: **GitHub Actions**
- Custom domain: `optioslab.com`, **Enforce HTTPS** açık

## DNS (Natro paneli)

Alan adı Natro'da barındırılıyor (ns1/ns2.natrohost.com). Gerekli kayıtlar:

| Tür   | Ad    | Değer                    |
|-------|-------|--------------------------|
| A     | @     | 185.199.108.153          |
| A     | @     | 185.199.109.153          |
| A     | @     | 185.199.110.153          |
| A     | @     | 185.199.111.153          |
| CNAME | www   | time-e.github.io         |

Eski sunucuya (164.92.168.12) bakan A kaydı silinir. MX, SPF, DKIM ve Google doğrulama
kayıtlarına dokunulmaz (e-posta Google Workspace üzerinde çalışıyor).

Doğrulama:

```bash
dig +short optioslab.com A          # 185.199.x.x dönmeli
curl -I https://optioslab.com/      # server: GitHub.com
```

## İletişim formu

Form, `src/data.mjs` içindeki `site.formEndpoint` alanına POST eder (Formspree veya benzeri).
Alan boşsa form tarayıcının e-posta istemcisini `hello@optioslab.com` adresine açar.

## Notlar

- İçerik `src/data.mjs` içindedir; derleme çıktısı repoda tutulmaz, elle düzenlenmez.
- Site Framer'a bağımlı değildir; dış CDN kullanılmaz, fontlar `src/assets/fonts` altındadır.
- Bu repoda gizli bilgi (anahtar, şifre, sunucu erişimi) tutulmaz.
